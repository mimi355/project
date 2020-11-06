import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import{updateProfile, userInfo} from "../actions/userAction";
import { PROFILE_RESET } from '../types/userType';
function UserProfile() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   
 const userLogin = useSelector(state=>state.userLogin);
const {userDetail} = userLogin;
const infoUser =useSelector(state=>state.infoUser);
const{user} = infoUser;
const userUpdateProfile=useSelector(state=>state.userUpdateProfile);
const{success} = userUpdateProfile ;
const dispatch = useDispatch();

useEffect(()=>{
    if(!user){
        dispatch({type:PROFILE_RESET})
        dispatch(userInfo(userDetail._id))
    }
    else{
        setName(user.name)
        setEmail(user.email)
    }
   
},[dispatch,userDetail._id,user]);

const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(updateProfile({userId:user._id,name,email,password}))
}

    return (
        <div>
           <form className="container" onSubmit={handleSubmit} >
<div>
    <h1>User Profile</h1>
</div>
{success && <alert style={{color:"green"}}>Profile Update Successfully</alert>} 
<div>
    <label htmlFor="name">Name</label>
<input type="text" placeholder="Enter your name here..." value={name} onChange={e=>setName(e.target.value)} />
</div>

<div>
    <label htmlFor="email">Email</label>
<input type="email" placeholder="Enter your email here..." value={email} onChange={e=>setEmail(e.target.value)} />
</div>
<div>
    <label htmlFor="password">Password</label>
<input type="password" placeholder="Enter your password here..." onChange={e=>setPassword(e.target.value)} />
</div>
<div>
<button classsName="secondary" type="submit"> Update Profile </button>  
    </div>
</form>
</div>
    )
}
export default UserProfile
