const { PRODUCT_LIST, PRODUCT_FAILURE, PRODUCT_DETAILS, PRODUCT_DETAILS_FAILURE, PRODUCT_DELETE, PRODUCT_DELETE_FAIL, PRODUCT_CREATE, PRODUCT_CREATE_FAIL, PRODUCT_CREATE_RESET, PRODUCT_UPDATE, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_RESET } = require("../types/productType");


export const productReducer =(state={products:[]},action)=>{
  switch(action.type){
case PRODUCT_LIST:
    return {products:action.payload};
 case PRODUCT_FAILURE:
     return{error:action.payload };
 
    default:
  return  state;
  }
};

export const productDetailsReducer =(state={product:{}},action)=>{
switch (action.type){
    case PRODUCT_DETAILS:
        return { product:action.payload};

     case PRODUCT_DETAILS_FAILURE:
         return  {error:action.payload} ;  
         default:
             return state;
}
};


export const productDeleteReducer =(state={},action)=>{
switch(action.type){
  case PRODUCT_DELETE:
    return { success:true}
    case PRODUCT_DELETE_FAIL:
      return { error:action.payload}
      default:
         return state
}

};

export const productCreateReducer=(state={},action)=>{
  switch(action.type){
case PRODUCT_CREATE:
  return {success:true,product:action.payload}

case PRODUCT_CREATE_FAIL:
  return { error:action.payload}
case PRODUCT_CREATE_RESET:
  return {}
default:
  return state
  }
};


export const productUpdateReducer=(state={product:{}},action)=>{
switch(action.type){

case PRODUCT_UPDATE:
  return{ success:true ,product:action.payload}
case PRODUCT_UPDATE_FAIL:
  return { error:action.payload}
case PRODUCT_UPDATE_RESET:
  return {product:{}}
default:
  return state
}
};



