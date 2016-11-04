var express = require('express')
var app = new express()
//反向代理
var request = require('request')
var app = new express()
app.use(express.static('public'))

/*默认静态路进*/
app.get('/',function(req,res,next){
	res.json(req.headers)
})
var apiBaseUrl = 'http://news-at.zhihu.com'
app.get(/^\/api\/.+$/,function(req,res,next){
	console.log('porxy:{%$ => %$}','-----------',req.url,apiBaseUrl+req.url)        
	request.get(apiBaseUrl+req.url,function(err,response,body){
		if(err){
			console.log(err)
			res.json({})
		}else{
			res.send(body)
		}
	})
})


app.listen(3000,function(){
	console.log('app.js+zepto app ready port 3000')
})

module.exports = app ;