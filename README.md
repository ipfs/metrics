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
*  4/2021: 87
*  3/2021: 91
*  2/2021: 71
*  1/2021: 90
*  12/2020: 58
*  11/2020: 56
*  10/2020: 61
*  9/2020: 71
*  8/2020: 61
*  7/2020: 66
*  6/2020: 76
*  5/2020: 72

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

Total Matches: 1955

Total Results (Limited by GitHUB API): 391

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [ninedraft/ursa](https://github.com/ninedraft/ursa)| 0 | 0 | 8| 2021-04-01 | 2021-04-01 |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 2 | 0 | 89| 2021-03-17 | 2021-03-27 |
| [seunggin/toolsForIPFS](https://github.com/seunggin/toolsForIPFS)| 0 | 0 | 1| 2021-03-15 | 2021-03-15 |
| [dikshabagdi/ipfs-api](https://github.com/dikshabagdi/ipfs-api)| 0 | 1 | 6| 2021-03-07 | 2021-03-07 |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 1 | 0 | 28| 2021-03-02 | 2021-04-07 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [textileio/go-buckets](https://github.com/textileio/go-buckets)| 4 | 1 | 10636| 2021-02-26 | 2021-03-31 |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 4 | 3 | 238| 2021-02-22 | 2021-04-05 |
| [ipfs/go-namesys](https://github.com/ipfs/go-namesys)| 2 | 1 | 936| 2021-02-18 | 2021-04-07 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 82064

Total Results (Limited by GitHUB API): 1449

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [daniel-molina23/ipfs-client-file](https://github.com/daniel-molina23/ipfs-client-file)| 0 | 0 | 0| 2021-04-07 | 2021-04-07 |
| [SkyTradeInc/NFTMaker](https://github.com/SkyTradeInc/NFTMaker)| 0 | 0 | 304| 2021-04-07 | 2021-04-07 |
| [wilkesalex/gcnft_ipfs](https://github.com/wilkesalex/gcnft_ipfs)| 0 | 0 | 359| 2021-04-06 | 2021-04-06 |
| [sudiptab2100/IPFSUploader](https://github.com/sudiptab2100/IPFSUploader)| 0 | 0 | 269| 2021-04-05 | 2021-04-05 |
| [yrajawat19/Pixels-Instagram-Clone-](https://github.com/yrajawat19/Pixels-Instagram-Clone-)| 0 | 0 | 526| 2021-04-05 | 2021-04-05 |
| [AndreiVaida/IPFS-WebUI](https://github.com/AndreiVaida/IPFS-WebUI)| 0 | 0 | 26902| 2021-04-03 | 2021-04-04 |
| [mitthoma/blac_box](https://github.com/mitthoma/blac_box)| 0 | 0 | 1663| 2021-04-02 | 2021-04-05 |
| [VictorOmbui/nft-pinata-ipfs](https://github.com/VictorOmbui/nft-pinata-ipfs)| 0 | 0 | 125| 2021-03-31 | 2021-03-31 |
| [agency-undone/nuxt-module-ipfs](https://github.com/agency-undone/nuxt-module-ipfs)| 1 | 0 | 15| 2021-03-30 | 2021-03-31 |
| [christroutner/ipfs-service-provider](https://github.com/christroutner/ipfs-service-provider)| 0 | 0 | 1752| 2021-03-30 | 2021-04-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
