var express = require('express');

var app = express.createServer();

app.configure(function(){
    app.use(express.logger());
    app.use(express.bodyParser());
});

// routes

app.get('/', function(req,res){
    res.send('Welcome to node.js+express login demo!<hr/><ul><li><a href="/login">Login</a></ul>');
});

app.get('/login', function(req,res){
    res.send('<form action="/login" method="post"><input type="text" name="username" /><input type="password" name="password"/><input type="submit" value="Login" /></form><br/>Try: admin/123456');
});

app.post('/login', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    if(username === 'admin' && password === '123456') {
	res.send('Login successfully, <a href="/">go home</a>');
    } else {
	res.send('Invalid username or password, <a href="/login">login again</a>');
    }
});

app.listen(3000);

console.log('Server started, please visit http://localhost:3000');