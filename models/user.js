const mongoose = require('mongoose')
const Schema = mongoose.Schema
const user = new Schema({
    name : {
        type : String,
        default : null
    },
    number : {
        type : Number,
        default : null
    },
    packs:[{
        type:Schema.Types.ObjectId,
        ref:'packs'
}]
})
module.exports = mongoose.model('newuser',user)