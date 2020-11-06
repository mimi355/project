import { USER_LOGIN, USER_SIGNOUT,USER_REGISTER, USER_INFO, UPDATE_PROFILE, PROFILE_RESET, USER_INFO_FAIL, UPDATE_PROFILE_FAIL, USER_LIST, USER_LIST_FAIL, USER_LIST_RESET, USER_DELETE, USER_DELETE_FAIL } from "../types/userType";

export const registerReducer =(state={},action)=>{
  switch(action.type){
      case USER_REGISTER:
    return {userDetail:action.payload }
   default:
      return state;
  
  }
  };


export const loginReducer =(state={},action)=>{
switch(action.type){
    case USER_LOGIN:
  return {userDetail:action.payload }
case USER_SIGNOUT:
    return {}
 default:
    return state;

}
};

export const userInfoReducer=(state={},action)=>{
switch(action.type){
case USER_INFO:
  return {user:action.payload};
  case USER_INFO_FAIL:
    return {error:action.payload}
  default:
    return state;
}
};



export const updateProfileReducer=(state={},action)=>{
switch(action.type){
  case UPDATE_PROFILE:
    return{success:true}
    case UPDATE_PROFILE_FAIL:
      return {error:action.payload}
    case PROFILE_RESET:
      return{};
    default:
      return state
}
};


export const userListReducer = (state = {users:[]},action)=>{
switch(action.type){

case USER_LIST:
  return { users:action.payload}

case USER_LIST_FAIL:
  return { error:action.payload}
case USER_LIST_RESET:
  return {users:[]}
default:
  return state
}

};

export const userDeleteReducer=(state={},action)=>{
switch(action.type){
case USER_DELETE:
  return { success:true}
case USER_DELETE_FAIL:
  return { error:action.payload}
default:
  return state

}
};

