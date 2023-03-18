export enum NetworkName {
  Ethereum = "ETH",
  EthereumClassic = "ETC",
  Binance = "BNB",
  Matic = "MATIC",
  Optimism = "OP",
  Arbitrum = "ARB",
  Gnosis = "GNO",
  Avalanche = "AVAX",
  Fantom = "FTM",
  Klaytn = "KLAY",
  Aurora = "AURORA",
  Moonbeam = "GLMR",
}

export enum NetworkType {
  EVM = "evm",
}

export interface ChainConfig {
  chainId: string;
  type: NetworkType;
  cgId: string;
  logoURI: string;
  decimals: number;
  symbol: string;
  name: string;
}

export interface Token {
  address: string;
  symbol: string;
  decimals: number;
  name: string;
  logoURI: string;
  rank?: number;
  cgId?: string;
}
