# metrics repo

Regularly collect and log metrics about IPFS related projects.

This repo contains a scheduled GitHub Action which pulls IPFS dependency data out of BigQuery and stores it 
in [timestamped json](./logs) files in this repo.

## Recent Data

### Google Trends

We're collecting the "interest over time" metric from Google Trends. From Google *"Numbers 
represent search interest relative to the highest point on the chart for the given region and 
time. A value of 100 is the peak popularity for the term. A value of 50 means that the term is 
half as popular. Likewise a score of 0 means the term was less than 1% as popular as the peak."*

This is the google trend data for searches of the term "IPFS" for the
last 12 months. The last 10 years is [available here.](./results/google-trends.md)



Google Trends:
*  9/2021: 94
*  8/2021: 74
*  7/2021: 68
*  6/2021: 87
*  5/2021: 75
*  4/2021: 96
*  3/2021: 88
*  2/2021: 73
*  1/2021: 88
*  12/2020: 49
*  11/2020: 46
*  10/2020: 55

### GitHub Search

These do a repository search, filtered by language, for "ipfs." This search
finds references to ipfs in project names, descriptions, and anything else
GitHub finds relevant (this isn't actually documented very well by GitHub).

GitHub limits the maximum results to 1K. We can get around this a little bit
by performing additional queries w/ different sorts in ascending and descending
order, but there's some amount we'll never get. That's why it's nice to have
the historical data logged in the repo every day.

The "total matches" we get is larger than the result set, even when the result
set is below the 1K limit imposed by GitHub. This isn't documented sufficiently
so we don't know why this is the case.

#### Go Repositories

Total Matches: 2574

Total Results (Limited by GitHUB API): 425

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [filecoincrypto/ipfsmgr](https://github.com/filecoincrypto/ipfsmgr)| 1 | 0 | 302| 2021-09-14 | 2021-09-17 |
| [kishansagathiya/chainsafe-assignment](https://github.com/kishansagathiya/chainsafe-assignment)| 1 | 0 | 155| 2021-09-11 | 2021-09-12 |
| [berty/go-ipfs-repo-afero](https://github.com/berty/go-ipfs-repo-afero)| 0 | 0 | 200| 2021-09-09 | 2021-09-16 |
| [treethought/tipfs](https://github.com/treethought/tipfs)| 0 | 0 | 186| 2021-09-08 | 2021-09-18 |
| [jbouwman/go-ipfs-lib-minimal](https://github.com/jbouwman/go-ipfs-lib-minimal)| 0 | 0 | 67| 2021-08-30 | 2021-08-30 |
| [notional-labs/get](https://github.com/notional-labs/get)| 0 | 0 | 15375| 2021-08-27 | 2021-08-27 |
| [iskanderandrews/ipfs-version-0.7.0](https://github.com/iskanderandrews/ipfs-version-0.7.0)| 0 | 0 | 46854| 2021-08-24 | 2021-08-24 |
| [valist-io/go-ipfs-git](https://github.com/valist-io/go-ipfs-git)| 1 | 0 | 84| 2021-08-21 | 2021-08-21 |
| [aquaflamingo/ipfs-repl](https://github.com/aquaflamingo/ipfs-repl)| 0 | 0 | 13| 2021-08-19 | 2021-08-20 |
| [iotaledger/go-ds-kvstore](https://github.com/iotaledger/go-ds-kvstore)| 1 | 0 | 26| 2021-08-18 | 2021-08-19 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 94050

Total Results (Limited by GitHUB API): 1586

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [NicolasJEngler/pinata-ipfs-test](https://github.com/NicolasJEngler/pinata-ipfs-test)| 0 | 0 | 214| 2021-09-18 | 2021-09-18 |
| [NguyenIvan/lazy-ipfs-image](https://github.com/NguyenIvan/lazy-ipfs-image)| 0 | 0 | 325| 2021-09-16 | 2021-09-17 |
| [shameer5/DMS](https://github.com/shameer5/DMS)| 0 | 0 | 733| 2021-09-15 | 2021-09-15 |
| [AlbertoLasa/nft-opensea-ipfs](https://github.com/AlbertoLasa/nft-opensea-ipfs)| 0 | 0 | 1611| 2021-09-14 | 2021-09-14 |
| [mingderwang/ipfs-backup-jira-issue](https://github.com/mingderwang/ipfs-backup-jira-issue)| 0 | 1 | 545| 2021-09-13 | 2021-09-13 |
| [331leo/ipfs_ipa_registry](https://github.com/331leo/ipfs_ipa_registry)| 2 | 0 | 397| 2021-09-12 | 2021-09-13 |
| [SoftCreatR/ipfs-file-uploader](https://github.com/SoftCreatR/ipfs-file-uploader)| 2 | 0 | 174| 2021-09-10 | 2021-09-17 |
| [rfzsal/nodejs-blockchain](https://github.com/rfzsal/nodejs-blockchain)| 0 | 0 | 97| 2021-09-09 | 2021-09-09 |
| [sreekar9601/Polygon-Video-Streaming-App](https://github.com/sreekar9601/Polygon-Video-Streaming-App)| 0 | 0 | 828| 2021-09-08 | 2021-09-14 |
| [MehdizadeMilad/ipfsNode](https://github.com/MehdizadeMilad/ipfsNode)| 0 | 0 | 65| 2021-09-08 | 2021-09-08 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
