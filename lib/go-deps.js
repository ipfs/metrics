const { BigQuery } = require('@google-cloud/bigquery')

const projectId = 'ipfs-metrics'

const main = async term => {
  if (!process.env.GOOGLE_CREDENTIAL_B64) throw new Error('Missing credentials')
  const cred64 = process.env.GOOGLE_CREDENTIAL_B64

  const credentials = JSON.parse(Buffer.from(cred64, 'base64').toString())

  const bigquery = new BigQuery({ projectId, credentials })

  const base = 'bigquery-public-data.github_repos'
  const datasets = {
    debug: {
      contents: `${base}.sample_contents`,
      files: `${base}.sample_files`
    },
    main: {
      contents: `${base}.contents`,
      files: `${base}.files`
    }
  }
  const mode = 'main'

  const query = `
  SELECT DISTINCT repo_name FROM \`bigquery-public-data.github_repos.files\` WHERE id IN
  (
    SELECT id FROM \`${datasets[mode].contents}\`
    WHERE id IN
      ( SELECT id FROM \`${datasets[mode].files}\` WHERE ENDS_WITH(path, ".go") )
    AND (
      content LIKE '%ipfs%' OR
      content LIKE '%IPFS%'
    )
  )
  `
  const options = {
    query,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US'
  }

  const [rows] = await bigquery.query(options)
  return rows.map(r => r.repo_name)
}

module.exports = main
