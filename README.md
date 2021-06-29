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
*  6/2021: 83
*  5/2021: 87
*  4/2021: 95
*  3/2021: 88
*  2/2021: 66
*  1/2021: 97
*  12/2020: 51
*  11/2020: 49
*  10/2020: 63
*  9/2020: 65
*  8/2020: 68
*  7/2020: 79

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

Total Matches: 2436

Total Results (Limited by GitHUB API): 406

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [gador/ipfs-tag](https://github.com/gador/ipfs-tag)| 0 | 0 | 9| 2021-06-28 | 2021-06-28 |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 36| 2021-06-18 | 2021-06-23 |
| [scala-network/scala-blockchain-downloade...](https://github.com/scala-network/scala-blockchain-downloader)| 0 | 0 | 21378| 2021-06-12 | 2021-06-24 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 2 | 0 | 189| 2021-06-11 | 2021-06-21 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 0 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 33539| 2021-05-13 | 2021-05-24 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |
| [scryptic86/gibon](https://github.com/scryptic86/gibon)| 0 | 0 | 191| 2021-04-22 | 2020-08-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 88550

Total Results (Limited by GitHUB API): 1530

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [hackyguru/PassVault](https://github.com/hackyguru/PassVault)| 0 | 0 | 32635| 2021-06-26 | 2021-06-26 |
| [LeKarimDerradji/AdVitamAeternam](https://github.com/LeKarimDerradji/AdVitamAeternam)| 0 | 0 | 7162| 2021-06-24 | 2021-06-28 |
| [maverickamit/react-ipfs-hosting](https://github.com/maverickamit/react-ipfs-hosting)| 0 | 0 | 249| 2021-06-23 | 2021-06-23 |
| [claytonnguyen/erc721maker](https://github.com/claytonnguyen/erc721maker)| 0 | 0 | 187| 2021-06-23 | 2021-06-23 |
| [StarKeyJON/web3_instagram](https://github.com/StarKeyJON/web3_instagram)| 0 | 0 | 514| 2021-06-22 | 2021-06-22 |
| [nishitchittora/Dapp-meme-of-the-day](https://github.com/nishitchittora/Dapp-meme-of-the-day)| 0 | 0 | 95| 2021-06-22 | 2021-06-22 |
| [filecoin-storage/filecoin.storage](https://github.com/filecoin-storage/filecoin.storage)| 3 | 0 | 286| 2021-06-21 | 2021-06-28 |
| [anupamakoirala/IPFS_File_Storage_Dapp](https://github.com/anupamakoirala/IPFS_File_Storage_Dapp)| 0 | 0 | 428| 2021-06-21 | 2021-06-22 |
| [kairavi28/Dapp_Ipfs](https://github.com/kairavi28/Dapp_Ipfs)| 0 | 0 | 887| 2021-06-20 | 2021-06-20 |
| [game-of-codes/IPFS-File-Upload-Dapp](https://github.com/game-of-codes/IPFS-File-Upload-Dapp)| 1 | 0 | 491| 2021-06-17 | 2021-06-17 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
