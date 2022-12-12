"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSharkyLoans = void 0;
const client_1 = require("@sharkyfi/client");
const dotenv = __importStar(require("dotenv"));
const anchor_1 = require("@project-serum/anchor");
const web3_js_1 = require("@solana/web3.js");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
dotenv.config();
async function getSharkyLoans() {
    const wallet = new anchor_1.Wallet(web3_js_1.Keypair.generate());
    const connection = new web3_js_1.Connection(process.env.RPC);
    const provider = new anchor_1.AnchorProvider(connection, wallet, {
        commitment: "confirmed",
        preflightCommitment: "confirmed",
    });
    const sharkyClient = (0, client_1.createSharkyClient)(provider);
    const { program } = sharkyClient;
    // fetch prices and loans
    const [allLoans, floorPrices] = await Promise.all([
        sharkyClient.fetchAllLoans({
            program,
        }),
        await fetchFloorPrices()
    ]);
    // fetch order books
    const orderBooks = await sharkyClient.fetchAllOrderBooks({ program });
    const orderBooksByName = orderBooks
        .map((ob) => {
        var _a, _b, _c, _d, _e, _f;
        return {
            name: constants_1.COLLECTIONS[ob.orderBookType.nftList.listAccount.toString()],
            pubkey: ob.pubKey.toString(),
            enabled: client_1.enabledOrderBooks.includes(ob.pubKey.toString()),
            apy: (_b = (_a = ob.apy) === null || _a === void 0 ? void 0 : _a.fixed) === null || _b === void 0 ? void 0 : _b.apy,
            duration: ((_f = (_e = (_d = (_c = ob.loanTerms) === null || _c === void 0 ? void 0 : _c.fixed) === null || _d === void 0 ? void 0 : _d.terms) === null || _e === void 0 ? void 0 : _e.time) === null || _f === void 0 ? void 0 : _f.duration.toNumber()) / 60 / 60 / 24 // duration in days
        };
    });
    // History still doesn't work
    // const historyLoans = await sharkyClient.fetchAllHistoryLoans()
    // console.log(`Got ${historyLoans.length} historical loans`)
    // filter for potential loans
    const groupedLoans = groupBy(allLoans, i => i.data.orderBook.toBase58());
    let pot = createPotentialLoans(groupedLoans, orderBooksByName, floorPrices);
    pot.sort((a, b) => b.takeRatio - a.takeRatio);
    // TODO: could make filtering parameters an input, e.g. floor price or minimum # of loans
    pot = pot.filter(l => l.totalLoans > 30);
    const candidates = pot.slice(0, 30);
    const topFive = candidates.sort((a, b) => a.LTV - b.LTV).slice(0, 5);
    return formatForDiscord(topFive);
}
exports.getSharkyLoans = getSharkyLoans;
async function fetchFloorPrices() {
    const response = await axios_1.default.get('https://sharky.fi/api/floor-prices');
    return response.data.floorPrices;
}
const groupBy = (arr, key) => arr.reduce((groups, item) => {
    var _a;
    (groups[_a = key(item)] || (groups[_a] = [])).push(item);
    return groups;
}, {});
function createPotentialLoans(groupedLoans, orderBooksByName, floorPrices) {
    var _a;
    const potentialLoans = [];
    for (let i = 0; i < orderBooksByName.length; i++) {
        const name = orderBooksByName[i].name;
        const priceInfo = floorPrices[name];
        const collectionLoans = groupedLoans[orderBooksByName[i].pubkey];
        if (collectionLoans !== undefined && collectionLoans.length > 0) {
            const takenLoans = collectionLoans.filter(x => x.state === "taken");
            const offeredLoans = collectionLoans.filter(x => x.state === "offered");
            const highestPrincipal = Math.max(...offeredLoans.map(e => e.data.principalLamports.toNumber() / web3_js_1.LAMPORTS_PER_SOL));
            const totalLoans = (offeredLoans.length + takenLoans.length);
            const potentialLoan = {
                loanPrincipal: highestPrincipal,
                floorPrice: priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.floorPriceSol,
                collectionName: name,
                LTV: highestPrincipal / (priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.floorPriceSol),
                loansCurrentlyOffered: offeredLoans.length,
                takeRatio: (_a = takenLoans.length / totalLoans) !== null && _a !== void 0 ? _a : 0,
                totalLoans
            };
            if ((priceInfo === null || priceInfo === void 0 ? void 0 : priceInfo.floorPriceSol) !== undefined && offeredLoans.length > 0) {
                potentialLoans.push(potentialLoan);
            }
        }
    }
    return potentialLoans;
}
function formatForDiscord(loans) {
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
        };
    });
    return embeds;
}
;
