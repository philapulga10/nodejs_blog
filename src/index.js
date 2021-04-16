// đi vào thư mục node_modules tải express ==> lưu ==> variable
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

// từ version 4.16 trở đi đã tích hợp body-parse
// middleware để xử lý dữ liệu từ form submit
app.use(express.urlencoded({ extended: true }))
// XMLHttpRequest, fetch, axios, ajax (tất cả đều gửi từ js lên server) ==> tất cả đều gửi data lên server mà không phải form
app.use(express.json())

// *** tại sao parse được body request ==> object ==> vì body parse sử dụng qs

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({ extname: '.hbs' }))
app.set('view engine', 'hbs')

app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app)

// 127.0.0.1 - localhost (nếu là localhost ==> phân giải DNS ==> 127.0.0.1)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})