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
*  12/2019: 65
*  11/2019: 59
*  10/2019: 65
*  9/2019: 62
*  8/2019: 64
*  7/2019: 67
*  6/2019: 75
*  5/2019: 73
*  4/2019: 71
*  3/2019: 77
*  2/2019: 70
*  1/2019: 75

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

Total Matches: 1136

Total Results (Limited by GitHUB API): 284

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [factory24/ipfs-course-tests](https://github.com/factory24/ipfs-course-tests)| 0 | 0 | 20| 2019-12-14 | 2019-12-14 |
| [CsterKuroi/ipfs-file-enc](https://github.com/CsterKuroi/ipfs-file-enc)| 0 | 0 | 5| 2019-12-13 | 2019-12-13 |
| [aStarProgrammer/ipsp](https://github.com/aStarProgrammer/ipsp)| 0 | 0 | 13955| 2019-12-05 | 2019-12-06 |
| [pontiyaraja/ipfs-practice](https://github.com/pontiyaraja/ipfs-practice)| 0 | 0 | 14778| 2019-12-03 | 2019-12-09 |
| [textileio/go-foldersync](https://github.com/textileio/go-foldersync)| 2 | 3 | 122| 2019-11-22 | 2019-12-12 |
| [MichaelMure/go-ipfs-pinner](https://github.com/MichaelMure/go-ipfs-pinner)| 1 | 1 | 453| 2019-11-20 | 2019-12-05 |
| [AndreiD/arweave-ipfs-bridge](https://github.com/AndreiD/arweave-ipfs-bridge)| 0 | 0 | 17908| 2019-11-15 | 2019-11-28 |
| [mad-day/ircfs](https://github.com/mad-day/ircfs)| 0 | 0 | 7| 2019-11-07 | 2019-11-11 |
| [wanglg007/go-textile](https://github.com/wanglg007/go-textile)| 0 | 0 | 986| 2019-11-06 | 2019-11-06 |
| [fernandoabolafio/gostampbot](https://github.com/fernandoabolafio/gostampbot)| 0 | 0 | 39| 2019-10-26 | 2019-11-06 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 65950

Total Results (Limited by GitHUB API): 1212

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [sotolab/node_upload_ipfs](https://github.com/sotolab/node_upload_ipfs)| 0 | 0 | 474| 2019-12-16 | 2019-12-16 |
| [inakineitor/ipfs-multiplexer](https://github.com/inakineitor/ipfs-multiplexer)| 0 | 0 | 224| 2019-12-16 | 2019-12-16 |
| [johngrantuk/numerai-helper](https://github.com/johngrantuk/numerai-helper)| 0 | 0 | 121| 2019-12-15 | 2019-12-16 |
| [bhuwanadhikari/ipfs-with-blockchain](https://github.com/bhuwanadhikari/ipfs-with-blockchain)| 0 | 0 | 315| 2019-12-15 | 2019-12-15 |
| [jjanczur/SolidityDrive](https://github.com/jjanczur/SolidityDrive)| 0 | 0 | 727| 2019-12-12 | 2019-12-13 |
| [BCDevs/DecentStore](https://github.com/BCDevs/DecentStore)| 0 | 0 | 405| 2019-12-12 | 2019-12-15 |
| [Salmandabbakuti/DecentStore](https://github.com/Salmandabbakuti/DecentStore)| 1 | 0 | 16| 2019-12-12 | 2019-12-12 |
| [Stremio/stremio-addon-ipfs](https://github.com/Stremio/stremio-addon-ipfs)| 0 | 0 | 2| 2019-12-10 | 2019-12-10 |
| [allilou/orbitdb-wkx-leaflet-draw](https://github.com/allilou/orbitdb-wkx-leaflet-draw)| 0 | 0 | 513| 2019-12-07 | 2019-12-09 |
| [PauloLuan/react-web-ipfs](https://github.com/PauloLuan/react-web-ipfs)| 0 | 0 | 560| 2019-12-07 | 2019-12-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
