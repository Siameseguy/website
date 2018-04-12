const Sequelize = require('sequelize')
const db = require('../index')

const Post = db.define('post', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Post
