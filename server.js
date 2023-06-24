const express = require('express')
const app = express()
const port = 3000
const connectDB = require('./connection')

const routes = require('./routes')
app.use(express.json())

connectDB()

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})