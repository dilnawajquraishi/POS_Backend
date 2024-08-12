// let express=require('express')
// let product_edit_model=require('../Models/Product_edit')
// let  product_edit=async(req,res)=>{
// let {name,barcode,tax,can_purchasable,status,unit,show_stock_out,buying_price,selling_price,sub_category,sku,Refundable,maximum_purchage_quantity,textarea,weight,tag,low_stock_quantity_warning}=req.body;
// let _id=req.params._id;
// try {
//     let edit_product=await  product_edit_model.find({_id:_id})
//     if(edit_product){
//         let update=
//     }
// } catch (error) {
    
// }
// }



let express=require('express')
let purchagemodel=require('../Models/Purchage/Purchagemodel')
let purchage=async(req,res)=>{
    let {  created_at,name,image,supplier,status,textarea,refrenceno}=req.body
    try {
        let newpurchage=await purchagemodel.create({
            created_at:created_at,
            name:name,
            image:image,
            supplier:supplier,
            status:status,
            textarea:textarea,
            refrenceno:refrenceno
        })
        return res.status(200).json({success:true,message:"purchage successfully",newpurchage})

    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}
module.exports=purchage
