var express = require('express'),
    app = express(),
    path = require('path'),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

//Views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Client
app.use(express.static(path.join(__dirname, 'client')));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
  console.log('Server is listening on Port: ' + port );
})
