const express = require('express')
const request = require('superagent')

const norris = 'https://geek-jokes.sameerkumar.website/api'

const router = express.Router()

router.use(express.json())


router.get('/nuckchorris', (req, res) => {
    request
      .get(norris)
      .end((err, result) => {
        if (err) {
          res.status(500).send(err.message)
        } else {
          res.json(result.body)
        }
      })
  })
  
  module.exports = router
  