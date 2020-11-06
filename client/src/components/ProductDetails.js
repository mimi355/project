import React,{useEffect,useState} from 'react';
import Rating from './Rating';
import {Link} from 'react-router-dom';
import{useSelector,useDispatch} from 'react-redux';
import { productDetails } from '../actions/productAction';



function ProductDetails(props) {
const dispatch = useDispatch();
const productId = props.match.params.id;
const[qty,setQty]= useState(1)
const detailsProduct = useSelector((state) =>state.detailsProduct);
  const {product} = detailsProduct;
  useEffect(()=>{
      dispatch(productDetails(productId))
  },[dispatch,productId]);


  const AddProduct=()=>{
      props.history.push(`/cart/${productId}?qty=${qty}`)
  }
    return (
        <div>
 <Link to="/">Go Back</Link>
 <div className="row top">
 <div className="col-2">
 <img className="big" src={product.image} alt={product.name}/>
 </div>
<div className="col-1">
<ul>
    <li>
        <h1>{product.name}</h1>
    </li>
    <li>
        <Rating  rating={product.rating}/>
    </li>
    <li>
        Price : £{product.price}
    </li>
    <li>
        Description:
        <p>{product.description}</p>
    </li>
</ul>
</div>
<div className="col-1">
<div className="card card-body" >
<ul>
<li>
<div className="row">
<div >Price: </div>
<div className="price stock"> £{product.price}</div>
</div>
</li>
<li>
<div className="row">
<div >Stock: </div>
<div ><span className="stock"> {product.stock}</span>
</div>
</div>
</li>

{
    product.stock>0 &&(
    
    <>
<li>
    <div className="row">
        <p>Qty</p>
        <div>
            <select value={qty}  onChange={e=>{setQty(e.target.value)}} >
        
 { 
[...Array(product.stock).keys()].map(elt=>(
    <option value={elt+1}>{elt+1}</option>
))
   }
   </select>
</div>
</div>
</li>
<li>
        <button onClick={AddProduct} className="secondary block">Add Product</button>  
      </li>
    </>
     )
}
</ul>
</div>
</div>
 </div>
</div>
 )
}
export default ProductDetails
