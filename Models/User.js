let mongoose=require('mongoose')
let usermodel=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
      
    },
    email:{
        type:String,
        required:true,
        
        
    },
    phone:{
        type:Number,

    },
    password:{
        type:String,

    },
    status: {
        type: String,
        enum: ['active', 'inactive']
        // required: true,
      },
    confirmpassword:{
        type:String,
        // required:true,
    }

})
module.exports=mongoose.model('usercollection',usermodel)