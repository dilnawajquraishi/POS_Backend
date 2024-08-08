let mongoose=require('mongoose')
let connection=async()=>{

  await    mongoose.connect('mongodb://0.0.0.0:27017/database')    //  mongoose.connect(process.env)
    .then(()=>console.log('connect to mongdb'))
    .catch(()=>console.log('error in connecting mongodb'))
}
module.exports=connection;





