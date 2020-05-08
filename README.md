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
*  5/2020: 67
*  4/2020: 65
*  3/2020: 54
*  2/2020: 56
*  1/2020: 56
*  12/2019: 51
*  11/2019: 63
*  10/2019: 55
*  9/2019: 50
*  8/2019: 62
*  7/2019: 62
*  6/2019: 68

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

Total Matches: 1610

Total Results (Limited by GitHUB API): 322

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [alanshaw/ipfs-ds-postgres](https://github.com/alanshaw/ipfs-ds-postgres)| 0 | 0 | 29| 2020-05-04 | 2020-05-06 |
| [whyrusleeping/ipcr](https://github.com/whyrusleeping/ipcr)| 4 | 0 | 6| 2020-05-04 | 2020-05-04 |
| [lthibault/ipfs-fileshare](https://github.com/lthibault/ipfs-fileshare)| 0 | 0 | 50| 2020-04-30 | 2020-05-01 |
| [nlko/ipfs-block-to-cid](https://github.com/nlko/ipfs-block-to-cid)| 1 | 0 | 4| 2020-04-22 | 2020-04-22 |
| [jolatechno/go-ipfs-directory_size_ls](https://github.com/jolatechno/go-ipfs-directory_size_ls)| 0 | 0 | 32| 2020-04-22 | 2020-04-29 |
| [hsanjuan/mfs-replace-root](https://github.com/hsanjuan/mfs-replace-root)| 0 | 0 | 49| 2020-04-21 | 2020-04-22 |
| [tarekbadrshalaan/ipfs.house](https://github.com/tarekbadrshalaan/ipfs.house)| 0 | 0 | 2| 2020-04-19 | 2020-04-19 |
| [ipfs/test-plans](https://github.com/ipfs/test-plans)| 0 | 1 | 50| 2020-04-16 | 2020-04-27 |
| [RTradeLtd/go-datastores](https://github.com/RTradeLtd/go-datastores)| 2 | 0 | 190| 2020-04-15 | 2020-05-07 |
| [romanblanco/graffiti-ipfs](https://github.com/romanblanco/graffiti-ipfs)| 0 | 0 | 38| 2020-04-15 | 2020-04-15 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 70310

Total Results (Limited by GitHUB API): 1282

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [JoseMiguelHerrera/theEthereumBillboard](https://github.com/JoseMiguelHerrera/theEthereumBillboard)| 0 | 0 | 4473| 2020-05-06 | 2020-05-07 |
| [alexvotofuture/dAppVid](https://github.com/alexvotofuture/dAppVid)| 0 | 0 | 1107| 2020-05-06 | 2020-05-07 |
| [bc-ticketing/ipfs-multihash-analysis](https://github.com/bc-ticketing/ipfs-multihash-analysis)| 0 | 0 | 130| 2020-05-03 | 2020-05-07 |
| [rranshous/TrustyPin](https://github.com/rranshous/TrustyPin)| 0 | 0 | 643| 2020-04-30 | 2020-05-03 |
| [Tanyashinde/Ethegram](https://github.com/Tanyashinde/Ethegram)| 0 | 0 | 14105| 2020-04-30 | 2020-04-30 |
| [fazo96/ipfs-video-mirror](https://github.com/fazo96/ipfs-video-mirror)| 0 | 0 | 17| 2020-04-29 | 2020-04-30 |
| [naman-modi/doc-upload-ipfs](https://github.com/naman-modi/doc-upload-ipfs)| 0 | 0 | 12839| 2020-04-29 | 2020-05-03 |
| [santhoshtr/wikipedia-ipfs](https://github.com/santhoshtr/wikipedia-ipfs)| 35 | 3 | 1181| 2020-04-25 | 2020-04-29 |
| [DougAnderson444/sapper-webpack-now-ipfs](https://github.com/DougAnderson444/sapper-webpack-now-ipfs)| 0 | 0 | 346| 2020-04-25 | 2020-05-05 |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-upload-server)| 0 | 0 | 1300| 2020-04-23 | 2020-05-08 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
