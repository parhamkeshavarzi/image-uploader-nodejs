require('dotenv').config({
    path: '../variables.env',
})
const Image = require('../models/Image')

const get = async (req, res) => {
    const image = await Image.findOne({
        where: {
            file_name: req.params.id
        }
    })
    res.render('details', {
        url: process.env.URL + process.env.PORT || 'http://localhost:3000',
        image
    })
}

const post = async (req, res) => {
    await Image.destroy({
        where: {
            file_name: req.body.filename
        }
    })
    res.redirect('/images')
}

module.exports = { get, post }