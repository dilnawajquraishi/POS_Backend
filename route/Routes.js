let express=require('express');
const { find_all_product, updateproduct, Delete_Product, createproduct } = require('../Controller/Productcontroller');

const router=express.Router();
router.post('/create',createproduct)
router.delete('/delete',Delete_Product)
router.put('/update',updateproduct)
    router.get('/getallproduct',find_all_product )
module.exports=router