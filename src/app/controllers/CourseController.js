const { mongooseToObject } = require('./../../util/mongoose')
const Course = require('./../models/Course')

class CourseController {
  // [GET] courses/:slug
  show(req, res, next) {
    Course.findOne({
      slug: req.params.slug
    }).then(course => {
      res.render('courses/show', {
        course: mongooseToObject(course)
      })
    }).catch(error => {
      next(error)
    })
  }

  // [GET] courses/create
  create(req, res, next) {
    res.render('courses/create')
  }

  // [POST] courses/store
  store(req, res, next) {
    const formData = req.body

    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`

    const course = new Course(req.body)

    course.save()
      .then(() => res.redirect('/'))
      .catch(error => { })
  }

  // [GET] courses/:id/edit
  edit(req, res, next) {
    Course.findById({
      _id: req.params.id
    }).then(course => {
      res.render('courses/edit', {
        course: mongooseToObject(course)
      })
    }).catch((error) => next(error))
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({
      _id: req.params.id
    }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch((error) => next(error))
  }

  // [DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({
      _id: req.params.id
    })
      .then(() => res.redirect('back'))
      .catch((error) => next(error))
  }
}

module.exports = new CourseController