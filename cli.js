#!/usr/bin/env node
'use strict'
const godeps = require('./lib/go-deps')
const path = require('path')
const fs = require('fs')

const now = () => new Date()
const v = '-v1'
const logfile = (n) => (n || '') + now().toISOString().slice(0, 19) + v + '.log'

const log = (name, obj, argv) => {
  name = name + '-'
  const str = JSON.stringify(obj, null, 2)
  if (argv.output) {
    fs.writeFileSync(path.join(argv.output, logfile(name)), str)
  } else {
    console.log(str)
  }
}


const runGoDeps = async argv => {
  let deps = await godeps()
  log('go', deps, argv)  
}

const outputOption = yargs => {
  yargs.option('output', {
    describe: 'Directory to write output log. Will print if unset.'
  })
}

const yargs = require('yargs')
const args = yargs
  .command('go', 'list go deps', outputOption, runGoDeps)
  .argv

if (!args._.length) {
  yargs.showHelp()
} 
