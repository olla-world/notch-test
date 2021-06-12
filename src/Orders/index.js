
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrdersTable from './components/OrdersTable';
import actions from './actions';

export default function Orders() {
  const {fetchOrders} = actions;
  const {orders, loading} = useSelector((state)=>state.orders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchOrders())
  },[dispatch, fetchOrders])

  return (
    <div>
      <h2>Orders</h2>
      <OrdersTable 
        orders={orders} 
        loading={loading} 
      />
    </div>
  );
}
