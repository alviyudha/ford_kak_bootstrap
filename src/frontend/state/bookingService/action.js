import api from "../../utils/api";


// Action Types
export const FETCH_BOOKING_SERVICES_REQUEST = 'FETCH_BOOKING_SERVICES_REQUEST';
export const FETCH_BOOKING_SERVICES_SUCCESS = 'FETCH_BOOKING_SERVICES_SUCCESS';
export const FETCH_BOOKING_SERVICES_FAILURE = 'FETCH_BOOKING_SERVICES_FAILURE';

// Action Creators
export const fetchBookingServicesRequest = () => ({
  type: FETCH_BOOKING_SERVICES_REQUEST,
});

export const fetchBookingServicesSuccess = (data) => ({
  type: FETCH_BOOKING_SERVICES_SUCCESS,
  payload: data,
});

export const fetchBookingServicesFailure = (error) => ({
  type: FETCH_BOOKING_SERVICES_FAILURE,
  payload: error,
});

export const fetchBookingServices = () => {
  return async (dispatch) => {
    dispatch(fetchBookingServicesRequest());
    try {
      const data = await api.getDropdownData(); 
      dispatch(fetchBookingServicesSuccess(data));
    } catch (error) {
      dispatch(fetchBookingServicesFailure(error.message));
    }
  };
};
