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
*  4/2021: 82
*  3/2021: 91
*  2/2021: 72
*  1/2021: 89
*  12/2020: 57
*  11/2020: 45
*  10/2020: 53
*  9/2020: 61
*  8/2020: 60
*  7/2020: 62
*  6/2020: 59
*  5/2020: 63

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

Total Matches: 1975

Total Results (Limited by GitHUB API): 395

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 0 | 0 | 22244| 2021-04-26 | 2021-04-28 |
| [anirudha-bs/Distributed_storage_ipfs](https://github.com/anirudha-bs/Distributed_storage_ipfs)| 0 | 0 | 16| 2021-04-20 | 2021-04-24 |
| [sebastiendan/go-ipfs](https://github.com/sebastiendan/go-ipfs)| 0 | 0 | 61695| 2021-04-09 | 2021-04-27 |
| [ohmpatel1997/ipfs-ethereum](https://github.com/ohmpatel1997/ipfs-ethereum)| 0 | 0 | 204531| 2021-04-04 | 2021-04-05 |
| [ninedraft/ursa](https://github.com/ninedraft/ursa)| 0 | 0 | 8| 2021-04-01 | 2021-04-01 |
| [ismdeep/ipfs-alive-keeper](https://github.com/ismdeep/ipfs-alive-keeper)| 0 | 0 | 7| 2021-03-29 | 2021-04-17 |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 2 | 0 | 136| 2021-03-17 | 2021-04-19 |
| [seunggin/toolsForIPFS](https://github.com/seunggin/toolsForIPFS)| 0 | 0 | 1| 2021-03-15 | 2021-03-15 |
| [dikshabagdi/ipfs-api](https://github.com/dikshabagdi/ipfs-api)| 0 | 1 | 6| 2021-03-07 | 2021-03-07 |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 1 | 0 | 28| 2021-03-02 | 2021-04-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 83650

Total Results (Limited by GitHUB API): 1469

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jigstack-dev/nft-image-pinning](https://github.com/jigstack-dev/nft-image-pinning)| 3 | 0 | 215| 2021-04-27 | 2021-04-28 |
| [icommunity-labs-and-tech/eth-ipfs-fileco...](https://github.com/icommunity-labs-and-tech/eth-ipfs-filecoin-project)| 0 | 0 | 1078| 2021-04-27 | 2021-04-27 |
| [pagarevijayy/bc_DeFileStorage](https://github.com/pagarevijayy/bc_DeFileStorage)| 0 | 0 | 1041| 2021-04-27 | 2021-04-27 |
| [Shydlock/Fabric-IPFS-project](https://github.com/Shydlock/Fabric-IPFS-project)| 0 | 0 | 47| 2021-04-26 | 2021-04-26 |
| [AppleMayExist/website](https://github.com/AppleMayExist/website)| 0 | 0 | 8324| 2021-04-26 | 2021-04-26 |
| [DougAnderson444/HydroFile](https://github.com/DougAnderson444/HydroFile)| 0 | 0 | 519| 2021-04-25 | 2021-04-27 |
| [luizoamorim/decentragram](https://github.com/luizoamorim/decentragram)| 1 | 0 | 512| 2021-04-25 | 2021-04-26 |
| [newlinedeveloper/Decentralized-storage](https://github.com/newlinedeveloper/Decentralized-storage)| 0 | 0 | 1245| 2021-04-25 | 2021-04-25 |
| [shaoye/ipfs-vault](https://github.com/shaoye/ipfs-vault)| 0 | 0 | 488| 2021-04-22 | 2021-04-25 |
| [imestin/ipfs-blog-website](https://github.com/imestin/ipfs-blog-website)| 0 | 0 | 5175| 2021-04-20 | 2021-04-21 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
