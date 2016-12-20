var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
// var apiRouter = require('./routes/api.js')
var db = require('./models')

const Post = require('./models/index.js').Post
const Comment = require('./models/index.js').Comment
const Vote = require('./models/index.js').Vote


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


// app.use(apiRouter)

//GET REQUEST
app.get('/api/post',(req,res)=>{
	Post.findAll()
	.then((data)=>{
		console.log(data, 'We got all the post')
		res.send(data);
	}).catch((error)=>{
		res.send(error)
	})
})
app.get('/api/comment',(req,res)=>{
	Comment.findAll()
	.then((data)=>{
		console.log(data, 'We got all the comments')
		res.send(data);
	}).catch((error)=>{
		res.send(error)
	})
})

app.get('/api/comment/:id', (req,res)=>{
	Comment.findById(req.params.id)
	.then((data)=>{
		console.log(data, 'found this comment ID!')
		res.send(data);
	})
	.catch((error)=>{
		console.log(error, 'Error!')
	})
})

app.get('/api/vote',(req,res)=>{
	Vote.findAll()
	.then((data)=>{
		console.log(data, 'We got all the votes')
		res.send(data);
	}).catch((error)=>{
		res.send(error)
	})
})


//POST REQUEST
app.post('/api/post', (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body})
    .then((data) => {
      res.send(data);
    }).catch((error) => {
      res.send(error)
    })
  })

  app.post('/api/comment', (req, res) => {
  	console.log(req.body);
    Comment.create({
      comment: req.body.comment,
      PostId: req.body.id
    }).then((data) => {
    	console.log(data, 'we made a comment!')
      res.send(data)
    }).catch((error) => {
      res.send(error)
    })
  })

  app.post('/api/vote', (req, res) => {
    Vote.create({
      vote: req.body.vote,
      PostId: req.body.id
    })
    .then((data) => {
      res.send(200)
    }).catch((error) => {
      res.send(error)
    })
  })


  //DELETE REQUEST
  app.delete('/api/post/:id', (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((data) => {
      res.send(200)
    }).catch((error) => {
      res.send(error)
    })
  })
  app.delete('/api/comment/:id', (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((data) => {
      res.send(200)
    }).catch((error) => {
      res.send(error)
    })
  })
  app.delete('/api/vote/:id', (req, res) => {
    Vote.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((data) => {
      res.send(200)
    }).catch((error) => {
      res.send(error)
    })
  })




app.get('/*',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/index.html'))
})


db.sequelize.sync().then(function() {
  app.listen(3000)
})
