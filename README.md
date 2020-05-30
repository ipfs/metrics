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
*  5/2020: 69
*  4/2020: 69
*  3/2020: 61
*  2/2020: 55
*  1/2020: 56
*  12/2019: 60
*  11/2019: 57
*  10/2019: 63
*  9/2019: 61
*  8/2019: 66
*  7/2019: 63
*  6/2019: 74

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

Total Matches: 1660

Total Results (Limited by GitHUB API): 332

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [will-rowe/stark](https://github.com/will-rowe/stark)| 1 | 0 | 94| 2020-05-28 | 2020-05-28 |
| [vulcanize/ipfs-chain-watchers](https://github.com/vulcanize/ipfs-chain-watchers)| 0 | 0 | 60081| 2020-05-27 | 2020-05-28 |
| [yhsProject/go-ipfs-frame](https://github.com/yhsProject/go-ipfs-frame)| 0 | 0 | 12| 2020-05-18 | 2020-05-19 |
| [likecoin/likecoin-ipfs-cosmosds](https://github.com/likecoin/likecoin-ipfs-cosmosds)| 1 | 0 | 49| 2020-05-18 | 2020-05-18 |
| [Sab94/ipfs-monitor](https://github.com/Sab94/ipfs-monitor)| 0 | 0 | 27| 2020-05-16 | 2020-05-23 |
| [sne-ot-research/peerscanner](https://github.com/sne-ot-research/peerscanner)| 0 | 0 | 28| 2020-05-11 | 2020-05-15 |
| [ismcuacor/IPFS](https://github.com/ismcuacor/IPFS)| 0 | 0 | 1880| 2020-05-10 | 2020-05-18 |
| [uranusbeam/bit-ipfs](https://github.com/uranusbeam/bit-ipfs)| 0 | 0 | 1519| 2020-05-10 | 2020-05-10 |
| [alanshaw/ipfs-ds-postgres](https://github.com/alanshaw/ipfs-ds-postgres)| 1 | 0 | 29| 2020-05-04 | 2020-05-06 |
| [whyrusleeping/ipcr](https://github.com/whyrusleeping/ipcr)| 4 | 0 | 6| 2020-05-04 | 2020-05-04 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 71800

Total Results (Limited by GitHUB API): 1299

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [oladotunsobande/ipfs_app](https://github.com/oladotunsobande/ipfs_app)| 0 | 0 | 292| 2020-05-29 | 2020-05-29 |
| [x5engine/dapp-Private-Encrypted-Transact...](https://github.com/x5engine/dapp-Private-Encrypted-Transaction)| 1 | 0 | 225| 2020-05-27 | 2020-05-28 |
| [IshaanSrivastavaaa/ipfs-pusher](https://github.com/IshaanSrivastavaaa/ipfs-pusher)| 0 | 0 | 202| 2020-05-27 | 2020-05-27 |
| [sne-ot-research/ipfs-malicious](https://github.com/sne-ot-research/ipfs-malicious)| 0 | 0 | 4387| 2020-05-26 | 2020-05-28 |
| [Uniswap/convert-cidv0-cidv1](https://github.com/Uniswap/convert-cidv0-cidv1)| 0 | 0 | 1461| 2020-05-26 | 2020-05-26 |
| [Uniswap/replace-vercel-dns-records](https://github.com/Uniswap/replace-vercel-dns-records)| 0 | 0 | 38| 2020-05-26 | 2020-05-27 |
| [rokulis/vu-webrtc-ipfs](https://github.com/rokulis/vu-webrtc-ipfs)| 0 | 1 | 9| 2020-05-24 | 2020-05-25 |
| [tabcat/file-list-source](https://github.com/tabcat/file-list-source)| 0 | 0 | 3| 2020-05-24 | 2020-05-24 |
| [ElHassanBaghrar/BlockDeepFake](https://github.com/ElHassanBaghrar/BlockDeepFake)| 0 | 0 | 215| 2020-05-24 | 2020-05-24 |
| [ilovelili/ethereum-ipfs-demo](https://github.com/ilovelili/ethereum-ipfs-demo)| 0 | 0 | 279| 2020-05-24 | 2020-05-24 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
