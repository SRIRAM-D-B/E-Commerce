import { configureStore, combineReducers } from '@reduxjs/toolkit';
import USERReducer from '../Redux/SignupSlice.js';
import AdminReducer from '../Redux/AdminSlice.js';
import FINDreducer from '../Redux/LoginSlice.js';

const rootReducer = combineReducers({signup: USERReducer, admin: AdminReducer, login: FINDreducer});

const store = configureStore({
  reducer:rootReducer,
});

export default store;