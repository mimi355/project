import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {login} from "../actions/userAction";
function Login(props) {
const [email,setEmail] =useState("");
const[password,setPassword]=useState("")
const redirect = props.location.search? props.location.search.split("=")[1]:"/"  // querystring 

const userLogin = useSelector((state)=>state.userLogin);
 const {userDetail} = userLogin;


const dispatch = useDispatch();
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(login(email,password))
}

useEffect(()=>{
    userDetail && props.history.push(redirect)  
},[userDetail,redirect,props.history])
    
  return (
        <div>
<form className="container" onSubmit={handleSubmit}>

<div>
<h1> Log In</h1>
</div>
<div>
    <label htmlFor="email">Email address</label>
<input type="email" placeholder="Enter a valid email" required  onChange={e=>setEmail(e.target.value)} />
</div>

<div>
    <label htmlFor="password" >Password</label>
<input type="password" placeholder="Enter your password" required  onChange={e=>setPassword(e.target.value)} />
</div>
<div>
    <label/>
   <button  className="secondary" type="submit">Log In</button>
</div>
<div>
    <label />
<div>
You do not have an account? {' '}
 <Link to={`/register?redirect=${redirect}`}>Sign up</Link>
</div>
</div>
</form>
  </div>           
    )
}

export default Login
