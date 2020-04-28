const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
 
const surveymaster = require('../model/surveymodel');

exports.Get_list_ofsurvey = function (req, res){ 
   
    surveymaster.find(function(err, surveymasters)   {
        if (err) {
            res.json(err); 
        } else {
            res.json(surveymasters);
        }
    });
};

exports.saveservey= function(req,res, err){
    console.log(req.body.Title);
    let newsurveymodel = new surveymaster({
        Title: req.body.Title,
        Desc: req.body.Desc

    });
    newsurveymodel.save((err, surveymaster) => {
        if(err)
        {res.json({msg: "failed to save the surevy"});}
        else{res.json({msg: "Survey updated sucessfully!"});}
    });
     
};

exports.Get_survey_byId = function (req, res) {
 
    var query = {
        "_id": req.params.id
        //"_Date":{$gte:new Date(req.body.FromDate).toISOString(),$lte:new Date(req.body.ToDate).toISOString()}
    }
    surveymaster.find(query, function (err, results) {
        if (err) {
            res.json(err)
        } else {
            res.json(results)
        }
    });
};