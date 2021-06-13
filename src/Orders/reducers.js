const initialState = {
  orders: [], 
  vendors:[],
  loading: false,
  error: null
};

const reducers = (state=initialState, action) => {
  switch(action.type){
    case "FETCH_ORDERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      }
    case "FETCH_ORDERS_SUCCESS": 
      return { 
        ...state,
        orders: action.payload,
        vendors: [...new Set (action.payload.map(order=>({
          'name': order.vendorName,
          'value': order.vendorName.toLowerCase()
        })))],
        loading: false
      }
    case "FETCH_ORDERS_FAILURE": 
      return { 
        ...state,
        loading: false,
        error: action.error
      }
    default:
        return state
  }
}

export default reducers