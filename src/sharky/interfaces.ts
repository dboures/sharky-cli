export interface NamedOrderBook {
    name: string,
    pubkey: string,
    enabled: boolean,
    apy: number,
    duration: number
}
  
export interface PriceInfo {
    name: string
    floorPriceSol: number,
    lastUpdated: string
}

export interface PotentialLoan {
    loanPrincipal: number
    floorPrice: number
    collectionName: string
    loansCurrentlyOffered: number
    takeRatio: number
    totalLoans: number
    LTV: number
}