import React,{useEffect} from 'react'
import{useSelector,useDispatch} from 'react-redux';
import { myListOrder } from '../actions/orderAction';
function OrderHistory(props) {
  const orderMineList = useSelector(state=>state.orderMineList);
  const {orders}=orderMineList;
  const dispatch = useDispatch();

   useEffect(()=>{
       dispatch(myListOrder())
   },[dispatch])
    return (
        <div>
            
     <table className="table">
<thead>
<tr>
<th>ID</th>
<th>DATE</th>
<th>PRICE</th>
<th>PAID</th>
<th>ACTIONS</th>
</tr>
</thead>
<tbody>
{orders.map((order)=>(
<tr key={order._id}>
<td>{order._id}</td>
<td>{order.createdAt.substring(0,10)}</td>
<td>{order.totalPrice.toFixed(2)}</td>
<td>yes</td>
<td>
    <button type="button" className="small" onClick={()=>{props.history.push('/placeorder')}}>info</button>
</td>
</tr>
))}
</tbody>
     </table>
        </div>
    )
}

export default OrderHistory
