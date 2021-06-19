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
*  6/2021: 78
*  5/2021: 83
*  4/2021: 89
*  3/2021: 78
*  2/2021: 62
*  1/2021: 90
*  12/2020: 54
*  11/2020: 44
*  10/2020: 53
*  9/2020: 66
*  8/2020: 54
*  7/2020: 74

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

Total Matches: 2424

Total Results (Limited by GitHUB API): 404

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 25| 2021-06-18 | 2021-06-18 |
| [vinnymeller/ipfsio](https://github.com/vinnymeller/ipfsio)| 0 | 0 | 10| 2021-06-18 | 2021-06-18 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 1 | 0 | 58| 2021-06-11 | 2021-06-14 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 0 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 33539| 2021-05-13 | 2021-05-24 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |
| [scryptic86/gibon](https://github.com/scryptic86/gibon)| 0 | 0 | 191| 2021-04-22 | 2020-08-07 |
| [anirudha-bs/Distributed_storage_ipfs](https://github.com/anirudha-bs/Distributed_storage_ipfs)| 0 | 0 | 18| 2021-04-20 | 2021-05-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 89285

Total Results (Limited by GitHUB API): 1542

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [game-of-codes/IPFS-File-Upload-Dapp](https://github.com/game-of-codes/IPFS-File-Upload-Dapp)| 0 | 0 | 491| 2021-06-17 | 2021-06-17 |
| [uncutgems/de-instagram](https://github.com/uncutgems/de-instagram)| 0 | 0 | 2188| 2021-06-16 | 2021-06-16 |
| [alidevjimmy/bitstream](https://github.com/alidevjimmy/bitstream)| 0 | 0 | 109| 2021-06-16 | 2021-06-16 |
| [decooio/cloudflare-dnslink-action](https://github.com/decooio/cloudflare-dnslink-action)| 1 | 1 | 4| 2021-06-16 | 2021-06-16 |
| [AleRapchan/ipfs-and-blockchain](https://github.com/AleRapchan/ipfs-and-blockchain)| 1 | 0 | 434| 2021-06-15 | 2021-06-17 |
| [bradylee123/nft-ipfs](https://github.com/bradylee123/nft-ipfs)| 0 | 0 | 13799| 2021-06-14 | 2021-06-14 |
| [ipfs-examples/js-ipfs-types-use-ipfs-fro...](https://github.com/ipfs-examples/js-ipfs-types-use-ipfs-from-typed-js)| 0 | 0 | 487| 2021-06-14 | 2021-06-19 |
| [ipfs-examples/js-ipfs-custom-traverse-ip...](https://github.com/ipfs-examples/js-ipfs-custom-traverse-ipld-graphs)| 0 | 0 | 54| 2021-06-14 | 2021-06-19 |
| [ipfs-examples/js-ipfs-run-multiple-nodes](https://github.com/ipfs-examples/js-ipfs-run-multiple-nodes)| 0 | 0 | 23| 2021-06-14 | 2021-06-18 |
| [ipfs-examples/js-ipfs-run-in-electron](https://github.com/ipfs-examples/js-ipfs-run-in-electron)| 0 | 0 | 22| 2021-06-14 | 2021-06-15 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
