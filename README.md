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
*  2/2021: 73
*  1/2021: 77
*  12/2020: 53
*  11/2020: 47
*  10/2020: 53
*  9/2020: 60
*  8/2020: 60
*  7/2020: 71
*  6/2020: 69
*  5/2020: 64
*  4/2020: 61
*  3/2020: 59

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

Total Matches: 1910

Total Results (Limited by GitHUB API): 382

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 78| 2021-02-04 | 2021-02-05 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 65| 2021-01-22 | 2021-02-03 |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 3 | 0 | 71| 2021-01-09 | 2021-01-09 |
| [myelnet/go-hop-exchange](https://github.com/myelnet/go-hop-exchange)| 5 | 0 | 255| 2021-01-08 | 2021-02-05 |
| [foilen/ipfs-gateway-limited](https://github.com/foilen/ipfs-gateway-limited)| 0 | 0 | 15| 2020-12-26 | 2021-01-23 |
| [kalambet/ipfsbatcher](https://github.com/kalambet/ipfsbatcher)| 0 | 0 | 20571| 2020-12-12 | 2020-12-22 |
| [taflaj/merge](https://github.com/taflaj/merge)| 0 | 0 | 20| 2020-12-06 | 2020-12-11 |
| [costinm/go-libp2p-ssh-transport](https://github.com/costinm/go-libp2p-ssh-transport)| 0 | 0 | 25| 2020-11-24 | 2020-12-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 78600

Total Results (Limited by GitHUB API): 1395

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [davekaj/scrape-snapshot](https://github.com/davekaj/scrape-snapshot)| 1 | 0 | 180| 2021-02-03 | 2021-02-04 |
| [anujadasnurkar/DVideo](https://github.com/anujadasnurkar/DVideo)| 0 | 0 | 534| 2021-02-03 | 2021-02-03 |
| [christroutner/ipfs-coord](https://github.com/christroutner/ipfs-coord)| 0 | 0 | 261| 2021-02-03 | 2021-02-07 |
| [RaphaelChevallier/CommChat](https://github.com/RaphaelChevallier/CommChat)| 0 | 0 | 792| 2021-02-01 | 2021-02-07 |
| [jarcodallo/secure-ipfs-api](https://github.com/jarcodallo/secure-ipfs-api)| 0 | 0 | 268| 2021-02-01 | 2021-02-02 |
| [iearn-finance/yearn-meta](https://github.com/iearn-finance/yearn-meta)| 1 | 1 | 1009| 2021-01-30 | 2021-01-30 |
| [bhflm/fleek](https://github.com/bhflm/fleek)| 0 | 0 | 648| 2021-01-30 | 2021-02-04 |
| [DivitaP/Storage](https://github.com/DivitaP/Storage)| 0 | 0 | 1537| 2021-01-29 | 2021-01-29 |
| [anujadasnurkar/Decentralized-DropBox](https://github.com/anujadasnurkar/Decentralized-DropBox)| 0 | 0 | 1303| 2021-01-27 | 2021-02-02 |
| [avishkarabhishek786/ipfs](https://github.com/avishkarabhishek786/ipfs)| 0 | 0 | 39| 2021-01-27 | 2021-01-27 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
