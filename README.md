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
*  8/2021: 80
*  7/2021: 77
*  6/2021: 84
*  5/2021: 86
*  4/2021: 96
*  3/2021: 96
*  2/2021: 59
*  1/2021: 87
*  12/2020: 57
*  11/2020: 42
*  10/2020: 61
*  9/2020: 68

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

Total Matches: 2526

Total Results (Limited by GitHUB API): 421

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [omar391/IPFS-Smart-Contract](https://github.com/omar391/IPFS-Smart-Contract)| 0 | 0 | 95| 2021-08-16 | 2021-08-16 |
| [ali2210/legendary-bassoon](https://github.com/ali2210/legendary-bassoon)| 0 | 0 | 9675| 2021-08-07 | 2021-08-08 |
| [kenlabs/TimeRose](https://github.com/kenlabs/TimeRose)| 0 | 0 | 16496| 2021-08-07 | 2021-08-17 |
| [KEINOS/go-ipfs-as-a-library](https://github.com/KEINOS/go-ipfs-as-a-library)| 0 | 0 | 330| 2021-08-06 | 2021-08-06 |
| [aschmahmann/ipfs-check](https://github.com/aschmahmann/ipfs-check)| 0 | 0 | 59| 2021-08-06 | 2021-08-06 |
| [minskylab/immutable](https://github.com/minskylab/immutable)| 0 | 0 | 60| 2021-08-06 | 2021-08-09 |
| [jeffintj75991/IPFSOps-Golang](https://github.com/jeffintj75991/IPFSOps-Golang)| 0 | 0 | 4| 2021-07-30 | 2021-07-30 |
| [kenlabs/ipfs-watch](https://github.com/kenlabs/ipfs-watch)| 0 | 0 | 349| 2021-07-23 | 2021-08-13 |
| [wchristi0101/music-mix](https://github.com/wchristi0101/music-mix)| 0 | 0 | 5| 2021-07-14 | 2021-07-15 |
| [navinkeizer/Deece](https://github.com/navinkeizer/Deece)| 5 | 0 | 28929| 2021-07-08 | 2021-07-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 91750

Total Results (Limited by GitHUB API): 1568

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [xternet/ipfs_upload](https://github.com/xternet/ipfs_upload)| 0 | 0 | 41| 2021-08-16 | 2021-08-16 |
| [bogdanuch/react_ipfs_metamask](https://github.com/bogdanuch/react_ipfs_metamask)| 0 | 0 | 251| 2021-08-10 | 2021-08-13 |
| [sebasslash/ipfs-deploy](https://github.com/sebasslash/ipfs-deploy)| 0 | 0 | 14| 2021-08-10 | 2021-08-10 |
| [nikbhintade/savetheleopard](https://github.com/nikbhintade/savetheleopard)| 0 | 0 | 6| 2021-08-07 | 2021-08-07 |
| [mohammadreza-ashouri/Plygon-NFT-Token](https://github.com/mohammadreza-ashouri/Plygon-NFT-Token)| 0 | 0 | 2| 2021-08-07 | 2021-08-07 |
| [DeFiWiki/scaffold](https://github.com/DeFiWiki/scaffold)| 0 | 0 | 3679| 2021-08-06 | 2021-08-12 |
| [DIp15739/Flow-NFT](https://github.com/DIp15739/Flow-NFT)| 0 | 0 | 501| 2021-08-06 | 2021-08-09 |
| [bensadeghi/tala.marketplace](https://github.com/bensadeghi/tala.marketplace)| 0 | 0 | 1548| 2021-08-06 | 2021-08-16 |
| [bmateus/hackfs](https://github.com/bmateus/hackfs)| 0 | 0 | 939| 2021-08-06 | 2021-08-09 |
| [Blockcation-cutm/server-react](https://github.com/Blockcation-cutm/server-react)| 0 | 0 | 1099| 2021-08-05 | 2021-08-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
