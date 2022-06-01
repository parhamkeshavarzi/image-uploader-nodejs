const fs = require('fs')
const sharp = require('sharp')

const thumbnail = async (req, res, next) => {
    await sharp(req.file.path)
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .resize(250, 250)
    .toFile(`public/uploads/thumbnails/${req.file.filename.split('.')[0]}.jpg`)
  await fs.unlinkSync(req.file.path)
  next()
}

module.exports = thumbnail