const express = require('express')
const router = express.Router()

const matchController = require('../app/controllers/MatchController')

router.post('/store', matchController.store)


module.exports = router