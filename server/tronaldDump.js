const express = require('express')
const request = require('superagent')
const randomQuote = 'https://api.tronalddump.io/random/quote';

const router = express.Router()

router.use(express.json())

router.get('/tronalddump', (req, res) => {
  request
    .get(randomQuote)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
