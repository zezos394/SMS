const express = require('express')
const router = express.Router()
const bookController = require('../app/controllers/BookController')


// router.get('/:slug', newsController.show)
router.get('/', bookController.index)
router.post('/', bookController.index)


module.exports = router