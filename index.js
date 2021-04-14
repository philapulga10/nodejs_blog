// đi vào thư mục node_modules tải express ==> lưu ==> variable
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 127.0.0.1 - localhost (nếu là localhost ==> phâ giải DNS ==> 127.0.0.1)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})