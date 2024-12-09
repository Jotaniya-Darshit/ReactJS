import { configureStore } from "@reduxjs/toolkit";
import  Counter  from "../Component/Slice";

export const store = configureStore({
    reducer : {
        CounterKey : Counter,
    },
});