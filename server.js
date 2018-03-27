var express = require('express');
var app = express();

var _data = {
	"id": "1",
	"name": "zysoft",
	"sex": "男",
	"age": "23"
}

//设置跨域访问
app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

app.get('/introduce', function(req, res) {
	res.send(_data);
})

app.listen(8880, function() {
	console.log('listening on *:8880');
});