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
*  7/2020: 71
*  6/2020: 57
*  5/2020: 66
*  4/2020: 61
*  3/2020: 62
*  2/2020: 66
*  1/2020: 58
*  12/2019: 58
*  11/2019: 63
*  10/2019: 66
*  9/2019: 56
*  8/2019: 59

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

Total Matches: 1745

Total Results (Limited by GitHUB API): 349

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [wabarc/wbipfs](https://github.com/wabarc/wbipfs)| 0 | 0 | 9679| 2020-07-04 | 2020-07-05 |
| [BDWare/go-ipfs](https://github.com/BDWare/go-ipfs)| 0 | 0 | 40531| 2020-07-01 | 2020-07-01 |
| [utkarsh23/access-control-for-IPFS](https://github.com/utkarsh23/access-control-for-IPFS)| 0 | 0 | 8| 2020-06-19 | 2020-06-19 |
| [StreamSpace/ss-ds-store](https://github.com/StreamSpace/ss-ds-store)| 1 | 0 | 11| 2020-06-13 | 2020-06-13 |
| [BasitAwan/IPFS-Crawler](https://github.com/BasitAwan/IPFS-Crawler)| 0 | 0 | 1675| 2020-06-10 | 2020-06-10 |
| [shiningacg/ipfs-filestore](https://github.com/shiningacg/ipfs-filestore)| 0 | 0 | 3863| 2020-06-04 | 2020-06-14 |
| [storj-thirdparty/driver-ipfs](https://github.com/storj-thirdparty/driver-ipfs)| 0 | 0 | 545| 2020-06-01 | 2020-07-02 |
| [bonedaddy/flloyd-archiver](https://github.com/bonedaddy/flloyd-archiver)| 4 | 0 | 108| 2020-05-31 | 2020-06-04 |
| [vulcanize/eth-ipfs-state-validator](https://github.com/vulcanize/eth-ipfs-state-validator)| 1 | 0 | 109| 2020-05-30 | 2020-07-12 |
| [storj-thirdparty/connector-ipfs](https://github.com/storj-thirdparty/connector-ipfs)| 0 | 1 | 220| 2020-05-30 | 2020-07-02 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 71900

Total Results (Limited by GitHUB API): 1305

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [madelacruzs/my-resume-ipfs](https://github.com/madelacruzs/my-resume-ipfs)| 0 | 0 | 197| 2020-07-12 | 2020-07-12 |
| [joseedo/VirtualIdentity](https://github.com/joseedo/VirtualIdentity)| 0 | 0 | 186| 2020-07-12 | 2020-07-12 |
| [SecretsMarket/eth-ipfs](https://github.com/SecretsMarket/eth-ipfs)| 0 | 0 | 10| 2020-07-12 | 2020-07-12 |
| [rishabhgargdps/hackathon](https://github.com/rishabhgargdps/hackathon)| 0 | 0 | 296| 2020-07-11 | 2020-07-11 |
| [bethanyuo/registry-dApp](https://github.com/bethanyuo/registry-dApp)| 0 | 0 | 1031| 2020-07-10 | 2020-07-10 |
| [bethanyuo/casino-dApp](https://github.com/bethanyuo/casino-dApp)| 0 | 0 | 6561| 2020-07-10 | 2020-07-10 |
| [dmarzzz/crowdStore](https://github.com/dmarzzz/crowdStore)| 0 | 0 | 233| 2020-07-09 | 2020-07-11 |
| [azureuz/ipfs-hyperledger-poc](https://github.com/azureuz/ipfs-hyperledger-poc)| 0 | 0 | 71099| 2020-07-09 | 2020-07-09 |
| [iohzrd/follow](https://github.com/iohzrd/follow)| 0 | 0 | 1034| 2020-07-09 | 2020-07-12 |
| [vim-labs/osnap](https://github.com/vim-labs/osnap)| 0 | 0 | 193| 2020-07-09 | 2020-07-11 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
