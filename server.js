var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
// var apiRouter = require('./routes/api.js')
var db = require('./models')
var Post = require('./models/index').Post

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


// app.use(apiRouter)

app.get("/api/post", (req, res) => {
  Post.findAll()
    .then((data) => {
      res.send(data)
    })
})

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync().then(function() {
  app.listen(3000)
})
