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
*  9/2021: 94
*  8/2021: 95
*  7/2021: 85
*  6/2021: 78
*  5/2021: 78
*  4/2021: 94
*  3/2021: 90
*  2/2021: 75
*  1/2021: 95
*  12/2020: 55
*  11/2020: 45
*  10/2020: 51

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

Total Matches: 2556

Total Results (Limited by GitHUB API): 426

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [treethought/tipfs](https://github.com/treethought/tipfs)| 0 | 0 | 37| 2021-09-08 | 2021-09-08 |
| [jbouwman/go-ipfs-lib-minimal](https://github.com/jbouwman/go-ipfs-lib-minimal)| 0 | 0 | 67| 2021-08-30 | 2021-08-30 |
| [notional-labs/get](https://github.com/notional-labs/get)| 0 | 0 | 15375| 2021-08-27 | 2021-08-27 |
| [iskanderandrews/ipfs-version-0.7.0](https://github.com/iskanderandrews/ipfs-version-0.7.0)| 0 | 0 | 46854| 2021-08-24 | 2021-08-24 |
| [valist-io/go-ipfs-git](https://github.com/valist-io/go-ipfs-git)| 1 | 0 | 84| 2021-08-21 | 2021-08-21 |
| [aquaflamingo/ipfs-repl](https://github.com/aquaflamingo/ipfs-repl)| 0 | 0 | 13| 2021-08-19 | 2021-08-20 |
| [iotaledger/go-ds-kvstore](https://github.com/iotaledger/go-ds-kvstore)| 1 | 0 | 26| 2021-08-18 | 2021-08-19 |
| [omar391/IPFS-Smart-Contract](https://github.com/omar391/IPFS-Smart-Contract)| 0 | 0 | 95| 2021-08-16 | 2021-08-16 |
| [ali2210/legendary-bassoon](https://github.com/ali2210/legendary-bassoon)| 0 | 0 | 9675| 2021-08-07 | 2021-08-08 |
| [KEINOS/go-ipfs-as-a-library](https://github.com/KEINOS/go-ipfs-as-a-library)| 0 | 0 | 344| 2021-08-06 | 2021-08-29 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 93700

Total Results (Limited by GitHUB API): 1588

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [sreekar9601/Polygon-Video-Streaming-App](https://github.com/sreekar9601/Polygon-Video-Streaming-App)| 0 | 0 | 825| 2021-09-08 | 2021-09-08 |
| [MehdizadeMilad/ipfsNode](https://github.com/MehdizadeMilad/ipfsNode)| 0 | 0 | 65| 2021-09-08 | 2021-09-08 |
| [Margotte83/MyPictureDay](https://github.com/Margotte83/MyPictureDay)| 0 | 0 | 420| 2021-09-07 | 2021-09-07 |
| [rfzsal/ipfs-blockchain](https://github.com/rfzsal/ipfs-blockchain)| 0 | 0 | 90| 2021-09-07 | 2021-09-07 |
| [GalaxyLittlepaws/music-player](https://github.com/GalaxyLittlepaws/music-player)| 0 | 0 | 60467| 2021-09-07 | 2021-09-07 |
| [ykxVK8yL5L/ipfs](https://github.com/ykxVK8yL5L/ipfs)| 0 | 0 | 842| 2021-09-05 | 2021-09-07 |
| [pi-rate14/DreadIt](https://github.com/pi-rate14/DreadIt)| 0 | 0 | 641| 2021-09-04 | 2021-09-07 |
| [the-n-project/pinny](https://github.com/the-n-project/pinny)| 3 | 2 | 94| 2021-09-04 | 2021-09-04 |
| [nscl-unlv/ibe-on-ipfs](https://github.com/nscl-unlv/ibe-on-ipfs)| 0 | 0 | 3684| 2021-09-03 | 2021-09-03 |
| [imestin/ipfs-blog-website-flavour-solidi...](https://github.com/imestin/ipfs-blog-website-flavour-solidity)| 0 | 0 | 34140| 2021-09-03 | 2021-09-03 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
