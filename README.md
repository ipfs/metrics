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
*  5/2021: 66
*  4/2021: 85
*  3/2021: 91
*  2/2021: 75
*  1/2021: 100
*  12/2020: 56
*  11/2020: 46
*  10/2020: 56
*  9/2020: 61
*  8/2020: 74
*  7/2020: 64
*  6/2020: 63

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

Total Matches: 1985

Total Results (Limited by GitHUB API): 397

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 2| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 14| 2021-05-13 | 2021-05-13 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |
| [scryptic86/gibon](https://github.com/scryptic86/gibon)| 0 | 0 | 191| 2021-04-22 | 2020-08-07 |
| [anirudha-bs/Distributed_storage_ipfs](https://github.com/anirudha-bs/Distributed_storage_ipfs)| 0 | 0 | 16| 2021-04-20 | 2021-04-24 |
| [sebastiendan/go-ipfs](https://github.com/sebastiendan/go-ipfs)| 0 | 0 | 61956| 2021-04-09 | 2021-05-11 |
| [ohmpatel1997/ipfs-ethereum](https://github.com/ohmpatel1997/ipfs-ethereum)| 0 | 0 | 204531| 2021-04-04 | 2021-04-05 |
| [ninedraft/ursa](https://github.com/ninedraft/ursa)| 0 | 0 | 8| 2021-04-01 | 2021-04-01 |
| [ismdeep/ipfs-alive-keeper](https://github.com/ismdeep/ipfs-alive-keeper)| 0 | 0 | 7| 2021-03-29 | 2021-04-17 |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 2 | 0 | 136| 2021-03-17 | 2021-04-19 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 84400

Total Results (Limited by GitHUB API): 1474

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [luizoamorim/dstorage](https://github.com/luizoamorim/dstorage)| 0 | 0 | 503| 2021-05-12 | 2021-05-12 |
| [christroutner/bch-ipfs-service](https://github.com/christroutner/bch-ipfs-service)| 0 | 0 | 1624| 2021-05-11 | 2021-05-11 |
| [jerryq0101/instagramV2](https://github.com/jerryq0101/instagramV2)| 0 | 0 | 234| 2021-05-08 | 2021-05-08 |
| [malopezr7/ipfs-filesystem](https://github.com/malopezr7/ipfs-filesystem)| 0 | 0 | 16876| 2021-05-08 | 2021-05-08 |
| [moza88/MyNotes](https://github.com/moza88/MyNotes)| 0 | 0 | 384| 2021-05-08 | 2021-05-09 |
| [olizilla/ipfs-get](https://github.com/olizilla/ipfs-get)| 0 | 0 | 161| 2021-05-07 | 2021-05-10 |
| [AlfaroMiguel/ipfs-proxy](https://github.com/AlfaroMiguel/ipfs-proxy)| 0 | 0 | 253| 2021-05-07 | 2021-05-10 |
| [siddhantkharode/IPFS-File-Uploader](https://github.com/siddhantkharode/IPFS-File-Uploader)| 0 | 0 | 383| 2021-05-06 | 2021-05-06 |
| [sullof/broken-jazz-ipfs](https://github.com/sullof/broken-jazz-ipfs)| 0 | 0 | 123| 2021-05-03 | 2021-05-07 |
| [OxSpace/OxSpaceCMS](https://github.com/OxSpace/OxSpaceCMS)| 2 | 0 | 80| 2021-05-02 | 2021-05-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
