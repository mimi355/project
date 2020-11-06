import React, { useEffect } from 'react';
import {addItemToCart, removeCart} from '../actions/cartAction';
import{useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';


function Cart(props) {

const productId = props.match.params.id;
const qty = props.location.search?Number(props.location.search.split("=")[1]):1;
const dispatch = useDispatch();

const cart = useSelector((state) =>state.cart);

const {cartItems} = cart;
useEffect(()=>{
if(productId){
  dispatch(addItemToCart(productId,qty));
}
},[dispatch,productId,qty]);


const removeProduct =(id)=>{
dispatch(removeCart(id))

}

const checkout=()=>{
  props.history.push("/login?redirect=shipping");
};
    return (
      <>
  <Link to="/">Go Back</Link>  
<div className = "row top">
<div  className="col-2">
<h1> My Shopping Basket</h1>
{cartItems.length ===0 ?(
  <div className="anim">
  <video src="particles.mp4" muted="" autoplay=""/>
<span className="animation"> Your Cart Is Empty !!!! </span>
  
</div>
)
:(
<ul>
{
  cartItems.map((elt) => (
<li key ={elt.product} >
<div className="row">
<div>
<img  className ="small" src={elt.image}  alt={elt.name}/>
</div>
<div>
<p>{elt.name}</p>
</div>
<div>
<select
value={elt.qty} onChange={e=>dispatch(addItemToCart(elt.product , Number(e.target.value)))}>
{
[...Array(elt.stock).keys()].map(item=>(
    <option value={item+1}>{item+1}</option>
))}
</select>
</div>
<div> ${elt.price}</div>

<div>
  <button onClick={()=>removeProduct(elt.product)}>Remove</button>
</div>
</div>
</li>
  
  ))}
</ul>
)}
</div>

<div className="col-1">
<div className ="card card-body">
<ul>
  <li>
<h3>Total Price: £{cartItems.reduce((a,c)=> a +c.price *c.qty,0 )}
</h3>
  </li>

<li>
  <button type="button" className="secondary block" onClick={checkout}> Proceed to checkout</button> 
</li>
</ul>
</div>
</div>
</div>  
 </>
 )
}

export default Cart
