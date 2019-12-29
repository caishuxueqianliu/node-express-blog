
  // res.setHeader("Access-Control-Allow-Origin", "*");
var fs = require('fs')

var express = require('express')
var router = express.Router()


 router.get('/', function (req, res) { 
 res.render("index.html")
  })

 router.get('/login', function (req, res) {
 res.render("login.html")
  })

  router.get('/register', function (req, res) {
 res.render("register.html")
  })

   router.post('/login', function (req, res) {

  })

  router.post('/register', function (req, res) {
console.log(req.body)
  })
// 3. 把 router 导出
module.exports = router
