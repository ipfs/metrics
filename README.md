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
*  2/2021: 74
*  1/2021: 99
*  12/2020: 54
*  11/2020: 38
*  10/2020: 50
*  9/2020: 54
*  8/2020: 57
*  7/2020: 67
*  6/2020: 65
*  5/2020: 57
*  4/2020: 62
*  3/2020: 55

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

Total Matches: 1925

Total Results (Limited by GitHUB API): 385

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 2 | 1 | 66| 2021-02-22 | 2021-02-25 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 2 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 79| 2021-02-04 | 2021-02-16 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 70| 2021-01-22 | 2021-02-25 |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 3 | 0 | 71| 2021-01-09 | 2021-01-09 |
| [myelnet/go-hop-exchange](https://github.com/myelnet/go-hop-exchange)| 14 | 1 | 376| 2021-01-08 | 2021-02-24 |
| [foilen/ipfs-gateway-limited](https://github.com/foilen/ipfs-gateway-limited)| 0 | 0 | 15| 2020-12-26 | 2021-01-23 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 79500

Total Results (Limited by GitHUB API): 1409

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [unicef/certificates](https://github.com/unicef/certificates)| 0 | 0 | 77808| 2021-02-24 | 2021-02-24 |
| [avlabsuk/mecenart](https://github.com/avlabsuk/mecenart)| 0 | 0 | 2574| 2021-02-24 | 2021-02-24 |
| [christroutner/ipfs-bchjs-bridge](https://github.com/christroutner/ipfs-bchjs-bridge)| 0 | 0 | 435| 2021-02-23 | 2021-02-23 |
| [H-N41K/DecenTube](https://github.com/H-N41K/DecenTube)| 0 | 0 | 17575| 2021-02-22 | 2021-02-22 |
| [Permissionless-Software-Foundation/chat....](https://github.com/Permissionless-Software-Foundation/chat.fullstack.cash)| 0 | 0 | 7189| 2021-02-20 | 2021-02-25 |
| [PatrickAlphaC/ipfs_cl_ea](https://github.com/PatrickAlphaC/ipfs_cl_ea)| 0 | 0 | 109| 2021-02-17 | 2021-02-24 |
| [Souvikns/tune-space](https://github.com/Souvikns/tune-space)| 0 | 0 | 12| 2021-02-16 | 2021-02-19 |
| [SaneelDaniel/mock-DApp-dropbox](https://github.com/SaneelDaniel/mock-DApp-dropbox)| 1 | 0 | 7047| 2021-02-16 | 2021-02-16 |
| [littbarskiadeh/ethereum-ipfs-react-app](https://github.com/littbarskiadeh/ethereum-ipfs-react-app)| 0 | 0 | 259| 2021-02-15 | 2021-02-15 |
| [TempleOkosun/ipfs](https://github.com/TempleOkosun/ipfs)| 0 | 0 | 588| 2021-02-14 | 2021-02-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
