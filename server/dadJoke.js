const express = require('express')
const request = require('superagent')

const joke = 'https://icanhazdadjoke.com/'

const router = express.Router()

router.use(express.json())


router.get('/dadjoke', (req, res) => {
    request
      .get(joke)
      .set("Accept", "application/json")
      .end((err, result) => {
        if (err) {
          res.status(500).send(err.message)
        } else {
          res.json(result.body)
        }
      })
  })
  
  module.exports = router
  