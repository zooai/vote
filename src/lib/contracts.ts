// Deployed contract addresses on Lux Devnet (Chain ID: 96370)
export const CONTRACTS = {
  96370: {
    Governor: '0x6fc44509a32E513bE1aa00d27bb298e63830C6A8' as const,
    Timelock: '0x80f3bd0Bdf7861487dDDA61bc651243ecB8B5072' as const,
    VotingLUX: '0x43222597839515180E7aD564C94a3b5c16EB987C' as const,
    vLUX: '0x91954cf6866d557C5CA1D2f384D204bcE9DFfd5a' as const,
    DLUX: '0x316520ca05eaC5d2418F562a116091F1b22Bf6e0' as const,
    Karma: '0x97c265001EB088E1dE2F77A13a62B708014c9e68' as const,
    GaugeController: '0x26328AC03d07BD9A7Caaafbde39F9b56B5449240' as const,
  },
  96369: {
    Governor: '0x0000000000000000000000000000000000000000' as const,
    Timelock: '0x0000000000000000000000000000000000000000' as const,
    VotingLUX: '0x0000000000000000000000000000000000000000' as const,
    vLUX: '0x0000000000000000000000000000000000000000' as const,
    DLUX: '0x0000000000000000000000000000000000000000' as const,
    Karma: '0x0000000000000000000000000000000000000000' as const,
    GaugeController: '0x0000000000000000000000000000000000000000' as const,
  },
} as const

// Minimal Governor ABI for frontend
export const GovernorABI = [
  {
    type: 'function',
    name: 'proposalCount',
    inputs: [],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'proposals',
    inputs: [{ name: 'proposalId', type: 'uint256' }],
    outputs: [
      { name: 'id', type: 'uint256' },
      { name: 'proposer', type: 'address' },
      { name: 'eta', type: 'uint256' },
      { name: 'startBlock', type: 'uint256' },
      { name: 'endBlock', type: 'uint256' },
      { name: 'forVotes', type: 'uint256' },
      { name: 'againstVotes', type: 'uint256' },
      { name: 'abstainVotes', type: 'uint256' },
      { name: 'canceled', type: 'bool' },
      { name: 'executed', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'state',
    inputs: [{ name: 'proposalId', type: 'uint256' }],
    outputs: [{ type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'castVote',
    inputs: [
      { name: 'proposalId', type: 'uint256' },
      { name: 'support', type: 'uint8' },
    ],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'propose',
    inputs: [
      { name: 'targets', type: 'address[]' },
      { name: 'values', type: 'uint256[]' },
      { name: 'calldatas', type: 'bytes[]' },
      { name: 'description', type: 'string' },
    ],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
] as const

// VotingLUX ABI (aggregated voting power)
export const VotingLUXABI = [
  {
    type: 'function',
    name: 'getVotes',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getPastVotes',
    inputs: [
      { name: 'account', type: 'address' },
      { name: 'blockNumber', type: 'uint256' },
    ],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
] as const
