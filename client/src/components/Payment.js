import React, { useState } from 'react';
import CheckoutSteps from './CheckoutSteps';
import{useSelector} from 'react-redux';


function Payment(props) {
const cart=useSelector(state=>state.cart);
const {shippingAddress} =cart;
const userLogin = useSelector(state=>state.userLogin)
const{userDetail} =userLogin;
if(!userDetail){
    props.history.push("/login")
};

if(!shippingAddress.address){
    props.history.push("/shipping")
};
 const[payment,setPayment]=useState("paypal");
 const   handleSubmit=(e)=>{
e.preventDefault()
props.history.push("/placeorder");
    }
    return (
        <div>
        <CheckoutSteps step1 step2 step3></CheckoutSteps>     
        <form className="container" onSubmit={handleSubmit}>
        <div><h1> Payment</h1> </div>
 <div > <input type="radio" id="paypal"  value="paypal" name="payment" required checked onChange={e=> setPayment(e.target.value)} />
<label htmlFor="paypal"> PayPal</label> </div>
<div><button className="secondary" type="submit"> next</button></div>
        </form>
       
        </div>
    )
}
export default Payment