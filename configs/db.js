require('dotenv').config({
  path: '../variables.env',
})
const Sequelize = require('sequelize')

const db = new Sequelize('nodejs_image_uploader', process.env.MYSQL_USER, process.env.MYSQL_PASS, {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Unable to connect to the database:', error)
}

module.exports = db