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
*  4/2020: 87
*  3/2020: 57
*  2/2020: 60
*  1/2020: 60
*  12/2019: 55
*  11/2019: 59
*  10/2019: 62
*  9/2019: 55
*  8/2019: 64
*  7/2019: 63
*  6/2019: 70
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

Total Matches: 1540

Total Results (Limited by GitHUB API): 308

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [dbarasti/ipfs-monitoring](https://github.com/dbarasti/ipfs-monitoring)| 0 | 0 | 20| 2020-04-03 | 2020-04-03 |
| [alanshaw/ipfs-hookds](https://github.com/alanshaw/ipfs-hookds)| 2 | 0 | 8| 2020-03-31 | 2020-04-01 |
| [RTradeLtd/ipld-eml](https://github.com/RTradeLtd/ipld-eml)| 5 | 0 | 42700| 2020-03-27 | 2020-03-30 |
| [RTradeLtd/go-temporalx-sdk](https://github.com/RTradeLtd/go-temporalx-sdk)| 3 | 0 | 98| 2020-03-26 | 2020-04-02 |
| [RTradeLtd/ipcoronafs](https://github.com/RTradeLtd/ipcoronafs)| 2 | 1 | 28327| 2020-03-23 | 2020-03-23 |
| [jolatechno/mpi-peerstore](https://github.com/jolatechno/mpi-peerstore)| 0 | 0 | 61| 2020-03-21 | 2020-03-30 |
| [RTradeLtd/iprfc](https://github.com/RTradeLtd/iprfc)| 1 | 0 | 63| 2020-03-19 | 2020-03-19 |
| [Wondertan/go-blockstream](https://github.com/Wondertan/go-blockstream)| 0 | 0 | 23| 2020-03-11 | 2020-03-11 |
| [dzhelezov/ipfs-crawler](https://github.com/dzhelezov/ipfs-crawler)| 1 | 0 | 33| 2020-03-05 | 2020-03-05 |
| [jolatechno/libp2p-mpi](https://github.com/jolatechno/libp2p-mpi)| 0 | 0 | 7708| 2020-03-04 | 2020-04-03 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 69400

Total Results (Limited by GitHUB API): 1265

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [luisvid/IPFS-SmartContract](https://github.com/luisvid/IPFS-SmartContract)| 0 | 0 | 346| 2020-04-02 | 2020-04-02 |
| [zemse/decentralised-registration-ipfs](https://github.com/zemse/decentralised-registration-ipfs)| 0 | 0 | 3502| 2020-03-30 | 2020-04-03 |
| [tabcat/ipfs-serve](https://github.com/tabcat/ipfs-serve)| 0 | 0 | 9| 2020-03-26 | 2020-03-27 |
| [sanketpathak64/file-upload-using-IPFS](https://github.com/sanketpathak64/file-upload-using-IPFS)| 0 | 0 | 288| 2020-03-24 | 2020-03-26 |
| [denismp/mi4-exercise8-2](https://github.com/denismp/mi4-exercise8-2)| 0 | 0 | 2580| 2020-03-24 | 2020-03-26 |
| [ariels1996/KOK-dApp-demo](https://github.com/ariels1996/KOK-dApp-demo)| 0 | 0 | 214| 2020-03-24 | 2020-03-24 |
| [gomezgoiri/tictactoe-game](https://github.com/gomezgoiri/tictactoe-game)| 0 | 0 | 591| 2020-03-22 | 2020-03-28 |
| [alanshaw/ipfs-browser-sandbox](https://github.com/alanshaw/ipfs-browser-sandbox)| 10 | 2 | 6711| 2020-03-19 | 2020-04-01 |
| [denismp/mi4-exercise8](https://github.com/denismp/mi4-exercise8)| 0 | 0 | 1832| 2020-03-18 | 2020-03-24 |
| [myanzik/image_upload](https://github.com/myanzik/image_upload)| 0 | 0 | 405| 2020-03-17 | 2020-03-26 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
