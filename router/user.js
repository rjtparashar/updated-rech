const user = require("../controllers/user")
const register = require('express').Router()
register.post('/',user.usernew)
//register.get('/viewnew/:id',user.viewnew)
module.exports = register
