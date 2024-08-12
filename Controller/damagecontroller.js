let express=require('express')

let damageproduct=require('../Models/Damagemodel');
const uploadfile = require('../uploads/Cloudinary');
let damage_create_product=async(req,res)=>{
    let  {image,tax,quantity,refrenceno,unitcost,textarea,discount}=req.body;
    const data_image=await uploadfile(image)
    console.log(data_image)
    try {
        let danagecreate=await damageproduct.create({
            image:image,
            tax:tax,
            quantity:quantity,
            refrenceno:refrenceno,
            unitcost:unitcost,
            textarea:textarea,
            discount:discount
        })
        return res.status(200).json({success:true,message:"damage product created successfully",danagecreate})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}


// ********************update-damage*********************

let damage_update=async(req,res)=>{
    let {tax,discount,unitcost,quantity } = req.body

let _id=req.params._id;
try {
    let finddamage_product=await damageproduct.findOne({_id:_id})
    if(finddamage_product){
   
        let updatedamage = await damage.updateOne({_id:_id }, { $set: {tax:tax, unitcost: unitcost,discount:discount }})

    }
    return res.status(200).json({success:true,message:"Damage product updated successfully",updatedamage})

} catch (error) {
    return res.status(200).json({success:true,error:error.message})
}
}

// *************************delete_damage_product*******************
let delete_damage_product=async(req,res)=>{
    let _id=req.params._id;
    try {
        let find_damage_product=await damageproduct.findOne({_id:_id})
        if(find_damage_product){
            let deletedamage=await damageproduct.deleteOne()

        }
        return res.status(200).json({success:"true",message:"damage product deleted successfully"})
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
        
    }
}



module.exports={
    damage_create_product,
    damage_update,
    delete_damage_product
}