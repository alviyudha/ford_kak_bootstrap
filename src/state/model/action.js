import api from '../../utils/api';

// Action Types
export const FETCH_VEHICLE_DATA_REQUEST = 'FETCH_VEHICLE_DATA_REQUEST';
export const FETCH_VEHICLE_DATA_SUCCESS = 'FETCH_VEHICLE_DATA_SUCCESS';
export const FETCH_VEHICLE_DATA_FAILURE = 'FETCH_VEHICLE_DATA_FAILURE';

// Action Creators
export const fetchVehicleDataRequest = () => ({
  type: FETCH_VEHICLE_DATA_REQUEST,
});

export const fetchVehicleDataSuccess = (vehicleData) => ({
  type: FETCH_VEHICLE_DATA_SUCCESS,
  payload: vehicleData,
});

export const fetchVehicleDataFailure = (error) => ({
  type: FETCH_VEHICLE_DATA_FAILURE,
  payload: error,
});

// Thunk to Fetch Vehicle Data
export const fetchVehicleData = () => {
  return async (dispatch) => {
    dispatch(fetchVehicleDataRequest());
    try {
      const response = await api.getDataModel();
      dispatch(fetchVehicleDataSuccess(response));
    } catch (error) {
      dispatch(fetchVehicleDataFailure(error.message));
    }
  };
};
