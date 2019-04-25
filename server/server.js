const path = require('path')
const express = require('express')

const routes = require('./tronalddump')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/', routes)

module.exports = server
