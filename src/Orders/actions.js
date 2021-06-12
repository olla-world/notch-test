import Axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_HOST;
const API_VERSION = process.env.REACT_APP_API_VERSION;

const fetchOrders = () => async (dispatch, getState)=>{
  dispatch({
    type: "FETCH_ORDERS_REQUEST"
  })
  try{
    const response = await Axios.post(
      BASE_URL + '/' + API_VERSION + '/orders/search',
      {}
    )

    dispatch( {
      type: "FETCH_ORDERS_SUCCESS",
      payload: response.data.data
    })
  }catch(error){
    dispatch( {
      type: "FETCH_ORDERS_FAILURE",
      error
    })
  }
}

const actions = {
  fetchOrders: fetchOrders
};

export default actions;