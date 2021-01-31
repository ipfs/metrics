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
*  1/2021: 72
*  12/2020: 48
*  11/2020: 51
*  10/2020: 55
*  9/2020: 58
*  8/2020: 57
*  7/2020: 70
*  6/2020: 68
*  5/2020: 65
*  4/2020: 65
*  3/2020: 62
*  2/2020: 60

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

Total Matches: 1900

Total Results (Limited by GitHUB API): 380

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 0 | 0 | 71| 2021-01-09 | 2021-01-09 |
| [myelnet/go-hop-exchange](https://github.com/myelnet/go-hop-exchange)| 5 | 0 | 378| 2021-01-08 | 2021-01-28 |
| [foilen/ipfs-gateway-limited](https://github.com/foilen/ipfs-gateway-limited)| 0 | 0 | 15| 2020-12-26 | 2021-01-23 |
| [kalambet/ipfsbatcher](https://github.com/kalambet/ipfsbatcher)| 0 | 0 | 20571| 2020-12-12 | 2020-12-22 |
| [taflaj/merge](https://github.com/taflaj/merge)| 0 | 0 | 20| 2020-12-06 | 2020-12-11 |
| [costinm/go-libp2p-ssh-transport](https://github.com/costinm/go-libp2p-ssh-transport)| 0 | 0 | 25| 2020-11-24 | 2020-12-07 |
| [pulkit2001/Sec-Air](https://github.com/pulkit2001/Sec-Air)| 0 | 0 | 3| 2020-11-20 | 2020-11-20 |
| [DeedleFake/ipfs-publish-feed](https://github.com/DeedleFake/ipfs-publish-feed)| 1 | 0 | 7| 2020-11-19 | 2020-11-19 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 78500

Total Results (Limited by GitHUB API): 1395

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [iearn-finance/yearn-meta](https://github.com/iearn-finance/yearn-meta)| 0 | 0 | 1009| 2021-01-30 | 2021-01-30 |
| [DivitaP/Storage](https://github.com/DivitaP/Storage)| 0 | 0 | 1537| 2021-01-29 | 2021-01-29 |
| [anujadasnurkar/Decentralized-DropBox](https://github.com/anujadasnurkar/Decentralized-DropBox)| 0 | 0 | 1297| 2021-01-27 | 2021-01-27 |
| [avishkarabhishek786/ipfs](https://github.com/avishkarabhishek786/ipfs)| 0 | 0 | 39| 2021-01-27 | 2021-01-27 |
| [yathartharora/DecentralisedEmail](https://github.com/yathartharora/DecentralisedEmail)| 0 | 0 | 164| 2021-01-22 | 2021-01-22 |
| [danielmarius1995/Ethereum-IPFS-DStorage](https://github.com/danielmarius1995/Ethereum-IPFS-DStorage)| 0 | 0 | 227| 2021-01-22 | 2021-01-22 |
| [achingbrain/dht-delegate-example](https://github.com/achingbrain/dht-delegate-example)| 1 | 0 | 5| 2021-01-21 | 2021-01-21 |
| [carsonfarmer/libp2p-bundle](https://github.com/carsonfarmer/libp2p-bundle)| 0 | 0 | 227| 2021-01-21 | 2021-01-27 |
| [MASDXI/ipfs-with-react](https://github.com/MASDXI/ipfs-with-react)| 0 | 0 | 1388| 2021-01-20 | 2021-01-21 |
| [raphaelpg/IPFS-portfolio](https://github.com/raphaelpg/IPFS-portfolio)| 0 | 0 | 837| 2021-01-19 | 2021-01-27 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
