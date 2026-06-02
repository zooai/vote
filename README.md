# @zooai/vote — Zoo DAO governance interface

Zoo's branded fork of the lux/dao governance UI (lux.vote).

## Stack

- Same code surface as `~/work/lux/dao/app`, white-labeled for Zoo.
- Contracts consumed via `@zooai/safe` (which re-exports `@luxfi/standard`).
- Brand config in `config/zoo.json` (matches the upstream wrapper).
- Deployed at `vote.zoo.network`.

## Networks

| Network  | chainId | Status                  |
| -------- | ------- | ----------------------- |
| Zoo L2   | 200200  | mainnet                 |
| Zoo testnet | 200201 | testnet               |

## Layout

- `config/` — brand + network configuration (per-deploy)
- `src/` — frontend (React + viem + wagmi + RainbowKit)
- `functions/` — Cloudflare Pages functions (proxy + indexer)
- `public/` — static assets (Zoo logo, favicon)

## Wiring

```ts
import { resolveAddresses } from '@zooai/vote/config';
const cfg = resolveAddresses({ chainId: 200200 });
// cfg.safeFactory, cfg.moduleGovernor, cfg.systemDeployer, ...
```

## Branding rules (white-label)

Per global brand policy (see `~/work/hanzo/CLAUDE.md`):
- Hostname-based brand detection (`vote.zoo.network` → Zoo brand).
- Never show Lux logo/name on Zoo deployments.
- Never reference upstream contract repos in user-visible copy.
