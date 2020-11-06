
import React from 'react';
import {BrowserRouter as Router,Route, Link,Switch} from "react-router-dom";
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import{useSelector,useDispatch} from 'react-redux';
import Login from './components/Login';
import { signout } from './actions/userAction';
import Register from './components/Register';
import UserProfile from'./components/UserProfile';
import Payment from './components/Payment';
import Shipping from './components/Shipping';
import Order from './components/Order';
import OrderDetails from './components/OrderDetails';
import OrderHistory from './components/OrderHistory';
import PrivateRoute from './components/PrivateRoute';
import UsersList from './components/UsersList';
import ProductList from './components/ProductList';
import ProductUpdate from './components/ProductUpdate';
import OrdersLists from './components/OrdersLists';


function App() {
  const dispatch=useDispatch();
  const cart = useSelector(state=>state.cart);
 const {cartItems} = cart;
 const userLogin = useSelector((state)=>state.userLogin);
 const {userDetail} = userLogin;
 
 const handleSignout=()=>{
   dispatch(signout());
 }
 return (
    <Router>
    <div className="grid-container">
    <header className="row">
        <div> 
    <Link className ="title"  to="/"> Big Deal</Link>
    </div>
    <div>
      
        <Link to="/cart">  
         {cartItems.length>0 && (<span className="basket"> {cartItems.length}</span>)}
          Cart</Link>
       
       { userDetail? (
         <div className="dropdown">
<Link to="#">{userDetail.name} <i className="fa fa-caret-down"></i> </Link>
  <ul className="dropdown-menu">
<li>
  <Link to="/profile">Profile</Link>
</li>
<li>
  <Link to="/orderhistory">order history</Link>
</li>
<li>
<Link to="#signout" onClick={handleSignout}>Sign out</Link>
</li>
  </ul>
</div>
       )
      :(

        <Link to="/login">Login</Link>
      )
      
      }
       
      {userDetail && userDetail.role &&(
        <div className="dropdown">
          <Link to="#admin"> Admin <i className="fa fa-caret-down"></i> </Link>
        <ul className="dropdown-menu">

<li><Link to="/productlist">Products</Link></li>
<li><Link to="/orderlist">Orders</Link></li>
<li><Link to="/userlist">Users</Link></li>
  </ul>
 </div>
      )} 
    </div>
    </header>
    <main>
      <Switch>
      <Route  exact path="/" component={Home} />
      <Route exact  path="/product/:id"  component={ProductDetails}/>
      <Route  exact path="/product/:id/edit" component={ProductUpdate}/>
      <Route path='/cart/:id?' component={Cart}/>
      <Route path="/login"   component={Login}/>
     <Route path="/register" component={Register} />
    <Route path="/shipping" component={Shipping}/>
    <Route path="/payment" component={Payment} />
     <Route path="/placeorder" component={Order}/>
     <Route path="/order/:id" component={OrderDetails}/>
     <Route path="/orderhistory" component={OrderHistory}/>
     <Route path="/userlist" component={UsersList}/>
     <Route path="/productlist" component={ProductList}/>
    <Route path="/orderlist" component ={OrdersLists}/>
    
     <PrivateRoute path="/profile" component={UserProfile} />
    
    
     
     </Switch>
    </main>

<footer className="row center">
  <li><a href="#"><i className="fab fa-facebook"></i></a>  </li>
  <li><a href="#"><i className="fab fa-facebook-messenger"></i></a> </li>
  <li><a href="#"><i className="fab fa-twitter"></i></a> </li>
</footer>
  </div>  
  </Router>
  );
}

export default App;
