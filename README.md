# zooai/vote — the Zoo build of the governance interface

This repository builds `ghcr.io/zooai/vote`. It holds no application code.

The governance interface is [`luxfi/vote`](https://github.com/luxfi/vote). It
already knows Zoo: the chain, its explorer and every address recorded against it
are a venue in that app's own roster, read from the chain when a screen opens. A
second copy of the app here would be a second place for the same facts to drift
out of agreement with the first.

So this repository is the Zoo **image**, not a Zoo **app**. Its workflow checks
out that source and builds it with `VITE_VOTE_HOME=zoo`, which is the only thing
that differs from the Lux image. An unknown key fails the build rather than
shipping a site that opens on the wrong chain and reports real figures about
somebody else's governance.

The image lives in Zoo's registry rather than Lux's, so an org losing access to
one registry cannot strand the other's deploy.

## Deploying

The workflow publishes an immutable `zoo-<sha>` tag and never a floating one. A
cluster pins a version; `latest` on a registry makes "what is deployed"
unanswerable. Pin the tag in `zooai/universe` — nothing deploys until that file
names it.

## The observatory

`observatory/` is a separate surface and stays: a static page that reads the
`ThinkingChainObservatory` contract on the Beluga L3 directly and renders what
the thinking-validators are deciding. It vendors its own viem and needs no build.

## What is deployed on Zoo today

Nothing. Zoo mainnet (200200) was re-genesised and is at a low block height; the
four addresses recorded for the bounty, karma, governor and Safe modules all
answer zero bytes. The interface reads this and says so on its deployment screen
rather than drawing an empty governance as an idle one. Governance has to be
deployed to that chain before this site has anything to show.
