import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/auth/features/authslice/authSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})