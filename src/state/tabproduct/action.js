import api from '../../utils/api';

// Action Types
export const FETCH_TAB_PRODUCT_REQUEST = 'FETCH_TAB_PRODUCT_REQUEST';
export const FETCH_TAB_PRODUCT_SUCCESS = 'FETCH_TAB_PRODUCT_SUCCESS';
export const FETCH_TAB_PRODUCT_FAILURE = 'FETCH_TAB_PRODUCT_FAILURE';

// Action Creators
export const fetchTabProductRequest = () => ({
  type: FETCH_TAB_PRODUCT_REQUEST,
});

export const fetchTabProductSuccess = (dataTrim) => ({
  type: FETCH_TAB_PRODUCT_SUCCESS,
  payload: dataTrim,
});

export const fetchTabProductFailure = (error) => ({
  type: FETCH_TAB_PRODUCT_FAILURE,
  payload: error,
});

// Thunk to Fetch Tab Product Data
export const fetchTabProduct = () => {
  return async (dispatch) => {
    dispatch(fetchTabProductRequest());
    try {
      const response = await api.getDataTrimGroup(); // Fetch the data
      dispatch(fetchTabProductSuccess(response)); // Dispatch success with data
    } catch (error) {
      dispatch(fetchTabProductFailure(error.message)); // Dispatch failure with error
    }
  };
};
