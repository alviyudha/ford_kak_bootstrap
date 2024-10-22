import api from '../../utils/api';

// Action Types
export const FETCH_MODEL_DETAIL_REQUEST = 'FETCH_MODEL_DETAIL_REQUEST';
export const FETCH_MODEL_DETAIL_SUCCESS = 'FETCH_MODEL_DETAIL_SUCCESS';
export const FETCH_MODEL_DETAIL_FAILURE = 'FETCH_MODEL_DETAIL_FAILURE';

// Action Creators
export const fetchModelDetailRequest = () => ({
  type: FETCH_MODEL_DETAIL_REQUEST,
});

export const fetchModelDetailSuccess = (modelData) => ({
  type: FETCH_MODEL_DETAIL_SUCCESS,
  payload: modelData,
});

export const fetchModelDetailFailure = (error) => ({
  type: FETCH_MODEL_DETAIL_FAILURE,
  payload: error,
});

// Thunk to Fetch Model Detail Data
export const fetchModelDetail = (linkpage) => {
  return async (dispatch) => {
    dispatch(fetchModelDetailRequest());
    try {
      const response = await api.getDataDetail(linkpage);
      dispatch(fetchModelDetailSuccess(response.data));
    } catch (error) {
      dispatch(fetchModelDetailFailure(error.message));
    }
  };
};
