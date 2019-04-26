const express = require('express')
const request = require('superagent')

const joke = 'https://icanhazdadjoke.com/search'

const router = express.Router()

router.use(express.json())


router.get('/dadjoke', (req, res) => {
    console.log('API call')
    request
      .get(joke)
      .end((err, result) => {
        if (err) {
          res.status(500).send(err.message)
        } else {
          res.json(result.body)
        }
      })
  })
  
  module.exports = router
  