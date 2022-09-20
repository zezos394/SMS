const Match = require('../models/Match');
const { mongooseToObject } = require('../../util/mongoose')
class MatchController{
    store(req, res, next){
           const formData = req.body
           const match = new Match(formData)
           match.save()
              .then(() => res.redirect('/courses/:slug/book/confirmation'))
              .catch(error =>{
            })
        // res.json(req.body)
   }
}
module.exports = new MatchController;
