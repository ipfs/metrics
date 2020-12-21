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
*  12/2020: 63
*  11/2020: 36
*  10/2020: 55
*  9/2020: 57
*  8/2020: 58
*  7/2020: 64
*  6/2020: 55
*  5/2020: 56
*  4/2020: 65
*  3/2020: 57
*  2/2020: 57
*  1/2020: 50

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

Total Matches: 1880

Total Results (Limited by GitHUB API): 376

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [taflaj/merge](https://github.com/taflaj/merge)| 0 | 0 | 20| 2020-12-06 | 2020-12-11 |
| [costinm/go-libp2p-ssh-transport](https://github.com/costinm/go-libp2p-ssh-transport)| 0 | 0 | 25| 2020-11-24 | 2020-12-07 |
| [pulkit2001/Sec-Air](https://github.com/pulkit2001/Sec-Air)| 0 | 0 | 3| 2020-11-20 | 2020-11-20 |
| [DeedleFake/ipfs-publish-feed](https://github.com/DeedleFake/ipfs-publish-feed)| 1 | 0 | 7| 2020-11-19 | 2020-11-19 |
| [wadeAlexC/ipbw](https://github.com/wadeAlexC/ipbw)| 3 | 0 | 34704| 2020-11-17 | 2020-12-14 |
| [talhaanisicte/go-compiler](https://github.com/talhaanisicte/go-compiler)| 0 | 0 | 5| 2020-11-13 | 2020-11-16 |
| [tchardin/ipfs-pubsub-test](https://github.com/tchardin/ipfs-pubsub-test)| 0 | 0 | 50| 2020-11-09 | 2020-11-09 |
| [MeowDada/ipfstor](https://github.com/MeowDada/ipfstor)| 0 | 0 | 241| 2020-11-05 | 2020-11-26 |
| [Geo25rey/ipmail](https://github.com/Geo25rey/ipmail)| 2 | 0 | 171| 2020-11-04 | 2020-11-24 |
| [myelnet/go-myel-network](https://github.com/myelnet/go-myel-network)| 0 | 0 | 142| 2020-11-02 | 2020-11-02 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 77600

Total Results (Limited by GitHUB API): 1382

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [bartekn80/testbn](https://github.com/bartekn80/testbn)| 0 | 0 | 2397| 2020-12-19 | 2020-12-19 |
| [WorkerHive/workhub-file-store](https://github.com/WorkerHive/workhub-file-store)| 0 | 0 | 76| 2020-12-19 | 2020-12-19 |
| [5310/ipfs-core-dist](https://github.com/5310/ipfs-core-dist)| 0 | 0 | 3| 2020-12-18 | 2020-12-18 |
| [ReForum-ipfs/ReForum-ipfs](https://github.com/ReForum-ipfs/ReForum-ipfs)| 0 | 0 | 596| 2020-12-16 | 2020-12-17 |
| [fred-wang/demo-extension-register-ipfs-h...](https://github.com/fred-wang/demo-extension-register-ipfs-handler)| 0 | 0 | 4| 2020-12-11 | 2020-12-12 |
| [vhpvmx/IPFSApp](https://github.com/vhpvmx/IPFSApp)| 0 | 0 | 18| 2020-12-10 | 2020-12-10 |
| [healzer/ipfs-file-encryption](https://github.com/healzer/ipfs-file-encryption)| 1 | 1 | 69| 2020-12-09 | 2020-12-10 |
| [wafflemakr/ipfs-upload](https://github.com/wafflemakr/ipfs-upload)| 0 | 1 | 162| 2020-12-07 | 2020-12-07 |
| [CGsama/gcipfs](https://github.com/CGsama/gcipfs)| 0 | 0 | 4| 2020-12-07 | 2020-12-07 |
| [clover-network/clover-store-upload](https://github.com/clover-network/clover-store-upload)| 0 | 0 | 91| 2020-12-07 | 2020-12-15 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
