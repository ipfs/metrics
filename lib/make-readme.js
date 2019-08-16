const fs = require('fs')
const path = require('path').join
const template = fs.readFileSync(path(__dirname, 'template.md')).toString()
const logs = path(__dirname, '..', 'logs')

const header = data => {
  let str = 'Total Matches: ' + data.total + '\n\n'
  str += 'Total Results (Limited by GitHUB API): ' + data.items.length + '\n\n'
  str += '| repo | watchers | forks | size | created | pushed |\n'
  str += '| ---- | -------- | ----- | ---- | ------- | ------ |\n'
  return str
}

const clean = name => {
  if (name.length > 40) return name.slice(0, 40) + '...'
  else return name
}

const sorter = data => {
  data.items = data.items.sort((x, y) => new Date(y.created_at) - new Date(x.created_at))
  return data
}

const run = () => {
  const latest = {}

  for (const logfile of fs.readdirSync(logs)) {
    const [type, ts] = logfile.split('--')
    const dt = new Date(ts)
    if (!latest[type]) latest[type] = [dt, logfile]
    if (latest[type][0] < dt) latest[type] = [dt, logfile]
  }

  const repoSearchTable = (data, limit) => {
    let table = header(data)
    const datestring = d => (new Date(d)).toISOString().slice(0, 10)
    let items = data.items
    if (limit) items = items.slice(0, limit)
    for (const d of items) {
      table += `| [${clean(d.full_name)}](https://github.com/${d.full_name})`
      table += `| ${d.watchers_count} | ${d.forks} | ${d.size}`
      table += `| ${datestring(d.created_at)} | ${datestring(d.pushed_at)} |\n`
    }
    return table
  }

  const fromJSON = filename => JSON.parse(fs.readFileSync(path(logs, filename)).toString())

  const goRepoSearch = sorter(fromJSON(latest.repo_search_go[1]))
  const jsRepoSearch = sorter(fromJSON(latest.repo_search_javascript[1]))

  const goRepoSearchTable = repoSearchTable(goRepoSearch)
  fs.writeFileSync(path(__dirname, '..', 'results', 'repo_search_go.md'), goRepoSearchTable)
  const jsRepoSearchTable = repoSearchTable(jsRepoSearch)
  fs.writeFileSync(path(__dirname, '..', 'results', 'repo_search_js.md'), jsRepoSearchTable)

  let readme = template
  readme = readme.replace('REPO_SEARCH_GO', repoSearchTable(goRepoSearch, 10))
  readme = readme.replace('REPO_SEARCH_JS', repoSearchTable(jsRepoSearch, 10))

  // Google Trends
  let trends = JSON.parse(fs.readFileSync(path(__dirname, '..', 'logs', 'google_trends.json')).toString())
  trends = trends.sort((x, y) => x.date - y.date).reverse()
  let ts = 'Google Trends:\n'
  const toString = t => {
    const dt = new Date(t.date)
    let str = '*  '
    str += (dt.getMonth() + 1 + '/' + dt.getFullYear())
    str += (': ' + t.value)
    return str
  }
  ts += trends.slice(0, 12).map(toString).join('\n')
  readme = readme.replace('GOOGLE_TRENDS', ts)
  fs.writeFileSync(path(__dirname, '..', 'results', 'google-trends.md'), trends.map(toString).join('\n'))

  // Write Final Readme
  fs.writeFileSync(path(__dirname, '..', 'README.md'), readme)
}

module.exports = run
