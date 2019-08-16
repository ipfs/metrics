#!/usr/bin/env node
'use strict'
const godeps = require('./lib/go-deps')
const path = require('path')
const fs = require('fs')
const repoSearch = require('./lib/repo-search')
const makeReadme = require('./lib/make-readme')
const trends = require('./lib/trends')

const now = () => new Date()
const v = '--v1'
const logfile = (n) => (n || '') + now().toISOString().slice(0, 19) + v + '.json'

const log = (name, obj, argv) => {
  name = name + '--'
  const str = JSON.stringify(obj, null, 2)
  if (argv.output) {
    fs.writeFileSync(path.join(argv.output, logfile(name)), str)
  } else {
    console.log(str)
  }
}

const runGoDeps = async argv => {
  const deps = await godeps()
  log('bq_go', deps, argv)
}

const runRepoSearch = async argv => {
  const lang = argv.language
  if (!lang) throw new Error('Missing required argument: language')
  const token = argv.token
  if (!token) throw new Error('Missing required argument: token')
  const results = await repoSearch(token, lang)
  log(`repo_search_${lang}`, results, argv)
}

const outputOption = yargs => {
  yargs.option('output', {
    describe: 'Directory to write output log. Will print if unset.'
  })
}

const tokenOption = yargs => {
  yargs.options('token', {
    describe: 'GitHub token. Defaults to env variable GHTOKEN || GITHUB_TOKEN.',
    default: process.env.GHTOKEN || process.env.GITHUB_TOKEN
  })
}

const readmeCommand = async argv => {
  await makeReadme()
}

const trendsCommand = async argv => {
  let data = await trends()
  let json = JSON.stringify(data, null, 2)
  if (argv.output) fs.writeFileSync(path.join(argv.output, 'google_trends.json'), json)
  else console.log(json)
}

const yargs = require('yargs')
const args = yargs
  .command('bq', 'list go deps using BigQuery', outputOption, runGoDeps)
  .command('repo-search [language]', 'Collect from GitHub Repo Search', yargs => {
    yargs.positional('language', {
      describe: 'Programing language.'
    })
    tokenOption(yargs)
  }, runRepoSearch)
  .command('trends', 'collect google trends data', outputOption, trendsCommand)
  .command('readme', 're-write the readme file w/ latest data', () => {}, readmeCommand)
  .argv

if (!args._.length) {
  yargs.showHelp()
}
