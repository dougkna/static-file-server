var http = require('http');
var express = require('express');
var app = express();
app.set('view engine', 'html');
var fs = require('fs');


app.get('/home', function(req, res){
	res.sendFile(__dirname + '/public' + '/home.html')
})

app.get('/*', function(req, res){
	var back =req.params[0]
	var thePath = (__dirname+'/public/'+req.params[0]);
	fs.stat(thePath, function(err, stat){
		if (err){ res.send('You caused an error.')
			return;
		};
		if (stat.isFile()){
			res.sendFile(thePath);
		} else {
			directory(thePath, back, function(array){
				var obj = {files: array}
				console.log(obj.files[0].error)
				res.send(obj)
				//res.render('index', {array: array, GoBack: trim(back)})
			})
		}
	})
});

function directory(pathMain, reqPath, callback) {
	var array = [];
	fs.readdir(pathMain, function(err, files){
		if (err){
			console.log(err);
		} else {
			processFile(reqPath, array, files, callback)
		}
	})
}

function processFile(reqPath, array, files, callback){
	var file = files.pop()
	fs.stat(__dirname+'/public/'+reqPath+'/'+file, function(err, stat){
		if (err){ 
			console.log('Folder is empty.') 
			var detail = {
				error: "empty",
				name: "This folder is empty.",
			}
			array.push(detail)
		};
		if (files.length === 0 ){
			return callback(array)
		}
		var detail = {
			name: file,
			url: buildURL(reqPath, file),
			type: stat.isFile() ? "file" : "dir"
		}
		array.push(detail);
		processFile(reqPath, array, files, callback);
	})
}

function buildURL(reqPath, file){
	return reqPath ? reqPath + '/' + file : file;
}

function trim(address){
	var num = address.lastIndexOf('/')
	if (num > 0){
		//console.log(address.substring(0,num));
		var result = address.substring(0,num);
		return result;
	} else {
		if (num <= 0){
			 return '../'
		}
	}
}

app.listen(2222, function(){
	console.log('listening to port 2222');
});

