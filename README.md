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
*  7/2020: 65
*  6/2020: 63
*  5/2020: 67
*  4/2020: 64
*  3/2020: 51
*  2/2020: 54
*  1/2020: 56
*  12/2019: 52
*  11/2019: 56
*  10/2019: 64
*  9/2019: 51
*  8/2019: 62

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

Total Matches: 1760

Total Results (Limited by GitHUB API): 352

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [asabya/droplet](https://github.com/asabya/droplet)| 1 | 0 | 53| 2020-07-21 | 2020-07-24 |
| [wabarc/ipfs-pinner](https://github.com/wabarc/ipfs-pinner)| 0 | 0 | 17| 2020-07-18 | 2020-07-18 |
| [aschmahmann/ipfs-ds](https://github.com/aschmahmann/ipfs-ds)| 2 | 0 | 57| 2020-07-16 | 2020-07-16 |
| [diviramon/vbeam](https://github.com/diviramon/vbeam)| 2 | 1 | 134| 2020-07-06 | 2020-07-20 |
| [wabarc/wbipfs](https://github.com/wabarc/wbipfs)| 0 | 0 | 9682| 2020-07-04 | 2020-07-18 |
| [BDWare/go-ipfs](https://github.com/BDWare/go-ipfs)| 0 | 0 | 40531| 2020-07-01 | 2020-07-01 |
| [utkarsh23/access-control-for-IPFS](https://github.com/utkarsh23/access-control-for-IPFS)| 0 | 0 | 8| 2020-06-19 | 2020-06-19 |
| [StreamSpace/ss-ds-store](https://github.com/StreamSpace/ss-ds-store)| 1 | 0 | 14| 2020-06-13 | 2020-07-17 |
| [BasitAwan/IPFS-Crawler](https://github.com/BasitAwan/IPFS-Crawler)| 0 | 0 | 1675| 2020-06-10 | 2020-06-10 |
| [shiningacg/sn-ipfs](https://github.com/shiningacg/sn-ipfs)| 0 | 0 | 3881| 2020-06-04 | 2020-07-16 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 71942

Total Results (Limited by GitHUB API): 1313

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [nileorg/nile-publisher](https://github.com/nileorg/nile-publisher)| 0 | 0 | 79| 2020-07-24 | 2020-07-24 |
| [mattiaz9/gatsby-plugin-swarm](https://github.com/mattiaz9/gatsby-plugin-swarm)| 0 | 0 | 58| 2020-07-24 | 2020-07-24 |
| [redcpp/algorand-ipfs-js](https://github.com/redcpp/algorand-ipfs-js)| 0 | 0 | 38247| 2020-07-22 | 2020-07-24 |
| [shivasai780/ipfs-imageuploader](https://github.com/shivasai780/ipfs-imageuploader)| 0 | 0 | 45522| 2020-07-22 | 2020-07-23 |
| [TJWallet/FileCoinScan](https://github.com/TJWallet/FileCoinScan)| 0 | 0 | 6549| 2020-07-19 | 2020-07-19 |
| [Sebastian-Gru/ipfs-prototype](https://github.com/Sebastian-Gru/ipfs-prototype)| 1 | 0 | 633| 2020-07-18 | 2020-07-19 |
| [EmanHerawy/web3KM](https://github.com/EmanHerawy/web3KM)| 0 | 0 | 76| 2020-07-16 | 2020-07-17 |
| [4math2379/PointOfChainInterest](https://github.com/4math2379/PointOfChainInterest)| 0 | 0 | 50291| 2020-07-15 | 2020-07-24 |
| [mbcse/Bedium_DecentralizedBlogging](https://github.com/mbcse/Bedium_DecentralizedBlogging)| 1 | 0 | 14076| 2020-07-14 | 2020-07-21 |
| [AlvaroLuken/NFTs](https://github.com/AlvaroLuken/NFTs)| 0 | 0 | 1| 2020-07-14 | 2020-07-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
