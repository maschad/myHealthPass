const express = require('express')
const path = require('path')
const router = express.Router()

/* gET home page. */
router.get('/', function(req, res) {
  res.sendFile(
      path.join(`${__dirname}/views/index.html`),
      {
          title: 'Express'
      })
})

module.exports = router
