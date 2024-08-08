let express=require('express')
const { usersignup, loginUser, findallproduct } = require('../Controller/Userauth')
const {  } = require('../Controller/Productcontroller')

let router=express.Router()

router.post('/register',usersignup )
  router.post('/login',loginUser )
  router.get('/findallproduct',  findallproduct)


module.exports=router