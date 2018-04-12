const router = require('express').Router()
const { Post } = require('../db/models')

module.exports = router

// GET api/posts
router.get('/', (req, res, next) => {
  Post.findAll()
    .then(post => res.json(post))
    .catch(next)
})
