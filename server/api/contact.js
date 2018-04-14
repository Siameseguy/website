const router = require('express').Router()
const { Contact } = require('../db/models')

module.exports = router

router.get('/', (req, res, next) => {
  Contact.findAll()
    .then(contactInfo => res.json(contactInfo))
    .catch(next)
})

// Post api/contact
router.post('/', (req, res, next) => {
  Contact.create(req.body)
    .then(contactInfo => res.json(contactInfo))
    .catch(next)
})
