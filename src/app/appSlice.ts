import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        }
    },
    extraReducers(){

    }
})

export const appReducer = slice.reducer

export const {changeStatusRequest,setErrorResponse} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'success' | 'failed'