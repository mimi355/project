import Axios from "axios";
import {PRODUCT_CREATE, PRODUCT_CREATE_FAIL, PRODUCT_DELETE, PRODUCT_DELETE_FAIL, PRODUCT_DETAILS, PRODUCT_DETAILS_FAILURE, PRODUCT_FAILURE, PRODUCT_LIST, PRODUCT_UPDATE, PRODUCT_UPDATE_FAIL} from"../types/productType";

export const productList = () => async(dispatch)=>{
       try{
        const {data} = await Axios.get("/api/products");
        dispatch({type:PRODUCT_LIST,payload:data})
       }
    catch(error){
        dispatch({type:PRODUCT_FAILURE ,payload:error.message})
    }

}

export const productDetails =(productId)=>async(dispatch)=>{
try{
const {data} = await Axios.get(`/api/products/${productId}`)
dispatch({type:PRODUCT_DETAILS, payload:data})
}
catch(error){
dispatch({type:PRODUCT_DETAILS_FAILURE,payload:error.message})
}
};


export const deleteProduct=(id)=>async(dispatch,getState)=>{
    const {userLogin:{userDetail}}=getState();
try{

 await Axios.delete(`/api/products/${id}`,{headers:{Authorization:`mimi ${userDetail.token}`}})
dispatch({type:PRODUCT_DELETE})
}

catch(error){
    dispatch({type:PRODUCT_DELETE_FAIL, payload:error.message})
}

};


export const createProduct=()=>async(dispatch,getState)=>{
 const {userLogin:{userDetail}}=getState();
   try{ 
    const {data} = await Axios.post(`/api/products`,{},{headers:{Authorization:`mimi ${userDetail.token}`}})
   dispatch({type:PRODUCT_CREATE,payload:data})

}
   catch(error){
       dispatch({type:PRODUCT_CREATE_FAIL,payload:error.message})
   }
};


export const updateProdut=(product)=>async(dispatch,getState)=>{
    const {userLogin:{userDetail}}=getState();
    try{ 
     const {data} = await Axios.put(`/api/products/${product._id}`,product,{headers:{Authorization:`mimi ${userDetail.token}`}})
    dispatch({type:PRODUCT_UPDATE,payload:data})
 
 }
    catch(error){
        dispatch({type:PRODUCT_UPDATE_FAIL,payload:error.message})
    }

};