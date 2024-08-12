let mongoose=require('mongoose')
let purchageschema=new mongoose.Schema({
    created_at:
     { type: Date, 
        default: Date.now },
        refrenceno:{
        type:Number,
     },
 name:{
    type:"String",
 },
 supplier:{
    type:"String",
 },
     image:
      { type: "String",
         trim: "true" ,
         data:"Buffer",
        },
   
        status: {
            type: String,
            enum: ['pending', 'order',"receive"],
            default: ''
        },
    
        textarea:{
            type:"String",
        }

})
module.exports=mongoose.model("purchage_collection",purchageschema)