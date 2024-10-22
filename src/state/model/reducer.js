import {
  FETCH_VEHICLE_DATA_REQUEST,
  FETCH_VEHICLE_DATA_SUCCESS,
  FETCH_VEHICLE_DATA_FAILURE,
} from './action';

const initialState = {
  vehicleData: [],
  loading: false,
  error: null,
};

const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VEHICLE_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_VEHICLE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicleData: action.payload,
      };
    case FETCH_VEHICLE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default modelReducer;
