'use strict'

const fs = require('fs')
const cp = require('child_process')
const net = require('net')
const config = require('../config')

var client = null

var connect = () => {
    return net.connect({port: config.port}, () => {
        if (client !== null) {
            client.write('hello')
        }
    })
}

var start = (app) => {
    if (client === null) {
        client = connect()
        client.on('data', (data) => {
            app.quit()
            client.end()
            client = null
        })
    }
}

var watch = (app, files) => {
    const opts = { persistent: true, recursive: true }
    files.forEach(file => {
        fs.watch(file, opts, (event, filename) => {
            start(app)
        })
    })
}

module.exports = {
    'watch': watch
}
