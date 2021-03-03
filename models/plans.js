const mongoose = require("mongoose")
const Schema = mongoose.Schema
const plans = new Schema({
    user :{
        type:Schema.Types.ObjectId,
        ref : 'user'
    },
    packs : {
    type : Schema.Types.ObjectId,
    ref : 'packs'
    },
    // expiry_At : {},
    data_left : {
        type : Number,
        default : null
    } 
})
module.exports = mongoose.model('plans', plans)
