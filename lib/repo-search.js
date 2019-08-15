const bent = require('bent')
const qs = require('querystring')
const parser = require('parse-link-header')
const headers = { 'user-agent': 'get-deps-0.1.1' }
const baseurl = 'https://api.github.com/search/repositories?'
const get = bent(headers)

const toJSON = stream => new Promise((resolve, reject) => {
  const buffers = []
  stream.on('data', chunk => buffers.push(chunk))
  stream.on('end', () => resolve(JSON.parse(Buffer.concat(buffers).toString())))
  stream.on('error', reject)
})

const props = [
  'size',
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues',
  'full_name',
  'created_at',
  'pushed_at',
  'updated_at'
]

const query = async (token, language) => {
  const ret = { total: 0, items: [] }
  const opts = {
    q: `ipfs+language:${language}`,
    order: 'desc',
    type: 'repositories',
    per_page: 100,
    access_token: token
  }
  let resp
  let link
  let entries
  const run = async url => {
    resp = await get(url)
    link = parser(resp.headers.link)
    const decoded = await toJSON(resp)
    ret.total += decoded.total_count
    entries = decoded.items.map(item => {
      // pluck
      const ret = {}
      props.forEach(p => {
        ret[p] = item[p]
      })
      return ret
    })

    ret.total += entries.length
    ret.items = ret.items.concat(entries)
  }
  await run(baseurl + qs.stringify(opts))

  while (link.next) {
    await run(link.next.url)
  }
  return ret
}

module.exports = query
