var express = require("express");
var app     = express();
var path    = require("path");
var fs = require("fs");
app.use(express.static(__dirname + '/UI'));

app.get('/',function(req,res){
	fs.readFile('/index.html','utf8',function(err,data){
		if(err)
		{
			return console.log(err);
		}
		else
		{
			res.setHeader('content-Type','text-html');
		   res.end(data);
		}
	});
});


app.listen(process.env.PORT || 3000);
console.log('Running on 3000');