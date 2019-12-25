/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

var fs = require('fs')
var Student = require('./student-m')
var express = require('express')
var router = express.Router()



 router.get('/', function (req, res) {
  Student.find(function (err, students) {  
    if (err) {
      return res.status(500).send('Server error.')
    }
     res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(students)
 
  
    })
  })

 router.get('/a', function (req, res) {
 res.json('students')
  })
// 3. 把 router 导出
module.exports = router
