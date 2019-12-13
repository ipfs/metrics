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
*  12/2019: 64
*  11/2019: 57
*  10/2019: 64
*  9/2019: 59
*  8/2019: 65
*  7/2019: 67
*  6/2019: 72
*  5/2019: 76
*  4/2019: 70
*  3/2019: 76
*  2/2019: 68
*  1/2019: 71

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
| [aStarProgrammer/ipsp](https://github.com/aStarProgrammer/ipsp)| 0 | 0 | 13955| 2019-12-05 | 2019-12-06 |
| [pontiyaraja/ipfs-practice](https://github.com/pontiyaraja/ipfs-practice)| 0 | 0 | 14778| 2019-12-03 | 2019-12-09 |
| [textileio/go-foldersync](https://github.com/textileio/go-foldersync)| 2 | 3 | 122| 2019-11-22 | 2019-12-12 |
| [MichaelMure/go-ipfs-pinner](https://github.com/MichaelMure/go-ipfs-pinner)| 1 | 1 | 453| 2019-11-20 | 2019-12-05 |
| [AndreiD/arweave-ipfs-bridge](https://github.com/AndreiD/arweave-ipfs-bridge)| 0 | 0 | 17908| 2019-11-15 | 2019-11-28 |
| [mad-day/ircfs](https://github.com/mad-day/ircfs)| 0 | 0 | 7| 2019-11-07 | 2019-11-11 |
| [wanglg007/go-textile](https://github.com/wanglg007/go-textile)| 0 | 0 | 986| 2019-11-06 | 2019-11-06 |
| [fernandoabolafio/gostampbot](https://github.com/fernandoabolafio/gostampbot)| 0 | 0 | 39| 2019-10-26 | 2019-11-06 |
| [jian-yu/ipfs-connector](https://github.com/jian-yu/ipfs-connector)| 0 | 0 | 34| 2019-10-25 | 2019-10-31 |
| [0zAND1z/ipld-crud](https://github.com/0zAND1z/ipld-crud)| 3 | 0 | 25| 2019-10-24 | 2019-12-08 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 65750

Total Results (Limited by GitHUB API): 1207

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jjanczur/SolidityDrive](https://github.com/jjanczur/SolidityDrive)| 0 | 0 | 399| 2019-12-12 | 2019-12-12 |
| [BCDevs/DecentStore](https://github.com/BCDevs/DecentStore)| 0 | 0 | 353| 2019-12-12 | 2019-12-12 |
| [Salmandabbakuti/DecentStore](https://github.com/Salmandabbakuti/DecentStore)| 1 | 0 | 16| 2019-12-12 | 2019-12-12 |
| [Stremio/stremio-addon-ipfs](https://github.com/Stremio/stremio-addon-ipfs)| 0 | 0 | 2| 2019-12-10 | 2019-12-10 |
| [allilou/orbitdb-wkx-leaflet-draw](https://github.com/allilou/orbitdb-wkx-leaflet-draw)| 0 | 0 | 513| 2019-12-07 | 2019-12-09 |
| [PauloLuan/react-web-ipfs](https://github.com/PauloLuan/react-web-ipfs)| 0 | 0 | 560| 2019-12-07 | 2019-12-07 |
| [cwaring/vuepress-plugin-ipfs](https://github.com/cwaring/vuepress-plugin-ipfs)| 0 | 0 | 1| 2019-12-04 | 2019-12-04 |
| [dalau6/ipfs-app](https://github.com/dalau6/ipfs-app)| 0 | 0 | 34| 2019-12-01 | 2019-12-01 |
| [shoupn/pgp-node](https://github.com/shoupn/pgp-node)| 0 | 0 | 75| 2019-11-30 | 2019-12-05 |
| [Lucas-Kohorst/ipfs-wiki-search](https://github.com/Lucas-Kohorst/ipfs-wiki-search)| 0 | 0 | 902| 2019-11-29 | 2019-11-29 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
