const Axios = require("axios");
const { ADD_TO_CART, REMOVE_FROM_CART, CART_SHIPPING_ADDRESS } = require("../types/cartType");

export const addItemToCart =(productId,qty)=>async(dispatch,getState)=>{
const {data} = await Axios.get(`/api/products/${productId}`)
dispatch({
    type:ADD_TO_CART,
    payload:{
        stock:data.stock,
        qty,
        product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
    },
});
localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems)) ;   
};    



 export const  removeCart =(productId)=>(dispatch,getState)=>{
dispatch({
    type:REMOVE_FROM_CART,
    payload:productId
});
localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems)) ;   
 };

 export const ShippingAddress =(data)=>(dispatch)=>{
dispatch({type:CART_SHIPPING_ADDRESS, payload:data });
 localStorage.setItem("shippingAddress",JSON.stringify(data))
}