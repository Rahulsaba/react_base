import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }, { rejectWithValue }) => {
       
      try {
        // configure header's Content-Type as JSON
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        const { data } = await axios.post(
          import.meta.env.VITE_API_MAIN_API + 'login',
          { email, password },
          config
        )
        // store user's token in local storage
        localStorage.setItem('token', data?.token);
        return data
      } catch (error) {
        console.log(error , 'error-authActions');
        // return custom error message from API if any
        if (error && error.message) {
          return rejectWithValue(error.message)
        } 
      }
    }



    
  )