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
*  6/2020: 78
*  5/2020: 72
*  4/2020: 65
*  3/2020: 61
*  2/2020: 59
*  1/2020: 57
*  12/2019: 60
*  11/2019: 61
*  10/2019: 65
*  9/2019: 60
*  8/2019: 67
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

Total Matches: 1700

Total Results (Limited by GitHUB API): 340

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [BasitAwan/IPFS-Crawler](https://github.com/BasitAwan/IPFS-Crawler)| 0 | 0 | 1675| 2020-06-10 | 2020-06-10 |
| [shiningacg/ipfs-filestore](https://github.com/shiningacg/ipfs-filestore)| 0 | 0 | 3861| 2020-06-04 | 2020-06-09 |
| [storj-thirdparty/driver-ipfs](https://github.com/storj-thirdparty/driver-ipfs)| 0 | 0 | 428| 2020-06-01 | 2020-06-10 |
| [bonedaddy/flloyd-archiver](https://github.com/bonedaddy/flloyd-archiver)| 4 | 0 | 108| 2020-05-31 | 2020-06-04 |
| [storj-thirdparty/connector-ipfs](https://github.com/storj-thirdparty/connector-ipfs)| 0 | 1 | 210| 2020-05-30 | 2020-06-10 |
| [boomlinde/ipfs-gopher](https://github.com/boomlinde/ipfs-gopher)| 8 | 0 | 9| 2020-05-30 | 2020-05-31 |
| [will-rowe/stark](https://github.com/will-rowe/stark)| 1 | 0 | 599| 2020-05-28 | 2020-06-11 |
| [vulcanize/pg-ipfs-ethdb](https://github.com/vulcanize/pg-ipfs-ethdb)| 0 | 0 | 43| 2020-05-27 | 2020-06-03 |
| [vulcanize/ipfs-blockchain-watcher](https://github.com/vulcanize/ipfs-blockchain-watcher)| 0 | 0 | 60088| 2020-05-27 | 2020-05-30 |
| [manuelpolzhofer/ipfs-mon](https://github.com/manuelpolzhofer/ipfs-mon)| 0 | 0 | 85| 2020-05-26 | 2020-06-01 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 72409

Total Results (Limited by GitHUB API): 1303

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [LorranSutter/IPFS-demo](https://github.com/LorranSutter/IPFS-demo)| 0 | 0 | 250| 2020-06-11 | 2020-06-11 |
| [spwebler/Final-Project](https://github.com/spwebler/Final-Project)| 0 | 0 | 141| 2020-06-11 | 2020-06-11 |
| [jessicaschilling/ipfs-gui-mental-model](https://github.com/jessicaschilling/ipfs-gui-mental-model)| 0 | 0 | 853| 2020-06-09 | 2020-06-11 |
| [revolunet/react-orbitdb](https://github.com/revolunet/react-orbitdb)| 4 | 0 | 7334| 2020-06-09 | 2020-06-10 |
| [MASDXI/Vue-IPFS](https://github.com/MASDXI/Vue-IPFS)| 0 | 0 | 154| 2020-06-08 | 2020-06-08 |
| [Permissionless-Software-Foundation/gatsb...](https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-web-wallet)| 0 | 1 | 528| 2020-06-07 | 2020-06-11 |
| [n-bhasin/SImpleIPFS](https://github.com/n-bhasin/SImpleIPFS)| 0 | 0 | 1764| 2020-06-07 | 2020-06-08 |
| [SONGSONGBOBO/filecoincloud_client](https://github.com/SONGSONGBOBO/filecoincloud_client)| 0 | 0 | 7912| 2020-06-07 | 2020-06-11 |
| [dhappy/git-remote-ipfs-mam](https://github.com/dhappy/git-remote-ipfs-mam)| 0 | 0 | 19640| 2020-06-06 | 2020-06-06 |
| [Permissionless-Software-Foundation/gatsb...](https://github.com/Permissionless-Software-Foundation/gatsby-ipfs-adminlte)| 1 | 1 | 543| 2020-06-05 | 2020-06-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
