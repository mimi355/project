const express = require("express");
const isAdmin = require("../middleware/admin");
const isAuth = require("../middleware/auth");
const router = express.Router();
const Product = require("../models/Products");



//@ GET /api/products/
//@desc get all products
//@access Public

router.get("/",async(req,res)=>{
const products = await Product.find({});
res.send(products)
});







//@ GET /api/products/:id
//@desc get  product  detail by id 
//@access Public
router.get("/:id",async(req,res)=>{
const product = await  Product.findById(req.params.id)
if(product) {
    res.send(product)
}
else { res.status(404).send("Opps Product Not Found")}
});



//@route DELETE /api/products/:id
//@desc delete product
//@access   Private ADMIN
router.delete("/:id",[isAuth,isAdmin],async(req,res)=>{

const product = await Product.findById(req.params.id)

if(product){
 await  product.remove()
 res.json({msg:"Product successfully deleted"})
}
else {
    res.status(404).send("Product Not Found")
}

});


//@route POST api/products
//@desc create a product
//@access Private Admin


router.post("/",[isAuth,isAdmin],async(req,res)=>{
    
    const product= new Product({
    name:"Face Powder",
    image:"./images/image4.jpg",
    category:"makeup",
    price:20.5,
   
    description:"IT makes your pores disappear!Instantly banish the appearance of pores, lines, and wrinkles.",
    stock:4,
    rating:3,
    
    })
    const createdProduct =await product.save()
    res.status(201).json({createdProduct})
    });
    

// @route PUT api/products/:id
//@desc update product
//@access Private Admin

router.put("/:id",[isAuth,isAdmin],async(req,res)=>{
const { name,price,category,description,rating,stock,image} = req.body;

const product = await Product.findById(req.params.id)
if(product){

product.name=name
product.price=price
product.category=category
product.image=image
product.stock=stock
product.rating=rating
product.description=description

const updatedProduct = await product.save()

res.json(updatedProduct)
}
else{
    res.status(404).send("Product Not Found")
}
});

module.exports = router