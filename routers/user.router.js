const router = require('express').Router()
const userController = require('../controllers/user.controller')

router.route('/user').post(userController.create)

router.route('/user').get(userController.getAll)

router.route('/user/:id').get(userController.get)

router.route('/user/:id').delete(userController.delete)

router.route('/user/:id').put(userController.update)

module.exports = router;