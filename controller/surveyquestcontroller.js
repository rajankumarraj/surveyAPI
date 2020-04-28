const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
 
const sureyquest = require('../model/SurveyQues');


exports.Get_list_ofsureyquest = function (req, res){ 
   
    sureyquest.find(function(err, sureyquests)   {
        
        if (err) {
            res.json(err); 
        } else {
            res.json(sureyquests);
        }
    });
};

exports.savesureyquest= function(req,res, err){
    console.log(req.body.Title);
    let newsureyquest = new sureyquest({
        question: req.body.question,
        serveyid: req.body.serveyid

    });
    newsureyquest.save((err, sureyquest) => {
        if(err)
        {res.json({msg: "failed to save the surevy"});}
        else{res.json({msg: "Survey updated sucessfully!"});}
    });
     

};

exports.Get_sureyquest_byId = function (req, res) {
    var query = {
        "_id": req.params.id
        //"_Date":{$gte:new Date(req.body.FromDate).toISOString(),$lte:new Date(req.body.ToDate).toISOString()}
    }
    sureyquest.find(query, function (err, results) {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    });
};

 