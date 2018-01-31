#!/usr/bin/env node
'use strict'
const meow = require('meow')
const mother = require('.')
const chalk = require('chalk')
const log = console.log

const cli = meow(`
  Usage
   $ mother

   Examples
    $ mother --good
      a bad review
    $ mother --bad
      a good review
`)

log(`
${chalk.gray.bold('Title')}
${chalk.red(mother(cli.flags).title)}
`)
log(`
${chalk.gray.bold('Review')}
${chalk.green(mother(cli.flags).content)}
`)
log(`
${chalk.gray.bold('Rating')}
${chalk.yellow(mother(cli.flags).rating)}${chalk.yellow('/10')}
`)
