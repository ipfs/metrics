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
*  8/2021: 79
*  7/2021: 66
*  6/2021: 75
*  5/2021: 68
*  4/2021: 85
*  3/2021: 80
*  2/2021: 57
*  1/2021: 81
*  12/2020: 46
*  11/2020: 41
*  10/2020: 45
*  9/2020: 59

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

Total Matches: 2550

Total Results (Limited by GitHUB API): 425

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [valist-io/go-ipfs-git](https://github.com/valist-io/go-ipfs-git)| 0 | 0 | 84| 2021-08-21 | 2021-08-21 |
| [aquaflamingo/ipfs-repl](https://github.com/aquaflamingo/ipfs-repl)| 0 | 0 | 13| 2021-08-19 | 2021-08-20 |
| [iotaledger/go-ds-kvstore](https://github.com/iotaledger/go-ds-kvstore)| 0 | 0 | 26| 2021-08-18 | 2021-08-19 |
| [omar391/IPFS-Smart-Contract](https://github.com/omar391/IPFS-Smart-Contract)| 0 | 0 | 95| 2021-08-16 | 2021-08-16 |
| [ali2210/legendary-bassoon](https://github.com/ali2210/legendary-bassoon)| 0 | 0 | 9675| 2021-08-07 | 2021-08-08 |
| [kenlabs/TimeRose](https://github.com/kenlabs/TimeRose)| 0 | 0 | 16500| 2021-08-07 | 2021-08-18 |
| [KEINOS/go-ipfs-as-a-library](https://github.com/KEINOS/go-ipfs-as-a-library)| 0 | 0 | 330| 2021-08-06 | 2021-08-06 |
| [aschmahmann/ipfs-check](https://github.com/aschmahmann/ipfs-check)| 0 | 0 | 59| 2021-08-06 | 2021-08-19 |
| [minskylab/immutable](https://github.com/minskylab/immutable)| 0 | 0 | 60| 2021-08-06 | 2021-08-09 |
| [jeffintj75991/IPFSOps-Golang](https://github.com/jeffintj75991/IPFSOps-Golang)| 0 | 0 | 4| 2021-07-30 | 2021-07-30 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 92150

Total Results (Limited by GitHUB API): 1574

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [copious-world/repository-bridge](https://github.com/copious-world/repository-bridge)| 0 | 0 | 3| 2021-08-21 | 2021-08-21 |
| [HashLips/nft_ipfs_minter](https://github.com/HashLips/nft_ipfs_minter)| 1 | 0 | 998| 2021-08-21 | 2021-08-21 |
| [rushtac/IPFS_college](https://github.com/rushtac/IPFS_college)| 0 | 0 | 886| 2021-08-19 | 2021-08-19 |
| [cbonoz/checkoutfs](https://github.com/cbonoz/checkoutfs)| 0 | 0 | 4311| 2021-08-19 | 2021-08-19 |
| [tarunbatra/rate-ipfs-content](https://github.com/tarunbatra/rate-ipfs-content)| 0 | 0 | 811| 2021-08-18 | 2021-08-18 |
| [0xatm/web3-uploader](https://github.com/0xatm/web3-uploader)| 0 | 0 | 246| 2021-08-18 | 2021-08-18 |
| [xternet/ipfs_upload](https://github.com/xternet/ipfs_upload)| 0 | 0 | 41| 2021-08-16 | 2021-08-16 |
| [bogdanuch/react_ipfs_metamask](https://github.com/bogdanuch/react_ipfs_metamask)| 0 | 0 | 255| 2021-08-10 | 2021-08-19 |
| [sebasslash/ipfs-deploy](https://github.com/sebasslash/ipfs-deploy)| 0 | 0 | 14| 2021-08-10 | 2021-08-10 |
| [nikbhintade/savetheleopard](https://github.com/nikbhintade/savetheleopard)| 0 | 0 | 6| 2021-08-07 | 2021-08-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
