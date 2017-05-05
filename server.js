const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

config = require('./config/database');

mongoose.connect(config.database);

// Cors Middelware
app.use(cors());

app.use(bodyparser.json());


require('./routes/routes')(app);



app.listen('5000');

exports = module.exports = app;
