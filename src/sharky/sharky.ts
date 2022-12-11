import * as fs from "fs";
import { createSharkyClient, enabledOrderBooks, TakenLoan, OfferedLoan, Provider } from '@sharkyfi/client'
import * as dotenv from "dotenv";
import { AnchorProvider, Wallet } from '@project-serum/anchor'
import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import axios from "axios";
import { COLLECTIONS } from "./constants";
import { NamedOrderBook, PotentialLoan, PriceInfo } from "./interfaces";

dotenv.config();

export async function getSharkyLoans() {
    
    const wallet = new Wallet(Keypair.generate());
  
    const connection = new Connection(process.env.RPC);
    const provider = new AnchorProvider(connection, wallet, {
      commitment: "confirmed",
      preflightCommitment: "confirmed",
    });
    const sharkyClient = createSharkyClient(provider as any as Provider)
    const { program } = sharkyClient
  
    // fetch prices and loans
    const [allLoans, floorPrices] = await Promise.all([
      sharkyClient.fetchAllLoans({
        program,
      }),
      await fetchFloorPrices()
    ]);
  
    // fetch order books
    const orderBooks = await sharkyClient.fetchAllOrderBooks({ program });
    const orderBooksByName : NamedOrderBook[] = orderBooks
      .map((ob) => {
        return {
          name: COLLECTIONS[
            ob.orderBookType.nftList!.listAccount.toString()
          ],
            pubkey: ob.pubKey.toString(),
            enabled: enabledOrderBooks.includes(ob.pubKey.toString()),
            apy: ob.apy?.fixed?.apy,
            duration: ob.loanTerms?.fixed?.terms?.time?.duration.toNumber() / 60 / 60 / 24 // duration in days
          }
        }
      )
  
    // History still doesn't work
    // const historyLoans = await sharkyClient.fetchAllHistoryLoans()
    // console.log(`Got ${historyLoans.length} historical loans`)
  
    // filter for potential loans
    const groupedLoans = groupBy(allLoans, i => i.data.orderBook.toBase58());
  
    let pot = createPotentialLoans(groupedLoans, orderBooksByName, floorPrices)
    pot.sort((a, b) => b.takeRatio - a.takeRatio)
  
    // TODO: could make filtering parameters an input, e.g. floor price or minimum # of loans
    pot = pot.filter(l => l.totalLoans > 30)
    const candidates = pot.slice(0,30)
    const topFive = candidates.sort((a, b) => a.LTV - b.LTV).slice(0, 5)
  
    return formatForDiscord(topFive)
  
  }

async function fetchFloorPrices(): Promise<PriceInfo[]> {
  const response = await axios.get('https://sharky.fi/api/floor-prices');
  return response.data.floorPrices
}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
arr.reduce((groups, item) => {
  (groups[key(item)] ||= []).push(item);
  return groups;
}, {} as Record<K, T[]>);

function createPotentialLoans(groupedLoans: any, orderBooksByName: NamedOrderBook[], floorPrices: any): PotentialLoan[] {

  const potentialLoans = []
  for (let i = 0; i < orderBooksByName.length; i++) {
    const name = orderBooksByName[i].name
    const priceInfo = floorPrices[name]

    const collectionLoans = groupedLoans[orderBooksByName[i].pubkey]
    if (collectionLoans !== undefined && collectionLoans.length > 0) {
      const takenLoans = collectionLoans.filter(x => x.state === "taken") as TakenLoan[]
      const offeredLoans = collectionLoans.filter(x => x.state === "offered") as OfferedLoan[]
      const highestPrincipal = Math.max(...offeredLoans.map(e => e.data.principalLamports.toNumber() / LAMPORTS_PER_SOL))
      
      const totalLoans = (offeredLoans.length + takenLoans.length)
  
      const potentialLoan: PotentialLoan = {
        loanPrincipal: highestPrincipal,
        floorPrice: priceInfo?.floorPriceSol,
        collectionName: name, 
        LTV: highestPrincipal / priceInfo?.floorPriceSol,
        loansCurrentlyOffered: offeredLoans.length,
        takeRatio: takenLoans.length / totalLoans ?? 0,
        totalLoans
      };
  
      if (priceInfo?.floorPriceSol !== undefined && offeredLoans.length > 0) {
        potentialLoans.push(potentialLoan) 
      }
    }
  }

  return potentialLoans
}

function formatForDiscord(loans: PotentialLoan[]) {

  const embeds = loans.map((l, i) => {
    return {
      title: `${l.collectionName}`,
      fields: [
        {
          name: "Best Offer",
          value: `${l.loanPrincipal.toFixed(2)} SOL`,
          inline: true,
        },
        {
          name: "Floor Price",
          value: `${l.floorPrice.toFixed(2)} SOL`,
          inline: true,
        },
        {
          name: "LTV",
          value: `${l.LTV.toFixed(2)}`,
          inline: true,
        },
        {
          name: "Outstanding Loans",
          value: `${l.loansCurrentlyOffered}`,
          inline: true,
        },
        {
          name: "% of loans taken",
          value: `${(l.takeRatio * 100).toFixed(2)} %`,
          inline: true,
        },
      ],
    }
  });

  return embeds
};
