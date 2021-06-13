import React from 'react';

import Loading from '../../core_components/Loading';

import Order from './Order';

import './../styles/order-table.style.css';

const tableColumns = [
  {
    'name': 'status',
    'id': 0
  },{
    'name': 'delivery day',
    'id': 1
  },{
    'name': 'supplier',
    'id': 2
  }, {
    'name' : 'total',
    'id': 3
  }
]

const OrdersTableHeader = () => 
  <tr className="table__header-row">
    {tableColumns.map(column => 
      <th 
        key={column.id} 
        className="table__header-row__cell"
      >
        {column.name}
      </th>   
    )}
  </tr>

const OrdersTable = ({ orders, loading }) => 
  loading === true ? 
    <Loading/>
    :<table className="table table--order">
      <thead>
        {OrdersTableHeader()}
      </thead>
      
      <tbody>{
        orders.map(order =>
          <Order key={order.id} order={order} />
      )}</tbody>   
  </table>

export default OrdersTable;