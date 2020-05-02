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
*  4/2020: 62
*  3/2020: 55
*  2/2020: 59
*  1/2020: 59
*  12/2019: 59
*  11/2019: 57
*  10/2019: 66
*  9/2019: 59
*  8/2019: 66
*  7/2019: 65
*  6/2019: 68
*  5/2019: 73

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

Total Matches: 1605

Total Results (Limited by GitHUB API): 320

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [lthibault/ipfs-fileshare](https://github.com/lthibault/ipfs-fileshare)| 0 | 0 | 50| 2020-04-30 | 2020-05-01 |
| [nlko/ipfs-block-to-cid](https://github.com/nlko/ipfs-block-to-cid)| 1 | 0 | 4| 2020-04-22 | 2020-04-22 |
| [jolatechno/go-ipfs-directory_size_ls](https://github.com/jolatechno/go-ipfs-directory_size_ls)| 0 | 0 | 32| 2020-04-22 | 2020-04-29 |
| [hsanjuan/mfs-replace-root](https://github.com/hsanjuan/mfs-replace-root)| 0 | 0 | 49| 2020-04-21 | 2020-04-22 |
| [tarekbadrshalaan/ipfs.house](https://github.com/tarekbadrshalaan/ipfs.house)| 0 | 0 | 2| 2020-04-19 | 2020-04-19 |
| [ipfs/test-plans](https://github.com/ipfs/test-plans)| 0 | 0 | 50| 2020-04-16 | 2020-04-27 |
| [RTradeLtd/go-datastores](https://github.com/RTradeLtd/go-datastores)| 2 | 0 | 145| 2020-04-15 | 2020-05-01 |
| [romanblanco/graffiti-ipfs](https://github.com/romanblanco/graffiti-ipfs)| 0 | 0 | 38| 2020-04-15 | 2020-04-15 |
| [mborho/terraform-provider-ipfs](https://github.com/mborho/terraform-provider-ipfs)| 3 | 0 | 29| 2020-04-09 | 2020-04-20 |
| [itzg/go-ipfs-client](https://github.com/itzg/go-ipfs-client)| 0 | 0 | 30| 2020-04-05 | 2020-04-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 70450

Total Results (Limited by GitHUB API): 1281

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [rranshous/TrustyPin](https://github.com/rranshous/TrustyPin)| 0 | 0 | 563| 2020-04-30 | 2020-04-30 |
| [Tanyashinde/Ethegram](https://github.com/Tanyashinde/Ethegram)| 0 | 0 | 14105| 2020-04-30 | 2020-04-30 |
| [fazo96/ipfs-video-mirror](https://github.com/fazo96/ipfs-video-mirror)| 0 | 0 | 17| 2020-04-29 | 2020-04-30 |
| [naman-modi/doc-upload-ipfs](https://github.com/naman-modi/doc-upload-ipfs)| 0 | 0 | 12835| 2020-04-29 | 2020-04-29 |
| [santhoshtr/wikipedia-ipfs](https://github.com/santhoshtr/wikipedia-ipfs)| 34 | 3 | 1181| 2020-04-25 | 2020-04-29 |
| [DougAnderson444/sapper-webpack-now-ipfs](https://github.com/DougAnderson444/sapper-webpack-now-ipfs)| 0 | 0 | 345| 2020-04-25 | 2020-04-25 |
| [Permissionless-Software-Foundation/ipfs-...](https://github.com/Permissionless-Software-Foundation/ipfs-upload-server)| 0 | 0 | 1281| 2020-04-23 | 2020-05-01 |
| [vaibs28/SecureFileSharingBlockchain](https://github.com/vaibs28/SecureFileSharingBlockchain)| 0 | 0 | 1035| 2020-04-22 | 2020-04-23 |
| [Sladuca/trustory](https://github.com/Sladuca/trustory)| 0 | 0 | 812| 2020-04-22 | 2020-04-29 |
| [leoherzog/LinuxExchangeIPFSSeedbox](https://github.com/leoherzog/LinuxExchangeIPFSSeedbox)| 0 | 0 | 5| 2020-04-18 | 2020-05-01 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
