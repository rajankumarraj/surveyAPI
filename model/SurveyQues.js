const mongoose = require('mongoose');

const sureyquestschema = mongoose.Schema({
     
    question: String,
    serveyid: String
     
} );

 
module.exports = mongoose.model('sureyquest', sureyquestschema);