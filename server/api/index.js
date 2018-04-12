'use strict'
const apiRouter = require('express').Router()
const db = require('../db')
module.exports = apiRouter

apiRouter.use('/posts', require('./posts'))

apiRouter.use((req, res, next) => {
  res.status(404).send('Not found')
})
