    import { configureStore } from "@reduxjs/toolkit"
    import bookingServicesReducer from "./bookingService/reducer";
    import testDriveReducer from './testdrive/reducer'
    import dealerReducer from "./dealer/reducer";
    import modelReducer from "./model/reducer";
    import modelDetailReducer from "./modeldetail/reducer";
    import { imgSlideReducer } from "./imgslide/reducer";
    import tabProductReducer from "./tabproduct/reducer";


    const store = configureStore({
        reducer: {
            bookingServices: bookingServicesReducer,
            testDrive: testDriveReducer,
            dealer: dealerReducer,
            model: modelReducer,
            modelDetail: modelDetailReducer,
            imgSlide: imgSlideReducer,
            tabProduct: tabProductReducer,
        },
    });
    
    export default store;