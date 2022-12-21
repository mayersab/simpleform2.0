const express = require('express')
const {postData, getData, delData, updateData} =  require('../controllers/ctrlFunctions')
const router = express.Router()

router.get('/', getData)

router.post('/', postData)

router.delete('/:id', delData)

router.patch('/:id', updateData)

module.exports = router