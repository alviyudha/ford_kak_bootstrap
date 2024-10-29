import {
  FETCH_TESTDRIVE_REQUEST,
  FETCH_TESTDRIVE_SUCCESS,
  FETCH_TESTDRIVE_FAILURE,
} from "./action";

const initialState = {
  loading: false,
  testDriveData: null, // Consistent naming with camelCase
  error: null,
};

const testDriveReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TESTDRIVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null, // Clear previous errors
      };
    case FETCH_TESTDRIVE_SUCCESS:
      return {
        ...state,
        loading: false,
        testDriveData: action.payload, // Assign the fetched data
        error: null,
      };
    case FETCH_TESTDRIVE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload, // Capture the error message
      };
    default:
      return state;
  }
};

export default testDriveReducer;
