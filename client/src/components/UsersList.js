import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { deleteUser, listUsers } from '../actions/userAction';

function UsersList(props) {

const dispatch = useDispatch();

const usersList = useSelector(state=>state.usersList);
const{users} = usersList;
const userLogin = useSelector(state=>state.userLogin);
const{userDetail} = userLogin;

const userDelete= useSelector(state=>state.userDelete)
const{success} =userDelete;
useEffect(()=>{
    if(userDetail && userDetail.role){
        dispatch(listUsers())
    }
else{
    props.history.push("/login")
}
},[dispatch,success,props.history,userDetail]);

const handleDelete=(id)=>{
    dispatch(deleteUser(id))
}

    return (
        <div>
    <table className="table">

<thead>
<tr>
<th>ID</th>
<th>NAME</th>
<th>EMAIL</th>
<th>ADMIN</th>
<th>ACTIONS</th>
</tr>
</thead>
<tbody>

{users.map((user)=>(
<tr key={user._id}>
<td>{user._id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.role ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'grey' }}></i>
                  )}</td>
<td>
<button className="small" onClick={()=>handleDelete(user._id)}><i className="fas fa-trash"></i></button>
</td>
</tr>
))}

</tbody>

            </table>
        </div>
    )
}

export default UsersList











