const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose')
class CourseController{
    // [get]/courses/:slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show',{
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [get]/courses/create
    create(req, res, next){
        res.render('courses/create')
    }
    
    // [post]/courses/store
    store(req, res, next){
         const formData = req.body
         formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
         const course = new Course(formData)
         course.save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error =>{
            })
         
    }
    // [get]/courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next);
    }
    // [get]/courses/:slug/book
    book(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/book_details',{
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    // [post]/courses/:slug/book/confirmation
    confirm(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/book_confirm',{
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }
    //[put]/courses/:id
    update(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    } 

    //[delete]/courses/:id 
    delete(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}
module.exports = new CourseController;
