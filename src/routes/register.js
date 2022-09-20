const express = require('express')
const router = express.Router()

const registerController = require('../app/controllers/registerController')

router.get('/', registerController.register)

module.exports = router