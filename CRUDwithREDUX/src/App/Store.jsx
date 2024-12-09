import { configureStore } from "@reduxjs/toolkit";
import  todoSlice  from "../Features/TodoSlice";

export const store = configureStore({
    reducer : {
        TodoKey : todoSlice,
    },
});