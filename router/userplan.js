const userpl = require('../controllers/userplans')
const userplnew = require('express').Router()
userplnew.post('/user',userpl.register)
userplnew.get('/view',userpl.viewplans)
module.exports = userplnew