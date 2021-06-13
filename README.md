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
*  6/2021: 89
*  5/2021: 83
*  4/2021: 91
*  3/2021: 87
*  2/2021: 73
*  1/2021: 94
*  12/2020: 53
*  11/2020: 40
*  10/2020: 55
*  9/2020: 60
*  8/2020: 56
*  7/2020: 71

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

Total Matches: 2406

Total Results (Limited by GitHUB API): 401

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [manishmeganathan/peerchat](https://github.com/manishmeganathan/peerchat)| 1 | 0 | 47| 2021-06-11 | 2021-06-11 |
| [hsanjuan/go-ipfs-geoip](https://github.com/hsanjuan/go-ipfs-geoip)| 0 | 0 | 40| 2021-05-18 | 2021-05-18 |
| [hyde042/ipfs](https://github.com/hyde042/ipfs)| 0 | 0 | 58| 2021-05-17 | 2021-05-18 |
| [TortugaIsle/iphs](https://github.com/TortugaIsle/iphs)| 0 | 0 | 5| 2021-05-13 | 2021-05-14 |
| [hamersaw/bitswap-cannon](https://github.com/hamersaw/bitswap-cannon)| 0 | 0 | 33539| 2021-05-13 | 2021-05-24 |
| [tezos-commons/tezos-ipfs](https://github.com/tezos-commons/tezos-ipfs)| 2 | 0 | 36832| 2021-04-26 | 2021-05-04 |
| [scryptic86/gibon](https://github.com/scryptic86/gibon)| 0 | 0 | 191| 2021-04-22 | 2020-08-07 |
| [anirudha-bs/Distributed_storage_ipfs](https://github.com/anirudha-bs/Distributed_storage_ipfs)| 0 | 0 | 18| 2021-04-20 | 2021-05-18 |
| [sebastiendan/go-ipfs](https://github.com/sebastiendan/go-ipfs)| 0 | 0 | 61956| 2021-04-09 | 2021-05-31 |
| [ohmpatel1997/ipfs-ethereum](https://github.com/ohmpatel1997/ipfs-ethereum)| 0 | 0 | 204531| 2021-04-04 | 2021-04-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 87500

Total Results (Limited by GitHUB API): 1516

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jedecast/hhSaberNFT](https://github.com/jedecast/hhSaberNFT)| 0 | 0 | 65675| 2021-06-12 | 2021-06-12 |
| [ipfs-examples/js-ipfs-bundler-browserify](https://github.com/ipfs-examples/js-ipfs-bundler-browserify)| 0 | 0 | 44888| 2021-06-11 | 2021-06-12 |
| [b69liu/ipfs-contract-react](https://github.com/b69liu/ipfs-contract-react)| 0 | 0 | 291| 2021-06-11 | 2021-06-11 |
| [llofa/UTubed](https://github.com/llofa/UTubed)| 0 | 0 | 6873| 2021-06-09 | 2021-06-09 |
| [YashUppal1/DeStor](https://github.com/YashUppal1/DeStor)| 0 | 0 | 1686| 2021-06-08 | 2021-06-11 |
| [dhruvampatel/ipfs](https://github.com/dhruvampatel/ipfs)| 0 | 0 | 299| 2021-06-08 | 2021-06-08 |
| [oliveriosousa/js-ipfs-example-types-use-...](https://github.com/oliveriosousa/js-ipfs-example-types-use-ipfs-from-typed-js)| 0 | 0 | 483| 2021-06-07 | 2021-06-07 |
| [oliveriosousa/js-ipfs-example-custom-tra...](https://github.com/oliveriosousa/js-ipfs-example-custom-traverse-ipld-graphs)| 0 | 0 | 50| 2021-06-07 | 2021-06-07 |
| [oliveriosousa/js-ipfs-example-test-ipfs-...](https://github.com/oliveriosousa/js-ipfs-example-test-ipfs-example)| 0 | 0 | 16| 2021-06-07 | 2021-06-07 |
| [oliveriosousa/js-ipfs-example-run-multip...](https://github.com/oliveriosousa/js-ipfs-example-run-multiple-nodes)| 0 | 0 | 19| 2021-06-07 | 2021-06-07 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
