let express=require('express');
const { find_all_product, updateproduct, Delete_Product, createproduct, addProduct } = require('../Controller/Productcontroller');
const ProductController = require('../Controller/ProductControllers');
const { damage_create_product, delete_damage_product } = require('../Controller/damagecontroller');
const varient_product = require('../Controller/Product_varient_controller');
const newoffer = require('../Controller/Offercontroller');
// const purchage = require('../Controller/Purchage_Controller/Purchageauth');
const Purchagemodel = require('../Models/Purchage/Purchagemodel');
const purchage = require('../Controller/Purchage_Controllers');

const router=express.Router();



router.post('/products', ProductController.createProduct);
router.get('/findallitem', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:name', ProductController.deleteProduct);
router.get('/pagination', ProductController.pagination);
router.get('/filter', ProductController.filter);



// *******************Damage_Product***************************

    router.post('/create-damage', damage_create_product)
    router.put('/delete/_id', delete_damage_product)

//  ******************Varient_Product**************
router.post('/varient_product',varient_product)

// *************Offer********************************
router.post('/offer',newoffer)



// ***********************Purchage******************
router.post('/purchage_create',purchage)

module.exports=router