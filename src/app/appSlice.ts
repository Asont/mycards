import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appApi} from "../api/authApi";
import {errorHandler} from "../common/utils/errorCommonFunction";
import {isLogin} from "./authSlice";

export const isInitializedTC = createAsyncThunk('app/isInitializedTC', async (undefined,{dispatch, rejectWithValue})=>{
    dispatch(changeStatusRequest('loading'))
    try {
        await appApi.initialized()
        dispatch(changeStatusRequest('success'))
        dispatch(isLogin({login:true}))
        dispatch(setInitialized(true))
        return null
    } catch (e) {
        errorHandler(e, dispatch)
        dispatch(setInitialized(true))
        return rejectWithValue(e)
    }
})

const slice = createSlice({
    name:'app',
    initialState:{
        error:null as (string | null),
        isInitialezed:false,
        status:'loading' as RequestStatusType
    },
    reducers:{
        changeStatusRequest (state, action:PayloadAction<RequestStatusType>){
            state.status = action.payload
        },
        setErrorResponse (state, action:PayloadAction<string>){
            state.error = action.payload
        },
        setInitialized(state, action:PayloadAction<boolean>){
            state.isInitialezed=action.payload
        }
    },
    extraReducers(){
    }
})

export const appReducer = slice.reducer

export const {changeStatusRequest,setErrorResponse,setInitialized} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'success' | 'failed'