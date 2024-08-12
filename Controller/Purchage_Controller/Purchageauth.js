// let express=require('express')
// let purchagemodel=require('../Model/Purchage/Purchagemodel')

// let purchage=async(req,res)=>{
//     let {  created_at,name,image,supplier,status,textarea,refrenceno}=req.body
//     try {
//         let newpurchage=await purchagemodel.create({
//             created_at:created_at,
//             name:name,
//             image:image,
//             supplier:supplier,
//             status:status,
//             textarea:textarea,
//             refrenceno:refrenceno
//         })
//         return res.status(200).json({success:true,message:"purchage successfully",newpurchage})

//     } catch (error) {
//         return res.status(200).json({success:false,error:error.message})
        
//     }
// }
// module.exports=purchage