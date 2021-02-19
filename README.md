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
*  2/2021: 66
*  1/2021: 86
*  12/2020: 48
*  11/2020: 42
*  10/2020: 49
*  9/2020: 67
*  8/2020: 64
*  7/2020: 66
*  6/2020: 60
*  5/2020: 62
*  4/2020: 53
*  3/2020: 49

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

Total Matches: 1920

Total Results (Limited by GitHUB API): 384

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 12| 2021-02-14 | 2021-02-14 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 2 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 79| 2021-02-04 | 2021-02-16 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 68| 2021-01-22 | 2021-02-14 |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 3 | 0 | 71| 2021-01-09 | 2021-01-09 |
| [myelnet/go-hop-exchange](https://github.com/myelnet/go-hop-exchange)| 13 | 1 | 351| 2021-01-08 | 2021-02-18 |
| [foilen/ipfs-gateway-limited](https://github.com/foilen/ipfs-gateway-limited)| 0 | 0 | 15| 2020-12-26 | 2021-01-23 |
| [kalambet/ipfsbatcher](https://github.com/kalambet/ipfsbatcher)| 0 | 0 | 20571| 2020-12-12 | 2020-12-22 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 79350

Total Results (Limited by GitHUB API): 1407

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [PatrickAlphaC/ipfs_cl_ea](https://github.com/PatrickAlphaC/ipfs_cl_ea)| 0 | 0 | 104| 2021-02-17 | 2021-02-17 |
| [sduval215/blackbox-solidity](https://github.com/sduval215/blackbox-solidity)| 0 | 0 | 883| 2021-02-17 | 2021-02-18 |
| [Souvikns/tune-space](https://github.com/Souvikns/tune-space)| 0 | 0 | 11| 2021-02-16 | 2021-02-18 |
| [SaneelDaniel/mock-DApp-dropbox](https://github.com/SaneelDaniel/mock-DApp-dropbox)| 1 | 0 | 7047| 2021-02-16 | 2021-02-16 |
| [littbarskiadeh/ethereum-ipfs-react-app](https://github.com/littbarskiadeh/ethereum-ipfs-react-app)| 0 | 0 | 259| 2021-02-15 | 2021-02-15 |
| [TempleOkosun/ipfs](https://github.com/TempleOkosun/ipfs)| 0 | 0 | 588| 2021-02-14 | 2021-02-14 |
| [natasha-rupani/SimpleIPFS-React](https://github.com/natasha-rupani/SimpleIPFS-React)| 0 | 0 | 90| 2021-02-13 | 2021-02-13 |
| [rubengue/descentralize-user-profile](https://github.com/rubengue/descentralize-user-profile)| 0 | 0 | 211| 2021-02-13 | 2021-02-13 |
| [SYL0/DeBox](https://github.com/SYL0/DeBox)| 0 | 0 | 1244| 2021-02-11 | 2021-02-11 |
| [undermethod/BCDV1011-lab3](https://github.com/undermethod/BCDV1011-lab3)| 0 | 0 | 25| 2021-02-10 | 2021-02-12 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
