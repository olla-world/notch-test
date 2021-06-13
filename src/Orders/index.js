
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import OrdersTable from './components/OrdersTable';
import VendorFilter from './components/VendorFilter';

import actions from './actions';

import './styles/style.css'

export default function Orders() {
  const {fetchOrders} = actions;
  const {orders, vendors, loading} = useSelector((state)=>state.orders);
  const dispatch = useDispatch();
  const [selectedVendor, setSelectedVendor] = useState('')
  const [filteredOrders, setFilteredOrders] = useState(orders)

  const updateSelectedVendor = (vendor)=> setSelectedVendor(vendor.target.value)
  const resetSelectedVendor = () => setSelectedVendor('')

  useEffect(()=>{
    dispatch(fetchOrders())
  },[dispatch, fetchOrders])

  useEffect(()=>{
    function filterOrders(){
      let _orders = selectedVendor?orders.filter(order=> order.vendorName.trim().toLowerCase() === selectedVendor): orders
      console.log(_orders)
      setFilteredOrders(_orders)
    }

    filterOrders()
  },[orders, selectedVendor])
 

  return (
    <div className="main main--order">
      <div className="section section--filters">
        <div className="wrap wrap--filters">
          <VendorFilter 
            vendors={vendors} 
            selectedVendor={selectedVendor}
            updateSelectedVendor={updateSelectedVendor}
            resetSelectedVendor={resetSelectedVendor}
          />
        </div>
      </div>
      <div className="section section--order-table">
        <div className="wrap wrap--order-table">
          <OrdersTable 
            orders={filteredOrders} 
            loading={loading} 
          />
        </div>
      </div>
    </div>
  );
}
