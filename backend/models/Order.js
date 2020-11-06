const mongoose = require("mongoose");


const orderSchema= new mongoose.Schema({
orderItems:[{
 name:{ type:String,required:true},
qty:{type:Number,required:true},
 price:{type:Number,required:true},
image:{type:String,required:true},
product:{
type:mongoose.Schema.Types.ObjectId,
ref:'Product',
required:true,
},
},
],
shippingAddress:{
    fName:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    postalCode:{type:String,required:true},
    country:{type:String,required:true},
},
itemsPrice:{type:Number,required:true},
shippingPrice:{type:Number,required:true},
totalPrice:{type:Number,required:true},
user:{type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,
},
},{timestamps:true});

module.exports = Order = mongoose.model("Order",orderSchema);