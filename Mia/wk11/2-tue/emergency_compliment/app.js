var express = require('express')
var _ = require('lodash')
var app = express()
const PORT = 9080;

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res){
  var compliment = randComp()
  var color = randColor()
  var name = ""
  res.render('index', {
    compliment,
    color,
    name
  })
})


app.get('/:name', function(req, res){
  var compliment = randComp()
  var color = randColor()
  var name = req.params.name
  res.render('index', {
    compliment,
    color,
    name
  })
})

function randComp(){
  let compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]
  return _.sample(compliments)
}

function randColor(){
  let colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
  return _.sample(colors)
}

app.listen(PORT, function(){
  console.log(`listening from port ${PORT}`);
});