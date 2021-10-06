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
*  10/2021: 62
*  9/2021: 96
*  8/2021: 79
*  7/2021: 77
*  6/2021: 81
*  5/2021: 77
*  4/2021: 94
*  3/2021: 84
*  2/2021: 77
*  1/2021: 93
*  12/2020: 54
*  11/2020: 43

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

Total Matches: 2598

Total Results (Limited by GitHUB API): 433

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [myml/apt-ipfs](https://github.com/myml/apt-ipfs)| 0 | 0 | 70| 2021-10-05 | 2021-10-05 |
| [ipfs/go-ipfs-regression](https://github.com/ipfs/go-ipfs-regression)| 0 | 0 | 0| 2021-09-28 | 2021-09-29 |
| [fgeth/fg-ipfs](https://github.com/fgeth/fg-ipfs)| 0 | 0 | 1737| 2021-09-23 | 2021-09-24 |
| [danbrough/ipfs_mobile](https://github.com/danbrough/ipfs_mobile)| 0 | 0 | 345| 2021-09-22 | 2021-10-03 |
| [filecoincrypto/ipfsmgr](https://github.com/filecoincrypto/ipfsmgr)| 1 | 0 | 303| 2021-09-14 | 2021-09-22 |
| [berty/go-ipfs-repo-afero](https://github.com/berty/go-ipfs-repo-afero)| 0 | 1 | 277| 2021-09-09 | 2021-09-30 |
| [treethought/tipfs](https://github.com/treethought/tipfs)| 0 | 0 | 192| 2021-09-08 | 2021-09-19 |
| [jbouwman/go-ipfs-lib-minimal](https://github.com/jbouwman/go-ipfs-lib-minimal)| 0 | 0 | 67| 2021-08-30 | 2021-08-30 |
| [notional-labs/get](https://github.com/notional-labs/get)| 0 | 0 | 15375| 2021-08-27 | 2021-08-27 |
| [iskdrews/ipfs-version-0.7.0](https://github.com/iskdrews/ipfs-version-0.7.0)| 0 | 0 | 46854| 2021-08-24 | 2021-08-24 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 95033

Total Results (Limited by GitHUB API): 1607

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [quieoo/nft_fabric_ipfs](https://github.com/quieoo/nft_fabric_ipfs)| 0 | 0 | 7104| 2021-10-05 | 2021-10-05 |
| [abistorage/ipfs-tools](https://github.com/abistorage/ipfs-tools)| 0 | 0 | 7| 2021-10-02 | 2021-10-02 |
| [Webners1/Dapp-Insta-Web3.0](https://github.com/Webners1/Dapp-Insta-Web3.0)| 0 | 0 | 330| 2021-10-01 | 2021-10-01 |
| [ipfs-examples/js-ipfs-browser-lit](https://github.com/ipfs-examples/js-ipfs-browser-lit)| 0 | 0 | 130| 2021-09-30 | 2021-09-30 |
| [miield/NextjsIPFSFleek](https://github.com/miield/NextjsIPFSFleek)| 0 | 0 | 7654| 2021-09-30 | 2021-09-30 |
| [shivamtyagi577/BlockTune](https://github.com/shivamtyagi577/BlockTune)| 0 | 0 | 52966| 2021-09-29 | 2021-09-29 |
| [mmalmi/ipfs-gun-chat](https://github.com/mmalmi/ipfs-gun-chat)| 0 | 0 | 333| 2021-09-29 | 2021-09-30 |
| [wrightkhlebisol/nftfy](https://github.com/wrightkhlebisol/nftfy)| 0 | 0 | 153| 2021-09-29 | 2021-10-02 |
| [clocigno/decentralized_video_hosting](https://github.com/clocigno/decentralized_video_hosting)| 0 | 0 | 635| 2021-09-28 | 2021-09-28 |
| [gatij10/ipfs_server_setup](https://github.com/gatij10/ipfs_server_setup)| 0 | 0 | 24| 2021-09-26 | 2021-09-26 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
