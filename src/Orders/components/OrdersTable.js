import React from 'react';

import Table from '../../core_components/Table';

import { order_table_cols, order_table_cells } from '../../constant/order_table_struct';

const OrdersTable = ({ orders }) => 
  <Table 
    classNameMod="order" 
    colsList={order_table_cols}
    cellStruct={order_table_cells}
    data={orders}
  />

export default OrdersTable;