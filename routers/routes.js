const router = require('express').Router()

// user routes
const userRouter = require('./user.router')
router.use('/', userRouter)

// animal routes
const animalRouter = require('./animal.router')
router.use('/', animalRouter)

module.exports = router;