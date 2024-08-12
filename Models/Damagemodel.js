let mongoose=require('mongoose')
let damageschema=new mongoose.Schema({
    created_at:
     { type: Date, 
        default: Date.now },
     refrenceno:{
        type:Number,
     },
     image:
      { type: "String",
         trim: "true" ,
         data:"Buffer",
        },
        tax:{
            type:Number,
        },
        quantity:{
            type:Number,

        },
        discount:{
            type:Number,
        },
    
        unitcost:{
            type:Number,
        },
            
        textarea:{
            type:"String",
        }

})
module.exports=mongoose.model('damageproduct',damageschema)

