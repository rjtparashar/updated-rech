const packs = require('../models/packs')
const mongoose = require('mongoose')
const user = require('../models/user')
const newpack = async (req,res) =>{
    try {
        //console.log(req.body)
        const addOn = await packs.create(req.body)
        // let pipeline=[  {
        //     $lookup:
        //       {
        //         from: "newusers",
        //         localField: "userId",
        //         foreignField: "_id",
        //         as: "inventory_docs"
        //       }
        //  }]

        // const data = await addOn.save()
        //console.log(data)
        res.send(addOn)
    } catch (error) {
        console.log(error);        
    }
    
}
const viewaddon = async (req,res) =>{
  //  const {addonid} = await packs.findById(req.body.addonid).populate('userId')
  const result = await packs.aggregate([ 
         
   { $lookup:
      {
        from: "newusers",
        localField: "userId",
        foreignField: "_id",
        as: "inventory_docs"
      }
    },
    {
        $unwind : '$inventory_docs',

    }   


    //   $lookup:
    //   {
    //     from: "newusers",
    //     localField: "inventory_docs",
    //     foreignField: "name",
    //     as: "inventory_docs2"
    //   }
    // }
 ])
//   let pipeline=[  {
//     $lookup:
//       {
//         from: "newusers",
//         localField: "userId",
//         foreignField: "_id",
//         as: "inventory_docs"
//       }
//  }]


console.log(result);

}

module.exports=({newpack,viewaddon})
