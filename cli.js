#!/usr/bin/env node
'use strict'
const godeps = require('./lib/go-deps')
const path = require('path')
const fs = require('fs')
const codeSearch = require('./lib/code-search')
const makeReadme = require('./lib/make-readme')

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

const runCodeSearch = async argv => {
  const lang = argv.language
  if (!lang) throw new Error('Missing required argument: language')
  const token = argv.token
  if (!token) throw new Error('Missing required argument: token')
  const results = await codeSearch(token, lang)
  log(`code_search_${lang}`, results, argv)
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
  let string = await makeReadme()
  fs.writeFileSync('./README.md', string)
}

const yargs = require('yargs')
const args = yargs
  .command('bq', 'list go deps using BigQuery', outputOption, runGoDeps)
  .command('code-search [language]', 'Use GitHub Code Search', yargs => {
    yargs.positional('language', {
      describe: 'Programing language.'
    })
    tokenOption(yargs)
  }, runCodeSearch)
  .command('readme', 're-write the readme file w/ latest data', () => {}, readmeCommand)
  .argv

if (!args._.length) {
  yargs.showHelp()
}
