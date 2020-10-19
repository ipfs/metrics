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
*  10/2020: 62
*  9/2020: 70
*  8/2020: 62
*  7/2020: 68
*  6/2020: 70
*  5/2020: 64
*  4/2020: 64
*  3/2020: 49
*  2/2020: 55
*  1/2020: 55
*  12/2019: 45
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
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 49| 2020-09-30 | 2020-10-16 |
| [faddat/ipfs-uploader](https://github.com/faddat/ipfs-uploader)| 2 | 0 | 16| 2020-09-27 | 2020-09-28 |
| [tzdybal/cidtrack](https://github.com/tzdybal/cidtrack)| 0 | 0 | 129| 2020-09-20 | 2020-10-16 |
| [libs4go/ipfslog-slf4go](https://github.com/libs4go/ipfslog-slf4go)| 0 | 0 | 7| 2020-08-29 | 2020-08-29 |
| [gatsby-tv/dapper-cli](https://github.com/gatsby-tv/dapper-cli)| 0 | 0 | 53| 2020-08-23 | 2020-08-30 |
| [msgpo/ipfs-sniffer](https://github.com/msgpo/ipfs-sniffer)| 0 | 0 | 30| 2020-08-08 | 2019-10-14 |
| [zot/textcraft-treerequest](https://github.com/zot/textcraft-treerequest)| 0 | 0 | 214| 2020-08-04 | 2020-08-30 |
| [grufwub/gibon](https://github.com/grufwub/gibon)| 4 | 0 | 191| 2020-08-03 | 2020-08-07 |
| [decentralized-identity/go-ipfs-ds-azure](https://github.com/decentralized-identity/go-ipfs-ds-azure)| 0 | 0 | 72| 2020-07-31 | 2020-08-20 |
| [crossedbot/ipfs-swarm-key](https://github.com/crossedbot/ipfs-swarm-key)| 0 | 0 | 5| 2020-07-26 | 2020-09-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 75136

Total Results (Limited by GitHUB API): 1349

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [balbatross/ipfs-pinboard](https://github.com/balbatross/ipfs-pinboard)| 0 | 0 | 0| 2020-10-19 | 2020-10-19 |
| [Opyet/ETHLagos](https://github.com/Opyet/ETHLagos)| 0 | 0 | 553| 2020-10-16 | 2020-10-16 |
| [TheTechCompany/react-ipfs-dropzone](https://github.com/TheTechCompany/react-ipfs-dropzone)| 0 | 0 | 43| 2020-10-13 | 2020-10-18 |
| [golem-protocol/ipfs-proxy](https://github.com/golem-protocol/ipfs-proxy)| 0 | 0 | 3| 2020-10-12 | 2020-10-12 |
| [929220967/EFS](https://github.com/929220967/EFS)| 0 | 0 | 49777| 2020-10-11 | 2020-09-23 |
| [damiadeh/ipfs-dapp](https://github.com/damiadeh/ipfs-dapp)| 0 | 0 | 776| 2020-10-08 | 2020-10-16 |
| [TheTechCompany/phwoop-model-manager](https://github.com/TheTechCompany/phwoop-model-manager)| 0 | 0 | 298| 2020-10-08 | 2020-10-13 |
| [Klongrich/IPFS_Upload](https://github.com/Klongrich/IPFS_Upload)| 0 | 0 | 20090| 2020-10-08 | 2020-10-08 |
| [mikeal/dkv](https://github.com/mikeal/dkv)| 23 | 0 | 11| 2020-10-08 | 2020-10-10 |
| [RangerMauve/js-ipfs-fetch](https://github.com/RangerMauve/js-ipfs-fetch)| 2 | 0 | 102| 2020-10-06 | 2020-10-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
