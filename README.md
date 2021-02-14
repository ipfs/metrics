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
*  2/2021: 84
*  1/2021: 86
*  12/2020: 52
*  11/2020: 54
*  10/2020: 59
*  9/2020: 60
*  8/2020: 65
*  7/2020: 61
*  6/2020: 67
*  5/2020: 60
*  4/2020: 61
*  3/2020: 60

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

Total Matches: 1915

Total Results (Limited by GitHUB API): 383

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 2 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 78| 2021-02-04 | 2021-02-05 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 66| 2021-01-22 | 2021-02-08 |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 3 | 0 | 71| 2021-01-09 | 2021-01-09 |
| [myelnet/go-hop-exchange](https://github.com/myelnet/go-hop-exchange)| 9 | 1 | 201| 2021-01-08 | 2021-02-10 |
| [foilen/ipfs-gateway-limited](https://github.com/foilen/ipfs-gateway-limited)| 0 | 0 | 15| 2020-12-26 | 2021-01-23 |
| [kalambet/ipfsbatcher](https://github.com/kalambet/ipfsbatcher)| 0 | 0 | 20571| 2020-12-12 | 2020-12-22 |
| [taflaj/merge](https://github.com/taflaj/merge)| 0 | 0 | 20| 2020-12-06 | 2020-12-11 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 79000

Total Results (Limited by GitHUB API): 1402

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [natasha-rupani/SimpleIPFS-React](https://github.com/natasha-rupani/SimpleIPFS-React)| 0 | 0 | 90| 2021-02-13 | 2021-02-13 |
| [rubengue/descentralize-user-profile](https://github.com/rubengue/descentralize-user-profile)| 0 | 0 | 211| 2021-02-13 | 2021-02-13 |
| [SYL0/DeBox](https://github.com/SYL0/DeBox)| 0 | 0 | 1244| 2021-02-11 | 2021-02-11 |
| [undermethod/BCDV1011-lab3](https://github.com/undermethod/BCDV1011-lab3)| 0 | 0 | 25| 2021-02-10 | 2021-02-12 |
| [lanmower/chakrachain](https://github.com/lanmower/chakrachain)| 2 | 0 | 349| 2021-02-09 | 2021-02-11 |
| [PsychoLlama/dddns](https://github.com/PsychoLlama/dddns)| 0 | 0 | 1560| 2021-02-09 | 2021-02-09 |
| [yeimiyaz/IPFS-project](https://github.com/yeimiyaz/IPFS-project)| 0 | 0 | 14| 2021-02-06 | 2021-02-14 |
| [priyaminhas/GeorgeBrown_IPFS](https://github.com/priyaminhas/GeorgeBrown_IPFS)| 0 | 0 | 220| 2021-02-06 | 2021-02-09 |
| [kziechmann/skejj](https://github.com/kziechmann/skejj)| 0 | 0 | 4637| 2021-02-05 | 2021-02-13 |
| [davekaj/scrape-snapshot](https://github.com/davekaj/scrape-snapshot)| 1 | 0 | 180| 2021-02-03 | 2021-02-04 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
