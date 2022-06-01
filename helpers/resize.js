const fs = require('fs')
const sharp = require('sharp')

const resize = async (req, res, next) => {
  await sharp(req.file.path)
    .resize(600)
    .toFile(`public/uploads/${req.file.filename}`)
  next()
}

module.exports = resize