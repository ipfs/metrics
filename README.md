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
*  9/2019: 61
*  8/2019: 63
*  7/2019: 67
*  6/2019: 77
*  5/2019: 77
*  4/2019: 72
*  3/2019: 74
*  2/2019: 66
*  1/2019: 75
*  12/2018: 74
*  11/2018: 77
*  10/2018: 82

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

Total Matches: 1060

Total Results (Limited by GitHUB API): 265

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [quorumcontrol/go-ds-dynamodb](https://github.com/quorumcontrol/go-ds-dynamodb)| 0 | 0 | 6| 2019-09-27 | 2019-09-27 |
| [D-CDC/cdc-backend](https://github.com/D-CDC/cdc-backend)| 0 | 0 | 110| 2019-09-14 | 2019-09-15 |
| [wanglg007/IPFSClusterDemo](https://github.com/wanglg007/IPFSClusterDemo)| 0 | 0 | 1335| 2019-09-10 | 2019-09-10 |
| [treeder/ipfsutils](https://github.com/treeder/ipfsutils)| 0 | 0 | 22| 2019-08-17 | 2019-08-18 |
| [DeedleFake/9ipfs](https://github.com/DeedleFake/9ipfs)| 0 | 0 | 4| 2019-08-13 | 2019-08-13 |
| [DeedleFake/ipfs-pubpin](https://github.com/DeedleFake/ipfs-pubpin)| 0 | 0 | 7| 2019-08-02 | 2019-08-02 |
| [hasyimibhar/avalanche](https://github.com/hasyimibhar/avalanche)| 1 | 0 | 5| 2019-07-22 | 2019-07-22 |
| [dmcarrington/hlf-ipfs](https://github.com/dmcarrington/hlf-ipfs)| 1 | 1 | 51498| 2019-07-14 | 2019-09-10 |
| [ItalyPaleAle/pinatapinner](https://github.com/ItalyPaleAle/pinatapinner)| 2 | 1 | 12| 2019-07-12 | 2019-07-28 |
| [dtubenetwork/go-ds-sia](https://github.com/dtubenetwork/go-ds-sia)| 0 | 0 | 21| 2019-07-12 | 2019-07-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 62600

Total Results (Limited by GitHUB API): 1144

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [cryptowhaler/Decentralized_Dropbox](https://github.com/cryptowhaler/Decentralized_Dropbox)| 0 | 0 | 1218| 2019-09-26 | 2019-09-26 |
| [ACE857/MediCon](https://github.com/ACE857/MediCon)| 0 | 0 | 13529| 2019-09-25 | 2019-09-25 |
| [Ideea-inc/Pin-js](https://github.com/Ideea-inc/Pin-js)| 0 | 0 | 5| 2019-09-25 | 2019-09-25 |
| [pythonpete32/memeKing](https://github.com/pythonpete32/memeKing)| 1 | 0 | 12573| 2019-09-23 | 2019-09-23 |
| [kapil1221/Electronic-Health-Record](https://github.com/kapil1221/Electronic-Health-Record)| 0 | 0 | 268| 2019-09-23 | 2019-09-23 |
| [ryanio/ipfs-pin-market-dapp](https://github.com/ryanio/ipfs-pin-market-dapp)| 0 | 0 | 405| 2019-09-22 | 2019-09-25 |
| [Aveesh52/IPFS-image-uploads](https://github.com/Aveesh52/IPFS-image-uploads)| 0 | 0 | 274| 2019-09-21 | 2019-09-21 |
| [graphprotocol/ipfs-sync](https://github.com/graphprotocol/ipfs-sync)| 2 | 0 | 48| 2019-09-20 | 2019-09-22 |
| [Permissionless-Software-Foundation/chat-...](https://github.com/Permissionless-Software-Foundation/chat-bootstrap-server)| 0 | 0 | 94| 2019-09-18 | 2019-09-20 |
| [ipfs-shipyard/js-ipfs-contributors](https://github.com/ipfs-shipyard/js-ipfs-contributors)| 0 | 0 | 755| 2019-09-18 | 2019-09-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
