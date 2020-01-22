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
*  1/2020: 55
*  12/2019: 54
*  11/2019: 58
*  10/2019: 65
*  9/2019: 58
*  8/2019: 72
*  7/2019: 69
*  6/2019: 73
*  5/2019: 81
*  4/2019: 74
*  3/2019: 76
*  2/2019: 68

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

Total Matches: 1164

Total Results (Limited by GitHUB API): 291

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [simpleaswater/twitter-pinbot](https://github.com/simpleaswater/twitter-pinbot)| 0 | 0 | 45| 2020-01-19 | 2020-01-21 |
| [ipfs-search/ipfs-search-2](https://github.com/ipfs-search/ipfs-search-2)| 0 | 0 | 21| 2020-01-14 | 2020-01-21 |
| [cusspvz/react-native-ipfs](https://github.com/cusspvz/react-native-ipfs)| 0 | 0 | 159| 2020-01-06 | 2020-01-10 |
| [coryschwartz/ipfs-study](https://github.com/coryschwartz/ipfs-study)| 0 | 0 | 9| 2019-12-24 | 2019-12-25 |
| [CoderShiun/mqtt-ipfs](https://github.com/CoderShiun/mqtt-ipfs)| 1 | 0 | 8439| 2019-12-23 | 2020-01-03 |
| [factory24/ipfs-course-tests](https://github.com/factory24/ipfs-course-tests)| 0 | 0 | 20| 2019-12-14 | 2019-12-14 |
| [CsterKuroi/ipfs-file-enc](https://github.com/CsterKuroi/ipfs-file-enc)| 0 | 0 | 5| 2019-12-13 | 2020-01-14 |
| [aStarProgrammer/ipsp](https://github.com/aStarProgrammer/ipsp)| 0 | 0 | 14410| 2019-12-05 | 2020-01-07 |
| [pontiyaraja/ipfs-practice](https://github.com/pontiyaraja/ipfs-practice)| 0 | 0 | 14778| 2019-12-03 | 2019-12-09 |
| [textileio/go-foldersync](https://github.com/textileio/go-foldersync)| 4 | 3 | 199| 2019-11-22 | 2020-01-08 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 66500

Total Results (Limited by GitHUB API): 1221

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [jwicks31/VerifyHash](https://github.com/jwicks31/VerifyHash)| 0 | 0 | 137| 2020-01-20 | 2020-01-20 |
| [BlastillROID/ipfs-nodejs](https://github.com/BlastillROID/ipfs-nodejs)| 0 | 0 | 35| 2020-01-17 | 2020-01-17 |
| [vexanium/Gravatar](https://github.com/vexanium/Gravatar)| 0 | 0 | 491| 2020-01-17 | 2020-01-20 |
| [kleros/json-to-ipfs](https://github.com/kleros/json-to-ipfs)| 0 | 0 | 98| 2020-01-16 | 2020-01-16 |
| [utkarshtrivedi56/Store-Chain](https://github.com/utkarshtrivedi56/Store-Chain)| 0 | 0 | 2580| 2020-01-16 | 2020-01-18 |
| [hugomrdias/ipfs-react-native](https://github.com/hugomrdias/ipfs-react-native)| 3 | 0 | 278| 2020-01-16 | 2020-01-16 |
| [quorumcontrol/ipfs-deploy-github-action](https://github.com/quorumcontrol/ipfs-deploy-github-action)| 0 | 0 | 14656| 2020-01-15 | 2020-01-17 |
| [nirmit1509/Pdf-uploader-on-ipfs](https://github.com/nirmit1509/Pdf-uploader-on-ipfs)| 0 | 0 | 376| 2020-01-15 | 2020-01-15 |
| [SohaibIbneAli/IPFS-Blockchain](https://github.com/SohaibIbneAli/IPFS-Blockchain)| 0 | 0 | 972| 2020-01-09 | 2020-01-09 |
| [Velenir/nextjs-ipfs-example](https://github.com/Velenir/nextjs-ipfs-example)| 0 | 0 | 117| 2020-01-03 | 2020-01-05 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
