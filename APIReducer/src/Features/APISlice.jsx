import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAPI = createAsyncThunk("fetchAPI", async () => {
  let response = await axios.get("http://localhost:5002/products");
  return response.data;
});

export const addData = createAsyncThunk("addData", async (newData) => {
  let response = await axios.post("http://localhost:5002/products", newData);
  return response.data;
})

export const deleteData = createAsyncThunk("deleteData", async (i) => {
  await axios.delete(`http://localhost:5002/products/${i}`)
  return i;
})
export const updateData = createAsyncThunk("updateData", async ({ editId, updData }) => {
  await axios.put(`http://localhost:5002/products/${editId}`, updData)
  return { editId, updData };
})

export const apiSlice = createSlice({
  name: "apiSlice",
  initialState: { record1: [], loading: false },
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.fulfilled, (state, action) => {
      console.log("fulfilled");
      state.loading = false;
      state.record1 = action.payload;
    });
    builder.addCase(fetchAPI.pending, (state, action) => {
      console.log("Pending");
      state.loading = true;
    });
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.record = state.record.filter((item) => item.id !== action.payload)
  })
  builder.addCase(addData.fulfilled, (state, action) => {
      state.record.push(action.payload)
  })
  builder.addCase(updateData.fulfilled, (state, action) => {
    state.record = state.record.map((e) => e.id === action.payload.editId ? { ...e, ...action.payload.updData } : e)
})

  },
});

export default apiSlice.reducer;