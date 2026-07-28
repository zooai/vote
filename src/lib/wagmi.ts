import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { type Chain } from 'viem'

// Zoo EVM Mainnet (Chain ID: 200200)
export const zooMainnet = {
  id: 200200,
  name: 'Zoo Network',
  nativeCurrency: { name: 'ZOO', symbol: 'ZOO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.zoo.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Zoo Explorer', url: 'https://explore.zoo.network' },
  },
} as const satisfies Chain

// Zoo EVM Testnet (Chain ID: 200201)
export const zooTestnet = {
  id: 200201,
  name: 'Zoo Testnet',
  nativeCurrency: { name: 'ZOO', symbol: 'ZOO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.zoo-test.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Zoo Explorer', url: 'https://explore.zoo-test.network' },
  },
  testnet: true,
} as const satisfies Chain

// Lux Devnet for cross-chain governance
export const luxDevnet = {
  id: 96370,
  name: 'Lux Devnet',
  nativeCurrency: { name: 'LUX', symbol: 'LUX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.lux-dev.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'Lux Explorer', url: 'https://explore.lux-dev.network' },
  },
  testnet: true,
} as const satisfies Chain

export const config = getDefaultConfig({
  appName: 'Zoo Vote',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || 'zoo-vote',
  chains: [zooMainnet, zooTestnet, luxDevnet],
  ssr: true,
})
