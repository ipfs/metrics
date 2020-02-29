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
*  2/2020: 61
*  1/2020: 59
*  12/2019: 57
*  11/2019: 60
*  10/2019: 62
*  9/2019: 62
*  8/2019: 63
*  7/2019: 69
*  6/2019: 73
*  5/2019: 77
*  4/2019: 71
*  3/2019: 72

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

Total Matches: 1188

Total Results (Limited by GitHUB API): 297

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [zot/ipfs-p2p-websocket](https://github.com/zot/ipfs-p2p-websocket)| 0 | 0 | 21888| 2020-02-05 | 2020-02-27 |
| [likecoin/likecoin-iscn-ipld](https://github.com/likecoin/likecoin-iscn-ipld)| 0 | 0 | 43| 2020-02-03 | 2020-02-21 |
| [sug0/go-ipfs-boards](https://github.com/sug0/go-ipfs-boards)| 0 | 0 | 21| 2020-01-28 | 2020-02-10 |
| [simpleaswater/twitter-pinbot](https://github.com/simpleaswater/twitter-pinbot)| 3 | 0 | 47| 2020-01-19 | 2020-01-23 |
| [ipfs-search/ipfs-search-2](https://github.com/ipfs-search/ipfs-search-2)| 1 | 0 | 21| 2020-01-14 | 2020-01-21 |
| [schollz/ipfs-connect](https://github.com/schollz/ipfs-connect)| 6 | 1 | 15| 2020-01-08 | 2020-02-13 |
| [cusspvz/react-native-ipfs](https://github.com/cusspvz/react-native-ipfs)| 0 | 0 | 159| 2020-01-06 | 2020-01-10 |
| [utropicmedia/storj-IPFS](https://github.com/utropicmedia/storj-IPFS)| 1 | 0 | 326| 2020-01-03 | 2020-01-25 |
| [coryschwartz/ipfs-study](https://github.com/coryschwartz/ipfs-study)| 0 | 0 | 9| 2019-12-24 | 2019-12-25 |
| [CoderShiun/mqtt-ipfs](https://github.com/CoderShiun/mqtt-ipfs)| 1 | 0 | 8439| 2019-12-23 | 2020-01-03 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 68450

Total Results (Limited by GitHUB API): 1253

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [josselinchevalay/todo-ipfs](https://github.com/josselinchevalay/todo-ipfs)| 0 | 0 | 286| 2020-02-28 | 2020-02-28 |
| [KurtMerbeth/ethily](https://github.com/KurtMerbeth/ethily)| 0 | 1 | 195| 2020-02-26 | 2020-02-26 |
| [alqamahjsr/EthBazaar](https://github.com/alqamahjsr/EthBazaar)| 0 | 0 | 604| 2020-02-22 | 2020-02-22 |
| [thisisraghavkumar/DataShare](https://github.com/thisisraghavkumar/DataShare)| 0 | 0 | 558| 2020-02-22 | 2020-02-22 |
| [dmerrill6/site-from-ipfs-browser-node](https://github.com/dmerrill6/site-from-ipfs-browser-node)| 0 | 0 | 266| 2020-02-21 | 2020-02-21 |
| [aquiladev/ipfs-action](https://github.com/aquiladev/ipfs-action)| 7 | 0 | 26654| 2020-02-20 | 2020-02-27 |
| [textileio/gatsby-ipfs-blog](https://github.com/textileio/gatsby-ipfs-blog)| 2 | 0 | 903| 2020-02-19 | 2020-02-22 |
| [caseykey/ipfs-music-player](https://github.com/caseykey/ipfs-music-player)| 0 | 0 | 4976| 2020-02-16 | 2020-02-17 |
| [SaikrishnaReddy1919/TodoList](https://github.com/SaikrishnaReddy1919/TodoList)| 0 | 0 | 172| 2020-02-16 | 2020-02-16 |
| [ethdev279/hlf-ipod](https://github.com/ethdev279/hlf-ipod)| 0 | 0 | 5| 2020-02-16 | 2020-02-16 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
