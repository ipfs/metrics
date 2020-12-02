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
*  11/2020: 51
*  10/2020: 58
*  9/2020: 68
*  8/2020: 61
*  7/2020: 72
*  6/2020: 63
*  5/2020: 66
*  4/2020: 71
*  3/2020: 52
*  2/2020: 61
*  1/2020: 61
*  12/2019: 57

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

Total Matches: 1860

Total Results (Limited by GitHUB API): 372

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [costinm/go-ws-ssh-transport](https://github.com/costinm/go-ws-ssh-transport)| 0 | 0 | 17| 2020-11-24 | 2020-11-29 |
| [pulkit2001/Sec-Air](https://github.com/pulkit2001/Sec-Air)| 0 | 0 | 3| 2020-11-20 | 2020-11-20 |
| [DeedleFake/ipfs-publish-feed](https://github.com/DeedleFake/ipfs-publish-feed)| 1 | 0 | 7| 2020-11-19 | 2020-11-19 |
| [wadeAlexC/ipbw](https://github.com/wadeAlexC/ipbw)| 3 | 0 | 34572| 2020-11-17 | 2020-11-26 |
| [talhaanisicte/go-compiler](https://github.com/talhaanisicte/go-compiler)| 0 | 0 | 5| 2020-11-13 | 2020-11-16 |
| [tchardin/ipfs-pubsub-test](https://github.com/tchardin/ipfs-pubsub-test)| 0 | 0 | 50| 2020-11-09 | 2020-11-09 |
| [MeowDada/ipfstor](https://github.com/MeowDada/ipfstor)| 0 | 0 | 241| 2020-11-05 | 2020-11-26 |
| [Geo25rey/ipmail](https://github.com/Geo25rey/ipmail)| 2 | 0 | 171| 2020-11-04 | 2020-11-24 |
| [myelnet/go-myel-network](https://github.com/myelnet/go-myel-network)| 0 | 0 | 142| 2020-11-02 | 2020-11-02 |
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 62| 2020-09-30 | 2020-11-26 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 76720

Total Results (Limited by GitHUB API): 1371

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [MBrassey/TurquoiseMelon](https://github.com/MBrassey/TurquoiseMelon)| 0 | 0 | 66328| 2020-11-28 | 2020-12-01 |
| [Cybergen300/PicNest](https://github.com/Cybergen300/PicNest)| 0 | 0 | 770| 2020-11-27 | 2020-11-27 |
| [seantking/ipfs-multi-sig](https://github.com/seantking/ipfs-multi-sig)| 2 | 0 | 230| 2020-11-26 | 2020-12-01 |
| [blocklet/ipfs-deployer](https://github.com/blocklet/ipfs-deployer)| 0 | 0 | 48| 2020-11-25 | 2020-11-29 |
| [chiragbadhe/gallery-on-blockchain](https://github.com/chiragbadhe/gallery-on-blockchain)| 0 | 0 | 26157| 2020-11-25 | 2020-11-25 |
| [ipfs-shipyard/js-mock-ipfs-pinning-servi...](https://github.com/ipfs-shipyard/js-mock-ipfs-pinning-service)| 0 | 0 | 131| 2020-11-24 | 2020-11-24 |
| [mzsima/ipfs-dag-test](https://github.com/mzsima/ipfs-dag-test)| 0 | 0 | 36| 2020-11-23 | 2020-11-23 |
| [achingbrain/ipfs-interface-tests](https://github.com/achingbrain/ipfs-interface-tests)| 0 | 0 | 5| 2020-11-23 | 2020-12-01 |
| [blockequity/decentrabox](https://github.com/blockequity/decentrabox)| 0 | 0 | 4089| 2020-11-22 | 2020-12-01 |
| [webroyit/nb2c2s-FileStorageInBlockchain](https://github.com/webroyit/nb2c2s-FileStorageInBlockchain)| 0 | 0 | 46| 2020-11-22 | 2020-11-26 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
