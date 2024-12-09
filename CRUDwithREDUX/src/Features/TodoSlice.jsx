import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const todoSlice = createSlice({
    name : "todoSlice",
    initialState : { data : [] },
    reducers : {
        addData : ( state, action ) => {
            state.data.push(action.payload);
        },
        deleteData : ( state, action ) => {
            let data = state.data.find((item)=> item.id == action.payload.id)
            state.data = data
        },
        updateData : ( state, action ) => {
            state.data.map((e,i)=>{
                if(e.id == action.payload.id)
                {
                    e.task = action.payload.task
                    e.priority = action.payload.priority
                }
                else{
                    e
                }
            })
        },
    }
})

export const { addData, deleteData, updateData } = todoSlice.actions;
export default todoSlice.reducer;