const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../tmp'))
  },
  filename: (req, file, cb) => {
    const filename = Math.round(Math.random() * 1e9)
    cb(
      null,
      `${filename}.${file.originalname.split('.')[1]}`
    )
  },
})

const upload = multer({ storage: storage })

module.exports = upload