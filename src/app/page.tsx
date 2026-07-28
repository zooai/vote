'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useReadContract } from 'wagmi'
import { CONTRACTS, VotingLUXABI } from '@/lib/contracts'
import { formatEther } from 'viem'

export default function Home() {
  const { address, isConnected, chainId } = useAccount()

  const contracts = chainId ? CONTRACTS[chainId as keyof typeof CONTRACTS] : CONTRACTS[96370]

  const { data: votingPower } = useReadContract({
    address: contracts?.VotingLUX,
    abi: VotingLUXABI,
    functionName: 'getVotes',
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  })

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-3xl font-bold">Zoo Governance</h1>
          <p className="text-gray-400">Vote on proposals and shape the future of Zoo</p>
        </div>
        <ConnectButton />
      </header>

      {/* Stats */}
      {isConnected && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Your Voting Power</p>
            <p className="text-2xl font-bold">
              {votingPower ? formatEther(votingPower) : '0'} vLUX
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Active Proposals</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <p className="text-gray-400 text-sm">Network</p>
            <p className="text-2xl font-bold">
              {chainId === 96370 ? 'Devnet' : chainId === 96369 ? 'Mainnet' : 'Unknown'}
            </p>
          </div>
        </div>
      )}

      {/* Proposals */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Proposals</h2>
          {isConnected && (
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium">
              Create Proposal
            </button>
          )}
        </div>

        <div className="bg-gray-900 rounded-xl p-8 text-center">
          <p className="text-gray-400">No proposals yet</p>
          <p className="text-sm text-gray-500 mt-2">
            Connect wallet and create the first proposal
          </p>
        </div>
      </section>

      {/* Contracts Info */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Deployed Contracts</h2>
        <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
          <div className="grid gap-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Governor:</span>
              <span>{contracts?.Governor}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">VotingLUX:</span>
              <span>{contracts?.VotingLUX}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">vLUX:</span>
              <span>{contracts?.vLUX}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">DLUX:</span>
              <span>{contracts?.DLUX}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Timelock:</span>
              <span>{contracts?.Timelock}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
