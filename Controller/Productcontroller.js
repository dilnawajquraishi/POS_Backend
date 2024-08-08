// let express=require('express')
let productmodel=require('../Models/Schema')


// *********************************************************************Insert Product***********************************************



let createproduct=async(req,res)=>{
    try {
        let {name,description,price,title,rating,clothType,date,image,brand,minimumOrderQuantity,reviewerName,reviewerEmail,stockNumber}=req.body;
        let createnewproduct=await productmodel.create({
name:name,price:price,
title:title,
rating:rating,
date:date,
clothType:clothType,
image:image,
description:description,
brand:brand,
minimumOrderQuantity:minimumOrderQuantity,
stockNumber:stockNumber
        })
       return  res.status(200).json({message:"product created successfully",createproduct});
    } catch (error) {
        return res.status(500).json({success:false,error:"error.massage"})
    }
}

// ***************************************************Update Product**************************************************************


let updateproduct=async(req,res)=>{
    // let _id = req.params._id
    let {name}=req.body;

    try {
    let findproductid = await productmodel.findOne(name )  

        if(findproductid){
            let updatedproduct = await productmodel.updateOne({ name}, { $set: { name: name, description: description,title:title,price:price,image:image,brand:brand,description,category,discountPercentage,stockNumber } })
            return res.status(200).json({ success: true, msg: "user updated successfully", updatedproduct })  
              }
    } catch (error) {
        return res.status(500).json({ success: true, msg: "user updated successfully" })    
     }
        
    }



// *****************************************************************Delete_Product***********************************************************

let Delete_Product=async(req,res)=>{
    // let _id = req.params._id
    let {name}=req.body;
    try {
    let findproductid = await productmodel.findOne(name)  
        if(findproductid){
            let deleteproduct=await productmodel.deleteOne({
            })
            return res.status(200).json({success:true,message:"product deleted successfully "})

        }
    } catch (error) {
        return res.status(500).json({success:false,message:"error.message"})
        
    }

}


//  *******************************************************************find_all_product****************************************************

let find_all_product=async(req,res)=>{
    // let _id=req.params._id
    let {name}=req.body
    try {
        let findproductid=await productmodel.findOne({name})
        if(findproductid){
        return res.status(200).json({ success: true, msg: "all users", findproductid })

        }
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Get all Product", findproductid })
        
    }
}
module.exports={
    createproduct,
    updateproduct,
    Delete_Product,
    find_all_product

}

