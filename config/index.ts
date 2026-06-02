import zoo from './zoo.json';

export type NetworkConfig = {
  chainId: number;
  rpcUrl: string;
  explorer: string;
  safeSingleton: string | null;
  safeFactory: string | null;
  moduleGovernor: string | null;
  moduleFractal: string | null;
  systemDeployer: string | null;
  governor: string | null;
};

export type VoteConfig = {
  brand: string;
  domain: string;
  networks: Record<string, NetworkConfig>;
  voting: {
    votingPeriodBlocks: number;
    votingDelayBlocks: number;
    quorumPercent: number;
    executionDelaySeconds: number;
  };
  branding: {
    logo: string;
    primaryColor: string;
    favicon: string;
  };
};

export const config: VoteConfig = zoo as VoteConfig;

export function resolveAddresses({ chainId }: { chainId: number }): NetworkConfig {
  for (const network of Object.values(config.networks)) {
    if (network.chainId === chainId) return network;
  }
  throw new Error(`zoo-vote: no network config for chainId=${chainId}`);
}
