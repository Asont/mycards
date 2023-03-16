import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authApi, RequestLoginType} from "../api/authApi";
import {changeStatusRequest, setErrorResponse} from "./appSlice";
import axios, {AxiosError} from "axios";

export const loginIn = createAsyncThunk('auth/loginIn', async (param:RequestLoginType, {dispatch, rejectWithValue})=>{
    try{
        dispatch(changeStatusRequest('loading'))
         await authApi.login(param)
        dispatch(changeStatusRequest('success'))
        return null
    } catch(e){
        dispatch(changeStatusRequest('failed'))
        const err = e as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
            const error = err.response?.data ? err.response.data.error : err.message
            dispatch(setErrorResponse(error))
        } else {
            dispatch(setErrorResponse(`Native error ${err.message}`))
        }
        return rejectWithValue(e)
    }

})

const slice = createSlice({
    name:'auth',
    initialState:{
        login:false
    },
    reducers:{},
    extraReducers(builder){
        builder.addCase(loginIn.fulfilled, (state)=>{
            state.login = true
        })
    }
})

export const authSlice = slice.reducer