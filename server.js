/*var http = require('http'),
 fs = require('fs');

 http.createServer(function(req, res) {
	   
	     res.writeHead(200, {
		         'Content-Type': 'text/html',
			     'Access-Control-Allow-Origin' : '*'
	     });

	     var readStream = fs.createReadStream(__dirname + '/index.html');


	      readStream.pipe(res);
 }).listen(1337);

 console.log('Visit me at http://localhost:1337');
*/

 var express = require('express');
 var app  = express();
 var path = require('path');
 var bodyParser = require('body-parser');
 var adminRouter = express.Router();

 app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

 // app.get('/', function(req, res) {
 // res.sendFile(path.join(__dirname + '/index.html'));
 // });

adminRouter.get('/', function(req, res) {
 res.send('I am the dashboard!');
 });

adminRouter.get('/users', function(req, res) {
 res.send('I show all the users!');
 });

adminRouter.get('/posts', function(req, res) {
 res.send('I show all the posts!');
 });

app.use('/admin', adminRouter);

adminRouter.get('/users/:name', function(req, res) {
 res.send('salut ' + req.params.name + '---' + req.name+ '!');
 });


app.route('/login')
        //  (GET http://localhost:1337/login)
	.get(function(req, res) {
	res.send('this is the login form');
	})        //  (POST http://localhost:1337/login)
	.post(function(req, res) { console.log('processing');
	                res.send('hello ' + req.body.name + '!');
});

// route middleware to validate :name
 adminRouter.param('name', function(req, res, next, name) {
 console.log('doing name validations on ' + name);
 // once validation is done save the new item in the req
 req.name = name;
 // go to the next thing
 next();
 });

// route with parameters (http://localhost:1337/admin/hello/:name)
 adminRouter.get('/hello/:name', function(req, res) {
res.send('hello ' + req.name + '!');
 });

app.listen(1337, function () {
  console.log('Example app listening on port 1337 !');
});