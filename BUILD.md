# Building zoo.vote

The interface is [luxfi/vote](https://github.com/luxfi/vote). This repository
decides that a build of it is Zoo's — its home chain, its registry, its tag.

    docker build --build-arg VITE_VOTE_HOME=zoo -t ghcr.io/zooai/vote:zoo-<sha> .

against a checkout of luxfi/vote, whose `Dockerfile` takes that argument.

Two rules the deploy depends on:

- **Tag `zoo-<short sha>` of the luxfi/vote commit built**, never a floating
  tag. A declaration pins a version, and the sha names the source rather than
  this repository.
- **Zoo images go to `ghcr.io/zooai/*`.** One org's images never live in
  another's, so an org losing access cannot strand somebody else's deploy.

Nothing deploys until a manifest names the tag.

CI is Hanzo Git Actions on `git.hanzo.ai`, run by `act_runner`. The workflow is
`.hanzo/workflows/image.yml`.
