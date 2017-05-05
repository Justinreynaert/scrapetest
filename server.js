const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

config = require('./config/database');

mongoose.connect(config.database);

// Cors Middelware
app.use(cors());



//body parser middleware

//BodyParser Middelware configuration
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));


require('./routes/routes')(app);

app.all('/*', function(req, res) {
    res.sendFile(__dirname, 'public/index.html');
});



app.listen(process.env.PORT || 5000);

exports = module.exports = app;
