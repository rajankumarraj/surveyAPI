const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./route/route');

const dbConfig = require('./DbConfig');
mongoose.Promise = global.Promise;

var app = express();
var port =3000;

app.use(cors());
app.use(bodyParser.json());
routes(app);  

app.get('/', (req, res) =>
{
    res.send('Root Controlller called!');
});
app.listen(port, () => {
 console.log("server started @", port);
});

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
}); 
 
