const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors('*'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})