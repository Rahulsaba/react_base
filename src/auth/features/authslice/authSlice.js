import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '@/auth/features/authAction/authAction'

// initialize userToken from local storage
const userToken = localStorage.getItem('token') || null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
      .addCase(userLogin.pending, (state) => {

        state.loading = true;
        state.error = null;

      })

      .addCase(userLogin.fulfilled, (state, action) => {
        
        state.loading = false;
        state.userInfo = action.payload;
        state.userToken = action.payload.token;
       
      })
      
      .addCase(userLogin.rejected, (state, action) => {

        state.loading = false;
        state.error = action.payload || action.error.message;

      });
  },
});

export default authSlice.reducer;


// const initialState1 = {
  
//   }
  
  
//   const authStatus = [
//      {
//       name : 'userLogin', 
//       api : userLogin,
//     }
//   ]
//   console.log(initialState1 ,'initialState1up');
  
//   authStatus.forEach(element => {
//     initialState1[element.name] = {loading: false , data : null , error: null}
//   });
//   console.log(initialState1 ,'initialState1down');