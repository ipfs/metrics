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
*  10/2019: 51
*  9/2019: 62
*  8/2019: 68
*  7/2019: 65
*  6/2019: 73
*  5/2019: 73
*  4/2019: 69
*  3/2019: 72
*  2/2019: 70
*  1/2019: 74
*  12/2018: 71
*  11/2018: 76

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

Total Matches: 1064

Total Results (Limited by GitHUB API): 266

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [agencyenterprise/pem-utils](https://github.com/agencyenterprise/pem-utils)| 0 | 0 | 36| 2019-10-08 | 2019-10-08 |
| [quorumcontrol/go-ds-dynamodb](https://github.com/quorumcontrol/go-ds-dynamodb)| 0 | 0 | 6| 2019-09-27 | 2019-09-27 |
| [D-CDC/cdc-backend](https://github.com/D-CDC/cdc-backend)| 0 | 0 | 110| 2019-09-14 | 2019-09-15 |
| [wanglg007/IPFSClusterDemo](https://github.com/wanglg007/IPFSClusterDemo)| 0 | 0 | 1335| 2019-09-10 | 2019-09-10 |
| [treeder/ipfsutils](https://github.com/treeder/ipfsutils)| 0 | 0 | 22| 2019-08-17 | 2019-08-18 |
| [DeedleFake/9ipfs](https://github.com/DeedleFake/9ipfs)| 0 | 0 | 4| 2019-08-13 | 2019-08-13 |
| [DeedleFake/ipfs-pubpin](https://github.com/DeedleFake/ipfs-pubpin)| 0 | 0 | 7| 2019-08-02 | 2019-08-02 |
| [hasyimibhar/avalanche](https://github.com/hasyimibhar/avalanche)| 1 | 0 | 5| 2019-07-22 | 2019-07-22 |
| [dmcarrington/hlf-ipfs](https://github.com/dmcarrington/hlf-ipfs)| 1 | 1 | 51498| 2019-07-14 | 2019-09-10 |
| [ItalyPaleAle/pinatapinner](https://github.com/ItalyPaleAle/pinatapinner)| 2 | 1 | 12| 2019-07-12 | 2019-07-28 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 63300

Total Results (Limited by GitHUB API): 1158

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Srinivasan1008/IPFS](https://github.com/Srinivasan1008/IPFS)| 0 | 0 | 585| 2019-10-06 | 2019-10-06 |
| [jaykch/ethereum-file-share](https://github.com/jaykch/ethereum-file-share)| 0 | 0 | 291| 2019-10-06 | 2019-10-06 |
| [simpleaswater/ipfs](https://github.com/simpleaswater/ipfs)| 0 | 0 | 3| 2019-10-04 | 2019-10-05 |
| [DogeSoftware/Memecent](https://github.com/DogeSoftware/Memecent)| 0 | 0 | 4| 2019-10-03 | 2019-10-05 |
| [prayaglehana/ipfspubsub](https://github.com/prayaglehana/ipfspubsub)| 0 | 0 | 949| 2019-10-02 | 2019-10-02 |
| [ryanio/ipfs-pin-market-pledger](https://github.com/ryanio/ipfs-pin-market-pledger)| 1 | 0 | 97| 2019-10-02 | 2019-10-07 |
| [vaultec81/js-datastore-webdav](https://github.com/vaultec81/js-datastore-webdav)| 0 | 0 | 75| 2019-10-01 | 2019-10-01 |
| [viraj124/IPFS_Ethereum_Meme_App](https://github.com/viraj124/IPFS_Ethereum_Meme_App)| 0 | 0 | 273| 2019-10-01 | 2019-10-01 |
| [alanshaw/chatterbox-webext](https://github.com/alanshaw/chatterbox-webext)| 2 | 0 | 1078| 2019-09-30 | 2019-10-08 |
| [Corroborator-Net/Corroborator-Contract](https://github.com/Corroborator-Net/Corroborator-Contract)| 0 | 1 | 24| 2019-09-29 | 2019-09-29 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
