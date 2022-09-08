import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const findUser = createAsyncThunk('Users', async (data) => {
    const response = fetch(`http://localhost:5000/login?userName=${data.username}&userPassword=${data.Password}`).then((res)=> {
        return res.json();
    });
    return response;
});

const FindReducer = createSlice({
    name: 'user',
    initialState: {
        logindata: [],
        loading: false
    },
    reducer: {},
    extraReducers:{
        [findUser.pending]: (state, action) => {
            state.loading = true;
        },
        [findUser.fulfilled]: (state, action) => {
            state.signupdata = action.payload.data;
            state.loading = false;
        },
        [findUser.rejected]: (state, action) => {
            state.loading = false;
        }
    }
});

const FINDreducer = FindReducer.reducer;

export default FINDreducer;