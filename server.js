const bodyParser = require("body-parser")
const Connect = require("./connection/connect")
const express = require('express')
const app = express()
const port = require("./config/dev.json")   
app.use(bodyParser.json());
const details = require('./router/user')
const pack = require('./router/pack')
const userplans = require('./router/userplan')
const { Connection, connection } = require("mongoose");
//const register = require("./router/user")

app.use('/userplan',userplans)//plans 
app.use('/rech',details)//user login 
app.use('/addon',pack)// packs
// app.use('/')
Connect.connect();

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port.PORT, () =>{ 
    console.log(`Example app listening on port port!`)
})