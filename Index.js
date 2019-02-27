var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var session = require('express-session')

//ejs
app.set('views', './views')
app.set('view engine', 'ejs')

//bodyPaser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

//session
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
   resave : false, saveUninitialized: false }))

app.get('/', function(req, res){
   res.render('form')
})


app.get('/form', function(req, res){
   res.render('form')
})

app.post('/index',urlencodedParser,(req,res) => {
   var email = req.body.email
   var pass = req.body.password
   var sess = req.session
   // console.log(email);
   // console.log(pass);
   if(email && parseInt(pass) == 240311){
      
      // res.render('admin')
      sess.email = email
      sess.pass = pass
      res.render('lobby',{detail:email})
   }
   else{
      // sess.email = email
      // sess.pass = pass
      // res.render('lobby',{detail:email})
      res.render('admin')
   }
})

app.get('/index2',(req,res) => {
   req.session.email = "noData"
   res.render('logOutPage')
})


app.get('/index',(req,res) => {
   console.log(req.session.email);
   if(req.session.email != "noData"){
      res.render('current',{detail:req.session.email})
   }
   else{
      res.render('admin')
   }
})



app.listen(8000)

