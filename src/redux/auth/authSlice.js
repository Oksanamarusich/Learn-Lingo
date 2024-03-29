import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
  name:null,
  email: null,
  token: null,
};   

const authSlice = createSlice({
    name: 'auth',
    initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      
    }, 
    refreshUser(state, action) {
       state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
    }
    }
     
})
export const { setUser, removeUser, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;