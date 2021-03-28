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
*  3/2021: 79
*  2/2021: 67
*  1/2021: 86
*  12/2020: 59
*  11/2020: 46
*  10/2020: 49
*  9/2020: 65
*  8/2020: 59
*  7/2020: 60
*  6/2020: 69
*  5/2020: 67
*  4/2020: 65

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

Total Matches: 1950

Total Results (Limited by GitHUB API): 390

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [multiverse-vcs/go-git-ipfs](https://github.com/multiverse-vcs/go-git-ipfs)| 1 | 0 | 37| 2021-03-25 | 2021-03-27 |
| [jimmyaxod/ipfscrawl](https://github.com/jimmyaxod/ipfscrawl)| 1 | 0 | 89| 2021-03-17 | 2021-03-27 |
| [seunggin/toolsForIPFS](https://github.com/seunggin/toolsForIPFS)| 0 | 0 | 1| 2021-03-15 | 2021-03-15 |
| [dikshabagdi/ipfs-api](https://github.com/dikshabagdi/ipfs-api)| 0 | 1 | 6| 2021-03-07 | 2021-03-07 |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 1 | 0 | 26| 2021-03-02 | 2021-03-05 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [textileio/go-buckets](https://github.com/textileio/go-buckets)| 3 | 1 | 10780| 2021-02-26 | 2021-03-27 |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 4 | 3 | 167| 2021-02-22 | 2021-03-24 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 3 | 0 | 35| 2021-02-10 | 2021-02-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 81750

Total Results (Limited by GitHUB API): 1441

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [KachanS/hak_ipfs_survey](https://github.com/KachanS/hak_ipfs_survey)| 0 | 0 | 109| 2021-03-27 | 2021-03-27 |
| [imgur-to-ipfs/imgur-to-ipfs.github.io](https://github.com/imgur-to-ipfs/imgur-to-ipfs.github.io)| 0 | 0 | 41| 2021-03-27 | 2021-03-27 |
| [dysbulic/xml-to-ipld](https://github.com/dysbulic/xml-to-ipld)| 0 | 0 | 232| 2021-03-26 | 2021-03-27 |
| [yathartharora/Decentralised-Drive](https://github.com/yathartharora/Decentralised-Drive)| 0 | 0 | 26462| 2021-03-26 | 2021-03-27 |
| [atomantic/hicetnunc_tools](https://github.com/atomantic/hicetnunc_tools)| 3 | 0 | 18| 2021-03-25 | 2021-03-26 |
| [lukewickens1989/dec_tube](https://github.com/lukewickens1989/dec_tube)| 0 | 0 | 929| 2021-03-25 | 2021-03-25 |
| [NiteshSamuel/Prototype-secure-docVault-b...](https://github.com/NiteshSamuel/Prototype-secure-docVault-blockchian_and_IPFS)| 0 | 0 | 10615| 2021-03-24 | 2021-03-24 |
| [CH-Scoding/ipfs-uploader](https://github.com/CH-Scoding/ipfs-uploader)| 0 | 0 | 411| 2021-03-23 | 2021-03-23 |
| [imestin/DP-IPFS-hello-world](https://github.com/imestin/DP-IPFS-hello-world)| 0 | 0 | 94| 2021-03-23 | 2021-03-27 |
| [Angulo66/ERC721-dapp](https://github.com/Angulo66/ERC721-dapp)| 0 | 0 | 470| 2021-03-23 | 2021-03-23 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
