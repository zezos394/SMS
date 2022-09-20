const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController{
    // [get] /
    index(req, res, next){
        Course.find({})
            .then(courses => { 
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);  
    }
    // [get]/search
    search(req, res){
        res.render('search')
    }
    
}
module.exports = new SiteController;
