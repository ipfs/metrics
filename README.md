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
*  12/2019: 67
*  11/2019: 62
*  10/2019: 65
*  9/2019: 64
*  8/2019: 65
*  7/2019: 67
*  6/2019: 74
*  5/2019: 75
*  4/2019: 71
*  3/2019: 75
*  2/2019: 66
*  1/2019: 72

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

Total Matches: 1124

Total Results (Limited by GitHUB API): 281

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [aStarProgrammer/ipsp](https://github.com/aStarProgrammer/ipsp)| 0 | 0 | 13954| 2019-12-05 | 2019-12-05 |
| [pontiyaraja/ipfs-practice](https://github.com/pontiyaraja/ipfs-practice)| 0 | 0 | 14758| 2019-12-03 | 2019-12-04 |
| [textileio/go-foldersync](https://github.com/textileio/go-foldersync)| 1 | 1 | 89| 2019-11-22 | 2019-12-05 |
| [MichaelMure/go-ipfs-pinner](https://github.com/MichaelMure/go-ipfs-pinner)| 1 | 1 | 453| 2019-11-20 | 2019-12-05 |
| [AndreiD/arweave-ipfs-bridge](https://github.com/AndreiD/arweave-ipfs-bridge)| 0 | 0 | 17908| 2019-11-15 | 2019-11-28 |
| [mad-day/ircfs](https://github.com/mad-day/ircfs)| 0 | 0 | 7| 2019-11-07 | 2019-11-11 |
| [wanglg007/go-textile](https://github.com/wanglg007/go-textile)| 0 | 0 | 986| 2019-11-06 | 2019-11-06 |
| [fernandoabolafio/gostampbot](https://github.com/fernandoabolafio/gostampbot)| 0 | 0 | 39| 2019-10-26 | 2019-11-06 |
| [jian-yu/ipfs-connector](https://github.com/jian-yu/ipfs-connector)| 0 | 0 | 34| 2019-10-25 | 2019-10-31 |
| [0zAND1z/ipld-crud](https://github.com/0zAND1z/ipld-crud)| 3 | 0 | 23| 2019-10-24 | 2019-11-21 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 65350

Total Results (Limited by GitHUB API): 1199

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [cwaring/vuepress-plugin-ipfs](https://github.com/cwaring/vuepress-plugin-ipfs)| 0 | 0 | 1| 2019-12-04 | 2019-12-04 |
| [dalau6/ipfs-app](https://github.com/dalau6/ipfs-app)| 0 | 0 | 34| 2019-12-01 | 2019-12-01 |
| [shoupn/pgp-node](https://github.com/shoupn/pgp-node)| 0 | 0 | 75| 2019-11-30 | 2019-12-05 |
| [Lucas-Kohorst/ipfs-wiki-search](https://github.com/Lucas-Kohorst/ipfs-wiki-search)| 0 | 0 | 902| 2019-11-29 | 2019-11-29 |
| [yadong-nian/eth-ipfs](https://github.com/yadong-nian/eth-ipfs)| 0 | 0 | 157| 2019-11-28 | 2019-11-28 |
| [nk307/Digital-Educational-Certificate-Au...](https://github.com/nk307/Digital-Educational-Certificate-Authentication-using-Blockchain-and-IPFS)| 0 | 0 | 17993| 2019-11-28 | 2019-11-28 |
| [pabloiarriola/electronic-health-records](https://github.com/pabloiarriola/electronic-health-records)| 0 | 0 | 501| 2019-11-26 | 2019-11-26 |
| [ryanpedersen42/cat-roulette](https://github.com/ryanpedersen42/cat-roulette)| 0 | 0 | 561| 2019-11-25 | 2019-12-03 |
| [imerkle/arweave-ipfs-explorer](https://github.com/imerkle/arweave-ipfs-explorer)| 0 | 0 | 418| 2019-11-23 | 2019-11-28 |
| [imerkle/arweave-ipfs-server](https://github.com/imerkle/arweave-ipfs-server)| 0 | 0 | 181| 2019-11-23 | 2019-11-30 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
