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
*  3/2021: 91
*  2/2021: 76
*  1/2021: 82
*  12/2020: 63
*  11/2020: 48
*  10/2020: 65
*  9/2020: 66
*  8/2020: 61
*  7/2020: 67
*  6/2020: 69
*  5/2020: 65
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

Total Matches: 1945

Total Results (Limited by GitHUB API): 389

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 0 | 0 | 64| 2021-03-17 | 2021-03-19 |
| [seunggin/toolsForIPFS](https://github.com/seunggin/toolsForIPFS)| 0 | 0 | 1| 2021-03-15 | 2021-03-15 |
| [dikshabagdi/ipfs-api](https://github.com/dikshabagdi/ipfs-api)| 0 | 1 | 6| 2021-03-07 | 2021-03-07 |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 1 | 0 | 26| 2021-03-02 | 2021-03-05 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [textileio/go-buckets](https://github.com/textileio/go-buckets)| 3 | 0 | 10463| 2021-02-26 | 2021-03-19 |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 4 | 3 | 191| 2021-02-22 | 2021-03-17 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 3 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 79| 2021-02-04 | 2021-02-16 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 80900

Total Results (Limited by GitHUB API): 1429

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [chainGers-2021/Pinata-ERC721](https://github.com/chainGers-2021/Pinata-ERC721)| 0 | 0 | 634| 2021-03-20 | 2021-03-20 |
| [chainGers-2021/IPFS-File-Upload](https://github.com/chainGers-2021/IPFS-File-Upload)| 0 | 0 | 1795| 2021-03-20 | 2021-03-20 |
| [ArorAnam/blockchain-music](https://github.com/ArorAnam/blockchain-music)| 0 | 0 | 169| 2021-03-19 | 2021-03-19 |
| [kwklly/jooyoung](https://github.com/kwklly/jooyoung)| 0 | 0 | 8| 2021-03-17 | 2021-03-18 |
| [PinataCloud/Flow_NFTs_IPFS](https://github.com/PinataCloud/Flow_NFTs_IPFS)| 1 | 0 | 389| 2021-03-17 | 2021-03-17 |
| [crustio/ipfs-crust-action](https://github.com/crustio/ipfs-crust-action)| 3 | 0 | 699| 2021-03-17 | 2021-03-19 |
| [digiassetX/ipfs-simple](https://github.com/digiassetX/ipfs-simple)| 0 | 0 | 8| 2021-03-17 | 2021-03-17 |
| [kwklly/pinata-party](https://github.com/kwklly/pinata-party)| 0 | 0 | 372| 2021-03-16 | 2021-03-16 |
| [Angulo66/ipfs-image-dapp](https://github.com/Angulo66/ipfs-image-dapp)| 0 | 0 | 249| 2021-03-15 | 2021-03-15 |
| [lukewickens1989/decentralized_portfolio](https://github.com/lukewickens1989/decentralized_portfolio)| 0 | 0 | 863| 2021-03-12 | 2021-03-13 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
