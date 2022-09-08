import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const newUser = createAsyncThunk('Users', async (data) => {
        const response = fetch('http://localhost:5000/signup', {
            method: 'post',
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                "userName":data.userName,
                "userEmail":data.userEmail,
                "userPassword":data.userPassword,
                "userImage":data.userImage,
                "userAdminStatus":"false"
            })
        }).then((res)=> {
            return res.json();
            
        })
        return response;
    }
)

const UserReducer = createSlice({
    name: 'user',
    initialState: {
        signupdata: [],
        loading: false
    },
    reducer: {},
    extraReducers:{
        [newUser.pending]: (state, action) => {
            state.loading = true;
        },
        [newUser.fulfilled]: (state, action) => {
            state.signupdata = action.payload.data;
            state.loading = false;
        },
        [newUser.rejected]: (state, action) => {
        }
    }
});

const USERReducer = UserReducer.reducer;

export default USERReducer;
