import React,{useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import { detailsOrder } from '../actions/orderAction';


function OrderDetails(props) {
const orderId = props.match.params.id;
  const orderDetail = useSelector(state=>state.orderDetail);
  const {order} = orderDetail;
  const dispatch = useDispatch();
    useEffect(()=>{
    
        dispatch(detailsOrder(orderId));
    
   
   },[dispatch,order,orderId]);
   
   
/*
return(
<div>
<h2>Your order is successfully paid</h2>

<p><strong>orderId</strong>{order._id}</p>



<div className="row top">
<div className="col-2">
<ul>
    <li>
        <div className="card card-body">
            <h2>Shipping</h2>
            <p> <strong>Name:</strong> {order.shippingAddress.fName} <br/>
         <strong>Address:</strong>{order.shippingAddress.address},{order.shippingAddress.city},{order.shippingAddress.postalCode},{order.shippingAddress.country}</p>
        
        </div>
    </li>
    <li>
        <div className="card card-body">
            <h2> Items</h2>
            <ul>
{
 order.orderItems.map((elt) => (
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
<div>£{order.itemsPrice.toFixed(2)}</div>

    </div>
</li>


<li>
    <div className="row">
<div >Shipping</div>
<div>£{order.shippingPrice.toFixed(2)}</div>

    </div>
</li>
<li>
    <div className="row">
<div ><strong>total Price</strong></div>
<div> <strong>£{order.totalPrice.toFixed(2)}</strong></div>

    </div>
</li>

</ul>
</div>
</div>
</div> 
 </div>

)
};
*/


return (

<h2>Your order is successfully added </h2>

)
}
export default OrderDetails;
