let mongoose=require('mongoose')
let storeschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
  
})
module.exports=mongoose.model('categorycollection',storeschema)