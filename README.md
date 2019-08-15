# metrics repo

Regularly collect and log metrics about IPFS related projects.

This repo contains a scheduled GitHub Action which pulls IPFS dependency data out of BigQuery and stores it 
in [timestamped json](./logs) files in this repo.

## Recent Data

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

Total Matches: 1064

Total Results (Limited by GitHUB API): 266

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [DeedleFake/9ipfs](https://github.com/DeedleFake/9ipfs)| 0 | 0 | 4| 2019-08-13 | 2019-08-13 |
| [DeedleFake/ipfs-pubpin](https://github.com/DeedleFake/ipfs-pubpin)| 0 | 0 | 7| 2019-08-02 | 2019-08-02 |
| [hasyimibhar/avalanche](https://github.com/hasyimibhar/avalanche)| 1 | 0 | 5| 2019-07-22 | 2019-07-22 |
| [RTradeLtd/cluster-lite](https://github.com/RTradeLtd/cluster-lite)| 0 | 0 | 133| 2019-07-17 | 2019-07-20 |
| [dmcarrington/hlf-ipfs](https://github.com/dmcarrington/hlf-ipfs)| 0 | 0 | 51481| 2019-07-14 | 2019-08-11 |
| [ItalyPaleAle/pinatapinner](https://github.com/ItalyPaleAle/pinatapinner)| 2 | 0 | 12| 2019-07-12 | 2019-07-28 |
| [dtubenetwork/go-ds-sia](https://github.com/dtubenetwork/go-ds-sia)| 0 | 0 | 21| 2019-07-12 | 2019-07-18 |
| [realChainLife/factory24-ipfs-course-test...](https://github.com/realChainLife/factory24-ipfs-course-tests)| 0 | 0 | 23| 2019-07-10 | 2019-07-10 |
| [aanupam23/go-stellar-ipfs](https://github.com/aanupam23/go-stellar-ipfs)| 10 | 1 | 63| 2019-07-10 | 2019-08-12 |
| [RTradeLtd/coredag](https://github.com/RTradeLtd/coredag)| 1 | 0 | 21| 2019-07-01 | 2019-07-02 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_go.md)

#### JS Repositories

Total Matches: 108810

Total Results (Limited by GitHUB API): 1109

| repo | watchers | forks | size | created | pushed |
| ---- | -------- | ----- | ---- | ------- | ------ |
| [nparfen/Blockchain-Document-Management-S...](https://github.com/nparfen/Blockchain-Document-Management-System)| 0 | 0 | 952| 2019-08-15 | 2019-08-15 |
| [SunCowbee/TruffleIpfs](https://github.com/SunCowbee/TruffleIpfs)| 0 | 0 | 341| 2019-08-15 | 2019-08-15 |
| [MicroMolecula/using_IPFS_at_Express](https://github.com/MicroMolecula/using_IPFS_at_Express)| 0 | 0 | 18169| 2019-08-15 | 2019-08-15 |
| [matryoshka-technologies/IPFS-Distributed...](https://github.com/matryoshka-technologies/IPFS-Distributed-Web-uploaded)| 0 | 0 | 488| 2019-08-14 | 2019-08-14 |
| [ipfs/metrics](https://github.com/ipfs/metrics)| 4 | 0 | 142| 2019-08-13 | 2019-08-15 |
| [jimpick/blockly-playground](https://github.com/jimpick/blockly-playground)| 4 | 0 | 28| 2019-08-13 | 2019-08-13 |
| [vinmaxx99/zeta](https://github.com/vinmaxx99/zeta)| 0 | 0 | 738| 2019-08-13 | 2019-08-13 |
| [bocahrokok/ipfs-app](https://github.com/bocahrokok/ipfs-app)| 0 | 0 | 46610| 2019-08-12 | 2019-08-14 |
| [rvagg/js-ds-zipcar](https://github.com/rvagg/js-ds-zipcar)| 2 | 0 | 25| 2019-08-12 | 2019-08-13 |
| [SunCowbee/ipfs-test](https://github.com/SunCowbee/ipfs-test)| 0 | 0 | 9826| 2019-08-10 | 2019-08-10 |


The above set is limited to the 10 most recently created. 
[Full table here.](./results/repo_search_js.md)


