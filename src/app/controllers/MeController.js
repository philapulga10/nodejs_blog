const Course = require('./../models/Course')
const { multipleMongooseToOject } = require('./../../util/mongoose')

class MeController {
  // [GET] me/stored/course
  storedCourse(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('me/stored-course', {
          courses: multipleMongooseToOject(courses)
        })
      })
      .catch(error => next(error))
  }
}

module.exports = new MeController
