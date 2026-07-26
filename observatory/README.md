# Zoo DAO — Thinking Chain Observatory

A live, on-chain visibility surface for the **Beluga L3** thinking-governance
stack (a Zoo Network L3). Reads the `ThinkingChainObservatory` contract directly
via viem and renders, in real time, what the thinking-validators are deciding:

- **Governance Thoughts** — open / settled / failed, each canonical decision
  (vote + confidence + quorum).
- **Parameter Decisions** — the values the validators' LLMs proposed and the
  median the chain settled.
- **Thinking validators** — each validator's own signed verdict + earned
  Proof-of-AI reputation.
- **AI Economics** — the chain's Bitcoin-shaped issuance (1B cap, halving every
  4y, burn tail): minted / burned / circulating / remaining subsidy.
- **Proof-of-Thought receipts** — the cognition ledger.

It refreshes every 3s. No wallet, no login — pure read-only visibility.

## Files

| File             | What                                                              |
| ---------------- | ---------------------------------------------------------------- |
| `index.html`     | Page shell (Zoo brand) + editable address bar + local-demo note. |
| `observatory.mjs`| All read logic (viem + the contract ABIs).                       |
| `viem.min.mjs`   | **Vendored** viem (3 symbols), bundled same-origin — no CDN.     |

### Why viem is vendored

The page previously imported viem from an unpinned `https://esm.sh/viem@2.21.0`
URL. That is a supply-chain hole: a poisoned or replaced CDN response would run
as code in every DAO member's browser, and the browser had no SRI hash or
version lock to enforce. viem is now bundled to a single same-origin file and
the page's `Content-Security-Policy` pins `script-src 'self'`, so only
same-origin code can execute.

```
viem.min.mjs  — bundled from viem@2.33.2 (esbuild, browser/es2022, minified)
                exports: createPublicClient, http, formatEther
                sha256: a2cf03af1e3af38e9fe7c6173400a306669e4623ce77a4e489c48861fb4416af
```

Rebuild (deterministic, from any tree with viem installed):

```sh
echo "export { createPublicClient, http, formatEther } from 'viem';" > /tmp/viem-entry.mjs
npx esbuild /tmp/viem-entry.mjs --bundle --format=esm --platform=browser \
  --target=es2022 --minify --legal-comments=none --outfile=viem.min.mjs
```

## Pointing it at a chain

Defaults to the local Beluga L3 dev chain (`http://127.0.0.1:8546`). Override via
the address bar in the page, or query params:

```
?rpc=<rpc-url>&observatory=0x…&reputation=0x…&parameters=0x…
```

`reputation` and `parameters` are optional (those panels stay collapsed if
omitted). The page shows a **local demo** banner whenever the RPC is a loopback
address.

### Local demo

```sh
# from the Beluga L3 thinking-stack contracts repo:
KEEP=1 ./scripts/thinking/beluga-l3-live.sh
# prints the observatory / reputation / parameters addresses — paste them in.
```

## Deploy (Cloudflare Pages)

Pure static. Following the Zoo CF-Pages convention (`zoo-docs`, `zen-docs`):

```sh
# requires a Cloudflare login/token (wrangler login, or CLOUDFLARE_API_TOKEN)
npx wrangler pages deploy . --project-name zoo-observatory --branch main
```

Then point a Zoo subdomain (e.g. `observatory.zoo.network`) at the Pages project
via Cloudflare DNS (proxied, full SSL).
