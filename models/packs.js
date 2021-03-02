const mongoose = require('mongoose')
const Schema = mongoose.Schema
const packs = new Schema({
    name:{
        type:String,
        default:null
    },
    type:{
        type:String,
        default:null
    },
    expiry_days:{
        type:String,
        default:null
    },
    credit_at:{
        type:Date,
        default:Date.now()
    },
    userId:{
            type:Schema.Types.ObjectId,
            ref:'user'
        }
    //     userId:{
    //         type:String,
    //         default:null
    // }
})
module.exports=mongoose.model('rechpack',packs)

