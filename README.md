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
*  10/2019: 68
*  9/2019: 62
*  8/2019: 67
*  7/2019: 67
*  6/2019: 73
*  5/2019: 75
*  4/2019: 73
*  3/2019: 74
*  2/2019: 68
*  1/2019: 80
*  12/2018: 72
*  11/2018: 78

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

Total Matches: 1080

Total Results (Limited by GitHUB API): 269

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jian-yu/ipfs-connector](https://github.com/jian-yu/ipfs-connector)| 0 | 0 | 34| 2019-10-25 | 2019-10-31 |
| [0zAND1z/ipld-crud](https://github.com/0zAND1z/ipld-crud)| 3 | 0 | 18| 2019-10-24 | 2019-10-29 |
| [glvd/cluster](https://github.com/glvd/cluster)| 0 | 0 | 713| 2019-10-21 | 2019-11-01 |
| [ipfs-search/ipfs-sniffer](https://github.com/ipfs-search/ipfs-sniffer)| 0 | 0 | 30| 2019-10-13 | 2019-10-14 |
| [pontiyaraja/ipfs-pubsub](https://github.com/pontiyaraja/ipfs-pubsub)| 0 | 0 | 17| 2019-10-11 | 2019-10-11 |
| [agencyenterprise/pem-utils](https://github.com/agencyenterprise/pem-utils)| 0 | 0 | 36| 2019-10-08 | 2019-10-08 |
| [quorumcontrol/go-ds-dynamodb](https://github.com/quorumcontrol/go-ds-dynamodb)| 0 | 0 | 6| 2019-09-27 | 2019-09-27 |
| [D-CDC/cdc-backend](https://github.com/D-CDC/cdc-backend)| 0 | 0 | 110| 2019-09-14 | 2019-09-15 |
| [wanglg007/IPFSClusterDemo](https://github.com/wanglg007/IPFSClusterDemo)| 0 | 0 | 1335| 2019-09-10 | 2019-09-10 |
| [treeder/ipfsutils](https://github.com/treeder/ipfsutils)| 0 | 0 | 22| 2019-08-17 | 2019-08-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 64400

Total Results (Limited by GitHUB API): 1183

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Emmanuel-umeh/IPFS-Aeternity](https://github.com/Emmanuel-umeh/IPFS-Aeternity)| 0 | 0 | 51| 2019-10-31 | 2019-10-31 |
| [mkg20001/stardust4ipfs](https://github.com/mkg20001/stardust4ipfs)| 1 | 0 | 10| 2019-10-31 | 2019-11-01 |
| [punica-box/wasm-interplanetary-album-box](https://github.com/punica-box/wasm-interplanetary-album-box)| 0 | 0 | 452| 2019-10-29 | 2019-11-01 |
| [JamesXChang/IPFS_blockchain](https://github.com/JamesXChang/IPFS_blockchain)| 0 | 0 | 177| 2019-10-27 | 2019-10-28 |
| [donets/SpotUp](https://github.com/donets/SpotUp)| 0 | 0 | 100| 2019-10-27 | 2019-10-27 |
| [YannBouyeron/Ethereum-DAO](https://github.com/YannBouyeron/Ethereum-DAO)| 0 | 0 | 9078| 2019-10-22 | 2019-10-30 |
| [hoai97nam/ipfs-upload](https://github.com/hoai97nam/ipfs-upload)| 0 | 0 | 759| 2019-10-22 | 2019-10-22 |
| [berlincode/ens-redirect](https://github.com/berlincode/ens-redirect)| 0 | 0 | 254| 2019-10-20 | 2019-10-20 |
| [bneijt/ipfs-video-frontend](https://github.com/bneijt/ipfs-video-frontend)| 0 | 0 | 188| 2019-10-19 | 2019-10-26 |
| [azania-neptune-labs/DistributionFormIPFS](https://github.com/azania-neptune-labs/DistributionFormIPFS)| 0 | 0 | 26| 2019-10-19 | 2019-10-20 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
