import { configureStore } from "@reduxjs/toolkit";
import  ttoggleSliceReducer  from "./features/toggleSlice";
import whatWeDoSliceReducer from "./features/whatWeDoSlice";

export const store = configureStore({
    reducer:{
        menu:ttoggleSliceReducer , 
        dos:whatWeDoSliceReducer
    }
})