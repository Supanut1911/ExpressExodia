
var express = require('express')
var app = express()

app.set('views', './ex')
app.set('view engine', 'ejs')

app.get('/fruit', function(req, res){
   res.render('fruit', {fruits: ['banana', 'apple'] , foo: 'bar'})
})
app.listen(8000)
