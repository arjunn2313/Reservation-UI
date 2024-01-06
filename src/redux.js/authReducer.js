import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : 'auth',
    initialState:{
        user : null
    },
    reducers : {
        loginSuccess : (state,action) =>{
            state.user = action.payload
        },
        logOut : (state,action) =>{
            state.user = null
        },
    }
})

export const {loginSuccess,logOut} = authSlice.actions;
export default authSlice.reducer