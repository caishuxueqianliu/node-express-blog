var express=require('express')
var app=express()
var path=require('path')
var bodyParser=require('body-parser')
//__dirname 动态获取绝对路径，不含文件
//__filename 动态获取绝对路径
//path.join()拼接两个路径
app.use("/public/",express.static(path.join(__dirname,'./public/')))
app.use("/node_modules/",express.static(path.join(__dirname,'./node_modules/')))
//允许外部访问这些资源
app.engine("html",require("express-art-template"))
app.set("views",path.join(__dirname,"./views/"))


app.use(bodyParser.urlencoded({exteded:false}))
app.use(bodyParser.json())

var router=require('./router.js')
app.use(router)




app.listen(3000,()=>{
	console.log('sucess...')
})






module.exports = app













