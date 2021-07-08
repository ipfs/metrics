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
*  7/2021: 64
*  6/2021: 78
*  5/2021: 72
*  4/2021: 85
*  3/2021: 83
*  2/2021: 71
*  1/2021: 94
*  12/2020: 51
*  11/2020: 43
*  10/2020: 54
*  9/2020: 74
*  8/2020: 61

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

Total Matches: 2460

Total Results (Limited by GitHUB API): 410

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [gador/ipfs-tag](https://github.com/gador/ipfs-tag)| 0 | 0 | 21| 2021-06-28 | 2021-06-29 |
| [m-vlanbdg2ln52gla/EasyVoting](https://github.com/m-vlanbdg2ln52gla/EasyVoting)| 0 | 0 | 949| 2021-06-25 | 2021-07-06 |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 36| 2021-06-18 | 2021-06-23 |
| [scala-network/scala-blockchain-downloade...](https://github.com/scala-network/scala-blockchain-downloader)| 0 | 0 | 21379| 2021-06-12 | 2021-07-01 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 3 | 0 | 192| 2021-06-11 | 2021-07-06 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 0 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 33539| 2021-05-13 | 2021-05-24 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 89050

Total Results (Limited by GitHUB API): 1530

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [mileszim/ember-cli-ipfs](https://github.com/mileszim/ember-cli-ipfs)| 0 | 0 | 187| 2021-07-07 | 2021-07-07 |
| [FilosofiaCodigo/EjemploIPFS](https://github.com/FilosofiaCodigo/EjemploIPFS)| 0 | 0 | 183| 2021-07-07 | 2021-07-07 |
| [alxkzmn/matic-nft-testdrive](https://github.com/alxkzmn/matic-nft-testdrive)| 0 | 0 | 152| 2021-07-05 | 2021-07-05 |
| [Developer-piyush/PMDPP](https://github.com/Developer-piyush/PMDPP)| 0 | 0 | 307| 2021-07-04 | 2021-07-04 |
| [ClusterH/Flow-NFT-Project](https://github.com/ClusterH/Flow-NFT-Project)| 1 | 0 | 393| 2021-07-03 | 2021-07-04 |
| [yashok24/Secure-and-Decentralized-Image-...](https://github.com/yashok24/Secure-and-Decentralized-Image-sharing-system)| 0 | 0 | 5992| 2021-07-02 | 2021-07-02 |
| [farque65/ipfs-upload-portal](https://github.com/farque65/ipfs-upload-portal)| 0 | 0 | 478| 2021-07-01 | 2021-07-01 |
| [Jeremyb61/Layer-2-ETH-NFT](https://github.com/Jeremyb61/Layer-2-ETH-NFT)| 0 | 0 | 129| 2021-06-30 | 2021-07-01 |
| [hackyguru/PassVault](https://github.com/hackyguru/PassVault)| 0 | 0 | 32635| 2021-06-26 | 2021-06-26 |
| [KarimDer/AdVitamAeternam](https://github.com/KarimDer/AdVitamAeternam)| 0 | 0 | 7166| 2021-06-24 | 2021-07-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
