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
*  11/2019: 61
*  10/2019: 64
*  9/2019: 62
*  8/2019: 66
*  7/2019: 69
*  6/2019: 76
*  5/2019: 75
*  4/2019: 75
*  3/2019: 73
*  2/2019: 71
*  1/2019: 73
*  12/2018: 70

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

Total Matches: 1112

Total Results (Limited by GitHUB API): 278

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [MichaelMure/go-ipfs-pinner](https://github.com/MichaelMure/go-ipfs-pinner)| 1 | 0 | 453| 2019-11-20 | 2019-11-20 |
| [AndreiD/arweave-ipfs-bridge](https://github.com/AndreiD/arweave-ipfs-bridge)| 0 | 0 | 17898| 2019-11-15 | 2019-11-19 |
| [mad-day/ircfs](https://github.com/mad-day/ircfs)| 0 | 0 | 7| 2019-11-07 | 2019-11-11 |
| [wanglg007/go-textile](https://github.com/wanglg007/go-textile)| 0 | 0 | 986| 2019-11-06 | 2019-11-06 |
| [fernandoabolafio/gostampbot](https://github.com/fernandoabolafio/gostampbot)| 0 | 0 | 39| 2019-10-26 | 2019-11-06 |
| [jian-yu/ipfs-connector](https://github.com/jian-yu/ipfs-connector)| 0 | 0 | 34| 2019-10-25 | 2019-10-31 |
| [0zAND1z/ipld-crud](https://github.com/0zAND1z/ipld-crud)| 3 | 0 | 23| 2019-10-24 | 2019-11-21 |
| [textileio/grpc-ipfs-lite](https://github.com/textileio/grpc-ipfs-lite)| 6 | 0 | 5438| 2019-10-22 | 2019-11-16 |
| [glvd/cluster](https://github.com/glvd/cluster)| 0 | 0 | 713| 2019-10-21 | 2019-11-01 |
| [ipfs-search/ipfs-sniffer](https://github.com/ipfs-search/ipfs-sniffer)| 0 | 0 | 30| 2019-10-13 | 2019-10-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 64900

Total Results (Limited by GitHUB API): 1191

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jimpick/ipfs-p2p-proxy](https://github.com/jimpick/ipfs-p2p-proxy)| 0 | 0 | 28| 2019-11-19 | 2019-11-19 |
| [fission-suite/heroku-ipfs-ghost](https://github.com/fission-suite/heroku-ipfs-ghost)| 0 | 0 | 12| 2019-11-18 | 2019-11-18 |
| [merwane/eternity](https://github.com/merwane/eternity)| 1 | 0 | 232| 2019-11-18 | 2019-11-20 |
| [matprime/decentralized-memes](https://github.com/matprime/decentralized-memes)| 0 | 0 | 282| 2019-11-16 | 2019-11-22 |
| [JamesXChang/ipfs_app](https://github.com/JamesXChang/ipfs_app)| 0 | 0 | 34499| 2019-11-15 | 2019-11-16 |
| [RTradeLtd/directory-upload](https://github.com/RTradeLtd/directory-upload)| 0 | 0 | 86| 2019-11-15 | 2019-11-23 |
| [hoai97nam/VoD_framework](https://github.com/hoai97nam/VoD_framework)| 0 | 0 | 2475| 2019-11-14 | 2019-11-14 |
| [koushikbhargav/IPFS-and-Ethereum](https://github.com/koushikbhargav/IPFS-and-Ethereum)| 1 | 0 | 258| 2019-11-13 | 2019-11-13 |
| [joshpelkey/joshpelkey.eth](https://github.com/joshpelkey/joshpelkey.eth)| 0 | 0 | 2424| 2019-11-12 | 2019-11-12 |
| [openworklabs/react-native-ipfs-http-clie...](https://github.com/openworklabs/react-native-ipfs-http-client)| 2 | 0 | 388| 2019-11-12 | 2019-11-12 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
