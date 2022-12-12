"use strict";
//The collections can be fetched using the following:
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLLECTIONS = void 0;
// on startup, fetchAllNftLists'
// const rawNftList = await sharkyClient.fetchAllNftLists({ program });
// const nftListPubKeyToNameMap = Object.fromEntries(
//   rawNftList.map(({ pubKey, collectionName }) => [
//     pubKey,
//     collectionName,
//   ])
// )
// Currently it's easier top hardcode the collections since:
// 1. They almost never change
// 2. The request to fetch the collections is very slow
exports.COLLECTIONS = {
    D63VXoqkKb6NER3Fd2gng3K1rdUo35xquZZkPfU5gVZG: 'Sol City Gen 2',
    fLXLSQsEQxVcfosyATVKEMfevteBAv5GxbK5xMsnBpy: 'Gooney Toons',
    S3JfuyHsF53pSbLQXovDn9byK1LXmH9Zc6iiYKU7Z2t: 'INFKTED',
    '9hpZc6DUAxCqXYTRK6Xchm2NqepLU3CQieHY9UwUVTij': 'Cardboard Citizens',
    EFJgdJhTXg7oZM5Ld8ogLHX3b6mr8GUjRi2RwyrDduCw: 'Bōryoku Dragonz',
    '5ZQLdz3BgYUWV2EFP13Snjf5RGML17LMj6ucbAoAk1hz': 'Thugbirdz',
    Db2zA5Rf15CYYwXggNf2fdqRHi1MaguvbvgXVSgbM4Zi: 'Famous Fox Federation',
    FgXcDAkD8qvKtBTHMiEJyVZEkZcU5kaN8QmhfnNQth94: 'GORILLAE GANG',
    '5PMuPTDCfyEJwMTM7QkgTmG3V8Ci5mMG6grg9UMQUSyp': 'Meta Tattoo Club',
    DpkLdzn6vQASVD1J5diUFCz2kVJfxkp9K5f5JEM1csz: 'DeGods',
    FXPDfE7C6wQTVaUsQSaVo7UQdh2Z49oVEED6inY3QFFD: 'Underground Society',
    '9JypaxWzRnc8sHXkMtWwzbBsffPjFLewc9n6ybbjmAdf': 'DazedDucks Metagalactic Club',
    '7EchrpuaRECwVzhB5JXU9BTLGaZD3psQ9mejGUiyeL5E': 'Netrunner',
    Hh2hekFGJEakhzHBrApvapvtgkRtQmHf2Eq5Kmvrd8dF: 'The Resurrected',
    Er6Gj4VPDyKHctDUZWgUZBf1bpuoTG8HsmXVmGwomL8d: 'Solana Monkey Business',
    F8rYBxK62K5pTeEu4SF18uXpBFehvKypePrHM5mfPUXV: 'Simpl3r: Bounty Hunters',
    '6xw67VLUGj987soZKMLkFffGp61J2dqD2MmK6rJknCcz': 'Infinity Labs',
    '9EcroYF2dKLdwgtG43md86sRNVVUo7RyQ7yjtkDzByEY': 'Sea Shanties Game: Old Atlantis',
    '9aj4qNUr54HiLBn56GepL8hvJHfYWPRMdUXKTT5tTGDu': 'A Game Of Dragons (V1)',
    AeGRWPr3ZZR7xAE2UN5CCz4Co3A8ypbukBv1dfNmBdYw: 'Sea Shanties',
    HjZ5PHHLtJQuk8D5avfSvqK1VzTkbQ8SdzPBMLNoQmLA: 'Hooded Mages',
    Hpz5U8twXUH5eFGvfZZBjMt98ZR1BLtAcfN8b95Uyqq9: 'BR1: Droid Operatives',
    AhtEUvynRUc544tj7KfmpgwY5jvaRJVASGzzxn8PGbJB: 'SOLgods',
    DroRxJh3bMv89zAF5zSUNp9UdhjavVvL3EBgSjzwSjrw: 'Dappie Gang',
    '7QRM7hxT1uKKgzKhWK5BkZh5BKuHQc6gmCYXEY1vAeox': 'DCF microshares',
    '9kNikWwfgM9rb6ak7FxSTWpiGsGktN4pD5V8Eeb6h6FK': 'Dronies',
    '7zfAmmL3TN9biLVNT1meATAkX6qqQ5QdXZnNayHKCCBy': 'GM Duckz',
    '3fzpFr1SKgWNyBvn2AQ5iQ5nYHAGN3J8Mb8snoTjBCLu': 'Supportive Dudes by SOLEDDARITY',
    '37e4aFbYipQ9idNbqmHiJ9PJmBRsWXoCJZVBAY11k2zn': 'Claynosaurz',
    '8bXZwanBtwfm4bfm5ey3kf9okZb8YE31gGe6ZY6TisG6': 'Honey Genesis Bee',
    BPgfSVtGwJ2LknCUVuZgG3PqY5ArcFrfPFq4qGZoAAda: 'Zillaz',
    '7cKMgRvfJztN5GzSGCEmrhVxf2btMDScxShqWryj9rDH': 'Shredded Apes: Gym Club',
    '6RuPghLYZH2nuVMe7ypqvqpSYS93cFgSiXibsCN9ioZe': 'Cyber Frogs',
    G8w7T3evN8TyzgGXE3YJLEJV83PaF4PmVojXqR2RGvrs: 'Crypto Duck Punkz',
    JAK9EVRLb8eASGNFgXZ3HUZQjxDbL8J5qb9RNe7D4dLU: 'The Exiled Apes',
    EjBCwYVtKVgzCSNaUTDuxn2PpSE61fJtdYxm6jHauiq2: 'Wakuland',
    '6QLYZCNrm2ne5dyvPDd5U7xuNeHXv943dGJLHKs9etwp': 'Crypto Cowboy Country',
    FArnqChwBUTK4vfH4EQd6WSa6A69B6bm1wWRWfRuGgdD: 'Great Goats',
    '2s6N257knxNmkc98KB5GVjfcGQ8JwvjmdmJZsY81paLM': 'CosplayX',
    '2LXXPQkx8y2fRQmvehv6XGgJ7tkgTKfnGNJW77tdqWT8': 'Yeah Tigers',
    EmvziAGu3PjLDtWdQ2v1hdYU58kJ4H6F65pSBnQZo6oj: 'HumanX',
    '7Le1jxsaYcojLEZKY5hFQCnHpmkFV9eh67msNPFab2of': 'Notifish',
    GoqPPT4szPbwQhuaNC81spkk7MoJyrxhmX4GukaXFJZu: 'Aurory',
    '3LuVW2JXtkFEuQr744z9rLjeH8ikNK2Pe29f1SiNvBsz': 'Suteki',
    '51Am8ZRHqjuPwVt5xta96ue9BJUXvCpuRoQDQvDVBBfv': 'Nuked Apes',
    DSCHLkCzPS4c6xgse4fiHSbdMCkQFH4Dfgnxb3GAMy64: 'Just Worms',
    '9LQNCRojcCAFtsYuyjwjtRvyFvfWtbxFx5nEM49eND3o': 'SolBookie Sportsbook',
    FGtgvrqUFt6KchoVZ6LtL8GwuqAiEySGYeSoEMLquCMB: 'Taiyo Infants/Incubators',
    '4mNBSAraSQR97KzGYbfPKJrZ8PzhV64VKf6ZZyaFK5E8': 'The Catalina Whale Mixer',
    '5KeAwryzcqi8tVM48yoCPhqTg1UKA9kuwPfVQV8EubTY': 'Rooniverse',
    CV6LpuzRZX6bYKYja7HsV1fLfZYuVzmCVfXwwppC25KD: 'The Vault-X DAO',
    Gq6W3P9wGh8SxRzURGYzgm3fq7us5xiAAZj8DnhmPs3P: 'Secret Alpha Labs',
    '5KJYVdPNxs9Lg2WQGC3LFY4VBpQMDGfQQFaHn6eQhpM6': 'Monkey Baby Business',
    xFY4CzgVgomP3W689239NhEXSyGEhvmj59CRVo8JQDS: 'Nerdy Ape Hub',
    '3MWgen1Wuko9mdZywEv54ydd82Dy2GTRV2x6VviBb1LF': 'Marker Kid',
    '7zRMH8AdqgkLjP9VGtxsavGcAXarEokKxESV3Uu7xrt7': 'The Bridged',
    BPcs6bV7rPkcKkNPC3X6aRMbb26TxjLnsxp77V5Z3v4T: 'Lotus Gang NFT',
    FHp5rPZHWeft1mzxG5y3DQC8gxkNVHj5i1Dnfi2SzXXK: 'Omerta',
    HRQXLzpxJCKgvF6swqkUde1FHj8P7huJPGv6xTqqbbny: 'Bounty Hunter Space Guild',
    CfhuoHNXAt81yKY1Bbqu9PgPdBg5CskP2A6KB7Xm7C8y: 'Anon Evolved',
    '8rBt2NinrQxafCKksBj7QJC2t1fgBNhj6CkfHRbjDVND': 'Visionary Studios',
    '7ABdbmvdxzMjJ5UJuPGoHPAvAXUz9iPAbqp8JqgB8kCG': 'Ape In Poker Genesis Players Cards',
    '4UuoEmY66VaeEnedZrj8j1nvW8KajitcGuvdGrcB2tmE': 'Chillchat',
    HRZRUysP62AMLStW8V1nmA5R4KUy7f3a5SH1JUyjsn2x: 'ape16z',
    '4A8hWbwS6qQHKSW88YDFUa5TKdyVzikEupiUkveVnoaX': 'Sentries',
    '2LVGhHv8JAjozftGupNsQsudQQUCmdGNr7488E7rauHk': 'Bōryoku Baby Dragonz',
    '224kQEDv1y5K28rQSrSbzJjjnNR2jeezokkVbZFLvJuv': 'Generous Robots',
    '5SPvK6UuRrbxmoPzWQYzBkUorKixYJ4qJEjmRnGpHuKm': 'Cets Milk Bottle',
    '4vSGj6AsMmL72hzcBEJP6Z1AX2vxjFFdPQxBn4N2N718': 'Citizens by Solsteads',
    Gz8UKFkUaQqrkyZZ8K9v5Wiehku3eSGMpqjFmgo8WCX1: 'FatCats Capital',
    EHy93fbgPfCjmChsWuC5qV95VEzjuDwo3frkytjZ4K3Q: 'y00ts',
    '2gN62PbqQtrECGNGoxiLwR7w4qdAG9yNYbPtgqUbnHHw': 'Magic Ticket',
    De4hyrbWyybJBu9tghzR6CzybUWC3Kfd29uTzzwLM1Yv: 'Cyborg Apes',
    BfBmwBnWRLPPdG4gnzLH6SPxoMeSnKU8hX8fMgpJV2PT: 'Vandal City',
    '7nwU9gsXydXmUa6hrMGyQKdBNvt79ZumqSBszFTin9fw': 'Jelly Rascals',
    '8efWEAxiiPoTu6udTNG8n7dMEvzSLsZsLMGFvjEZnLKU': 'Ukiyo',
    Hfbpp9vy5bhzd4KBTwqRH1AX12ak2TR9v9R6BmW7Gssq: 'Kotaro Sharks Gen2',
    Gyz57UtEV81ANLQ8qhCfJEjx2qRApA67Z73PzyM6SvuJ: 'Pawnshop Gnomies',
    K6oeBfyh6CmnhbwUUTu8Ccz7XN5XVNzoAjSPEyHoSMx: 'Dust City',
    '3bjS4j9Ugke3eiHekCavyKn4LpvEhfVNJntK1jMz1fu2': 'Turtles',
    '3xXQ3SYSNw2at2xx2dhM3BHeeJbp364ds2E4p29E8dnx': 'Bunnies N Homies Club',
    BK8T3Lp5ug6As7GQ75XgQSgCaAizT45ZMpwxsJ6Tx8mU: 'Secret Skellies Society',
    '74GfTPAxGGQdUaiPqiaTkUFwEUZeQDgxXM6iXdEcTVyb': 'Divine Dogs',
    '6pXqkcFcsU7k9tLrCbSGCrN3KxrzxQASsSXH467dKbgK': 'GGSG: Galactic Geckos',
    '3ddFD4ZDi4GWJr74Ju61wx2RoQt9Zj4N8bp14rHekBEw': 'Degenerate Trash Pandas',
    EDdnNnBxhmQQQAaFGhm1MLSrZvnm8pdgp6Joa2vaQJMQ: 'Lunar',
    RDApVxeuF9qb9ohTPpiSEst62ARrRxw9CyjqMSKeeSD: 'Reptilian Renegade (Lizards)',
    FwPafrtC6UssnrFxtVgo8Qgr2YaprtZk4PHpQ4aZcLpa: 'Scalp Empire Nestor Edition',
    F1VAUo1TsW7xDJFZu3zwnGU3t2o8GRW1z2hD7bxAbzSU: 'The Fracture/Omnium',
    Caf7BXkQG2n8bBLDPV9XkizbV4kkRDb4QvCx8xBVEFTw: 'Cubist Collective',
    '4925PZBXJAjFtAdEwAZbyoFLnpaeqh8h2GR7RfZgNgAt': 'Coinfra Samurai',
    EoAE1gVmLo1457T1LidyVH2fHb8YVsG2A8y7bDVLKj7E: 'Bot Head',
    '7kBjFDHz2CYtVzxS7M5wvPNQejsAbB5TosAhhoDMoMZW': 'Grim Syndicate',
    '4aB2VEzoJij2xM5ifioWqoHkzVkmSi6J3Ty1meFAVjfe': 'Dumbass Donkeys',
    JAjBhUQT9vznE6HGHaFP1z5LtALJXpTUKcGA4sDvCytG: 'Smoke Heads',
    '5MjYAVNVUFZshhzDtujThFMax3vqB6i114aX5fv2ZKEw': 'Hello Pantha',
    '4K7zcPwiLYbdnva1ZgeHAP6j8eMJsBQsoNMGU2Vu5NDL': 'Quantum Traders',
    '26ggG3h6G5TdTtNUX5PzrB1fA457Mn2rYQ3Ewc1Qq6Ki': 'Sol City Poker Club',
    '4CUuRvXJCe7Bx4cWQbccS9iv34SgL8WKvhNXvh7E6Kdx': 'Susanoo',
    AVQ7mFk5sqjJ3bQgvSvqAyaVwxBr9aoRG1isNQnAGrgf: 'DegenTown',
    '4cAW9UY9PRyX4T3ep33E71N4bSq9aTbRoJvdXAqP2FrF': 'Sorcies',
    '9NczUsH66VAdzZbLQvh5sRwnYzbrG8Ave8iWdGpRarxF': 'Stoned Ape Crew',
    '61b3oWCoKvhNnUk93WbwYQZVsiQWXCFPwp2XEWWh5bsU': 'Acid Scientists',
    Bk2AtdNhJ8Bbq7GtQsuDDZ2HBxHjZ4QvZEhMNLjdCkZY: 'Plato Foodies',
    '9NEcFZvaJmuGu4fqrBQqg8SXsUNevf5GHWnACgXdCUcw': 'Parrot Tools',
    '8YuSiFmyceAbQdHPDrtXqxwUrBz1seqKVirkJ4TcCNGE': 'The Stoned Frogs',
    '76s8BJSvvq4xjLPq9zG9t9HSfDEccSVDX7WD9iTZmbk5': 'AI Degens',
    CM3V5DdfqxxXzC8BD8W5jysxA1kDiGNz3ULjiq8ozwms: 'Underground Royalty Society',
    Hky36rhmCeCg5vqUNtrzkFnWWZMCdjU4ExGWhkM876cN: 'Degenerate Ape Academy',
    '94kQjf3c2FcSTspw1zmmhEBAP6cBB9QdhKP2JpWDDFr3': 'Ghostface GEN 2',
    '68ZW2eyBHqsMZA2rN832smdfCgug2FEgdrQunsh3muqS': 'Matrica Labs: Pixels',
    Dk7uWmPeXPgHJDimqWHkydwUfemGhC5hML49GGZHDN3W: 'Dead Rejects',
    '57tUay8X7mkNWdogErVPxp6Esu5E5geGd8ES3YZPGCvG': 'The Greeks',
    '8aRTF5MTVcrQrAqT8iGzJyND8Cx4e4sQkysEGPEdetFK': 'Lunar NFT',
    '8dXWpPFnbtQf1BykcLQDq57qik3VJ8jSrDwkC7up9Zxm': 'The Remnants',
    GVQkGi34RczEgRqmPeZfp9FCZjPRGVGcAt75qYuqCJMD: 'Senzoku',
    '7dkjEwqCGhEmXnd7H1zhZtBxycVuJQu88jtta5XVukC7': 'Psyker - Hideouts',
    jM7bskuDXHK69knfcks4S33qN5q4gJzL9B6iDgk3RG7: 'MOUS IN DA HOUS',
    '6zGxNgtkcqPXbyEaHcjNtgap7xGiRmCc6ggAw9F8Q6Z6': 'OOZ & Mates : Spaceships',
    BMB6HeKfrNLjbdjkm8dgvDqdQee6n7tqenRBcF412vnz: 'Blocksmith Labs',
    '3caUozWEFrLKbePmdS9GPPvdMgT91HWCVQ1XfCBWa9FN': 'Honeyland Genesis Collection',
    AXi5U881hyWxoXyuACVUdxYJCsD7qfLNxQxLrshWrxA4: 'KikiVerse',
    EtMCPxRFJV8CnhRW9ZCu5CKvXguY9tR12gzvP9ePLUNe: 'Ghostface GEN 1',
    '5ubvoYG4nbiU15W3hTVeKxD3W3muZoef5DCuvZmgW3v1': 'PENGSOL',
    '7z3NoEhxxVadatiqEoDhaPgDU94MDSw4pobtu8zzGrVk': 'RadCats',
    VoGCDZvzcpFP9oL9BeqBr1RKQGrsUcQSGszQWWCT8GL: 'Cyber Samurai',
    '7mTp5uriVsHJFDRG6G8Mjp933RFFatKeMbcnEfVWLsd2': 'Utility APE',
    '23wRurGQ74MADEndEJgL31MbtvkPtY76uHx7SxQ5wLt3': 'Sengoku Degens',
    '371o5EgjJFPeQVuo2MfNsjcknxVfMn5dpRd7Fbyj2hjt': 'brains + zombies (brains)',
    '9kJmUYw86b5gywbU5PiqvL8nQ7DDZ2XNCxMMuv7sFGR4': 'MKRS',
    F4yqfhQ5qmFDuuJPHQRxRzumAY9JCYFLN82yL7EpXLBA: 'BR1: Ape Operatives',
    '4EbTf8tTu9UVR5tHre9PZqN5LkyrhzSJXL7jeGy9ZDrN': 'Ubik',
    Fa4p1Kx1DXnyNneJCWSJv2HKaihmA9L5A5iQgZC5Vbnz: 'Oak Paradise',
    HWFuon9cMSt39LWmvjy4bRVPcCp4Bpgnq2Hr1CHFE2Yt: 'Just Ape.',
    Gg4DkDiiYCViKe8RjBL3iSUk5oJgMvJjtixAWSJkDhu8: 'The Ministry of Art',
    HXrnuN7ndV1KJJVJGA9C6ttxiJpbSHtRMA1iyvNFwztS: 'Liberty Square: The Hallowed',
    GB1t44mC3mWq5HujqrRMCCHp2jUM3z6ZUXJYEiuEf6s6: 'WADE Friends & Family',
    '78bnAgEYcrmAj7c2PfyUHxafabg4zKiLtDEy1zw5kbdo': 'Solswipe',
    EHpnYhCzittamLEewM8KZ8ovpkxFEwXeG5DP285c896t: 'Robotic Swords',
    DQg73PsW2sG1VU1yVfUtKHFAs2ZmrTQkj1xW5DyvRHQr: 'Honeyland Land',
    '9cH686xEpksDSmSFmoSjb89mcJdZ84D2rxJU7xCeZ566': 'sharx',
    EtYsCwm8d7y3u6zzqWPzjMTuzU1AD7ZHdaCLbU1nJFCD: 'Crowdsurfers',
    H4TTtnXBR3pgfnTPiuYi6q8RTwJdodMpSBqryTNZPkRD: 'Bet3',
    '8eX2GtUJvfQ4wkxErWc7hbcbbncu4NTbq3mtBohAxnbM': 'Froots',
    '9MZDHxPPnf1vyuhUiL27y7T49XKiQEhCvxVexiaUVfu2': 'Liberty Square: The Sinister Squirrel Syndicate',
    GuDsVRRMRDRbGETN7D6zhoG8PakZMcoKBNstE2x67WPj: 'Sharklist Auction',
    '5Tx7KzREDojo9mHdCksgkMjmD8h8T9eu87rG4PE3kChx': 'Portals',
    BC78dxZuH3k62QwX7i51VV4kmXJQbZjY1smaZ6Gk2JsB: 'Nekozuma NFT',
    '8gbi76B8nNEtudtYriYQGwNVbX1Py1FJRZdVZ7mK2sNa': 'V1P$',
    Di8NQTCDsAbAzj3219wPNK926q5K8pPENqYo8QUqH3GB: 'The Orcs',
    '4QAzU669Y2DgYW7sSSZPrjDWXWsvEKQZutRE5V1tH2t9': 'CETS ON CRECK',
    EjSucMTEGdPeuVc1yCSinEu4nb46gzhePk5uX5y7VRQ6: 'Mindfolk',
    E2JQhmqvRJV816y9fy7a4nXo9MzbhiqH6chXu2HqA3xf: 'Satori',
    '2NrAg4cFzXVtEGHFe2hNJWrGpSFkuMsr7ttjWLtCBvk1': 'Rifters',
    BTSD4MDLpaZKTNzx5ZJNxRJvxxCPoiaWMVrmA2hBfQmQ: 'Serum Surfers',
    b16xP1tEWGxKRCvcnhbVfLWySwvuKdVhcUh87dfwUaV: 'Trippy World',
    '24rHw3RDCa7oxQJKbdNXRjWzMVB4Cn61pfwua8KV9Pb8': 'Degen Dojo',
    '3FaHMregddEE5f9pkjPHhLHeCRHZiWJwS93zhAaH44PX': 'ASTRALS',
    E3g85oip8rpuEBZKWToMiiMbxiG8duusV5xWCN3eqZUe: 'Jungle Cats',
    '6692ZaJcqSDdkewMZiQkfxHf185xn91XMKARcr3JTjkc': 'Best Buds',
    '4kTofPxVe7wzBTuX9iNRsTSiDvQ7Zh3fHpzVvcZDJanj': 'Disarticulated Skullys',
    D1SawVHYruEJk9PwmHbCmB1YzvHWRNVg2FYHKPstZCgj: 'Sensei Labs',
    DauHzingkDB5hNvi261LNfxAh2SuxJJWeAJLe9JgAYWh: 'Öneira',
    '9UgY4zXMULqphFR82gSNw3xbZtadyDLSP9UcFCYZ3rs8': 'BLXCKOUT',
    '4457U7YJk8XNBuW2FXtQtcUMSb57utWneMmxYdSvQ8U8': 'Founders Coins',
    '2VPbiFWhpQnfyUqEhHBMk3LKGXmvE31Ns5UqHVfsRJMN': 'Gothic Degens',
    xgNmKcwNH3zHWm1a4aMSvKTJHQnLZapxDUn5ii7nLkc: 'Akari',
    '5A4ZFn3JWkdktv8JKX34MHDTuC6PKY3gyY9TiaCQLDT7': 'The Chimpions',
    ETVzWakLpcGmmCB17xvdVATGmGm6okReoTW2U3LcKRuT: 'Elixir: Nectars',
    tvW1o3tpEp9BMzvoDUE9xhnAdtFUs5h3DABLAD36FMF: 'Poverty Boys',
    '4uWJ6poo4oBBFbdHB3KMo2Q42Z8XT7NF8HBQbGBZgrhF': 'Jungle Cats Lioness',
    CQddyMSyeJ8Duyfa5pwRG1SifpLc86ZQa7s4KNMXnUjp: 'The Remnants',
    GjcseyBb3n3vgA5nvFdZbk7yx1BdY3N4x5L4wyW2HEC6: 'Doge Capital',
    '3xfRA3jkBL5Ervb5R9aoTKV2vCEKmAiMhhnuNUNxFSpq': 'y00ts',
    EtsjGrx4jhMM4Frutefxh5d7XMrq7DJvKmioeY6GzE8b: 'Acid Monkeys',
    Gk4Rt2LpGBChGguNzR4K7bwXmdfMeKLsUZ32kCTMGgbA: 'Mycelium OG Pass',
    BV9cad9Q2MW9DRMPsCpibMASz4DKFae6nm1VzfKdetoo: 'Taiyo Oil',
    '3dhN4KBhWwSzhhk2BCdpv3Bu2zz5WMJ3twuwcDH6yCoQ': 'BLOCKZ',
    GEbJ1RwMcgJpWnhjn234BgQotCJGn6msygb2Z9SCx29S: 'Jikan',
    '37cPEmoVmSC1CAR3zmL86hErg5sXVXPXmDG976t3PyHG': 'Balloonsville',
    DAiCVRssmZVuZz9AX8PhYwoRdzV1bgsNDgaebH9dP8Ct: 'ArtPunks',
    FyZ2AnC56FRZJ1u6Epp6XGCKNQQySfzToWsDoFXBU8gY: 'y00ts: mint t00bs',
    F5A8E8SL17WUASoxXNxgzWK1osiLr42FJbt2V51R5une: 'OG Atadians',
    Aqr9MNLf8shaGHhGUwiGyPwuhXopyXviFqwtAq4N2cUp: 'Naked Meerkats Beach Club',
    '7ucAEHAq7e5nw2St7BRmJVtXbABXdbA5FpNFFZwH4SfJ': 'Art of Mob',
    EaadJFYGvHuCv4bAU29jCgfbsJRKDqfKqp7FA7ZeBw1M: 'Owly',
    '5kB4ULLm17guE7ik1aQqpu3zYLvPGk8sy9Kf5KFHEeFJ': 'Odes',
    EwZYTJTNARVMLLZp6k6vuJgKwEXtfqsHSx6UuKoDJCfR: 'SoDead',
    '74PpK3sNvVDJjp2K1dTTJnGoqAY6EEtzKVvt4jBq3zkT': 'Psyker - Keycards',
    '3GqLRSAfUuy1zvsQyzWnPSiK7SjDdw7YYaFeaQEdXJeQ': 'Smyths',
    zbJn2jzvczpV5rjhrTJ8d43Tr7o1ZXyFRZGp9ta5rq9: 'Helions',
    DN5Fmi89JoEQogrmwETNABrBkzJfdBV11yVXFknLj4vX: 'SolSteads Surreal Estate',
    EUh8FuJQC7qUsZMweMKyRo84hF6jsx7rFdvNUXtzNB8v: 'Bear Market',
    HRgH7KnDkSt3GUiSPf5Vg6jytBzrWY6Nhq8TgTUwyek2: 'ANYBODIES',
    LQy6fC2vStiTzfV6CTmFv6ugYxq53Uj6KNX87vLEGkf: 'Critters Cult',
    FoMMFUvDbyLqUV95M7J7mL2vYGHcBzy8bxRT8nTrNMe3: 'Meerkat Millionaires Country Club',
    EQGHhdxhAUHnrDwDZjMFEgzupBUbusYtBywSTNw1Jr6m: 'Moonly',
    ABHoaeb89sSXgngGKC4AvygvkfNMsPeXLdP7Lgg9ctMx: 'Degen Sweepers',
    '7iEiWGoiwWgV6ST89L1TAttNotiEGWPXFd3qtyuwYJAy': 'Cured Labs',
    '5iQCLfKyRfZ2RpjUKR8Br4P1iMfhmWF6DkaspKXSnXfv': 'Drippies™',
    PpZzG8xh8L51KrZryF1ZaeBpbCNxWm5RkhCSi59faYo: 'ALPHADOG Coins',
    '2Pq4ahm18o4WLdcZSbswCiZVWoVGj8RTCNDHSiyJh8Yk': "Trippin' Ape Tribe",
    '5KqCRQDTBRtqbqnEzhZUksriFKPsTpLm4pdE8LeG9mMG': 'Degen Fat Cats',
    HVSDUnFJvCq8g9CdhWmg6ned1huwXZphPHa8zqBKnnnd: 'Transdimensional Fox Federation',
    '5AKgre2AURKfmqJnrdFWUB6c3jJNzc89GHEGYC9zRSHE': 'Shadowy Super Coder',
    CinPhV7SfNjQ24igewgijWP4iCd4b8D1JFLGrRAn3Zv9: 'Ghost Guys',
    CqFYoEsbkuGtwLeFaroTTm14uxArwb6qeZQEygN7vpW8: 'Sol Slugs',
    CX4NcPoLGPSf6vbvTkqKi3mJMf7aX2TpWAVr3TbQn99G: 'Degenerate Eggs',
    '9qZgSxnwPr8Q6jHK6uZyjTuu5XFZAGSEgbaEhdZE2TJk': 'Solana Money Boys',
    '5JfnmwzMP5TEFXgBBMhGQ8meSPPWqiiHoeQPqtsD4E37': 'SOL Decoder',
    F8buQ16UY3rvbmi17iFHsHU3TNvRUWcynRWuNuFLmhbs: 'Solful Creatures',
    '9Q4AjVZkpJMhKkysBPfuJyRgC9iFkt56TYbpymmgoju8': 'DolphinsDAO',
    '7GEyUiqhfSQj5jAjh4xdpXaERpjYKNHayQx7qQ3jp4eW': 'Droid Capital',
    '8CuuGtTrnsFZ9L3Tv1d2tkpkBStTdSSTez1xxsgEezYz': 'Zaysan Raptors',
    '3Mxp5GNNjzv5nhWYXRaFA1ZAd14GkNeGaTEqChUsbPSN': 'Primates',
    FtNTgwvfT9ZhRfSqZNbRVMabC5juLE1atAYKeGN8iyX1: 'Rakkudos',
    E19YfoyDzcjxXVEjpVbMPGT7ePpAikCKESNftYHmnNJd: 'Communi3: Mad Scientists',
    '8VUxvE6jrQJpTM3bAdz8xi4NHiPbF9gqQYbyKJQRMm7V': 'Simpl3r: Bounty Hunters',
    DNuow7G1bDQmgxHR82pL1qHTHaBL7R78s4puMgLhBqJY: 'SAMO NFT',
    '87yNWoAZSHEnMniWZ4s6NFVZd1NDvTgHq59WRCJgTppM': 'Underground DAO',
    '1d1rYaeZ8qjGUPEtffpMLoWzsvAGbBWZUfuhLvF1qam': 'JellyDawgs',
    '62JXx8gAo1KWwtsSfAcshMojSzAnXGgLHKCAbj8wEMBq': 'Looties',
    PN3kpsUoLkYnES57rMVrFoxZgHScp6UMkaWGvmzowRD: 'CrashOut',
    GSVhMsQXMqcFq7dCsjsZ99SsejjAoRXS9KqdV3318c1F: 'Smart Sea Society',
    '2qnRhkMuetwtUUiyMkwi2SUprHvkfMq5yXthXy2bgxyp': 'Alpha Pharaohs',
    '5zLLrbn6zMcikwhsMFc5DXA1YQKATJHdPkqb3gPEXcAP': 'Aces Sharks',
    BE96ZSHuwUnxXxejQgDG9DoCHyY1UbtCw1DeL32ZioeV: 'Cynova Legacy',
    '8PUjDq9TxREspHvMFBuGHqJx4B4H5PaRLAD3xkDiGesx': 'Solana Money Girls',
    '9LfExdCP9WL4RAF1SZ7xEDmcWZwk1vCyguvwe71cxRgq': 'Honeyland Pass',
    DjufGLzZR1z4NDqby28RAneiuabBt5mf5DHvnFdMLxQd: 'TombStoned High Society',
    CLjCfbQtxL4oPCaBTrYk8GzbzopBnzBbeFSkdsCx5yMR: 'The Anon Club™',
    Vtrh1Fp7UUkYgroeqs8ALvHQ5AbF4QAjdtFEc7KRMmB: 'Pen Frens',
    HEPeYjPDbk6zehEUzYVyryLbZafvZHWKPX3A5Ui97343: 'Sorcery Inc',
    uy6LTjK4cp82BwMjEb8SbwsRKYyEAteEmsCM8ZY7DVC: 'BVDCAT',
    CvmTZbV3rg78Z8mnsVdiG3NDxjVb8jQ5MmdTLB5HtUXq: 'Infected Mob',
    CypPM9rHSCKXUESNcjiYBHpzPHqzZD4d3YibE9QrXchj: 'Bubblegoose Ballers',
    FY3Hd3jZphCyyLvjoHPZcLtwUPxQeTpjdU7R1Vcd8PTK: 'SolRarity - Snipies',
    FZeVdh2ogbzDJdPAg1uzduPethodebKLCq75ZdrJ7GAx: 'Particles NFT',
    A91V9xPQDwozFLNiknBvyoEf5Y4KNZzfRCw4XvtfDr93: 'a2z DAO',
    '4gvM2hBUjo9jtesACL9hUCZGZiyaxiZMByxnHh3eDkyC': 'Communi3: Adorable Assistants',
    DxVH6G5u85zk7Yr3462kwW2g3fQ8KLz7RSeUCj3msWY: 'Lifinity Flares',
    CsC6eTprwWVCYn9cHGHDiGigsAfXX5KKYVE19afAxLV7: 'Patches',
    GEuYbFA2pVAv44TVUjbAzM6XtKjHPd33TeidxSdadVVh: 'ABC',
    '7Jpn7vFQHyr7ir9UV1b4Kdw3C8d4JussJDvuBaBwBViE': 'Pesky Penguins',
    '8e8pE6DnHRcCbSotM65NUdtrDi7xZGdrK7g4j4W8btZG': 'Jelly Rascals',
    '7UMYwJxQGzneFe3C1wdVQy2vC5nXzFei1mPZ94gB6Ec2': 'Udder Chaos',
    HT9s7rZRxvQ9HJqfBHrt3eBZ9LgHubwDpMPKsbxMEyKd: 'Bohemia',
    '4ygbdHGdwhB6v6ncDfAjpZuX8ARCY6mnT9QPL144Cfqh': 'WeBall NFT',
    BcZEby2SxfF65zM5s171k17HxNoj599NChDBfjgVJWpX: 'Dead King Society',
    JDAvdJRWSqP78143SvtDcRDo2Q1rkVQMvKUp5SCJyVCJ: 'Simmple Labs',
    '2mgTcC7asv4zVLgE55WeL8ADufrw8xiUYUMknCyXmt4D': 'Crashfaces',
    '9F1GRd4XBjs4v2PmFNBwcZBzVV4utUqGA647mbHq6qyM': 'Zenjin Viperz',
    Fyf5CuHVxfDkRVFAtV8ssdp6ysx4CSb64KnrmyWPF72j: 'shremps',
    '7ZbX4JxFhZ4J4fKTTHcS6V3gBYUDXKbTT7iNJ2SDVmGY': 'Elixir: Ovols',
    '6aZx6SxSFo7sUcbu8k2sz1Q3seWMPmmMYmRGssgisHXc': 'LILY',
    '8W5S8ixe4p8PM9ch4XJ6mNf9taeWGy2bi92JfSXxcdRp': 'Sphynx Underground Society',
    HD2z5H4V8ozK9vq8jCZnC8e9c63uJ61fk2NUYLp1sYgv: 'Delysid Kiddos',
    '4Vx1tZWu5F2nb4E9ye5pT2g14HvoP2jp36kgfLrtAdiJ': 'Cheddar Block Games',
    '5MPPBjnGJwCWQs3cXvwKKzQBLKzLGLjH2ZZwjLtFfri5': 'Broke Boys Club',
    '54Cid7EGgc5VonRH8RS9Cf2uzMCRoNmuoRrJSiGQLUxk': 'GhostKidDAO',
    '373hH4fgDYCdRX2Xy57CxRgnDPLkQRhmmrUvKLGshGMd': 'SolPunks',
    BkMkGJZMkp8cHi3etbXa5WPX7Z9UqmgBLX5riXwkXxV6: 'Rentii Rebel',
    CrTRFxCGPR7dUJvSSeAFisWfsM1QXZGRgqFFsMKQ8D5v: 'SolRarity - Rarikeys',
    Gp5Z4wSCS79o7y5M1Gq4t6mAzXuVpf1pdzWWFdKpaNcK: 'Bit Warriors',
    EAkVcXyj2r5Xb9mVa9HKJZ5H7THXKtPxRerJZKbtYBTt: 'Photo Finish PFP Collection',
    HdjknhXeAWR6yVK1avdB11GpnUEapR7mD1Sq5sg7Jebw: 'Kippoverse',
    '8EHY8M4sjGdrSrV2gji8xuLhrvEp3aCmhdfyDJcm1FMf': 'Okay Bears',
    '7DKafTMvrgFgxAEH1Z8HDTfXcbg1MLPQF2WGYoYRJxt5': 'Blockasset Legends',
    FnD4pPiVnXmUCgBv2faELWqy5FvGA23oc685jTk54mkh: 'Taiyo Robotics'
};
