var express=require('express')
var app=express()
var path=require('path')
//__dirname 动态获取绝对路径，不含文件
//__filename 动态获取绝对路径
//path.join()拼接两个路径
app.use("/public/",express.static(path.join(__dirname,'./public/')))
app.use("/node_modules/",express.static(path.join(__dirname,'./node_modules/')))
//允许外部访问这些资源

var router=require('./router.js')
app.use(router)

module.exports = app


app.listen(3000,()=>{
	console.log('sucess...')
})




















