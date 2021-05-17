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
*  5/2021: 81
*  4/2021: 86
*  3/2021: 91
*  2/2021: 70
*  1/2021: 76
*  12/2020: 47
*  11/2020: 49
*  10/2020: 55
*  9/2020: 60
*  8/2020: 69
*  7/2020: 66
*  6/2020: 66

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
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 14| 2021-05-13 | 2021-05-13 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |
| [scryptic86/gibon](https://github.com/scryptic86/gibon)| 0 | 0 | 191| 2021-04-22 | 2020-08-07 |
| [anirudha-bs/Distributed_storage_ipfs](https://github.com/anirudha-bs/Distributed_storage_ipfs)| 0 | 0 | 16| 2021-04-20 | 2021-04-24 |
| [sebastiendan/go-ipfs](https://github.com/sebastiendan/go-ipfs)| 0 | 0 | 61956| 2021-04-09 | 2021-05-11 |
| [ohmpatel1997/ipfs-ethereum](https://github.com/ohmpatel1997/ipfs-ethereum)| 0 | 0 | 204531| 2021-04-04 | 2021-04-05 |
| [ninedraft/ursa](https://github.com/ninedraft/ursa)| 0 | 0 | 8| 2021-04-01 | 2021-04-01 |
| [ismdeep/ipfs-alive-keeper](https://github.com/ismdeep/ipfs-alive-keeper)| 0 | 0 | 7| 2021-03-29 | 2021-05-16 |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 2 | 0 | 136| 2021-03-17 | 2021-04-19 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 84600

Total Results (Limited by GitHUB API): 1476

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [kvutien/ipfs-dapp](https://github.com/kvutien/ipfs-dapp)| 0 | 0 | 2064| 2021-05-15 | 2021-05-16 |
| [Mahendramohanbharti/Shared-File-System-u...](https://github.com/Mahendramohanbharti/Shared-File-System-using-Blockchain)| 0 | 0 | 394| 2021-05-15 | 2021-05-15 |
| [abraham-yusuf/blog-ipfs-gatsby](https://github.com/abraham-yusuf/blog-ipfs-gatsby)| 0 | 0 | 898| 2021-05-15 | 2021-05-15 |
| [ipfs/js-ipfs-interfaces](https://github.com/ipfs/js-ipfs-interfaces)| 0 | 0 | 15| 2021-05-14 | 2021-05-15 |
| [Pushpit07/IPFS_File_Upload](https://github.com/Pushpit07/IPFS_File_Upload)| 0 | 0 | 492| 2021-05-14 | 2021-05-16 |
| [luizoamorim/dstorage](https://github.com/luizoamorim/dstorage)| 0 | 0 | 503| 2021-05-12 | 2021-05-12 |
| [christroutner/bch-ipfs-service](https://github.com/christroutner/bch-ipfs-service)| 0 | 0 | 1624| 2021-05-11 | 2021-05-11 |
| [jerryq0101/instagramV2](https://github.com/jerryq0101/instagramV2)| 0 | 0 | 234| 2021-05-08 | 2021-05-08 |
| [malopezr7/ipfs-filesystem](https://github.com/malopezr7/ipfs-filesystem)| 0 | 0 | 16876| 2021-05-08 | 2021-05-08 |
| [moza88/MyNotes](https://github.com/moza88/MyNotes)| 0 | 0 | 384| 2021-05-08 | 2021-05-09 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
