import Axios from "axios"
import { USER_LOGIN, USER_SIGNOUT,USER_REGISTER, USER_INFO, UPDATE_PROFILE, USER_INFO_REQUEST, USER_INFO_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAIL, USER_LIST, USER_LIST_FAIL, USER_LIST_RESET, USER_DELETE_FAIL, USER_DELETE } from "../types/userType"

export const register=(name,email,password)=>async(dispatch)=>{
   
  const {data} = await Axios.post("/api/users/register",{name,email,password});
    dispatch({
        type:USER_REGISTER,
        payload:data
    });
   
    localStorage.setItem('userDetail',JSON.stringify(data));
  };

export const login=(email,password)=>async(dispatch)=>{
   
    const {data} = await Axios.post("/api/users/login",{email,password});
      dispatch({
          type:USER_LOGIN,
          payload:data
      });
      localStorage.setItem('userDetail',JSON.stringify(data));
    };

   export const signout = ()=>(dispatch)=>{
     localStorage.removeItem('userDetail');
     localStorage.removeItem('cartItems');
     localStorage.removeItem('shippingAddress');
     
     dispatch( {
      type:USER_SIGNOUT
    });
   dispatch({ type:USER_LIST_RESET})
    };



   export const userInfo =(userId)=>async(dispatch,getState)=>{
    
    dispatch({type:USER_INFO_REQUEST, payload:userId});
    const {userLogin:{userDetail}} = getState();
    try{

    const {data} = await Axios.get(`api/users/profile/${userId}`,{headers:{Authorization:`mimi ${userDetail.token}`}});
    dispatch({type:USER_INFO,
    payload:data});
  }
    catch(error){
      dispatch({type:USER_INFO_FAIL, payload:error.message})
    }
   };


   
   export const updateProfile=(user)=>async(dispatch,getState)=>{
    dispatch({type:UPDATE_PROFILE_REQUEST, payload:user})
    
    
    const {userLogin:{userDetail}}=getState();

    try{
    const {data} = await Axios.put(`api/users/profile`,user,{headers:{Authorization:`mimi ${userDetail.token}`}});                                                           
     dispatch({
       type:UPDATE_PROFILE,
       payload:data
     });
     dispatch({
       type:USER_LOGIN,
       payload:data
     });
     localStorage.setItem('userDetail',JSON.stringify(data));
    }
   catch(error){
     dispatch({type:UPDATE_PROFILE_FAIL, payload:error.message})
   }
   
    };





    export const listUsers=()=>async(dispatch,getState)=>{
     
      const {userLogin:{userDetail}}=getState();
  
      try{
      const {data} = await Axios.get(`/api/users`,{headers:{Authorization:`mimi ${userDetail.token}`}});                                                           
       dispatch({
         type:USER_LIST,
         payload:data
       });
      }
     catch(error){
       dispatch({type:USER_LIST_FAIL, payload:error.message})
     }
     
      };





      export const deleteUser =(id)=>async(dispatch,getState)=>{
        const {userLogin:{userDetail}}=getState();
try{
const {data} =await Axios.delete(`/api/users/${id}`,{headers:{Authorization:`mimi ${userDetail.token}`}})
dispatch({
  type:USER_DELETE,
 
})
}
catch(error){
dispatch({type:USER_DELETE_FAIL, payload:error.message})
}

      };