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
*  1/2020: 55
*  12/2019: 54
*  11/2019: 55
*  10/2019: 65
*  9/2019: 58
*  8/2019: 65
*  7/2019: 67
*  6/2019: 74
*  5/2019: 76
*  4/2019: 71
*  3/2019: 73
*  2/2019: 67

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

Total Matches: 1152

Total Results (Limited by GitHUB API): 288

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [coryschwartz/ipfs-study](https://github.com/coryschwartz/ipfs-study)| 0 | 0 | 9| 2019-12-24 | 2019-12-25 |
| [CoderShiun/mqtt-ipfs](https://github.com/CoderShiun/mqtt-ipfs)| 1 | 0 | 8439| 2019-12-23 | 2020-01-03 |
| [factory24/ipfs-course-tests](https://github.com/factory24/ipfs-course-tests)| 0 | 0 | 20| 2019-12-14 | 2019-12-14 |
| [CsterKuroi/ipfs-file-enc](https://github.com/CsterKuroi/ipfs-file-enc)| 0 | 0 | 5| 2019-12-13 | 2019-12-13 |
| [aStarProgrammer/ipsp](https://github.com/aStarProgrammer/ipsp)| 0 | 0 | 14410| 2019-12-05 | 2020-01-07 |
| [pontiyaraja/ipfs-practice](https://github.com/pontiyaraja/ipfs-practice)| 0 | 0 | 14778| 2019-12-03 | 2019-12-09 |
| [textileio/go-foldersync](https://github.com/textileio/go-foldersync)| 3 | 3 | 199| 2019-11-22 | 2020-01-08 |
| [MichaelMure/go-ipfs-pinner](https://github.com/MichaelMure/go-ipfs-pinner)| 1 | 1 | 453| 2019-11-20 | 2019-12-05 |
| [guillaumemichel/ipfs-local](https://github.com/guillaumemichel/ipfs-local)| 0 | 0 | 37519| 2019-11-15 | 2020-01-05 |
| [AndreiD/arweave-ipfs-bridge](https://github.com/AndreiD/arweave-ipfs-bridge)| 0 | 0 | 17913| 2019-11-15 | 2019-12-21 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 66150

Total Results (Limited by GitHUB API): 1215

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [SohaibIbneAli/IPFS-Blockchain](https://github.com/SohaibIbneAli/IPFS-Blockchain)| 0 | 0 | 972| 2020-01-09 | 2020-01-09 |
| [Velenir/nextjs-ipfs-example](https://github.com/Velenir/nextjs-ipfs-example)| 0 | 0 | 117| 2020-01-03 | 2020-01-05 |
| [josselinchevalay/ipfs-lowdb-adapter](https://github.com/josselinchevalay/ipfs-lowdb-adapter)| 0 | 0 | 286| 2019-12-27 | 2019-12-27 |
| [AemieJ/FileManager-Dapp](https://github.com/AemieJ/FileManager-Dapp)| 0 | 0 | 228| 2019-12-20 | 2019-12-28 |
| [SvenMeyer/IPFS_upload_React](https://github.com/SvenMeyer/IPFS_upload_React)| 0 | 0 | 618| 2019-12-18 | 2019-12-18 |
| [yehia67/IPFS-Tangle-Database-System](https://github.com/yehia67/IPFS-Tangle-Database-System)| 0 | 0 | 31| 2019-12-17 | 2019-12-17 |
| [sotolab/node_upload_ipfs](https://github.com/sotolab/node_upload_ipfs)| 0 | 0 | 474| 2019-12-16 | 2019-12-16 |
| [inakineitor/ipfs-multiplexer](https://github.com/inakineitor/ipfs-multiplexer)| 0 | 0 | 224| 2019-12-16 | 2019-12-16 |
| [johngrantuk/numerai-helper](https://github.com/johngrantuk/numerai-helper)| 0 | 0 | 121| 2019-12-15 | 2019-12-16 |
| [bhuwanadhikari/ipfs-with-blockchain](https://github.com/bhuwanadhikari/ipfs-with-blockchain)| 0 | 0 | 315| 2019-12-15 | 2019-12-15 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
