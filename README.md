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
*  4/2020: 68
*  3/2020: 54
*  2/2020: 52
*  1/2020: 58
*  12/2019: 55
*  11/2019: 59
*  10/2019: 69
*  9/2019: 57
*  8/2019: 66
*  7/2019: 65
*  6/2019: 67
*  5/2019: 68

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

Total Matches: 1575

Total Results (Limited by GitHUB API): 315

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [tarekbadrshalaan/ipfs.house](https://github.com/tarekbadrshalaan/ipfs.house)| 0 | 0 | 2| 2020-04-19 | 2020-04-19 |
| [RTradeLtd/go-datastores](https://github.com/RTradeLtd/go-datastores)| 1 | 0 | 70| 2020-04-15 | 2020-04-16 |
| [romanblanco/graffiti-ipfs](https://github.com/romanblanco/graffiti-ipfs)| 0 | 0 | 38| 2020-04-15 | 2020-04-15 |
| [mborho/terraform-provider-ipfs](https://github.com/mborho/terraform-provider-ipfs)| 2 | 0 | 29| 2020-04-09 | 2020-04-20 |
| [itzg/go-ipfs-client](https://github.com/itzg/go-ipfs-client)| 0 | 0 | 30| 2020-04-05 | 2020-04-05 |
| [dbarasti/go-monitor-ipfs](https://github.com/dbarasti/go-monitor-ipfs)| 1 | 0 | 10172| 2020-04-03 | 2020-04-17 |
| [alanshaw/ipfs-hookds](https://github.com/alanshaw/ipfs-hookds)| 2 | 0 | 23| 2020-03-31 | 2020-04-17 |
| [giobart/IPFS-statistics-generator](https://github.com/giobart/IPFS-statistics-generator)| 0 | 0 | 33308| 2020-03-30 | 2020-04-16 |
| [RTradeLtd/ipld-eml](https://github.com/RTradeLtd/ipld-eml)| 5 | 0 | 42700| 2020-03-27 | 2020-03-30 |
| [RTradeLtd/go-temporalx-sdk](https://github.com/RTradeLtd/go-temporalx-sdk)| 3 | 0 | 112| 2020-03-26 | 2020-04-17 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 69900

Total Results (Limited by GitHUB API): 1274

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [MartinG2020/ipfs-meme-otd](https://github.com/MartinG2020/ipfs-meme-otd)| 0 | 0 | 199| 2020-04-17 | 2020-04-17 |
| [plegma-ai/DBlogger](https://github.com/plegma-ai/DBlogger)| 0 | 0 | 9| 2020-04-16 | 2020-04-16 |
| [thecodacus/DBlogger](https://github.com/thecodacus/DBlogger)| 0 | 0 | 12| 2020-04-16 | 2020-04-18 |
| [vporton/ipfs-search](https://github.com/vporton/ipfs-search)| 0 | 0 | 41| 2020-04-15 | 2020-04-15 |
| [kr4cher/ipfs-chat](https://github.com/kr4cher/ipfs-chat)| 2 | 0 | 191| 2020-04-15 | 2020-04-15 |
| [BhaskarDutta2209/IPFS_Gallery](https://github.com/BhaskarDutta2209/IPFS_Gallery)| 0 | 0 | 346| 2020-04-14 | 2020-04-18 |
| [ferru97/node-ipfs-monitor](https://github.com/ferru97/node-ipfs-monitor)| 0 | 0 | 128| 2020-04-09 | 2020-04-17 |
| [moebiusprogram/notarize-api](https://github.com/moebiusprogram/notarize-api)| 0 | 0 | 707| 2020-04-07 | 2020-04-10 |
| [BhaskarDutta2209/Meme_Of_The_Day](https://github.com/BhaskarDutta2209/Meme_Of_The_Day)| 0 | 0 | 251| 2020-04-07 | 2020-04-07 |
| [rubcv/IPFS-API](https://github.com/rubcv/IPFS-API)| 0 | 0 | 28| 2020-04-07 | 2020-04-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
