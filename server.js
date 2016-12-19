var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models') 

const Post = require('./models/index.js').Post

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


app.get('/api/post',(req,res)=>{
	Post.findAll()
	.then((data)=>{
		console.log(data, 'We got all the post')
		res.send(data);
	}).catch((error)=>{
		res.send(error)
	})
}) 


app.get('/*',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


db.sequelize.sync().then(function() {
  app.listen(3000)
})
