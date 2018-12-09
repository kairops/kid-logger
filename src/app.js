let express = require('express')
let app = express()

// respond with "status true" when a GET request
app.get('/', function(req, res) {
  res.send({ status: true })
})

module.exports = app;