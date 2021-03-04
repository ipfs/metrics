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
*  3/2021: 60
*  2/2021: 74
*  1/2021: 76
*  12/2020: 52
*  11/2020: 55
*  10/2020: 55
*  9/2020: 60
*  8/2020: 57
*  7/2020: 65
*  6/2020: 67
*  5/2020: 59
*  4/2020: 55

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

Total Matches: 1935

Total Results (Limited by GitHUB API): 387

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 0 | 0 | 18| 2021-03-02 | 2021-03-03 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 2 | 2 | 81| 2021-02-22 | 2021-03-02 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 2 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 79| 2021-02-04 | 2021-02-16 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 71| 2021-01-22 | 2021-02-26 |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 3 | 0 | 71| 2021-01-09 | 2021-01-09 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 79886

Total Results (Limited by GitHUB API): 1417

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [social-network/ipfs-pinata-deploy-action](https://github.com/social-network/ipfs-pinata-deploy-action)| 0 | 0 | 786| 2021-03-03 | 2021-03-03 |
| [eole868/4everlink-cli](https://github.com/eole868/4everlink-cli)| 0 | 0 | 266| 2021-03-03 | 2021-03-03 |
| [goard/meme-web-app](https://github.com/goard/meme-web-app)| 0 | 0 | 684| 2021-03-01 | 2021-03-01 |
| [igibliss00/decentralized-instagram](https://github.com/igibliss00/decentralized-instagram)| 0 | 0 | 408| 2021-03-01 | 2021-03-01 |
| [bam-emr/ipfs-react](https://github.com/bam-emr/ipfs-react)| 0 | 0 | 110| 2021-03-01 | 2021-03-01 |
| [igibliss00/decentralized-dropbox](https://github.com/igibliss00/decentralized-dropbox)| 0 | 0 | 1296| 2021-03-01 | 2021-03-01 |
| [munazhe/mesic](https://github.com/munazhe/mesic)| 1 | 1 | 216| 2021-02-28 | 2021-03-01 |
| [unicef/certificates](https://github.com/unicef/certificates)| 0 | 0 | 77808| 2021-02-24 | 2021-02-24 |
| [avlabsuk/mecenart](https://github.com/avlabsuk/mecenart)| 0 | 0 | 2574| 2021-02-24 | 2021-02-24 |
| [christroutner/ipfs-bchjs-bridge](https://github.com/christroutner/ipfs-bchjs-bridge)| 0 | 0 | 435| 2021-02-23 | 2021-02-23 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
