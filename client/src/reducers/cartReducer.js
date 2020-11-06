const { ADD_TO_CART, REMOVE_FROM_CART, CART_SHIPPING_ADDRESS, CART_EMPTY } = require("../types/cartType");



export const addToCartReducer =(state={cartItems:[]},action)=>{
switch(action.type){
case ADD_TO_CART:
const item = action.payload;
const fetchItem = state.cartItems.find(elt=>elt.product === item.product);
if(fetchItem){
    return {
   ...state,
    cartItems:state.cartItems.map(elt=>elt.product ===fetchItem.product ? item:elt)
   };
}
else{ return{
     ...state,cartItems:[...state.cartItems,item]};
    }
    case REMOVE_FROM_CART:
        return {...state, cartItems: state.cartItems.filter(elt=> elt.product !== action.payload)}

case CART_SHIPPING_ADDRESS:
    return {...state, shippingAddress:action.payload};

case CART_EMPTY:
    return {...state,cartItems:[]};
        default:
    return state;
}
};



