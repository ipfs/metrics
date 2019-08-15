const fs = require('fs')
const path = require('path').join
const template = fs.readFileSync(path(__dirname, 'template.md')).toString()
const logs = path(__dirname, '..', 'logs')

const header = data => {
  let str = 'Total: ' + data.total + '\n\n'
  str += '| repo | watchers | forks | size | created | pushed |\n'
  str += '| ---- | -------- | ----- | ---- | ------- | ------ |\n'
  return str
}

const run = () => {
  const latest = {}

  for (let logfile of fs.readdirSync(logs)) {
    const [type, ts] = logfile.split('--')
    const dt = new Date(ts)
    if (!latest[type]) latest[type] = [dt, logfile]
    if (latest[type][0] < dt) latest[type] = [dt, logfile]
  }

  const repoSearchTable = data => {
    let table = header(data)
    let datestring = d => (new Date(d)).toISOString().slice(0,10) 
    for (d of data.items) {
      table += `| [${d.full_name}](https://github.com/${d.full_name})`
      table += `| ${d.watchers_count} | ${d.forks} | ${d.size}`
      table += `| ${datestring(d.created_at)} | ${datestring(d.pushed_at)} |\n`
    }
    return table
  }

  const fromJSON = filename => JSON.parse(fs.readFileSync(path(logs, filename)).toString())

  let readme = template
  const goRepoSearch = fromJSON(latest['repo_search_go'][1])
  const jsRepoSearch = fromJSON(latest['repo_search_javascript'][1])
  readme = readme.replace('REPO_SEARCH_GO', repoSearchTable(goRepoSearch))
  readme = readme.replace('REPO_SEARCH_JS', repoSearchTable(jsRepoSearch))
  return readme
}

module.exports = run
run()

