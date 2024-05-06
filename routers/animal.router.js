const router = require('express').Router()
const animalController = require('../controllers/animal.controller')

router.route('/animal').post(animalController.create)

router.route('/animal').get(animalController.getAll)

router.route('/animal/:id').get(animalController.get)

router.route('/animal/:id').delete(animalController.delete)

router.route('/animal/:id').put(animalController.update)

module.exports = router;