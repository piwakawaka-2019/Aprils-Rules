const express = require('express')
const request = require('superagent')
const randomQuote = 'https://api.tronalddump.io/random/quote';
const Norris = 'https://geek-jokes.sameerkumar.website/api'

const router = express.Router()

router.use(express.json())

router.get('/tronalddump', (req, res) => {
  console.log('API call')
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

router.get('/nuckChorris', (req, res) => {
  console.log('API call')
  request
    .get(Norris)
    .end((err, result) => {
      if (err) {
        res.status(500).send(err.message)
      } else {
        res.json(result.body)
      }
    })
})

module.exports = router
