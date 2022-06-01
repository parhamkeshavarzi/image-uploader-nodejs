const Image = require('../models/Image')

const get = (req, res) => {
    res.render('index',{
        url: '/'
    })
}

const post = async (req, res) => {
    await Image.create({
        original_name: req.file.originalname.split('.')[0],
        file_extension: req.file.filename.split('.')[1],
        file_name: req.file.filename.split('.')[0],
        uploaded_at: new Date(),
        path: '/uploads/' + req.file.filename,
        thumbnail_path: '/uploads/thumbnails/' + req.file.filename.split('.')[0] + '.jpg'
    })
    res.redirect(`/${req.file.filename.split('.')[0]}`)
}

module.exports = { get, post }