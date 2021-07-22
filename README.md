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
*  6/2021: 84
*  5/2021: 85
*  4/2021: 95
*  3/2021: 100
*  2/2021: 77
*  1/2021: 89
*  12/2020: 54
*  11/2020: 47
*  10/2020: 57
*  9/2020: 63
*  8/2020: 55

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

Total Matches: 2460

Total Results (Limited by GitHUB API): 410

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [wchristi0101/music-mix](https://github.com/wchristi0101/music-mix)| 0 | 0 | 5| 2021-07-14 | 2021-07-15 |
| [navinkeizer/Deece](https://github.com/navinkeizer/Deece)| 3 | 0 | 28929| 2021-07-08 | 2021-07-14 |
| [gador/ipfs-tag](https://github.com/gador/ipfs-tag)| 0 | 0 | 21| 2021-06-28 | 2021-06-29 |
| [m-vlanbdg2ln52gla/EasyVoting](https://github.com/m-vlanbdg2ln52gla/EasyVoting)| 0 | 0 | 1604| 2021-06-25 | 2021-07-19 |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 36| 2021-06-18 | 2021-06-23 |
| [scala-network/scala-blockchain-downloade...](https://github.com/scala-network/scala-blockchain-downloader)| 0 | 0 | 21380| 2021-06-12 | 2021-07-13 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 3 | 0 | 195| 2021-06-11 | 2021-07-19 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 1 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 90015

Total Results (Limited by GitHUB API): 1544

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [TheHusband/Blockchain-Social-Media](https://github.com/TheHusband/Blockchain-Social-Media)| 0 | 0 | 596| 2021-07-21 | 2021-07-21 |
| [gitvani/nft-chainlink-ipfs](https://github.com/gitvani/nft-chainlink-ipfs)| 0 | 0 | 4| 2021-07-21 | 2021-07-21 |
| [MatrixStorageTech2021/ipfs-cid](https://github.com/MatrixStorageTech2021/ipfs-cid)| 0 | 0 | 137| 2021-07-20 | 2021-07-21 |
| [skogard/nebulus](https://github.com/skogard/nebulus)| 151 | 3 | 6012| 2021-07-19 | 2021-07-20 |
| [Alterdot/browser-extension](https://github.com/Alterdot/browser-extension)| 0 | 0 | 222| 2021-07-18 | 2021-07-18 |
| [samshi/ipfs360](https://github.com/samshi/ipfs360)| 0 | 0 | 892| 2021-07-18 | 2021-07-18 |
| [TheSachsquatch/NFT-Sample-](https://github.com/TheSachsquatch/NFT-Sample-)| 0 | 1 | 419| 2021-07-14 | 2021-07-19 |
| [thestriver/Memories](https://github.com/thestriver/Memories)| 0 | 0 | 432| 2021-07-14 | 2021-07-19 |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-bch-wallet-service)| 0 | 0 | 2915| 2021-07-13 | 2021-07-21 |
| [inevolin/ipfs-file-encryption](https://github.com/inevolin/ipfs-file-encryption)| 0 | 0 | 41| 2021-07-12 | 2021-07-12 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
