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
*  4/2021: 93
*  3/2021: 93
*  2/2021: 81
*  1/2021: 74
*  12/2020: 56
*  11/2020: 54
*  10/2020: 56
*  9/2020: 70
*  8/2020: 63
*  7/2020: 69
*  6/2020: 72
*  5/2020: 64

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

Total Matches: 1965

Total Results (Limited by GitHUB API): 393

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [sebastiendan/go-ipfs](https://github.com/sebastiendan/go-ipfs)| 0 | 0 | 61629| 2021-04-09 | 2021-04-15 |
| [ohmpatel1997/ipfs-ethereum](https://github.com/ohmpatel1997/ipfs-ethereum)| 0 | 0 | 204531| 2021-04-04 | 2021-04-05 |
| [ninedraft/ursa](https://github.com/ninedraft/ursa)| 0 | 0 | 8| 2021-04-01 | 2021-04-01 |
| [ismdeep/ipfs-alive-keeper](https://github.com/ismdeep/ipfs-alive-keeper)| 0 | 0 | 7| 2021-03-29 | 2021-04-17 |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 2 | 0 | 107| 2021-03-17 | 2021-04-17 |
| [seunggin/toolsForIPFS](https://github.com/seunggin/toolsForIPFS)| 0 | 0 | 1| 2021-03-15 | 2021-03-15 |
| [dikshabagdi/ipfs-api](https://github.com/dikshabagdi/ipfs-api)| 0 | 1 | 6| 2021-03-07 | 2021-03-07 |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 1 | 0 | 28| 2021-03-02 | 2021-04-07 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [textileio/go-buckets](https://github.com/textileio/go-buckets)| 5 | 1 | 10682| 2021-02-26 | 2021-04-09 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 82781

Total Results (Limited by GitHUB API): 1455

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [mohammadreza-ashouri/DDrive](https://github.com/mohammadreza-ashouri/DDrive)| 0 | 0 | 516| 2021-04-15 | 2021-04-15 |
| [shantanhunt/ERC-721-and-IPFS-Dapp](https://github.com/shantanhunt/ERC-721-and-IPFS-Dapp)| 0 | 0 | 2166| 2021-04-15 | 2021-04-15 |
| [suvanshchawla/Eth-IPFS](https://github.com/suvanshchawla/Eth-IPFS)| 0 | 0 | 107| 2021-04-14 | 2021-04-14 |
| [devpavan04/upload-to-ipfs](https://github.com/devpavan04/upload-to-ipfs)| 1 | 0 | 1933| 2021-04-14 | 2021-04-14 |
| [CryptoUnico/dememes](https://github.com/CryptoUnico/dememes)| 0 | 1 | 607| 2021-04-14 | 2021-04-14 |
| [Permissionless-Software-Foundation/bch-w...](https://github.com/Permissionless-Software-Foundation/bch-wallet-ipfs-service)| 0 | 0 | 1403| 2021-04-11 | 2021-04-11 |
| [markg85/openpubsubnetwork](https://github.com/markg85/openpubsubnetwork)| 0 | 0 | 145| 2021-04-11 | 2021-04-11 |
| [si3mshady/SolidityDrive](https://github.com/si3mshady/SolidityDrive)| 0 | 0 | 666| 2021-04-10 | 2021-04-13 |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-coord)| 1 | 0 | 344| 2021-04-09 | 2021-04-17 |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-service-provider)| 1 | 0 | 1949| 2021-04-09 | 2021-04-15 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
