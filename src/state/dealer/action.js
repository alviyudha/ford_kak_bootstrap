import api from "../../utils/api";

// Action Types
export const FETCH_DEALER_REQUEST = "FETCH_DEALER_REQUEST";
export const FETCH_DEALER_SUCCESS = "FETCH_DEALER_SUCCESS";
export const FETCH_DEALER_FAILURE = "FETCH_DEALER_FAILURE";

// Action Creators
export const fetchDealerRequest = () => ({
  type: FETCH_DEALER_REQUEST,
});

export const fetchDealerSuccess = (dealerData) => ({
  type: FETCH_DEALER_SUCCESS,
  payload: dealerData,
});

export const fetchDealerFailure = (error) => ({
  type: FETCH_DEALER_FAILURE,
  payload: error,
});

// Thunk Function to Fetch Dealer Data
export const fetchDealerData = () => {
  return async (dispatch) => {
    dispatch(fetchDealerRequest());
    try {
      const response = await api.getDealer();
      dispatch(fetchDealerSuccess(response));
    } catch (error) {
      dispatch(fetchDealerFailure(error.message));
    }
  };
};
