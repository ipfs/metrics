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
*  10/2020: 61
*  9/2020: 62
*  8/2020: 60
*  7/2020: 68
*  6/2020: 71
*  5/2020: 68
*  4/2020: 68
*  3/2020: 57
*  2/2020: 56
*  1/2020: 55
*  12/2019: 55
*  11/2019: 58

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
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 45| 2020-09-30 | 2020-10-05 |
| [faddat/ipfs-uploader](https://github.com/faddat/ipfs-uploader)| 2 | 0 | 16| 2020-09-27 | 2020-09-28 |
| [tzdybal/cidtrack](https://github.com/tzdybal/cidtrack)| 0 | 0 | 74| 2020-09-20 | 2020-10-05 |
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

Total Matches: 74950

Total Results (Limited by GitHUB API): 1351

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Klongrich/IPFS_Upload](https://github.com/Klongrich/IPFS_Upload)| 0 | 0 | 20090| 2020-10-08 | 2020-10-08 |
| [mikeal/dkv](https://github.com/mikeal/dkv)| 4 | 0 | 11| 2020-10-08 | 2020-10-10 |
| [RangerMauve/js-ipfs-fetch](https://github.com/RangerMauve/js-ipfs-fetch)| 2 | 0 | 98| 2020-10-06 | 2020-10-07 |
| [jayateertha043/Decentralized-Medical-Rec...](https://github.com/jayateertha043/Decentralized-Medical-Records)| 0 | 0 | 1316| 2020-10-04 | 2020-10-04 |
| [cawfree/thegraph-react](https://github.com/cawfree/thegraph-react)| 11 | 0 | 154| 2020-10-01 | 2020-10-04 |
| [faddat/ipfs-image-proxy-js](https://github.com/faddat/ipfs-image-proxy-js)| 0 | 0 | 50| 2020-09-29 | 2020-09-29 |
| [sreeroop/NITC-MUN](https://github.com/sreeroop/NITC-MUN)| 0 | 0 | 2984| 2020-09-28 | 2020-09-30 |
| [Geothomas1/Doc-Ethereum-with-IPFS](https://github.com/Geothomas1/Doc-Ethereum-with-IPFS)| 1 | 0 | 398| 2020-09-26 | 2020-09-26 |
| [energychain/casa-corrently-ipfs-bridge](https://github.com/energychain/casa-corrently-ipfs-bridge)| 0 | 0 | 82| 2020-09-26 | 2020-09-26 |
| [Shritesh99/Evidence-Management-System](https://github.com/Shritesh99/Evidence-Management-System)| 0 | 0 | 18| 2020-09-24 | 2020-10-09 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
