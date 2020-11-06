const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({

    name:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }

})

module.exports =Product = mongoose.model("Product",productSchema)