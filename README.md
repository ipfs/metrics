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
*  7/2021: 81
*  6/2021: 92
*  5/2021: 98
*  4/2021: 95
*  3/2021: 94
*  2/2021: 72
*  1/2021: 91
*  12/2020: 65
*  11/2020: 54
*  10/2020: 66
*  9/2020: 71
*  8/2020: 68

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

Total Matches: 2454

Total Results (Limited by GitHUB API): 409

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [gador/ipfs-tag](https://github.com/gador/ipfs-tag)| 0 | 0 | 21| 2021-06-28 | 2021-06-29 |
| [m-vlanbdg2ln52gla/EasyVoting](https://github.com/m-vlanbdg2ln52gla/EasyVoting)| 0 | 0 | 1494| 2021-06-25 | 2021-07-10 |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 36| 2021-06-18 | 2021-06-23 |
| [scala-network/scala-blockchain-downloade...](https://github.com/scala-network/scala-blockchain-downloader)| 0 | 0 | 21379| 2021-06-12 | 2021-07-01 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 3 | 0 | 192| 2021-06-11 | 2021-07-06 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 0 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 33539| 2021-05-13 | 2021-05-24 |
| [beyondstorage/go-service-ipfs](https://github.com/beyondstorage/go-service-ipfs)| 0 | 1 | 20| 2021-04-30 | 2021-07-11 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 89550

Total Results (Limited by GitHUB API): 1542

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [zhangguangyan/jsipfs-pnet](https://github.com/zhangguangyan/jsipfs-pnet)| 0 | 0 | 1| 2021-07-10 | 2021-07-11 |
| [staticinstance/IPFSImageETHVoter](https://github.com/staticinstance/IPFSImageETHVoter)| 0 | 0 | 396| 2021-07-10 | 2021-07-11 |
| [ahsan-arif/Crypto-Art](https://github.com/ahsan-arif/Crypto-Art)| 0 | 0 | 88642| 2021-07-10 | 2021-07-10 |
| [pradyumnabilagi/BlockChain-Node](https://github.com/pradyumnabilagi/BlockChain-Node)| 0 | 0 | 5283| 2021-07-10 | 2021-07-10 |
| [Airtune/banano-ipfs](https://github.com/Airtune/banano-ipfs)| 0 | 0 | 72| 2021-07-10 | 2021-07-10 |
| [mileszim/ember-cli-deploy-ipfs](https://github.com/mileszim/ember-cli-deploy-ipfs)| 0 | 0 | 404| 2021-07-09 | 2021-07-09 |
| [4everland/4ever-cluster-cli](https://github.com/4everland/4ever-cluster-cli)| 0 | 0 | 64| 2021-07-09 | 2021-07-09 |
| [perspect3vism/lang-note-ipfs](https://github.com/perspect3vism/lang-note-ipfs)| 0 | 0 | 68| 2021-07-08 | 2021-07-08 |
| [kvutien/orbitdb-tuto-sh](https://github.com/kvutien/orbitdb-tuto-sh)| 0 | 0 | 104| 2021-07-07 | 2021-07-09 |
| [mileszim/ember-cli-ipfs](https://github.com/mileszim/ember-cli-ipfs)| 0 | 0 | 252| 2021-07-07 | 2021-07-09 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
