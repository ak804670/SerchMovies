const express = require('express')
const router = express.Router()
const {storeFavorite, getFavorite} = require('../Controllers/moivesController.js')


router.post('/favorite',storeFavorite)

router.get('/favorite',getFavorite)



module.exports = router