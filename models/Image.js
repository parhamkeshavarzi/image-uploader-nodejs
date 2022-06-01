const { DataTypes } = require('sequelize')
const db = require('../configs/db')

const Image = db.define(
  'images',
  {
    id: {
      type: DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    original_name: {
      type: DataTypes.STRING,
    },
    file_extension: {
      type: DataTypes.STRING,
    },
    file_name: {
      type: DataTypes.STRING,
    },
    uploaded_at: {
      type: DataTypes.DATE,
    },
    path: {
      type: DataTypes.STRING,
    },
    thumbnail_path: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
)

module.exports = Image