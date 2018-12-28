#!/usr/bin/env node
const path = require('path')
const fs = require('fs')

const files = {
  git: '.gitignore',
  npm: '.npmignore'
}

function addPath (file) {
  return path.join(__dirname, '..', 'files', file.slice(1))
}

function copyFile (file) {
  fs.copyFile(addPath(file), file, err => {
    if(err) return console.error(err)
    console.log('Create ignore file success')
  })
}

copyFile(files.git)