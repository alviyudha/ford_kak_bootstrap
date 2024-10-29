import { configureStore } from "@reduxjs/toolkit"
import authUserReducer from "./login/reducer";

const adminStore = configureStore({
    reducer: {
        authUser: authUserReducer,
    },
  });
  
  export default adminStore;