var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log("get请求");
	res.send("hello world get method");
})

app.post('/',function(req, res) {
	console.log("post请求");
	res.send("hello world post method");
})

var server = app.listen(80, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log("应用程序的访问地址为 http://%s:%s", host, port);

})
