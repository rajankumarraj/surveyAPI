const mongoose = require('mongoose');

const surveyusermapingschema = mongoose.Schema({
    serveyid: String,
    useremailid: String
} );

 
module.exports = mongoose.model('surveyusermaping', surveyusermapingschema);