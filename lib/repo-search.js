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
    per_page: 100,
    access_token: token
  }
  let requests = 0

  const pager = async opts => {
    let resp
    let link
    let entries

    const run = async url => {
      console.log(url)
      requests += 1
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
  }
  await pager(opts)

  const slam = async () => {
    for (const sort of ['updated', 'stars', 'forks', 'help-wanted-issues']) {
      opts.sort = sort
      opts.order = 'desc'
      await pager(opts)
    }
  }

  // TODO: check if length of items is 1000K
  if (ret.items.length === 1000) await slam()

  const seen = new Set()
  ret.items = ret.items.filter(item => {
    if (seen.has(item.full_name)) return false
    seen.add(item.full_name)
    return true
  })
  ret.api_requests = requests

  return ret
}

module.exports = query
