import {createSlice} from "@reduxjs/toolkit";

export const Counter = createSlice({
    name : "Counter",
    initialState : { Count : 10 },
    reducers : {
        increment : (state,action) => 
        {
            state.Count += 1
        },
        decrement : (state,action) => 
        {
                state.Count -= 1
        }
    }
})

export const { increment, decrement } = Counter.actions;
export default Counter.reducer;