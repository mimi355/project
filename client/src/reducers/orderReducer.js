const { CREATE_ORDER, CREATE_ORDER_FAIL, CREATE_ORDER_RESET, ORDER_DETAIL, ORDER_DETAIL_FAIL, MY_LIST_ORDER, MY_LIST_ORDER_FAIL, LIST_ORDER, LIST_ORDER_FAIL } = require("../types/orderType");

export const  orderReducer=(state={},action)=>{
    switch(action.type){
        case CREATE_ORDER:
            return {success:true,order:action.payload};
    
    case CREATE_ORDER_FAIL:
    return{ error:action.payload};
    case CREATE_ORDER_RESET:
        return {};
        default:
            return state;
        }
};




export const orderDetailReducer =(state={},action)=>{
switch(action.type){

case ORDER_DETAIL:
    return {order:action.payload}

case ORDER_DETAIL_FAIL:
    return {error:action.payload}

default:
    return state;
}
};

export const myOrderListReducer=(state={orders:[]},action)=>{
switch(action.type){
case MY_LIST_ORDER:
return { orders:action.payload};
case MY_LIST_ORDER_FAIL:
    return {error:action.payload};

default:
    return state;
}

};


export const orderListReducer=(state={orders:[]},action)=>{
switch(action.type){
case LIST_ORDER:
    return{ orders:action.payload}
case LIST_ORDER_FAIL:
return { error:action.payload}
default:
    return state

}

};