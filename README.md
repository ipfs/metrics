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
*  8/2021: 46
*  7/2021: 59
*  6/2021: 68
*  5/2021: 69
*  4/2021: 81
*  3/2021: 75
*  2/2021: 63
*  1/2021: 95
*  12/2020: 55
*  11/2020: 49
*  10/2020: 47
*  9/2020: 61

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

Total Matches: 2472

Total Results (Limited by GitHUB API): 412

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jeffintj75991/IPFSOps-Golang](https://github.com/jeffintj75991/IPFSOps-Golang)| 0 | 0 | 4| 2021-07-30 | 2021-07-30 |
| [kenlabs/ipfs-watch](https://github.com/kenlabs/ipfs-watch)| 0 | 0 | 345| 2021-07-23 | 2021-08-04 |
| [wchristi0101/music-mix](https://github.com/wchristi0101/music-mix)| 0 | 0 | 5| 2021-07-14 | 2021-07-15 |
| [navinkeizer/Deece](https://github.com/navinkeizer/Deece)| 4 | 0 | 28929| 2021-07-08 | 2021-07-14 |
| [gador/ipfs-tag](https://github.com/gador/ipfs-tag)| 0 | 0 | 21| 2021-06-28 | 2021-06-29 |
| [m-vlanbdg2ln52gla/EasyVoting](https://github.com/m-vlanbdg2ln52gla/EasyVoting)| 0 | 0 | 1686| 2021-06-25 | 2021-08-04 |
| [ipfs/tar-utils](https://github.com/ipfs/tar-utils)| 1 | 0 | 47| 2021-06-18 | 2021-08-05 |
| [scala-network/scala-blockchain-downloade...](https://github.com/scala-network/scala-blockchain-downloader)| 0 | 0 | 21380| 2021-06-12 | 2021-07-13 |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 5 | 0 | 195| 2021-06-11 | 2021-07-19 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 1 | 0 | 40| 2021-05-18 | 2021-05-18 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 91087

Total Results (Limited by GitHUB API): 1568

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [Blockcation-cutm/server-react](https://github.com/Blockcation-cutm/server-react)| 0 | 0 | 1099| 2021-08-05 | 2021-08-05 |
| [RostyslavDzhohola/fleek-coin-example](https://github.com/RostyslavDzhohola/fleek-coin-example)| 0 | 0 | 213| 2021-08-05 | 2021-08-05 |
| [pcnoic/pheme](https://github.com/pcnoic/pheme)| 0 | 0 | 153| 2021-08-04 | 2021-08-05 |
| [spiritbro1/harmony-ipfs](https://github.com/spiritbro1/harmony-ipfs)| 0 | 1 | 397| 2021-08-04 | 2021-08-04 |
| [acul71/ipfs-forms](https://github.com/acul71/ipfs-forms)| 0 | 0 | 368| 2021-08-03 | 2021-08-04 |
| [flippinroo2/ipfs](https://github.com/flippinroo2/ipfs)| 0 | 0 | 9540| 2021-08-03 | 2021-08-03 |
| [foragepm/car-transporter](https://github.com/foragepm/car-transporter)| 0 | 0 | 2| 2021-08-02 | 2021-08-02 |
| [Permissionless-Software-Foundation/psf-b...](https://github.com/Permissionless-Software-Foundation/psf-bch-wallet)| 0 | 0 | 2360| 2021-08-02 | 2021-08-06 |
| [Kulteam/MONCoin-Checkpoints-IPFS-Helper](https://github.com/Kulteam/MONCoin-Checkpoints-IPFS-Helper)| 1 | 0 | 134| 2021-08-01 | 2021-08-01 |
| [Kulteam/MONCoin-IPFS-CF-Checkpointer-Nod...](https://github.com/Kulteam/MONCoin-IPFS-CF-Checkpointer-Node)| 0 | 0 | 83| 2021-08-01 | 2021-08-01 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
