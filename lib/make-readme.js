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

  const codeSearchTable = data => {
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
  const goCodeSearch = fromJSON(latest['code_search_go'][1])
  readme = readme.replace('CODE_SEARCH_GO', codeSearchTable(goCodeSearch))
  return readme
}

module.exports = run
run()

