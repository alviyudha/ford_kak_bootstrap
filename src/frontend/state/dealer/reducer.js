import {
    FETCH_DEALER_REQUEST,
    FETCH_DEALER_SUCCESS,
    FETCH_DEALER_FAILURE,
  } from "./action";
  
  const initialState = {
    loading: false,
    dealerData: null,
    error: null,
  };
  
  const dealerReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DEALER_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_DEALER_SUCCESS:
        return {
          ...state,
          loading: false,
          dealerData: action.payload,
          error: null,
        };
      case FETCH_DEALER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default dealerReducer;
  