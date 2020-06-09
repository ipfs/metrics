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
*  6/2020: 69
*  5/2020: 66
*  4/2020: 63
*  3/2020: 58
*  2/2020: 56
*  1/2020: 57
*  12/2019: 58
*  11/2019: 64
*  10/2019: 62
*  9/2019: 59
*  8/2019: 64
*  7/2019: 65

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

Total Matches: 1690

Total Results (Limited by GitHUB API): 337

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [storj-thirdparty/driver-IPFS](https://github.com/storj-thirdparty/driver-IPFS)| 0 | 0 | 418| 2020-06-01 | 2020-06-08 |
| [bonedaddy/flloyd-archiver](https://github.com/bonedaddy/flloyd-archiver)| 4 | 0 | 108| 2020-05-31 | 2020-06-04 |
| [storj-thirdparty/connector-IPFS](https://github.com/storj-thirdparty/connector-IPFS)| 0 | 1 | 203| 2020-05-30 | 2020-06-08 |
| [boomlinde/ipfs-gopher](https://github.com/boomlinde/ipfs-gopher)| 8 | 0 | 9| 2020-05-30 | 2020-05-31 |
| [will-rowe/stark](https://github.com/will-rowe/stark)| 1 | 0 | 517| 2020-05-28 | 2020-06-08 |
| [vulcanize/pg-ipfs-ethdb](https://github.com/vulcanize/pg-ipfs-ethdb)| 0 | 0 | 43| 2020-05-27 | 2020-06-03 |
| [vulcanize/ipfs-blockchain-watcher](https://github.com/vulcanize/ipfs-blockchain-watcher)| 0 | 0 | 60088| 2020-05-27 | 2020-05-30 |
| [manuelpolzhofer/ipfs-mon](https://github.com/manuelpolzhofer/ipfs-mon)| 0 | 0 | 85| 2020-05-26 | 2020-06-01 |
| [yhsProject/go-ipfs-frame](https://github.com/yhsProject/go-ipfs-frame)| 1 | 0 | 12| 2020-05-18 | 2020-05-19 |
| [likecoin/likecoin-ipfs-cosmosds](https://github.com/likecoin/likecoin-ipfs-cosmosds)| 1 | 0 | 49| 2020-05-18 | 2020-05-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 72185

Total Results (Limited by GitHUB API): 1308

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [MASDXI/Vue-IPFS](https://github.com/MASDXI/Vue-IPFS)| 0 | 0 | 154| 2020-06-08 | 2020-06-08 |
| [Permissionless-Software-Foundation/gatsb...](https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-web-wallet)| 0 | 0 | 519| 2020-06-07 | 2020-06-07 |
| [n-bhasin/SImpleIPFS](https://github.com/n-bhasin/SImpleIPFS)| 0 | 0 | 1764| 2020-06-07 | 2020-06-08 |
| [dhappy/git-remote-ipfs-mam](https://github.com/dhappy/git-remote-ipfs-mam)| 0 | 0 | 19640| 2020-06-06 | 2020-06-06 |
| [Permissionless-Software-Foundation/gatsb...](https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-adminlte)| 1 | 1 | 543| 2020-06-05 | 2020-06-07 |
| [danielricgt/ethipfs](https://github.com/danielricgt/ethipfs)| 0 | 0 | 107| 2020-06-03 | 2020-06-03 |
| [xaiki/butter-provider-ipfs](https://github.com/xaiki/butter-provider-ipfs)| 0 | 0 | 1| 2020-06-03 | 2020-06-03 |
| [anarkrypto/simple-ipfs-file-uploader-via...](https://github.com/anarkrypto/simple-ipfs-file-uploader-via-browser)| 0 | 0 | 487| 2020-06-02 | 2020-06-02 |
| [oladotunsobande/ipfs_app](https://github.com/oladotunsobande/ipfs_app)| 0 | 0 | 292| 2020-05-29 | 2020-05-29 |
| [ashishnagpal2498/cloud-titans-IPFS](https://github.com/ashishnagpal2498/cloud-titans-IPFS)| 0 | 0 | 1040| 2020-05-28 | 2020-06-06 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
