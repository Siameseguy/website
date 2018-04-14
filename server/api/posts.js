const router = require('express').Router()
const { Post } = require('../db/models')

module.exports = router

// GET api/posts
router.get('/', (req, res, next) => {
  Post.findAll()
    .then(post => res.json(post))
    .catch(next)
})

// GET api/post/id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  Post.findById(id)
    .then(post => res.json(post))
    .catch(next)
})
