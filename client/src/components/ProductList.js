import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import { deleteProduct, productList,createProduct } from '../actions/productAction';
import { PRODUCT_CREATE_RESET } from '../types/productType';



function ProductList(props) {
const dispatch=useDispatch();

const listProduct = useSelector(state=>state.listProduct)
const{products} =listProduct;

const userLogin = useSelector(state=>state.userLogin)
const {userDetail} =userLogin;

const productDelete =useSelector(state=>state.productDelete)
const {success:successDelete} = productDelete;

const productCreate = useSelector(state=>state.productCreate)
const{
    product:createdProduct,
    success:successCreate,
}=productCreate;


useEffect(()=>{
    dispatch({type:PRODUCT_CREATE_RESET})
    
    if(!userDetail.role){
      props.history.push("/login") 
    }
        
        if(successCreate){
            props.history.push(`/product/${createdProduct._id}/edit`)
        }
        else{
            dispatch(productList()) 
        }
        
       
    },[dispatch,userDetail,props.history,successDelete,successCreate,createdProduct])

const handleDelete=(id)=>{
    dispatch(deleteProduct(id))
}

const createProductHandler=()=>{
dispatch(createProduct())
}
    return (
        
              <div>
                  <h1> Products Lists</h1>
                  <button className="small" onClick={createProductHandler}><i className="fas fa-plus"></i>Add Product</button>
    <table className="table">

<thead>
<tr>
<th>ID</th>
<th>NAME</th>
<th>PRICE</th>
<th>CATEGORY</th>
<th>ACTIONS</th>
</tr>
</thead>
<tbody>

{products.map((product)=>(
<tr key={product._id}>
<td>{product._id}</td>
<td>{product.name}</td>
<td>£{product.price}</td>
<td>{product.category}</td>
<td>
<button className="small" onClick={()=>props.history.push(`/product/${product._id}/edit`)}><i className="fas fa-edit"></i></button>   
<button className="small" onClick={()=>handleDelete(product._id)}><i className="fas fa-trash"></i></button>
</td>
</tr>
))}

</tbody>

            </table>
        </div>
    )
}

export default ProductList
