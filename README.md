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
*  3/2020: 58
*  2/2020: 60
*  1/2020: 60
*  12/2019: 52
*  11/2019: 57
*  10/2019: 63
*  9/2019: 61
*  8/2019: 66
*  7/2019: 66
*  6/2019: 74
*  5/2019: 74
*  4/2019: 70

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

Total Matches: 1520

Total Results (Limited by GitHUB API): 304

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Wondertan/go-blockstream](https://github.com/Wondertan/go-blockstream)| 0 | 0 | 23| 2020-03-11 | 2020-03-11 |
| [dzhelezov/ipfs-crawler](https://github.com/dzhelezov/ipfs-crawler)| 2 | 0 | 33| 2020-03-05 | 2020-03-05 |
| [jolatechno/ipfs-compute-plugin](https://github.com/jolatechno/ipfs-compute-plugin)| 0 | 0 | 133| 2020-03-03 | 2020-03-12 |
| [GalaIO/P2Pcrawler](https://github.com/GalaIO/P2Pcrawler)| 1 | 0 | 166| 2020-03-03 | 2020-03-15 |
| [sencvkk/go-ipfs](https://github.com/sencvkk/go-ipfs)| 1 | 0 | 100462| 2020-03-03 | 2020-03-16 |
| [guillaumemichel/crux-ipfs](https://github.com/guillaumemichel/crux-ipfs)| 0 | 0 | 166090| 2020-02-17 | 2020-02-17 |
| [TRON-US/btfs-migration-toolkit](https://github.com/TRON-US/btfs-migration-toolkit)| 0 | 0 | 21039| 2020-02-10 | 2020-02-21 |
| [zot/ipfs-p2p-websocket](https://github.com/zot/ipfs-p2p-websocket)| 0 | 0 | 26828| 2020-02-05 | 2020-03-16 |
| [likecoin/iscn-ipld](https://github.com/likecoin/iscn-ipld)| 0 | 0 | 46| 2020-02-03 | 2020-03-02 |
| [sug0/go-ipfs-boards](https://github.com/sug0/go-ipfs-boards)| 0 | 0 | 21| 2020-01-28 | 2020-02-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 68700

Total Results (Limited by GitHUB API): 1256

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [zhengxiaochen/ipfs_iota_data_management](https://github.com/zhengxiaochen/ipfs_iota_data_management)| 0 | 0 | 102| 2020-03-14 | 2020-03-14 |
| [Etienereum/EthIPFS](https://github.com/Etienereum/EthIPFS)| 0 | 0 | 264| 2020-03-14 | 2020-03-14 |
| [SignpostMarv/ocremix-ipfs-data](https://github.com/SignpostMarv/ocremix-ipfs-data)| 0 | 0 | 5246| 2020-03-13 | 2020-03-15 |
| [PinataCloud/ipfs-node-connection-handler](https://github.com/PinataCloud/ipfs-node-connection-handler)| 1 | 0 | 17| 2020-03-03 | 2020-03-05 |
| [RangerMauve/webrun-plugin-ipfs](https://github.com/RangerMauve/webrun-plugin-ipfs)| 0 | 0 | 80| 2020-03-02 | 2020-03-02 |
| [adrianleb/nextjs-daijs-example](https://github.com/adrianleb/nextjs-daijs-example)| 1 | 0 | 147| 2020-03-01 | 2020-03-05 |
| [ismailcanvardar/ipfs-smart-contract](https://github.com/ismailcanvardar/ipfs-smart-contract)| 0 | 0 | 510| 2020-02-29 | 2020-03-02 |
| [josselinchevalay/todo-ipfs](https://github.com/josselinchevalay/todo-ipfs)| 0 | 0 | 286| 2020-02-28 | 2020-02-28 |
| [KurtMerbeth/ethily](https://github.com/KurtMerbeth/ethily)| 0 | 1 | 195| 2020-02-26 | 2020-02-26 |
| [alqamahjsr/EthBazaar](https://github.com/alqamahjsr/EthBazaar)| 0 | 0 | 604| 2020-02-22 | 2020-02-22 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
