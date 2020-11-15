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
*  11/2020: 52
*  10/2020: 54
*  9/2020: 66
*  8/2020: 59
*  7/2020: 66
*  6/2020: 67
*  5/2020: 63
*  4/2020: 62
*  3/2020: 53
*  2/2020: 52
*  1/2020: 56
*  12/2019: 54

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

Total Matches: 1835

Total Results (Limited by GitHUB API): 367

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [talhaanisicte/go-compiler](https://github.com/talhaanisicte/go-compiler)| 0 | 0 | 3| 2020-11-13 | 2020-11-13 |
| [tchardin/ipfs-pubsub-test](https://github.com/tchardin/ipfs-pubsub-test)| 0 | 0 | 50| 2020-11-09 | 2020-11-09 |
| [MeowDada/ipfstor](https://github.com/MeowDada/ipfstor)| 0 | 0 | 155| 2020-11-05 | 2020-11-13 |
| [Geo25rey/ipmail](https://github.com/Geo25rey/ipmail)| 1 | 0 | 110| 2020-11-04 | 2020-11-09 |
| [myelnet/go-myel-network](https://github.com/myelnet/go-myel-network)| 0 | 0 | 142| 2020-11-02 | 2020-11-02 |
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 55| 2020-09-30 | 2020-10-26 |
| [faddat/ipfs-uploader](https://github.com/faddat/ipfs-uploader)| 2 | 0 | 16| 2020-09-27 | 2020-09-28 |
| [tzdybal/cidtrack](https://github.com/tzdybal/cidtrack)| 3 | 0 | 129| 2020-09-20 | 2020-10-16 |
| [libs4go/ipfslog-slf4go](https://github.com/libs4go/ipfslog-slf4go)| 0 | 0 | 7| 2020-08-29 | 2020-08-29 |
| [gatsby-tv/dapper-cli](https://github.com/gatsby-tv/dapper-cli)| 0 | 0 | 53| 2020-08-23 | 2020-08-30 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 76150

Total Results (Limited by GitHUB API): 1364

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [antoniodjakov/dstorage](https://github.com/antoniodjakov/dstorage)| 0 | 0 | 1243| 2020-11-14 | 2020-11-14 |
| [pmacom/ipfsPlayground](https://github.com/pmacom/ipfsPlayground)| 0 | 0 | 81| 2020-11-14 | 2020-11-14 |
| [DivitaP/Upload](https://github.com/DivitaP/Upload)| 0 | 0 | 338| 2020-11-13 | 2020-11-13 |
| [IPConvergence/ipfs-eth-anchoring](https://github.com/IPConvergence/ipfs-eth-anchoring)| 0 | 0 | 5726| 2020-11-13 | 2020-11-13 |
| [jomoljaison/IPFSCertichain](https://github.com/jomoljaison/IPFSCertichain)| 0 | 0 | 73| 2020-11-10 | 2020-11-10 |
| [hongdangdoan/WebDecentralized](https://github.com/hongdangdoan/WebDecentralized)| 0 | 0 | 65| 2020-11-05 | 2020-11-13 |
| [ivan386/js-loading-page-generator](https://github.com/ivan386/js-loading-page-generator)| 0 | 0 | 4| 2020-10-28 | 2020-10-28 |
| [AbdulRafaySiddiqui/de-certify](https://github.com/AbdulRafaySiddiqui/de-certify)| 0 | 0 | 577| 2020-10-28 | 2020-10-28 |
| [pmtoan/ipfs-proxy](https://github.com/pmtoan/ipfs-proxy)| 0 | 0 | 4| 2020-10-27 | 2020-10-27 |
| [TheTechCompany/react-ipfs-provider](https://github.com/TheTechCompany/react-ipfs-provider)| 1 | 0 | 216| 2020-10-25 | 2020-10-25 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
