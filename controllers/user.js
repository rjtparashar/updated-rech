const user = require('../models/user')
const usernew = async(req,res) => {
    try{
        console.log(req.body)
        // const {mobile , number} = req.body;   //object destructing
        const register = await user.create(req.body)
        res.send(register)
    }
    catch(error){
        console.log(error);
    }
}

// const viewnew = async(req,res)=>{
//     try {
//         const newusers = await user.findById(req.params.id).populate('packs')
//         res.send(newusers)
//         console.log(newusers)

//     } catch (error) {
//         console.log(error);
        
//     }
// }
module.exports = {usernew}