
const express = require("express");
const isAuth = require("../middleware/auth");
const isAdmin = require("../middleware/admin");
const Order = require("../models/Order");
const router = express.Router();


//@ Get api/orders/me
//@desc get my history order
//@access Private

router.get("/me",isAuth,async(req,res)=>{
    const orders= await Order.find({user:req.user._id})
    res.send(orders);
    });
    

//@ POST api/orders
//@desc create an order
//@access Private 
router.post("/",isAuth,async(req,res)=>{

 if(req.body.orderItems.length === 0){
    res.status(400).send({msg:"Cart is empty"});
}
else {
    const order = new Order({
        orderItems:req.body.orderItems,
         shippingAddress:req.body.shippingAddress,
         itemsPrice:req.body.itemsPrice,
         shippingPrice:req.body.shippingPrice,
         totalPrice:req.body.totalPrice,
        user:req.user._id

    });
  const createOrder = await order.save();
    res.status(201).send({msg:"New order created", order: createOrder});
}
});

//@ GET /api/orders/:id
//@desc order details
//@access Private

router.get("/:id",isAuth,async(req,res)=>{
    const order = await Order.findById(req.params.id);
if(order){
    res.send(order);
}
else { res.status(404).send({msg:"Order Not Found"})}

});

//@ GET api/orders
//@desc get all orders
//@access Private Admin

router.get("/",[isAuth,isAdmin],async(req,res)=>{

    const orders = await Order.find({}).populate('user','name')
    
    res.json(orders)
    
    });





module.exports = router;