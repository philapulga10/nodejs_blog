const Course = require('./../models/Course')
const { multipleMongooseToOject } = require('./../../util/mongoose')

class SiteController {
  index(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: multipleMongooseToOject(courses)
        })
      })
      .catch(error => next(error))

    // res.render('home')
  }

  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController