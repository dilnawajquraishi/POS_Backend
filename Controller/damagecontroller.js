let express=require('express')
let damageproduct=require('../Models/Damagemodel')
let damage_create_product=async(req,res)=>{
    let  {image,tax,quantity,refrenceno,unitcost,textarea}=req.body;
    try {
        let danagecreate=await damageproduct.create({
            image:image,
            tax:tax,
            quantity:quantity,
            refrenceno:refrenceno,
            unitcost:unitcost,
            textarea:textarea
        })
        return res.status(200).json({success:true,message:"damage product created successfully",danagecreate})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}
module.exports={
    damage_create_product
}