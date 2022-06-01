const Image = require('../models/Image')

const get = async (req, res) => {
    const images = await Image.findAll({
        order: [['id', 'DESC']],
    })
    res.render('images',{
        url: '/images',
        images
    })
}

module.exports = { get }