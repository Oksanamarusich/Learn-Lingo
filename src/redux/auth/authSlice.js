import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
  name:null,
   email: null,
  id:null,
  token: null,
};   

const authSlice = createSlice({
    name: 'auth',
    initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    removeUser(state) {
      state.email = null;
      state.id = null;
      state.token = null;
      
    }, 
    refreshUser(state, action) {
       state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    }
    }
     
})
export const { setUser, removeUser, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;