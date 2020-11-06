import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {register} from "../actions/userAction";
function Register(props) {
    const[name,setName]=useState("");
const [email,setEmail] =useState("");
const[password,setPassword]=useState("");
const redirect = props.location.search? props.location.search.split("=")[1]:"/"  // querystring 

const userRegister = useSelector((state)=>state.userRegister);
 const {userDetail} = userRegister;
const dispatch = useDispatch();
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(register(name,email,password))
}

useEffect(()=>{
    userDetail && props.history.push(redirect)  // for redirect
},[userDetail,redirect,props.history])
    
  return (
        <div>
<form className="container" onSubmit={handleSubmit}>

<div>
<h1> Register</h1>
</div>
<div>
    <label htmlFor="name" >Name</label>
<input type="text" placeholder="Enter your name..." required  onChange={e=>setName(e.target.value)} />
</div>


<div>
    <label htmlFor="email" >Email address</label>
<input type="email" placeholder="Enter a valid email" required  onChange={e=>setEmail(e.target.value)} />
</div>

<div>
    <label htmlFor="password">Password</label>
<input type="password" placeholder="Enter your password" required  onChange={e=>setPassword(e.target.value)} />
</div>
<div>
    <label/>
   <button  className="secondary" type="submit">Register</button>
</div>
<div>
    <label />
<div>
Already have an account? {' '}
 <Link to={`/login?redirect=${redirect}`}>Login</Link>
</div>
</div>
</form>
  </div>           
    )
}

export default Register
