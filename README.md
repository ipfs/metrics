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
*  5/2021: 93
*  4/2021: 90
*  3/2021: 85
*  2/2021: 81
*  1/2021: 84
*  12/2020: 56
*  11/2020: 52
*  10/2020: 67
*  9/2020: 69
*  8/2020: 63
*  7/2020: 63
*  6/2020: 74

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

Total Matches: 2000

Total Results (Limited by GitHUB API): 400

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 0 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 33539| 2021-05-13 | 2021-05-24 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |
| [scryptic86/gibon](https://github.com/scryptic86/gibon)| 0 | 0 | 191| 2021-04-22 | 2020-08-07 |
| [anirudha-bs/Distributed_storage_ipfs](https://github.com/anirudha-bs/Distributed_storage_ipfs)| 0 | 0 | 18| 2021-04-20 | 2021-05-18 |
| [sebastiendan/go-ipfs](https://github.com/sebastiendan/go-ipfs)| 0 | 0 | 61956| 2021-04-09 | 2021-05-28 |
| [ohmpatel1997/ipfs-ethereum](https://github.com/ohmpatel1997/ipfs-ethereum)| 0 | 0 | 204531| 2021-04-04 | 2021-04-05 |
| [ninedraft/ursa](https://github.com/ninedraft/ursa)| 0 | 0 | 8| 2021-04-01 | 2021-04-01 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 85400

Total Results (Limited by GitHUB API): 1487

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-p2wdb-service)| 0 | 0 | 1540| 2021-05-29 | 2021-05-30 |
| [jamkilian/next-bucket](https://github.com/jamkilian/next-bucket)| 0 | 0 | 16| 2021-05-29 | 2021-05-29 |
| [davidkoller318/Ethereum-Homes](https://github.com/davidkoller318/Ethereum-Homes)| 0 | 0 | 31454| 2021-05-28 | 2021-05-28 |
| [caiohsramos/personal-portfolio](https://github.com/caiohsramos/personal-portfolio)| 0 | 0 | 3049| 2021-05-27 | 2021-05-29 |
| [GunmetalOrb73/Ipfsbin](https://github.com/GunmetalOrb73/Ipfsbin)| 1 | 0 | 842| 2021-05-26 | 2021-05-27 |
| [olizilla/ipfs-content-addressed-archiver](https://github.com/olizilla/ipfs-content-addressed-archiver)| 0 | 1 | 44| 2021-05-26 | 2021-05-27 |
| [jacobusa/decentralized-youtube](https://github.com/jacobusa/decentralized-youtube)| 1 | 0 | 1213| 2021-05-25 | 2021-05-25 |
| [bruceli20202020/node-ipfs](https://github.com/bruceli20202020/node-ipfs)| 0 | 0 | 0| 2021-05-25 | 2021-05-25 |
| [AbhinavMir/ipfs_add_images](https://github.com/AbhinavMir/ipfs_add_images)| 0 | 0 | 3| 2021-05-24 | 2021-05-24 |
| [Ashay041/IPFS-Ethereum-Decentralized_Ima...](https://github.com/Ashay041/IPFS-Ethereum-Decentralized_Image_Sharing_Dapp)| 0 | 0 | 5993| 2021-05-23 | 2021-05-23 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
