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
*  10/2020: 64
*  9/2020: 66
*  8/2020: 64
*  7/2020: 67
*  6/2020: 66
*  5/2020: 65
*  4/2020: 58
*  3/2020: 59
*  2/2020: 57
*  1/2020: 61
*  12/2019: 53
*  11/2019: 59

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

Total Matches: 1800

Total Results (Limited by GitHUB API): 360

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 12| 2020-09-30 | 2020-10-03 |
| [faddat/ipfs-uploader](https://github.com/faddat/ipfs-uploader)| 2 | 0 | 16| 2020-09-27 | 2020-09-28 |
| [tzdybal/cidtrack](https://github.com/tzdybal/cidtrack)| 0 | 0 | 59| 2020-09-20 | 2020-09-28 |
| [libs4go/ipfslog-slf4go](https://github.com/libs4go/ipfslog-slf4go)| 0 | 0 | 7| 2020-08-29 | 2020-08-29 |
| [gatsby-tv/dapper-cli](https://github.com/gatsby-tv/dapper-cli)| 0 | 0 | 53| 2020-08-23 | 2020-08-30 |
| [zot/textcraft-treerequest](https://github.com/zot/textcraft-treerequest)| 0 | 0 | 214| 2020-08-04 | 2020-08-30 |
| [grufwub/gibon](https://github.com/grufwub/gibon)| 4 | 0 | 191| 2020-08-03 | 2020-08-07 |
| [decentralized-identity/go-ipfs-ds-azure](https://github.com/decentralized-identity/go-ipfs-ds-azure)| 0 | 0 | 72| 2020-07-31 | 2020-08-20 |
| [crossedbot/ipfs-swarm-key](https://github.com/crossedbot/ipfs-swarm-key)| 0 | 0 | 5| 2020-07-26 | 2020-09-07 |
| [gioapp/ipfs](https://github.com/gioapp/ipfs)| 0 | 0 | 4244| 2020-07-22 | 2020-08-21 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 74750

Total Results (Limited by GitHUB API): 1348

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [cawfree/thegraph-react](https://github.com/cawfree/thegraph-react)| 7 | 0 | 152| 2020-10-01 | 2020-10-01 |
| [faddat/ipfs-image-proxy-js](https://github.com/faddat/ipfs-image-proxy-js)| 0 | 0 | 50| 2020-09-29 | 2020-09-29 |
| [sreeroop/NITC-MUN](https://github.com/sreeroop/NITC-MUN)| 0 | 0 | 2984| 2020-09-28 | 2020-09-30 |
| [Geothomas1/Doc-Ethereum-with-IPFS](https://github.com/Geothomas1/Doc-Ethereum-with-IPFS)| 1 | 0 | 398| 2020-09-26 | 2020-09-26 |
| [energychain/casa-corrently-ipfs-bridge](https://github.com/energychain/casa-corrently-ipfs-bridge)| 0 | 0 | 82| 2020-09-26 | 2020-09-26 |
| [wuliangshun/EFS](https://github.com/wuliangshun/EFS)| 1 | 0 | 49777| 2020-09-21 | 2020-09-23 |
| [Qm64-tech/dlike](https://github.com/Qm64-tech/dlike)| 0 | 0 | 1044| 2020-09-16 | 2020-09-16 |
| [cerebro2005/ES6-AlmeidaMartinAriel](https://github.com/cerebro2005/ES6-AlmeidaMartinAriel)| 0 | 0 | 364| 2020-09-16 | 2020-09-16 |
| [manasi-mds/EHR_Blockchain_IPFS](https://github.com/manasi-mds/EHR_Blockchain_IPFS)| 0 | 0 | 35037| 2020-09-13 | 2020-09-13 |
| [SIProjects/sicash-ipfs](https://github.com/SIProjects/sicash-ipfs)| 0 | 0 | 233| 2020-09-13 | 2020-09-23 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
