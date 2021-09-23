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
*  9/2021: 100
*  8/2021: 68
*  7/2021: 74
*  6/2021: 82
*  5/2021: 79
*  4/2021: 75
*  3/2021: 80
*  2/2021: 61
*  1/2021: 81
*  12/2020: 47
*  11/2020: 52
*  10/2020: 54

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

Total Matches: 2586

Total Results (Limited by GitHUB API): 430

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [danbrough/ipfs_mobile](https://github.com/danbrough/ipfs_mobile)| 0 | 0 | 159| 2021-09-22 | 2021-09-22 |
| [filecoincrypto/ipfsmgr](https://github.com/filecoincrypto/ipfsmgr)| 1 | 0 | 303| 2021-09-14 | 2021-09-22 |
| [kishansagathiya/chainsafe-assignment](https://github.com/kishansagathiya/chainsafe-assignment)| 1 | 0 | 155| 2021-09-11 | 2021-09-12 |
| [berty/go-ipfs-repo-afero](https://github.com/berty/go-ipfs-repo-afero)| 0 | 0 | 200| 2021-09-09 | 2021-09-16 |
| [treethought/tipfs](https://github.com/treethought/tipfs)| 0 | 0 | 192| 2021-09-08 | 2021-09-19 |
| [jbouwman/go-ipfs-lib-minimal](https://github.com/jbouwman/go-ipfs-lib-minimal)| 0 | 0 | 67| 2021-08-30 | 2021-08-30 |
| [notional-labs/get](https://github.com/notional-labs/get)| 0 | 0 | 15375| 2021-08-27 | 2021-08-27 |
| [iskanderandrews/ipfs-version-0.7.0](https://github.com/iskanderandrews/ipfs-version-0.7.0)| 0 | 0 | 46854| 2021-08-24 | 2021-08-24 |
| [valist-io/go-ipfs-git](https://github.com/valist-io/go-ipfs-git)| 1 | 0 | 84| 2021-08-21 | 2021-08-21 |
| [aquaflamingo/ipfs-repl](https://github.com/aquaflamingo/ipfs-repl)| 0 | 0 | 13| 2021-08-19 | 2021-08-20 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 94272

Total Results (Limited by GitHUB API): 1590

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [solidity-rust/upload-file-to-ipfs.infura...](https://github.com/solidity-rust/upload-file-to-ipfs.infura.io)| 0 | 0 | 2| 2021-09-21 | 2021-09-21 |
| [PatrickVM/decentragrampractice](https://github.com/PatrickVM/decentragrampractice)| 0 | 0 | 534| 2021-09-20 | 2021-09-20 |
| [unfile/unfile](https://github.com/unfile/unfile)| 1 | 0 | 683| 2021-09-19 | 2021-09-22 |
| [SuperStar0225/NFT_marketplace](https://github.com/SuperStar0225/NFT_marketplace)| 0 | 0 | 354| 2021-09-19 | 2021-09-19 |
| [iamvon/thrust-vscode-extension](https://github.com/iamvon/thrust-vscode-extension)| 9 | 0 | 321| 2021-09-19 | 2021-09-20 |
| [venkatesh16031999/CryptoChillouts](https://github.com/venkatesh16031999/CryptoChillouts)| 0 | 0 | 33662| 2021-09-19 | 2021-09-20 |
| [NicolasJEngler/pinata-ipfs-test](https://github.com/NicolasJEngler/pinata-ipfs-test)| 0 | 0 | 214| 2021-09-18 | 2021-09-18 |
| [NguyenIvan/lazy-ipfs-image](https://github.com/NguyenIvan/lazy-ipfs-image)| 0 | 0 | 325| 2021-09-16 | 2021-09-17 |
| [shameer5/DMS](https://github.com/shameer5/DMS)| 0 | 0 | 733| 2021-09-15 | 2021-09-15 |
| [AlbertoLasa/nft-opensea-ipfs](https://github.com/AlbertoLasa/nft-opensea-ipfs)| 0 | 0 | 1611| 2021-09-14 | 2021-09-14 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
