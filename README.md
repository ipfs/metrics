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
*  3/2021: 58
*  2/2021: 77
*  1/2021: 86
*  12/2020: 60
*  11/2020: 52
*  10/2020: 63
*  9/2020: 65
*  8/2020: 61
*  7/2020: 64
*  6/2020: 77
*  5/2020: 69
*  4/2020: 57

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
| [DeedleFake/sips](https://github.com/DeedleFake/sips)| 0 | 0 | 26| 2021-03-02 | 2021-03-05 |
| [paulgmiller/zebu](https://github.com/paulgmiller/zebu)| 0 | 0 | 5| 2021-03-01 | 2021-03-03 |
| [ipfs/go-fetcher](https://github.com/ipfs/go-fetcher)| 3 | 2 | 95| 2021-02-22 | 2021-03-05 |
| [miguelcnf/hmf](https://github.com/miguelcnf/hmf)| 1 | 0 | 13| 2021-02-14 | 2021-02-25 |
| [aschmahmann/vole](https://github.com/aschmahmann/vole)| 3 | 0 | 35| 2021-02-10 | 2021-02-10 |
| [hsanjuan/gemini-ipfs-gateway](https://github.com/hsanjuan/gemini-ipfs-gateway)| 1 | 0 | 79| 2021-02-04 | 2021-02-16 |
| [crossedbot/go-warc-indexer](https://github.com/crossedbot/go-warc-indexer)| 0 | 0 | 71| 2021-01-22 | 2021-02-26 |
| [jimpick/ipld-selector-experiments](https://github.com/jimpick/ipld-selector-experiments)| 0 | 0 | 4| 2021-01-12 | 2021-01-12 |
| [myelnet/go-ipfs-hop-plugin](https://github.com/myelnet/go-ipfs-hop-plugin)| 0 | 0 | 67| 2021-01-12 | 2021-01-19 |
| [cartesi/ipfs-service](https://github.com/cartesi/ipfs-service)| 3 | 0 | 71| 2021-01-09 | 2021-01-09 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 80100

Total Results (Limited by GitHUB API): 1420

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [yusefnapora/minty](https://github.com/yusefnapora/minty)| 0 | 0 | 325| 2021-03-05 | 2021-03-06 |
| [shubhamvaity/DecenTube](https://github.com/shubhamvaity/DecenTube)| 0 | 0 | 17575| 2021-03-05 | 2021-03-05 |
| [yash0049/Pic_of_the_day1](https://github.com/yash0049/Pic_of_the_day1)| 0 | 0 | 364| 2021-03-05 | 2021-03-05 |
| [iraj465/EnCrypto-IPFS](https://github.com/iraj465/EnCrypto-IPFS)| 0 | 0 | 33| 2021-03-04 | 2021-03-05 |
| [whoiswentz/meme-of-the-day](https://github.com/whoiswentz/meme-of-the-day)| 0 | 0 | 1371| 2021-03-04 | 2021-03-05 |
| [social-network/ipfs-pinata-deploy-action](https://github.com/social-network/ipfs-pinata-deploy-action)| 0 | 0 | 786| 2021-03-03 | 2021-03-03 |
| [eole868/4everlink-cli](https://github.com/eole868/4everlink-cli)| 0 | 0 | 266| 2021-03-03 | 2021-03-03 |
| [goard/meme-web-app](https://github.com/goard/meme-web-app)| 0 | 0 | 684| 2021-03-01 | 2021-03-01 |
| [igibliss00/decentralized-instagram](https://github.com/igibliss00/decentralized-instagram)| 0 | 0 | 408| 2021-03-01 | 2021-03-01 |
| [bam-emr/ipfs-react](https://github.com/bam-emr/ipfs-react)| 0 | 0 | 111| 2021-03-01 | 2021-03-06 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
