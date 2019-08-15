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

const run = () => {
  const latest = {}

  for (const logfile of fs.readdirSync(logs)) {
    const [type, ts] = logfile.split('--')
    const dt = new Date(ts)
    if (!latest[type]) latest[type] = [dt, logfile]
    if (latest[type][0] < dt) latest[type] = [dt, logfile]
  }

  const repoSearchTable = data => {
    let table = header(data)
    const datestring = d => (new Date(d)).toISOString().slice(0, 10)
    const items = data.items.sort((x, y) => new Date(y.created_at) - new Date(x.created_at))
    for (const d of items) {
      table += `| [${clean(d.full_name)}](https://github.com/${d.full_name})`
      table += `| ${d.watchers_count} | ${d.forks} | ${d.size}`
      table += `| ${datestring(d.created_at)} | ${datestring(d.pushed_at)} |\n`
    }
    return table
  }

  const fromJSON = filename => JSON.parse(fs.readFileSync(path(logs, filename)).toString())

  let readme = template
  const goRepoSearch = fromJSON(latest.repo_search_go[1])
  const jsRepoSearch = fromJSON(latest.repo_search_javascript[1])
  readme = readme.replace('REPO_SEARCH_GO', repoSearchTable(goRepoSearch))
  readme = readme.replace('REPO_SEARCH_JS', repoSearchTable(jsRepoSearch))
  return readme
}

module.exports = run
