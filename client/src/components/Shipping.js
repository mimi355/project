import React, { useState } from 'react'
import CheckoutSteps from './CheckoutSteps'
import {useDispatch,useSelector} from 'react-redux';
import { ShippingAddress } from '../actions/cartAction';
function Shipping(props) {

const userLogin = useSelector(state=>state.userLogin)
const{userDetail} =userLogin;

const cart =useSelector(state=>state.cart);
const {shippingAddress} =cart;


if(!userDetail){
    props.history.push("/login")
};
const [fName,setFname]=useState(shippingAddress.fName);
const [address,setAddress] =useState(shippingAddress.address);
const[city,setCity] =useState(shippingAddress.city);
const[postalCode,setPostalCode]=useState(shippingAddress.postalCode);
const[country,setCountry]=useState(shippingAddress.country);

const dispatch = useDispatch()
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(ShippingAddress({fName,address,city,postalCode,country}))

props.history.push("/payment")

}

    return (
        <div>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
        <form className="container" onSubmit={handleSubmit}>
       <div> <h1>Shipping Address</h1></div>
<div> <label>Name</label>
    <input type="text" placeholder="enter your name here..." value={fName} onChange={e=>setFname(e.target.value)} required/>
</div>
<div> <label>Address</label>
    <input type="text" placeholder="enter your address here..." value={address} onChange={e=>setAddress(e.target.value)} required/>
</div>
<div> <label>City</label>
    <input type="text" placeholder="enter your city name here..." value={city} onChange={e=>setCity(e.target.value)} required/>
</div>
<div> <label>Postal Code</label>
    <input type="text" placeholder="enter your postal code here..." value={postalCode} onChange={e=>setPostalCode(e.target.value)} required/>
</div>
<div> <label>Country</label>
    <input type="text" placeholder="enter your country here..." value={country} onChange={e=>setCountry(e.target.value)} required/>
</div>
<div> <button className="secondary" type="submit"> next</button></div>
        </form>
        </div>
    )
}

export default Shipping
