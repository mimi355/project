import React,{useEffect} from 'react'

import Product from './Product';
import{useDispatch, useSelector} from "react-redux";
import{productList} from '../actions/productAction';
function Home() {
  const dispatch =useDispatch()
  const listProduct = useSelector((state=>state.listProduct));
  console.log(listProduct)
  const {products} = listProduct;
  useEffect(()=>{
dispatch(productList())
  },[dispatch]);
    return (

    <div className="row center">
    {products.map(product=>(
      <Product product={product}/>
          ))}
    </div> 
)}

export default Home
