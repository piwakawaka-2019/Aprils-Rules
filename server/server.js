const path = require('path')
const express = require('express')

const tronaldDump = require('./tronaldDump')
const nuckChorris = require('./nuckChorris')
const dadJoke = require('./dadJoke')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', tronaldDump)
server.use('/api/v1/', nuckChorris)
server.use('/api/v1/', dadJoke)

module.exports = server
