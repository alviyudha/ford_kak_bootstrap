import {
  FETCH_MODEL_DETAIL_REQUEST,
  FETCH_MODEL_DETAIL_SUCCESS,
  FETCH_MODEL_DETAIL_FAILURE,
} from './action';

const initialState = {
  modelData: null,
  loading: false,
  error: null,
};

const modelDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MODEL_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MODEL_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        modelData: action.payload,
      };
    case FETCH_MODEL_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default modelDetailReducer;
