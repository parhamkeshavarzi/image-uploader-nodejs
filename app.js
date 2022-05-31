const express = require('express')
const path = require('path')

const indexRouter = require('./routes/indexRouter')

const app = express()
const PORT = 5000

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname + '/public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)


app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`)
})