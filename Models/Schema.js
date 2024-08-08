let mongoose=require('mongoose')
let productschema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    category:{
        type:String,
    },
    brand:{
        type:String,
    },
    category:{
type:mongoose.Schema.Types.ObjectId,
ref:"Category",
required:"true"
    },

    price:{
        type:Number,
    },
    discountPercentage:{
       type: Number
    },
    reviewerName:String,
    reviewerEmail:String,
    minimumOrderQuantity:String,
    clothType:{
        String
    },
    stockNumber:{
        type:String
    },
    date:{
        type:String,
        default:Date.now()
    },
   image:{
    data:Buffer,
    contentType:String

   }
})
module.exports=mongoose.model('productcollection',productschema)