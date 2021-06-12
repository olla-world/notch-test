import React from 'react';

import {replace_space_with_hyphen} from './../../helpers/string_format';
import {MMM_DD_YYYY} from './../../helpers/date_format';
import { dollar } from '../../helpers/money_format';

const Order = ({ order }) => 
    <tr className="table__body-row">
        <td className="table__body-row__cell">
            <div className={`status status--${replace_space_with_hyphen(order.orderBuyerStatus)}`}>
                {order.orderBuyerStatus || ''}
            </div>
        </td>

        <td className="table__body-row__cell">
            {MMM_DD_YYYY(order.deliveryDay)}
        </td>

        <td className="table__body-row__cell">
            <div className="cell-wrapper">
                {order.vendorName || '...'}

                {!order.isBYOS? 
                    <div className="market">MARKET</div>
                    :''
                }
                
                {!order.isPendingVendorOnboarding? 
                    <div className="bording">
                        1st
                    </div>
                    :''
                }
            </div>
        </td>

        <td className="table__body-row__cell total-row">
            {dollar(order.total)}
        </td>
    </tr>

export default Order;