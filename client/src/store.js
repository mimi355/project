
import {createStore,compose,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import{addToCartReducer} from "./reducers/cartReducer";
import { myOrderListReducer, orderDetailReducer, orderListReducer, orderReducer } from './reducers/orderReducer';
import { productReducer,productDetailsReducer, productDeleteReducer, productCreateReducer, productUpdateReducer } from "./reducers/productReducer";
import { loginReducer,registerReducer,updateProfileReducer,userDeleteReducer,userInfoReducer, userListReducer } from './reducers/userReducer';

const initialState = {
   cart:{
        cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        :[],
        shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{},
},

userLogin:{
   userDetail: localStorage.getItem('userDetail')
    ? JSON.parse(localStorage.getItem('userDetail'))
    :null,
},


};
const reducer =combineReducers({
    listProduct :productReducer,
   detailsProduct:productDetailsReducer,
   cart:addToCartReducer,
   userLogin:loginReducer,
  userRegister :registerReducer,
orderCreate:orderReducer,
orderDetail:orderDetailReducer,
infoUser :userInfoReducer,
orderList:orderListReducer,
orderMineList:myOrderListReducer,
userUpdateProfile:updateProfileReducer,
usersList:userListReducer,
userDelete:userDeleteReducer,
productDelete :productDeleteReducer,
productCreate:productCreateReducer,
productUpdate:productUpdateReducer,
})
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));
export default store;