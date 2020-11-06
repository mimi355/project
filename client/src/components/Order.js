import React,{useEffect} from 'react';
import{useSelector,useDispatch} from "react-redux";
import { createOrder } from '../actions/orderAction';
import { CREATE_ORDER_RESET } from '../types/orderType';

import CheckoutSteps from './CheckoutSteps';

function Order(props) {
const dispatch = useDispatch()
const cart = useSelector(state=>state.cart);

const orderCreate=useSelector(state=>state.orderCreate);
const{order,success} = orderCreate;

const toPrice =(num) => Number(num.toFixed(2));

cart.itemsPrice =toPrice(cart.cartItems.reduce((a,c) => a + c.qty*c.price,0));

cart.shippingPrice = cart.itemsPrice > 150? toPrice(0):toPrice(5);
cart.totalPrice = cart.itemsPrice + cart.shippingPrice;


const handleClick=()=>{
dispatch(createOrder({...cart,orderItems:cart.cartItems}));   
};

useEffect(()=>{
    if(success){
    props.history.push(`/order/${order._id}`);
   dispatch({type:CREATE_ORDER_RESET});

}
},[dispatch,order,props.history,success]);

return (
        <div> <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
        <div className="row top">
<div className="col-2">
<ul>
    <li>
        <div className="card card-body">
            <h2>Shipping</h2>
            <p> <strong>Name:</strong> {cart.shippingAddress.fName} <br/>
         <strong>Address:</strong>{cart.shippingAddress.address},{cart.shippingAddress.city},{cart.shippingAddress.postalCode},{cart.shippingAddress.country}</p>
        
        </div>
    </li>
    <li>
        <div className="card card-body">
            <h2> Items</h2>
            <ul>
{
 cart.cartItems.map((elt) => (
<li key ={elt.product} >
<div className="row">
<div>
<img  className ="small" src={elt.image}  alt={elt.name}/>
</div>
<div>
<p>{elt.name}</p>
</div>
<div>{elt.qty}x ${elt.price}=£{elt.qty * elt.price}</div>
</div>
</li>
  ))}
</ul>

        </div>
    </li>
</ul>
</div>
<div className="col-1">
<div className="card card-body">
<ul>
    <li>Order Summary </li>
<li>
    <div className="row">
<div >Items</div>
<div>£{cart.itemsPrice.toFixed(2)}</div>

    </div>
</li>


<li>
    <div className="row">
<div >Shipping</div>
<div>£{cart.shippingPrice.toFixed(2)}</div>

    </div>
</li>
<li>
    <div className="row">
<div ><strong>total Price</strong></div>
<div> <strong>£{cart.totalPrice.toFixed(2)}</strong></div>

    </div>
</li>

<li><button type="button" onClick={handleClick} className="secondary block" disabled={cart.cartItems.length === 0}> Confirm</button></li>

</ul>
</div>
</div>
</div> 
 </div>
    )
};

export default Order;
