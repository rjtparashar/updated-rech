const userplans = require('../models/plans')
const packs = require('../models/user')
const user = require('../models/user')
const mongoose = require('mongoose')
// const updateplan = async (req,res)=>{
//     const newres = await userplans.aggregate([{
//         $lookup
//     }])

// }

const register = async (req,res)=>{
    const registerNew = await userplans.create(req.body)
    res.send(registerNew)

}
const viewplans = async (req,res) =>{
    //  const {addonid} = await packs.findById(req.body.addonid).populate('userId')
    // const show = await 
    const result = await user.aggregate([ 
           
     { $lookup:
        {
          from: "plans",  
          localField: "_id",
          foreignField: "user",
          as: "docs"
        }
      },
      // {
      //     $unwind : '$docs',
  
      // }   
    ])             
    console.log(result);
    res.send(result)
};

module.exports = ({register,viewplans})