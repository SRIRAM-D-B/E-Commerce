import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const adminData = createAsyncThunk('Users', async (data) => {
        const response = await axios.post('http://localhost:5000/products', data);
        return response.data;
    });

const adminReducer = createSlice({
    name: 'user',
    initialState: {
        productdata: [],
        loading: false
    },
    reducer: {},
    extraReducers:{
        [adminData.pending]: (state, action) => {
            state.loading = true;
        },
        [adminData.fulfilled]: (state, action) => {
            state.productdata = action.payload.data;
            state.loading = false;
        },
        [adminData.rejected]: (state, action) => {
            console.log(state);
        }
    }
});

const AdminReducer = adminReducer.reducer;

export default AdminReducer;