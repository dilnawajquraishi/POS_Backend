let express=require('express')
let dotenv=require('dotenv').config()
let app=express()
let connection=require('./db')
 connection()
let product_router=require('./route/Routes')
let userrouter=require('./route/userRoutes')
app.use(express.json()

)
app.use('/',userrouter)
app.use('/product',product_router)
app.get('/',(req,res)=>{
    res.send('Hello world')
});



app.listen(process.env.dotenv,()=>{
    console.log(` server is runing on port ${process.env.dotenv}`)
})