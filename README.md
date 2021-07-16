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
*  7/2021: 60
*  6/2021: 75
*  5/2021: 74
*  4/2021: 90
*  3/2021: 93
*  2/2021: 64
*  1/2021: 85
*  12/2020: 57
*  11/2020: 48
*  10/2020: 52
*  9/2020: 62
*  8/2020: 58

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

Total Matches: 2466

Total Results (Limited by GitHUB API): 411

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [wchristi0101/music-mix](https://github.com/wchristi0101/music-mix)| 0 | 0 | 5| 2021-07-14 | 2021-07-15 |
| [navinkeizer/Deece](https://github.com/navinkeizer/Deece)| 2 | 0 | 28929| 2021-07-08 | 2021-07-14 |
| [gador/ipfs-tag](https://github.com/gador/ipfs-tag)| 0 | 0 | 21| 2021-06-28 | 2021-06-29 |
| [m-vlanbdg2ln52gla/EasyVoting](https://github.com/m-vlanbdg2ln52gla/EasyVoting)| 0 | 0 | 1528| 2021-06-25 | 2021-07-15 |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 36| 2021-06-18 | 2021-06-23 |
| [scala-network/scala-blockchain-downloade...](https://github.com/scala-network/scala-blockchain-downloader)| 0 | 0 | 21380| 2021-06-12 | 2021-07-13 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 3 | 0 | 192| 2021-06-11 | 2021-07-06 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 1 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 89750

Total Results (Limited by GitHUB API): 1550

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [TheSachsquatch/NFT-Sample-](https://github.com/TheSachsquatch/NFT-Sample-)| 0 | 0 | 418| 2021-07-14 | 2021-07-14 |
| [thestriver/Memories](https://github.com/thestriver/Memories)| 0 | 0 | 420| 2021-07-14 | 2021-07-14 |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service)| 0 | 0 | 1794| 2021-07-13 | 2021-07-15 |
| [inevolin/ipfs-file-encryption](https://github.com/inevolin/ipfs-file-encryption)| 0 | 0 | 41| 2021-07-12 | 2021-07-12 |
| [Frenzoid/DAPP_Dropbox](https://github.com/Frenzoid/DAPP_Dropbox)| 0 | 0 | 1294| 2021-07-12 | 2021-07-13 |
| [Frenzoid/DAPP_Instagram](https://github.com/Frenzoid/DAPP_Instagram)| 0 | 0 | 1071| 2021-07-12 | 2021-07-13 |
| [zhangguangyan/jsipfs-prviate-network](https://github.com/zhangguangyan/jsipfs-prviate-network)| 0 | 0 | 170| 2021-07-10 | 2021-07-11 |
| [staticinstance/IPFSImageETHVoter](https://github.com/staticinstance/IPFSImageETHVoter)| 0 | 0 | 405| 2021-07-10 | 2021-07-11 |
| [ahsan-arif/Crypto-Art](https://github.com/ahsan-arif/Crypto-Art)| 0 | 0 | 88642| 2021-07-10 | 2021-07-10 |
| [pradyumnabilagi/BlockChain-Node](https://github.com/pradyumnabilagi/BlockChain-Node)| 1 | 0 | 5360| 2021-07-10 | 2021-07-13 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
