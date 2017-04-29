// setting up variables for our node modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// creating a variable for the express function
const app = express();

// importing routes
const todoRoutes = require('./routes/todoRoutes');

// setting up port for express to listen to for activity
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

// directing express to views
app.set('views', path.join(__dirname, 'views'));
// telling express the view file type
app.set('view engine', 'ejs');

// directing express to static files
app.use('static', express.static(path.join(__dirname, 'public')));
// setting up the morgan logger function to run on the dev script
app.use(logger('dev'));
// setting up the body parser function to run on json info
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// setting up the method override module to run on http methods
app.use(methodOverride('_method'));

// setting up the route to the index page
app.get('/', function(req, res){
    res.render('index', {
        message: 'Welcome to my to-do app',
        documentTitle: 'Today\'s To-Do',
    });
});
// directing the app to use the todoRoutes for all todo urls
app.use('/todos', todoRoutes);

// handling 404 errors
app.get('*', function(req, res) {
    res.status(404).send({message: 'Oops! Not found!'});
});

