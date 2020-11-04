const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost/data");
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use('/api',require('./routes/api'));

//Error handelling middleware
app.use(function(err, req,res,next){
    res.status(422).send(err.message)
});
    
app.listen(9000, () => {
    console.log('Database mounted at port 9000\n')
})