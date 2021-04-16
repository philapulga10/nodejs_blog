const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {
  app.use('/news', newsRouter)

  app.use('/site', siteRouter)
}

module.exports = route