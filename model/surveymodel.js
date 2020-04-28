const mongoose = require('mongoose');

const sureymasterschema = mongoose.Schema({
     
    Title: String,
    Desc: String
     
} );

 
module.exports = mongoose.model('surveymaster', sureymasterschema);