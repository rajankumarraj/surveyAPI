module.exports = function (app){
    
    var servay = require('../controller/surveycontroller');  
    app.route('/suerway')
    .get(servay.Get_list_ofsurvey);
    
    app.route('/suerway/:id')
    .get(servay.Get_survey_byId);

    app.route('/suerway')
    .post(servay.saveservey);

    var servayquest = require('../controller/surveyquestcontroller');  
    app.route('/suerwayquest')
    .get(servayquest.Get_list_ofsureyquest);
    
    app.route('/Get_sureyquest_byId/:id')
    .get(servayquest.Get_sureyquest_byId);

    app.route('/savesureyquest')
    .post(servayquest.savesureyquest);


    var servayUserContrl = require('../controller/serveyusercontroller');  
    app.route('/suerwayUser')
    .get(servayUserContrl.Get_list_of_usermaping);
    
    app.route('/suerwayUser/:useremailid')
    .get(servayUserContrl.Get_survey_user_byUserId);


    app.route('/surveyuser_byId/:id')
    .get(servayUserContrl.Get_survey_user_byId);

    app.route('/savesurveyuser')
    .post(servayUserContrl.savesurveyusermaping);
};