import { configureStore } from "@reduxjs/toolkit";
import  ttoggleSliceReducer  from "./features/toggleSlice";
 

export const store = configureStore({
    reducer:{
        menu:ttoggleSliceReducer
    }
})