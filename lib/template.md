# log-ipfs-dependencies

Regularly log dependency data about IPFS dependents.

This repo contains a scheduled GitHub Action which pulls IPFS dependency data out of BigQuery and stores it 
in [timestamped json](./logs) files in this repo.

## Recent Data

### GitHub Search

These do a repository search, filtered by language, for "ipfs." This search
finds references to ipfs in project names, descriptions, and anything else
GitHub finds relevant (this isn't actually documented very well by GitHub).

#### Go Repositories

REPO_SEARCH_GO

#### JS Repositories

REPO_SEARCH_JS
