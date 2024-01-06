import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
 

const persistConfig = {
   key:'root',
   storage,
}

const presistedReducer = persistReducer(persistConfig,authReducer)

export const store = configureStore({
 reducer :{
    auth : presistedReducer 
 }
})

export const persistor = persistStore(store)