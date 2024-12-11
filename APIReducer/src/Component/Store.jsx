import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../Features/APISlice";

export const store = configureStore({
    reducer : {
        ApiKey : apiSlice,
    }
})