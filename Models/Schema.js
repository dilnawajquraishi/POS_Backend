// // let mongoose=require('mongoose')
// // let productschema=new mongoose.Schema({
// //     name:{
// //         type:String,
// //     },
// //     description:{
// //         type:String,
// //     },
// //     category:{
// //         type:String,
// //     },
// //     brand:{
// //         type:String,
// //     },
// //     category:{
// // type:mongoose.Schema.Types.ObjectId,
// // ref:"Category",
// // required:"true"
// //     },

// //     price:{
// //         type:Number,
// //     },
// //     discountPercentage:{
// //        type: Number
// //     },
// //     reviewerName:String,
// //     reviewerEmail:String,
// //     minimumOrderQuantity:String,
// //     clothType:{
// //         String
// //     },
// //     stockNumber:{
// //         type:String
// //     },
// //     date:{
// //         type:String,
// //         default:Date.now()
// //     },
// //    image:{
// //     data:Buffer,
// //     contentType:String

// //    }
// // })
// // module.exports=mongoose.model('productcollection',productschema)

// // // 


// let mongoose=require('mongoose')

// const ProductSchema = new mongoose.Schema.Schema({
//     name: {
//       type: String,
//       required: true,
//       trim: true
//     },
//     description: {
//       type: String,
//       required: false,
//       trim: true
//     },
//     price: {
//       type: Number,
//       required: true,
//       min: 0 // Ensures the price is non-negative
//     },
//     sku: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true
//     },
//     stock_quantity: {
//       type: Number,
//       required: true,
//       default: 0,
//       min: 0 // Ensures stock quantity is non-negative
//     },
//     sub_category: {
//       type: Schema.Types.ObjectId,
//       ref: 'SubCategory',
//       required: true
//     },
//     image_url: {
//       type: String,
//       required: false,
//       trim: true
//     },
//     brand: {
//       type: String,
//       required: false,
//       trim: true
//     },
//     color: {
//       type: String,
//       required: false,
//       trim: true
//     },
//     size: {
//       type: String,
//       required: false,
//       trim: true
//     },
//     material: {
//       type: String,
//       required: false,
//       trim: true
//     },
//     created_at: {
//       type: Date,
//       default: Date.now
//     },
//     updated_at: {
//       type: Date,
//       default: Date.now
//     }
//   });
  
//   // Middleware to update the `updated_at` field on document update
//   ProductSchema.pre('save', function (next) {
//     this.updated_at = Date.now();
//     next();
//   });
  
//  module.exports = mongoose.model('Product', ProductSchema);
  

