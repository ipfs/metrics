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
*  9/2019: 66
*  8/2019: 63
*  7/2019: 65
*  6/2019: 75
*  5/2019: 74
*  4/2019: 73
*  3/2019: 75
*  2/2019: 68
*  1/2019: 72
*  12/2018: 70
*  11/2018: 76
*  10/2018: 81

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

Total Matches: 1056

Total Results (Limited by GitHUB API): 264

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [D-CDC/cdc-backend](https://github.com/D-CDC/cdc-backend)| 0 | 0 | 110| 2019-09-14 | 2019-09-15 |
| [wanglg007/IPFSClusterDemo](https://github.com/wanglg007/IPFSClusterDemo)| 0 | 0 | 1335| 2019-09-10 | 2019-09-10 |
| [treeder/ipfsutils](https://github.com/treeder/ipfsutils)| 0 | 0 | 22| 2019-08-17 | 2019-08-18 |
| [DeedleFake/9ipfs](https://github.com/DeedleFake/9ipfs)| 0 | 0 | 4| 2019-08-13 | 2019-08-13 |
| [DeedleFake/ipfs-pubpin](https://github.com/DeedleFake/ipfs-pubpin)| 0 | 0 | 7| 2019-08-02 | 2019-08-02 |
| [hasyimibhar/avalanche](https://github.com/hasyimibhar/avalanche)| 1 | 0 | 5| 2019-07-22 | 2019-07-22 |
| [dmcarrington/hlf-ipfs](https://github.com/dmcarrington/hlf-ipfs)| 0 | 0 | 51498| 2019-07-14 | 2019-09-10 |
| [ItalyPaleAle/pinatapinner](https://github.com/ItalyPaleAle/pinatapinner)| 2 | 1 | 12| 2019-07-12 | 2019-07-28 |
| [dtubenetwork/go-ds-sia](https://github.com/dtubenetwork/go-ds-sia)| 0 | 0 | 21| 2019-07-12 | 2019-07-18 |
| [factory24/ipfs-course-tests](https://github.com/factory24/ipfs-course-tests)| 0 | 0 | 23| 2019-07-10 | 2019-07-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 61900

Total Results (Limited by GitHUB API): 1133

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [georgeaf99/NYCMeshChatService](https://github.com/georgeaf99/NYCMeshChatService)| 0 | 0 | 72| 2019-09-15 | 2019-09-15 |
| [reuixiy/meme-ipfs](https://github.com/reuixiy/meme-ipfs)| 0 | 0 | 4376| 2019-09-15 | 2019-09-15 |
| [peterhuba/d-chat](https://github.com/peterhuba/d-chat)| 0 | 0 | 260| 2019-09-15 | 2019-09-15 |
| [sebastiantf/ipfs-memeoftheday](https://github.com/sebastiantf/ipfs-memeoftheday)| 0 | 0 | 210| 2019-09-14 | 2019-09-14 |
| [pythonpete32/meme-of-the-day](https://github.com/pythonpete32/meme-of-the-day)| 0 | 0 | 1068| 2019-09-10 | 2019-09-11 |
| [openworklabs/quasar](https://github.com/openworklabs/quasar)| 2 | 0 | 218| 2019-09-09 | 2019-09-12 |
| [KapsonLabs/ipfs-file-tests](https://github.com/KapsonLabs/ipfs-file-tests)| 0 | 0 | 305| 2019-09-09 | 2019-09-09 |
| [jogamod/Eth-Dapp-IPFS-React](https://github.com/jogamod/Eth-Dapp-IPFS-React)| 0 | 0 | 286| 2019-09-05 | 2019-09-07 |
| [leekheang/ipfs_tutorial](https://github.com/leekheang/ipfs_tutorial)| 0 | 0 | 38709| 2019-09-05 | 2019-09-05 |
| [devinhaeng/eth_ipfs](https://github.com/devinhaeng/eth_ipfs)| 0 | 0 | 100| 2019-09-05 | 2019-09-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
