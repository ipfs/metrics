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
*  5/2020: 79
*  4/2020: 67
*  3/2020: 60
*  2/2020: 56
*  1/2020: 62
*  12/2019: 55
*  11/2019: 60
*  10/2019: 58
*  9/2019: 63
*  8/2019: 66
*  7/2019: 72
*  6/2019: 75

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

Total Matches: 1640

Total Results (Limited by GitHUB API): 327

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [yhsProject/go-ipfs-frame](https://github.com/yhsProject/go-ipfs-frame)| 0 | 0 | 12| 2020-05-18 | 2020-05-19 |
| [likecoin/likecoin-ipfs-cosmosds](https://github.com/likecoin/likecoin-ipfs-cosmosds)| 0 | 0 | 49| 2020-05-18 | 2020-05-18 |
| [Sab94/ipfs-monitor](https://github.com/Sab94/ipfs-monitor)| 0 | 0 | 27| 2020-05-16 | 2020-05-23 |
| [ismcuacor/IPFS](https://github.com/ismcuacor/IPFS)| 0 | 0 | 1880| 2020-05-10 | 2020-05-18 |
| [uranusbeam/bit-ipfs](https://github.com/uranusbeam/bit-ipfs)| 0 | 0 | 1519| 2020-05-10 | 2020-05-10 |
| [alanshaw/ipfs-ds-postgres](https://github.com/alanshaw/ipfs-ds-postgres)| 0 | 0 | 29| 2020-05-04 | 2020-05-06 |
| [whyrusleeping/ipcr](https://github.com/whyrusleeping/ipcr)| 4 | 0 | 6| 2020-05-04 | 2020-05-04 |
| [lthibault/ipfs-fileshare](https://github.com/lthibault/ipfs-fileshare)| 0 | 0 | 50| 2020-04-30 | 2020-05-01 |
| [nlko/ipfs-block-to-cid](https://github.com/nlko/ipfs-block-to-cid)| 1 | 0 | 4| 2020-04-22 | 2020-04-22 |
| [jolatechno/go-ipfs-directory_size_ls](https://github.com/jolatechno/go-ipfs-directory_size_ls)| 0 | 0 | 32| 2020-04-22 | 2020-04-29 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 71218

Total Results (Limited by GitHUB API): 1293

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [siddharth2798/VerifyDapp](https://github.com/siddharth2798/VerifyDapp)| 0 | 0 | 304| 2020-05-23 | 2020-05-23 |
| [sherwyn11/Medi-Care](https://github.com/sherwyn11/Medi-Care)| 0 | 0 | 10691| 2020-05-23 | 2020-05-23 |
| [daviddahl/wut](https://github.com/daviddahl/wut)| 1 | 0 | 693| 2020-05-20 | 2020-05-23 |
| [PrarabdhGarg/ThinQ](https://github.com/PrarabdhGarg/ThinQ)| 0 | 0 | 16629| 2020-05-20 | 2020-05-23 |
| [siddharth2798/VerifyApp](https://github.com/siddharth2798/VerifyApp)| 0 | 0 | 30| 2020-05-20 | 2020-05-20 |
| [ElHassanBaghrar/BlockDeepfake](https://github.com/ElHassanBaghrar/BlockDeepfake)| 0 | 0 | 810| 2020-05-18 | 2020-05-23 |
| [next2kumar/kpfs](https://github.com/next2kumar/kpfs)| 0 | 0 | 388| 2020-05-17 | 2020-05-17 |
| [wisehackermonkey/ipfs-website](https://github.com/wisehackermonkey/ipfs-website)| 0 | 0 | 266| 2020-05-15 | 2020-05-15 |
| [ellttBen/basquiatJS](https://github.com/ellttBen/basquiatJS)| 2 | 0 | 10| 2020-05-15 | 2020-05-20 |
| [fragmnt/stardust-market](https://github.com/fragmnt/stardust-market)| 0 | 0 | 6630| 2020-05-11 | 2020-05-23 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
