import { combineReducers, configureStore } from "@reduxjs/toolkit";

import imagesApi from "./images";
import favoriteSlice from "./favorite";

const reducer= combineReducers({
    [imagesApi.reducerPath]: imagesApi.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer
});
const Store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: {
            //     ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            // },
            immutableCheck: false,
            serializableCheck: false,
        }).concat(imagesApi.middleware)
})

export default Store;
