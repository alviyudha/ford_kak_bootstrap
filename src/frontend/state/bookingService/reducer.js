import {
    FETCH_BOOKING_SERVICES_REQUEST,
    FETCH_BOOKING_SERVICES_SUCCESS,
    FETCH_BOOKING_SERVICES_FAILURE,
  } from './action';
  
  const initialState = {
    loading: false,
    bookingServicesData: null,  
    error: null,
  };
  
  const bookingServicesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKING_SERVICES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_BOOKING_SERVICES_SUCCESS:
        return {
          ...state,
          loading: false,
          bookingServicesData: action.payload,
          error: null,
        };
      case FETCH_BOOKING_SERVICES_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default bookingServicesReducer;
  