import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Section from './../core_components/Section';
import Loading from '../core_components/Loading';

import OrdersTable from './components/OrdersTable';
import VendorFilter from './components/VendorFilter';

import { dollar } from '../helpers/money_format';
import { MMM_DD_YYYY } from '../helpers/date_format';

import actions from './actions';

export default function Orders() {
  const {fetchOrders} = actions;
  const {orders, loading} = useSelector((state)=>state.orders);
  const dispatch = useDispatch();

  const [selectedVendor, setSelectedVendor] = useState('')
  const [filteredOrders, setFilteredOrders] = useState(orders)

  const updateSelectedVendor = (vendor)=> setSelectedVendor(vendor.target.value)
  const resetSelectedVendor = () => setSelectedVendor('')
  
  //RESHAPE ORDERS FOR TABLE
  const reshapeOrders = (orders) => 
    orders.map(order=> ({
      ...order, 
      'orderBuyerStatus': order.orderBuyerStatus||'',
      'deliveryDay':MMM_DD_YYYY(order.deliveryDay),
      'vendorName': order.vendorName||'',
      'isBYOS': !order.isBYOS? 'MARKET':'',            
      'isPendingVendorOnboarding':!order.isPendingVendorOnboarding?'1st':'',
      'total': dollar(order.total)
    }))

  //ORGANIGE VENDORS DATA FOR SELECT OPTIONS
  const getVendors = () => 
    [...new Set (orders.map(order=>({
      'name': order.vendorName,
      'value': order.vendorName.toLowerCase()
    })))]

  useEffect(()=>{
    dispatch(fetchOrders())
  },[dispatch, fetchOrders])

  useEffect(()=>{
    //ORDERS WILL BE FILTERED BY SELECTED VENDOR WHEN SELECTED VENDOR CHAGE OR ORDERS UPDATE
    function filterOrders(){
      let _orders = selectedVendor?
        orders.filter(order=> 
          order.vendorName.trim().toLowerCase() === selectedVendor
        )
        : orders
      setFilteredOrders(_orders)
    }

    filterOrders()
  },[orders, selectedVendor])
 
  return <div className="main">{
    loading === true ? 
      <Loading/>
      :<>
        <Section classNameMod='filters'>
          <VendorFilter 
              vendors={getVendors()} 
              selectedVendor={selectedVendor}
              updateSelectedVendor={updateSelectedVendor}
              resetSelectedVendor={resetSelectedVendor}
            />
        </Section>
        {filteredOrders && filteredOrders.length>0 ? 
          <Section classNameMod='order-table'>
            <OrdersTable 
              orders={reshapeOrders(filteredOrders)} 
            />
          </Section>
          :<></>
        }
      </>
    }
  </div>
}
