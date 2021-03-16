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
*  3/2021: 87
*  2/2021: 73
*  1/2021: 91
*  12/2020: 50
*  11/2020: 40
*  10/2020: 50
*  9/2020: 60
*  8/2020: 61
*  7/2020: 71
*  6/2020: 61
*  5/2020: 61
*  4/2020: 66

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

Total Matches: 1950

Total Results (Limited by GitHUB API): 390

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [seunggin/toolsForIPFS](https://github.com/seunggin/toolsForIPFS)| 0 | 0 | 1| 2021-03-15 | 2021-03-15 |
| [dikshabagdi/ipfs-api](https://github.com/dikshabagdi/ipfs-api)| 0 | 1 | 6| 2021-03-07 | 2021-03-07 |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 1 | 0 | 26| 2021-03-02 | 2021-03-05 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [textileio/go-buckets](https://github.com/textileio/go-buckets)| 3 | 0 | 10303| 2021-02-26 | 2021-03-15 |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 4 | 3 | 162| 2021-02-22 | 2021-03-15 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 3 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 79| 2021-02-04 | 2021-02-16 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 71| 2021-01-22 | 2021-02-26 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 80450

Total Results (Limited by GitHUB API): 1423

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Angulo66/ipfs-image-dapp](https://github.com/Angulo66/ipfs-image-dapp)| 0 | 0 | 249| 2021-03-15 | 2021-03-15 |
| [lukewickens1989/decentralized_portfolio](https://github.com/lukewickens1989/decentralized_portfolio)| 0 | 0 | 863| 2021-03-12 | 2021-03-13 |
| [justicenode/ipfs-gallery-importer](https://github.com/justicenode/ipfs-gallery-importer)| 0 | 0 | 520| 2021-03-11 | 2021-03-11 |
| [VijeyGanesh/solidity-file-drive](https://github.com/VijeyGanesh/solidity-file-drive)| 0 | 0 | 346| 2021-03-11 | 2021-03-11 |
| [Lemii/ipfs-demo](https://github.com/Lemii/ipfs-demo)| 0 | 0 | 207| 2021-03-11 | 2021-03-11 |
| [silviopaganini/nft-market-service](https://github.com/silviopaganini/nft-market-service)| 0 | 0 | 89| 2021-03-10 | 2021-03-11 |
| [yusefnapora/js-ipfs-pinning-service-clie...](https://github.com/yusefnapora/js-ipfs-pinning-service-client)| 0 | 0 | 266| 2021-03-08 | 2021-03-11 |
| [yusefnapora/minty](https://github.com/yusefnapora/minty)| 2 | 1 | 1878| 2021-03-05 | 2021-03-15 |
| [shubhamvaity/DecenTube](https://github.com/shubhamvaity/DecenTube)| 0 | 0 | 17575| 2021-03-05 | 2021-03-05 |
| [yash0049/Pic_of_the_day1](https://github.com/yash0049/Pic_of_the_day1)| 0 | 0 | 364| 2021-03-05 | 2021-03-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
