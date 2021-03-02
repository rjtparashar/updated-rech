const pack = require("../controllers/packs")
const addOn = require('express').Router()
addOn.post('/creatingaddon',pack.newpack)
addOn.get('/viewaddon',pack.viewaddon)
module.exports = addOn