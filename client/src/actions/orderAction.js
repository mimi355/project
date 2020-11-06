import Axios from "axios";
import { CART_EMPTY } from "../types/cartType";
import { CREATE_ORDER, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, LIST_ORDER, LIST_ORDER_FAIL, MY_LIST_ORDER, MY_LIST_ORDER_FAIL, MY_LIST_ORDER_REQUEST, ORDER_DETAIL, ORDER_DETAIL_FAIL, ORDER_DETAIL_REQUEST } from "../types/orderType"



export const createOrder=(order)=>async(dispatch,getState)=>{

dispatch({ type:CREATE_ORDER_REQUEST,payload:order})

    try{
const {userLogin:{userDetail}} = getState();
const {data} = await Axios.post("/api/orders",order,{
headers:{
Authorization:`mimi ${userDetail.token}`,
}});
dispatch({type:CREATE_ORDER, payload:data.order});
dispatch({type:CART_EMPTY});
localStorage.removeItem("cartItems");
}
catch(error){
    dispatch({type:CREATE_ORDER_FAIL,
    payload:error.message})
}
};


export const detailsOrder = (orderId)=>async(dispatch,getState)=>{
    try{
dispatch({type:ORDER_DETAIL_REQUEST,payload:orderId});
const {userLogin:{userDetail}} = getState();


const {data} = await Axios.get(`/api/orders/${orderId}`,{headers:{
    Authorization:`mimi ${userDetail.token}`},
});
dispatch({type:ORDER_DETAIL, payload:data});

}

catch(error){
    dispatch({type:ORDER_DETAIL_FAIL,payload:error.message})
}
};


export const myListOrder=()=>async(dispatch,getState)=>{
    dispatch({type:MY_LIST_ORDER_REQUEST})
const {userLogin:{userDetail}} = getState();
try{
const{data}=await Axios.get('/api/orders/me',{
    headers:{Authorization:`mimi ${userDetail.token}`}
});
dispatch({type:MY_LIST_ORDER, payload:data})
}
catch(error){
    dispatch({type:MY_LIST_ORDER_FAIL,payload:error.message})
}
};



export const listOrder = () =>async(dispatch,getState)=>{
    const {userLogin:{userDetail}} = getState();

    try{
        const{data} = await Axios.get('/api/orders',{
            headers:{Authorization:`mimi ${userDetail.token}`}
        });
        dispatch({type:LIST_ORDER, payload:data})
        }
        catch(error){
            dispatch({type:LIST_ORDER_FAIL,payload:error.message})
        }


};