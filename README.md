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
*  11/2020: 58
*  10/2020: 57
*  9/2020: 68
*  8/2020: 66
*  7/2020: 73
*  6/2020: 66
*  5/2020: 64
*  4/2020: 66
*  3/2020: 62
*  2/2020: 58
*  1/2020: 58
*  12/2019: 53

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

Total Matches: 1855

Total Results (Limited by GitHUB API): 371

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [costinm/go-ws-ssh-transport](https://github.com/costinm/go-ws-ssh-transport)| 0 | 0 | 11| 2020-11-24 | 2020-11-25 |
| [pulkit2001/Sec-Air](https://github.com/pulkit2001/Sec-Air)| 0 | 0 | 3| 2020-11-20 | 2020-11-20 |
| [DeedleFake/ipfs-publish-feed](https://github.com/DeedleFake/ipfs-publish-feed)| 1 | 0 | 7| 2020-11-19 | 2020-11-19 |
| [wadeAlexC/ipbw](https://github.com/wadeAlexC/ipbw)| 3 | 0 | 34572| 2020-11-17 | 2020-11-26 |
| [talhaanisicte/go-compiler](https://github.com/talhaanisicte/go-compiler)| 0 | 0 | 5| 2020-11-13 | 2020-11-16 |
| [tchardin/ipfs-pubsub-test](https://github.com/tchardin/ipfs-pubsub-test)| 0 | 0 | 50| 2020-11-09 | 2020-11-09 |
| [MeowDada/ipfstor](https://github.com/MeowDada/ipfstor)| 0 | 0 | 241| 2020-11-05 | 2020-11-26 |
| [Geo25rey/ipmail](https://github.com/Geo25rey/ipmail)| 1 | 0 | 171| 2020-11-04 | 2020-11-24 |
| [myelnet/go-myel-network](https://github.com/myelnet/go-myel-network)| 0 | 0 | 142| 2020-11-02 | 2020-11-02 |
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 62| 2020-09-30 | 2020-11-26 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 76500

Total Results (Limited by GitHUB API): 1368

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Cybergen300/PicNest](https://github.com/Cybergen300/PicNest)| 0 | 0 | 770| 2020-11-27 | 2020-11-27 |
| [blocklet/ipfs-deployer](https://github.com/blocklet/ipfs-deployer)| 0 | 0 | 45| 2020-11-25 | 2020-11-27 |
| [chiragbadhe/gallery-on-blockchain](https://github.com/chiragbadhe/gallery-on-blockchain)| 0 | 0 | 26157| 2020-11-25 | 2020-11-25 |
| [ipfs-shipyard/js-mock-ipfs-pinning-servi...](https://github.com/ipfs-shipyard/js-mock-ipfs-pinning-service)| 0 | 0 | 131| 2020-11-24 | 2020-11-24 |
| [mzsima/ipfs-dag-test](https://github.com/mzsima/ipfs-dag-test)| 0 | 0 | 36| 2020-11-23 | 2020-11-23 |
| [achingbrain/ipfs-interface-tests](https://github.com/achingbrain/ipfs-interface-tests)| 0 | 0 | 5| 2020-11-23 | 2020-11-23 |
| [webroyit/nb2c2s-FileStorageInBlockchain](https://github.com/webroyit/nb2c2s-FileStorageInBlockchain)| 0 | 0 | 46| 2020-11-22 | 2020-11-26 |
| [Ricardo-Silva91/ipfs_blog_vuepress](https://github.com/Ricardo-Silva91/ipfs_blog_vuepress)| 0 | 0 | 28450| 2020-11-16 | 2020-11-23 |
| [Kehao/weiwen-test](https://github.com/Kehao/weiwen-test)| 0 | 0 | 184| 2020-11-16 | 2020-11-16 |
| [daviddias/p2p-ray-tracer](https://github.com/daviddias/p2p-ray-tracer)| 1 | 0 | 2777| 2020-11-15 | 2020-11-15 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
