
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrdersTable from './components/OrdersTable';
import actions from './actions';

import './styles/style.css'

export default function Orders() {
  const {fetchOrders} = actions;
  const {orders, loading} = useSelector((state)=>state.orders);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchOrders())
  },[dispatch, fetchOrders])

  return (
    <div className="main main--order">
      <div className="section section--order-table">
        <OrdersTable 
          orders={orders} 
          loading={loading} 
        />
      </div>
    </div>
  );
}
