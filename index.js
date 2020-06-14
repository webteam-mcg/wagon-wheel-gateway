const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var morgan = require('morgan');
require('dotenv').config();

const player = require('./src/routes/playerRoutes');

const app = express();
const PORT = process.env.SERVER_PORT;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(morgan('combined'));

// public routes
app.use('/api/v1', player);

app.get('/', (req,res)=>{
    res.send('Server running on port '+PORT);
});

// handle errors
app.use(function (err, req, res, next) {

    if (err.status === 404) res.status(404).json({status: "Not found"});
    else res.status(500).json({status: "Something looks wrong"});
});

app.listen(PORT, ()=>{
    console.log('Server is running on port '+PORT);
});