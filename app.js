var express = require('express');
var app = express()
var home = require('./home');
var mycourse = require('./mycourse');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, POST, PUT, DELETE, OPTIONS");
    res.header('Content-Type: application/json');
    next();
});

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.use(home);
app.use(mycourse);

app.listen(3333);
console.log('Life-Di backend is running in localhost:3333');
