import {
  FETCH_TAB_PRODUCT_REQUEST,
  FETCH_TAB_PRODUCT_SUCCESS,
  FETCH_TAB_PRODUCT_FAILURE,
} from './action';

const initialState = {
  dataTrim: null,
  loading: false,
  error: null,
};

const tabProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TAB_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_TAB_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        dataTrim: {
          ...action.payload // Pastikan untuk menyimpan dataTrim yang baru
        },
      };
    case FETCH_TAB_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default tabProductReducer;
