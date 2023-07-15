import { configureStore } from "@reduxjs/toolkit";
import { userDetail } from "../features/userDataSlice";

export const store = configureStore({
    reducer:{
        app:userDetail.reducer
    }
})