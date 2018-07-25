#!/usr/bin/env node

const fs = require('fs')

const files = {
  git: '.gitignore',
  npm: '.npmignore'
}

function writeFile (name, content) {
  fs.writeFile(name, content, 'utf8', err => {
    if(err) return console.err(err)
    console.log('Create ignore file success')
  })
}

writeFile(files.git, 'node_modules')