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
    const result = await userplans.aggregate([ 
           
     { $lookup:
        {
          from: "rechpacks",  
          localField: "user",
          foreignField: "_id",
          as: "docs"
        }
      },
    //   {
    //       $unwind : '$docs',
  
    //   }   
    ])
    console.log(result);
};

module.exports = ({register,viewplans})