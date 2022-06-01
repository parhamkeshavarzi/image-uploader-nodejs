require('dotenv').config({
  path: './variables.env',
})
const express = require('express')
const path = require('path')

const indexRouter = require('./routes/indexRouter')

const app = express()
const PORT = process.env.PORT || 3000
const URL = process.env.URL || 'http://localhost:'

app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)


app.listen(PORT, () => {
  console.log(`App is running on ${URL+PORT}`)
})