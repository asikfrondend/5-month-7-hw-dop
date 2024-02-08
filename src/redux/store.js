import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import rootReducer from '../reducers/userReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
