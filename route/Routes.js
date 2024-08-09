let express=require('express');
const { find_all_product, updateproduct, Delete_Product, createproduct, addProduct ,filter} = require('../Controller/Productcontroller');
const ProductController = require('../Controller/ProductControllers');

const router=express.Router();
// router.post('/create',createproduct)
// router.delete('/delete',Delete_Product)
// router.put('/update',updateproduct)
//     router.get('/getallproduct',find_all_product )
//   router.get('/add', addProduct)



router.post('/products', ProductController.createProduct);
router.get('/findallitem', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);
router.put('/update/:id', ProductController.updateProduct);
router.delete('/delete/:name', ProductController.deleteProduct);
// router.get('/filter', ProductController.filter);



// router.delete('/products/:id', ProductController.deleteProduct);
module.exports=router