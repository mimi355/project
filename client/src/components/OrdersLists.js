import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { listOrder } from '../actions/orderAction'




function OrdersLists(props) {
    const dispatch= useDispatch

    const userLogin = useSelector(state=>state.userLogin);
const{userDetail} = userLogin

const orderList =useSelector(state=>state.orderList)
const {orders} = orderList 
    

useEffect(()=>{
        if(userDetail && userDetail.role){
          dispatch(listOrder())
        }
      else{
        props.history.push('/login')
      }
        
           },[dispatch,props.history,userDetail])

    return (
        <div>
           <h1>Orders</h1>
           <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>£{order.totalPrice.toFixed(2)}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                    props.history.push(`/placeorder`)
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
        </div>
    )
}

export default OrdersLists
