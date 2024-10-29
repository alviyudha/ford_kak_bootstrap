import api from "../../utils/api";

// Action Types
export const FETCH_TESTDRIVE_REQUEST = "FETCH_TESTDRIVE_REQUEST";
export const FETCH_TESTDRIVE_SUCCESS = "FETCH_TESTDRIVE_SUCCESS";
export const FETCH_TESTDRIVE_FAILURE = "FETCH_TESTDRIVE_FAILURE";

// Action Creators
export const fetchTestDriveRequest = () => ({
  type: FETCH_TESTDRIVE_REQUEST,
});

export const fetchTestDriveSuccess = (testDriveData) => ({
  type: FETCH_TESTDRIVE_SUCCESS,
  payload: testDriveData,
});

export const fetchTestDriveFailure = (error) => ({
  type: FETCH_TESTDRIVE_FAILURE,
  payload: error,
});

// Thunk Function to Fetch Data
export const fetchTestDriveData = () => {
  return async (dispatch) => {
    dispatch(fetchTestDriveRequest());
    try {
      const data = await api.getDropdownData(); // Make sure this function exists and works correctly
      dispatch(fetchTestDriveSuccess(data));
    } catch (error) {
      dispatch(fetchTestDriveFailure(error.message));
    }
  };
};
