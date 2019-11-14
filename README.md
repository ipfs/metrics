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
*  11/2019: 66
*  10/2019: 63
*  9/2019: 61
*  8/2019: 62
*  7/2019: 65
*  6/2019: 76
*  5/2019: 79
*  4/2019: 72
*  3/2019: 76
*  2/2019: 74
*  1/2019: 76
*  12/2018: 73

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

Total Matches: 1108

Total Results (Limited by GitHUB API): 277

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [mad-day/ircfs](https://github.com/mad-day/ircfs)| 0 | 0 | 7| 2019-11-07 | 2019-11-11 |
| [wanglg007/go-textile](https://github.com/wanglg007/go-textile)| 0 | 0 | 986| 2019-11-06 | 2019-11-06 |
| [fernandoabolafio/gostampbot](https://github.com/fernandoabolafio/gostampbot)| 0 | 0 | 39| 2019-10-26 | 2019-11-06 |
| [jian-yu/ipfs-connector](https://github.com/jian-yu/ipfs-connector)| 0 | 0 | 34| 2019-10-25 | 2019-10-31 |
| [0zAND1z/ipld-crud](https://github.com/0zAND1z/ipld-crud)| 3 | 0 | 18| 2019-10-24 | 2019-10-29 |
| [textileio/grpc-ipfs-lite](https://github.com/textileio/grpc-ipfs-lite)| 4 | 0 | 5432| 2019-10-22 | 2019-11-11 |
| [glvd/cluster](https://github.com/glvd/cluster)| 0 | 0 | 713| 2019-10-21 | 2019-11-01 |
| [ipfs-search/ipfs-sniffer](https://github.com/ipfs-search/ipfs-sniffer)| 0 | 0 | 30| 2019-10-13 | 2019-10-14 |
| [pontiyaraja/ipfs-pubsub](https://github.com/pontiyaraja/ipfs-pubsub)| 0 | 0 | 17| 2019-10-11 | 2019-10-11 |
| [agencyenterprise/pem-utils](https://github.com/agencyenterprise/pem-utils)| 1 | 0 | 36| 2019-10-08 | 2019-10-08 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 64600

Total Results (Limited by GitHUB API): 1185

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [koushikbhargav/IPFS-and-Ethereum](https://github.com/koushikbhargav/IPFS-and-Ethereum)| 0 | 0 | 258| 2019-11-13 | 2019-11-13 |
| [joshpelkey/joshpelkey.eth](https://github.com/joshpelkey/joshpelkey.eth)| 0 | 0 | 2424| 2019-11-12 | 2019-11-12 |
| [openworklabs/react-native-ipfs-http-clie...](https://github.com/openworklabs/react-native-ipfs-http-client)| 2 | 0 | 388| 2019-11-12 | 2019-11-12 |
| [Emmanuel-umeh/IPFSaeternity](https://github.com/Emmanuel-umeh/IPFSaeternity)| 0 | 0 | 68| 2019-11-11 | 2019-11-11 |
| [Rutvik1995/IpfsFileUploadWithNode.Js](https://github.com/Rutvik1995/IpfsFileUploadWithNode.Js)| 0 | 0 | 10569| 2019-11-11 | 2019-11-11 |
| [floating/uniswap-frontend](https://github.com/floating/uniswap-frontend)| 0 | 0 | 7394| 2019-11-04 | 2019-11-04 |
| [Rutvik1995/ImageUploadInIPFS](https://github.com/Rutvik1995/ImageUploadInIPFS)| 0 | 0 | 475| 2019-11-04 | 2019-11-04 |
| [leeftk/ipfsdemo](https://github.com/leeftk/ipfsdemo)| 0 | 0 | 2035| 2019-11-03 | 2019-11-03 |
| [Emmanuel-umeh/IPFS-Aeternity](https://github.com/Emmanuel-umeh/IPFS-Aeternity)| 0 | 0 | 51| 2019-10-31 | 2019-10-31 |
| [mkg20001/stardust4ipfs](https://github.com/mkg20001/stardust4ipfs)| 1 | 0 | 10| 2019-10-31 | 2019-11-01 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)
