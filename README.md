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
*  3/2020: 56
*  2/2020: 61
*  1/2020: 58
*  12/2019: 57
*  11/2019: 57
*  10/2019: 64
*  9/2019: 62
*  8/2019: 68
*  7/2019: 67
*  6/2019: 76
*  5/2019: 78
*  4/2019: 74

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

Total Matches: 1530

Total Results (Limited by GitHUB API): 306

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [RTradeLtd/ipcoronafs](https://github.com/RTradeLtd/ipcoronafs)| 2 | 0 | 28327| 2020-03-23 | 2020-03-23 |
| [jolatechno/mpi-peerstore](https://github.com/jolatechno/mpi-peerstore)| 0 | 0 | 46| 2020-03-21 | 2020-03-24 |
| [RTradeLtd/iprfc](https://github.com/RTradeLtd/iprfc)| 1 | 0 | 63| 2020-03-19 | 2020-03-19 |
| [Wondertan/go-blockstream](https://github.com/Wondertan/go-blockstream)| 0 | 0 | 23| 2020-03-11 | 2020-03-11 |
| [dzhelezov/ipfs-crawler](https://github.com/dzhelezov/ipfs-crawler)| 2 | 0 | 33| 2020-03-05 | 2020-03-05 |
| [jolatechno/ipfs-mpi](https://github.com/jolatechno/ipfs-mpi)| 0 | 0 | 7096| 2020-03-04 | 2020-03-24 |
| [GalaIO/P2Pcrawler](https://github.com/GalaIO/P2Pcrawler)| 1 | 0 | 173| 2020-03-03 | 2020-03-22 |
| [sencvkk/go-ipfs](https://github.com/sencvkk/go-ipfs)| 1 | 0 | 104466| 2020-03-03 | 2020-03-24 |
| [guillaumemichel/crux-ipfs](https://github.com/guillaumemichel/crux-ipfs)| 0 | 0 | 166090| 2020-02-17 | 2020-02-17 |
| [scriptkitty/ipfs-crawler](https://github.com/scriptkitty/ipfs-crawler)| 8 | 0 | 89| 2020-02-17 | 2020-03-24 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 69050

Total Results (Limited by GitHUB API): 1260

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [sanketpathak64/file-upload-using-IPFS](https://github.com/sanketpathak64/file-upload-using-IPFS)| 0 | 0 | 286| 2020-03-24 | 2020-03-24 |
| [ariels1996/KOK-dApp-demo](https://github.com/ariels1996/KOK-dApp-demo)| 0 | 0 | 214| 2020-03-24 | 2020-03-24 |
| [gomezgoiri/tictactoe-game](https://github.com/gomezgoiri/tictactoe-game)| 0 | 0 | 275| 2020-03-22 | 2020-03-23 |
| [denismp/mi4-exercise8](https://github.com/denismp/mi4-exercise8)| 0 | 0 | 1832| 2020-03-18 | 2020-03-24 |
| [myanzik/image_upload](https://github.com/myanzik/image_upload)| 0 | 0 | 393| 2020-03-17 | 2020-03-17 |
| [zhengxiaochen/ipfs_iota_data_management](https://github.com/zhengxiaochen/ipfs_iota_data_management)| 0 | 0 | 102| 2020-03-14 | 2020-03-14 |
| [Etienereum/EthIPFS](https://github.com/Etienereum/EthIPFS)| 0 | 0 | 264| 2020-03-14 | 2020-03-14 |
| [SignpostMarv/ocremix-ipfs-data](https://github.com/SignpostMarv/ocremix-ipfs-data)| 0 | 0 | 5442| 2020-03-13 | 2020-03-18 |
| [PinataCloud/ipfs-node-connection-handler](https://github.com/PinataCloud/ipfs-node-connection-handler)| 1 | 0 | 17| 2020-03-03 | 2020-03-05 |
| [RangerMauve/webrun-plugin-ipfs](https://github.com/RangerMauve/webrun-plugin-ipfs)| 0 | 0 | 80| 2020-03-02 | 2020-03-02 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
