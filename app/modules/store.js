import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";

import imagesApi from "./images";
import favoriteSlice from "./favorite";

const reducer= combineReducers({
    [imagesApi.reducerPath]: imagesApi.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer
});
const persistConfig = {
    key: "persist-key",
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducer);
const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // serializableCheck: {
            //     ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            // },
            immutableCheck: false,
            serializableCheck: false,
        }).concat(imagesApi.middleware)
})
export const Persistor = persistStore(Store)
export default Store;