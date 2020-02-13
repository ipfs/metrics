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
*  2/2020: 51
*  1/2020: 62
*  12/2019: 55
*  11/2019: 62
*  10/2019: 66
*  9/2019: 64
*  8/2019: 64
*  7/2019: 70
*  6/2019: 74
*  5/2019: 74
*  4/2019: 73
*  3/2019: 76

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

Total Matches: 1184

Total Results (Limited by GitHUB API): 296

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [zot/ipfs-p2p-websocket](https://github.com/zot/ipfs-p2p-websocket)| 0 | 0 | 16| 2020-02-05 | 2020-02-10 |
| [likecoin/likecoin-iscn-ipld](https://github.com/likecoin/likecoin-iscn-ipld)| 0 | 0 | 42| 2020-02-03 | 2020-02-05 |
| [sug0/go-ipfs-boards](https://github.com/sug0/go-ipfs-boards)| 0 | 0 | 21| 2020-01-28 | 2020-02-10 |
| [simpleaswater/twitter-pinbot](https://github.com/simpleaswater/twitter-pinbot)| 3 | 0 | 47| 2020-01-19 | 2020-01-23 |
| [ipfs-search/ipfs-search-2](https://github.com/ipfs-search/ipfs-search-2)| 1 | 0 | 21| 2020-01-14 | 2020-01-21 |
| [cusspvz/react-native-ipfs](https://github.com/cusspvz/react-native-ipfs)| 0 | 0 | 159| 2020-01-06 | 2020-01-10 |
| [utropicmedia/storj-IPFS](https://github.com/utropicmedia/storj-IPFS)| 1 | 0 | 326| 2020-01-03 | 2020-01-25 |
| [coryschwartz/ipfs-study](https://github.com/coryschwartz/ipfs-study)| 0 | 0 | 9| 2019-12-24 | 2019-12-25 |
| [CoderShiun/mqtt-ipfs](https://github.com/CoderShiun/mqtt-ipfs)| 1 | 0 | 8439| 2019-12-23 | 2020-01-03 |
| [factory24/ipfs-course-tests](https://github.com/factory24/ipfs-course-tests)| 0 | 0 | 20| 2019-12-14 | 2019-12-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 67800

Total Results (Limited by GitHUB API): 1241

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [MicheleMongardi/Test-IPFS-JS](https://github.com/MicheleMongardi/Test-IPFS-JS)| 0 | 1 | 112| 2020-02-11 | 2020-02-12 |
| [syscoin/ipfs-controller](https://github.com/syscoin/ipfs-controller)| 0 | 0 | 254| 2020-02-11 | 2020-02-12 |
| [vivekchauhan12000/ipfssharing](https://github.com/vivekchauhan12000/ipfssharing)| 0 | 0 | 16| 2020-02-10 | 2020-02-10 |
| [RaedsLab/ether-auction](https://github.com/RaedsLab/ether-auction)| 0 | 0 | 484| 2020-02-09 | 2020-02-09 |
| [graylan0/onelovedtube-front](https://github.com/graylan0/onelovedtube-front)| 1 | 0 | 3588| 2020-02-07 | 2020-02-11 |
| [techcoderx/ipsync-client](https://github.com/techcoderx/ipsync-client)| 2 | 0 | 14| 2020-02-07 | 2020-02-10 |
| [mikeal/ipfs-for-car](https://github.com/mikeal/ipfs-for-car)| 0 | 0 | 5| 2020-02-06 | 2020-02-11 |
| [RhinocerosBomb/ipfstest](https://github.com/RhinocerosBomb/ipfstest)| 0 | 0 | 340| 2020-02-06 | 2020-02-06 |
| [mathaip/Ipfs-App](https://github.com/mathaip/Ipfs-App)| 0 | 0 | 195| 2020-02-05 | 2020-02-05 |
| [deepcrazy/file_upload_ipfs-exercise3](https://github.com/deepcrazy/file_upload_ipfs-exercise3)| 0 | 0 | 175| 2020-02-05 | 2020-02-08 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
