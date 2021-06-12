import React from 'react';

import Order from './Order';

const OrdersTable = ({ orders, loading }) =>
  loading === true ? (
    <p>Loading orders ...</p>
  ) : (
    <ul>
      {orders.map(order => (
        <Order key={order.id} order={order} />
      ))}
    </ul>
  );

export default OrdersTable;