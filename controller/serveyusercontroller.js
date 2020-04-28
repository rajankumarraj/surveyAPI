const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const surveyusermaping = require('../model/serveyUsermapping');


exports.Get_list_of_usermaping = function (req, res){ 
   
    surveyusermaping.find(function(err, surveymasters)   {
        if (err) {
            res.json(err); 
        } else {
            res.json(surveymasters);
        }
    });
};


exports.savesurveyusermaping = function(req,res, err){
    console.log(req.body.Title);
    let newsurveyusermaping = new surveyusermaping({
        serveyid: req.body.serveyid,
        useremailid: req.body.useremailid

    });
    newsurveyusermaping.save((err, surveyusermaping) => {
        if(err)
        {res.json({msg: "failed to save the surevy"});}
        else{res.json({msg: "Survey updated sucessfully!"});}
    });
     
};

exports.Get_survey_user_byId = function (req, res) {
 
    var query = {
        "_id": req.params.id
        //"_Date":{$gte:new Date(req.body.FromDate).toISOString(),$lte:new Date(req.body.ToDate).toISOString()}
    }
    surveyusermaping.find(query, function (err, results) {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    });
};

exports.Get_survey_user_byUserId = function (req, res) {
 
    var query = {
        "useremailid": req.params.id
        //"_Date":{$gte:new Date(req.body.FromDate).toISOString(),$lte:new Date(req.body.ToDate).toISOString()}
    }
    surveyusermaping.find(query, function (err, results) {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    });
};