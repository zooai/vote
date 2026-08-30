# zoo.vote

The Zoo DAO governance interface.

The app itself is **[luxfi/vote](https://github.com/luxfi/vote)** — one interface,
built once per DAO with a different home, rather than a fork per org that drifts
apart. This repository is the Zoo build: `.github/workflows/image.yml` checks out
that source, builds it with `VITE_VOTE_HOME=zoo`, and publishes
`ghcr.io/zooai/vote`.

Zoo's images live in Zoo's registry and never in another org's, so one org losing
access cannot strand another's deploy.

**A change to the interface belongs in luxfi/vote.** Nothing here is source. The
one thing this repository decides is that the build is Zoo's — its home chain,
its registry, its tag.

Rebuilds run on a push here, on request, and daily, because the source is
elsewhere and a commit here is not the only reason the image should move.
