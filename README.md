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
*  11/2020: 53
*  10/2020: 56
*  9/2020: 66
*  8/2020: 61
*  7/2020: 65
*  6/2020: 68
*  5/2020: 68
*  4/2020: 64
*  3/2020: 60
*  2/2020: 63
*  1/2020: 56
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

Total Matches: 1850

Total Results (Limited by GitHUB API): 370

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [pulkit2001/Sec-Air](https://github.com/pulkit2001/Sec-Air)| 0 | 0 | 3| 2020-11-20 | 2020-11-20 |
| [DeedleFake/ipfs-publish-feed](https://github.com/DeedleFake/ipfs-publish-feed)| 0 | 0 | 7| 2020-11-19 | 2020-11-19 |
| [wadeAlexC/ipbw](https://github.com/wadeAlexC/ipbw)| 3 | 0 | 34544| 2020-11-17 | 2020-11-20 |
| [talhaanisicte/go-compiler](https://github.com/talhaanisicte/go-compiler)| 0 | 0 | 5| 2020-11-13 | 2020-11-16 |
| [tchardin/ipfs-pubsub-test](https://github.com/tchardin/ipfs-pubsub-test)| 0 | 0 | 50| 2020-11-09 | 2020-11-09 |
| [MeowDada/ipfstor](https://github.com/MeowDada/ipfstor)| 0 | 0 | 167| 2020-11-05 | 2020-11-18 |
| [Geo25rey/ipmail](https://github.com/Geo25rey/ipmail)| 1 | 0 | 110| 2020-11-04 | 2020-11-09 |
| [myelnet/go-myel-network](https://github.com/myelnet/go-myel-network)| 0 | 0 | 142| 2020-11-02 | 2020-11-02 |
| [PlagueCat-Miao/goipfs-lab511](https://github.com/PlagueCat-Miao/goipfs-lab511)| 0 | 0 | 56| 2020-09-30 | 2020-11-17 |
| [faddat/ipfs-uploader](https://github.com/faddat/ipfs-uploader)| 2 | 0 | 16| 2020-09-27 | 2020-09-28 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 76300

Total Results (Limited by GitHUB API): 1367

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [JaredJacobsen/ipfs-papers](https://github.com/JaredJacobsen/ipfs-papers)| 0 | 0 | 212| 2020-11-19 | 2020-11-19 |
| [Ricardo-Silva91/ipfs_blog_vuepress](https://github.com/Ricardo-Silva91/ipfs_blog_vuepress)| 0 | 0 | 6| 2020-11-16 | 2020-11-16 |
| [Kehao/weiwen-test](https://github.com/Kehao/weiwen-test)| 0 | 0 | 184| 2020-11-16 | 2020-11-16 |
| [daviddias/p2p-ray-tracer](https://github.com/daviddias/p2p-ray-tracer)| 1 | 0 | 2777| 2020-11-15 | 2020-11-15 |
| [KingzRex/Decentralized_DropBox-cloud_sto...](https://github.com/KingzRex/Decentralized_DropBox-cloud_storage)| 0 | 0 | 1254| 2020-11-15 | 2020-11-15 |
| [antoniodjakov/dstorage](https://github.com/antoniodjakov/dstorage)| 0 | 0 | 1250| 2020-11-14 | 2020-11-17 |
| [pmacom/ipfsPlayground](https://github.com/pmacom/ipfsPlayground)| 0 | 0 | 81| 2020-11-14 | 2020-11-14 |
| [DivitaP/Upload](https://github.com/DivitaP/Upload)| 0 | 0 | 338| 2020-11-13 | 2020-11-13 |
| [IPConvergence/ipfs-eth-anchoring](https://github.com/IPConvergence/ipfs-eth-anchoring)| 0 | 0 | 5726| 2020-11-13 | 2020-11-13 |
| [jomoljaison/IPFSCertichain](https://github.com/jomoljaison/IPFSCertichain)| 0 | 0 | 73| 2020-11-10 | 2020-11-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
