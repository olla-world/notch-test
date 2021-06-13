import { replace_space_with_hyphen } from "../helpers/string_format"

const order_table_cols = [
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

const order_table_cells = [
  {
    'cellID': 0,
    'keys':[{
      'keyID':0,
      'keyName':'orderBuyerStatus',
      'viewType': 'pill',
      'classNameModFunc': replace_space_with_hyphen,
      'classNameModString': ''
    }]
  },{
    'cellID': 1,
    'keys':[{
      'keyID':0,
      'keyName':'deliveryDay',
      'viewType': 'text',
      'classNameModFunc': null,
      'classNameModString': ''
    }]
  },{
    'cellID': 2,
    'keys':  [{
      'keyID':0,
      'keyName':'vendorName',
      'viewType': 'text',
      'classNameModFunc': null,
      'classNameModString': ''
    }, {
      'keyID':1,
      'keyName': 'isBYOS',
      'viewType': 'badge',
      'classNameModFunc': null,
      'classNameModString': 'market' 
    }, {
      'keyID':2,
      'keyName':'isPendingVendorOnboarding',
      'viewType': 'pill',
      'classNameModFunc': null,
      'classNameModString': 'boarding'
    }]
  },{
    'cellID': 3,
    'keys': [{
      'keyID':0,
      'keyName':'total',
      'viewType': 'text',
      'classNameModFunc': null,
      'classNameModString': ''
    }] 
  }
]

export {
  order_table_cols, 
  order_table_cells
}
