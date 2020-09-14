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
*  9/2020: 70
*  8/2020: 65
*  7/2020: 64
*  6/2020: 72
*  5/2020: 62
*  4/2020: 64
*  3/2020: 59
*  2/2020: 54
*  1/2020: 59
*  12/2019: 55
*  11/2019: 58
*  10/2019: 59

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

Total Matches: 1790

Total Results (Limited by GitHUB API): 358

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [libs4go/ipfslog-slf4go](https://github.com/libs4go/ipfslog-slf4go)| 0 | 0 | 7| 2020-08-29 | 2020-08-29 |
| [gatsby-tv/dapper-cli](https://github.com/gatsby-tv/dapper-cli)| 0 | 0 | 53| 2020-08-23 | 2020-08-30 |
| [zot/textcraft-treerequest](https://github.com/zot/textcraft-treerequest)| 0 | 0 | 214| 2020-08-04 | 2020-08-30 |
| [grufwub/gibon](https://github.com/grufwub/gibon)| 3 | 0 | 191| 2020-08-03 | 2020-08-07 |
| [decentralized-identity/go-ipfs-ds-azure](https://github.com/decentralized-identity/go-ipfs-ds-azure)| 0 | 0 | 72| 2020-07-31 | 2020-08-20 |
| [crossedbot/ipfs-swarm-key](https://github.com/crossedbot/ipfs-swarm-key)| 0 | 0 | 5| 2020-07-26 | 2020-09-07 |
| [gioapp/ipfs](https://github.com/gioapp/ipfs)| 0 | 0 | 4244| 2020-07-22 | 2020-08-21 |
| [wabarc/ipfs-pinner](https://github.com/wabarc/ipfs-pinner)| 0 | 0 | 21| 2020-07-18 | 2020-08-21 |
| [aschmahmann/ipfs-ds](https://github.com/aschmahmann/ipfs-ds)| 2 | 1 | 57| 2020-07-16 | 2020-07-16 |
| [Wondertan/go-ipfs-recovery](https://github.com/Wondertan/go-ipfs-recovery)| 13 | 3 | 81| 2020-07-11 | 2020-09-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 74250

Total Results (Limited by GitHUB API): 1339

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [manasi-mds/EHR_Blockchain_IPFS](https://github.com/manasi-mds/EHR_Blockchain_IPFS)| 0 | 0 | 35037| 2020-09-13 | 2020-09-13 |
| [SIProjects/sicash-ipfs](https://github.com/SIProjects/sicash-ipfs)| 0 | 0 | 232| 2020-09-13 | 2020-09-13 |
| [Gozala/eslint-config-ipfs](https://github.com/Gozala/eslint-config-ipfs)| 0 | 0 | 24| 2020-09-09 | 2020-09-09 |
| [energychain/casa-corrently-ipfs-edge](https://github.com/energychain/casa-corrently-ipfs-edge)| 0 | 0 | 228| 2020-09-09 | 2020-09-13 |
| [christroutner/merit-chat](https://github.com/christroutner/merit-chat)| 0 | 0 | 215| 2020-09-08 | 2020-09-08 |
| [QuestNetwork/quest-os-js](https://github.com/QuestNetwork/quest-os-js)| 0 | 0 | 110| 2020-09-08 | 2020-09-13 |
| [Francis-Tao-jinjin/ipfs-hash](https://github.com/Francis-Tao-jinjin/ipfs-hash)| 0 | 0 | 232| 2020-09-08 | 2020-09-08 |
| [RaiyanYahyaDev/ethereum-ipfs](https://github.com/RaiyanYahyaDev/ethereum-ipfs)| 0 | 0 | 176| 2020-09-07 | 2020-09-07 |
| [qwakuacquah/securing-fingerprint-templat...](https://github.com/qwakuacquah/securing-fingerprint-template-using-blockchain-)| 0 | 0 | 14| 2020-09-07 | 2020-09-07 |
| [gurix/cotrack](https://github.com/gurix/cotrack)| 0 | 0 | 341| 2020-09-05 | 2020-09-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
