const express = require('express')
const router = express.Router()
const upload = require('../helpers/upload')
const resize = require('../helpers/resize')
const thumbnail = require('../helpers/tumbnail')

const indexController = require('../controllers/indexController')
const detailsController = require('../controllers/detailsController')
const imagesController = require('../controllers/imagesController')

router.get('/images', imagesController.get)
router.get('/:id', detailsController.get)
router.post('/:id', detailsController.post)
router.get('/', indexController.get)
router.post('/', upload.single('img'), resize, thumbnail, indexController.post)

module.exports = router