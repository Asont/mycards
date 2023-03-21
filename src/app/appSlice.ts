import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {appApi, authApi} from "../api/authApi";
import {errorHandler} from "../common/utils/errorCommonFunction";
import {isLogin} from "./authSlice";

export const isInitializedTC = createAsyncThunk('app/isInitializedTC', async (undefined, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(changeStatusRequest('loading'))
    try {
        await appApi.initialized()
        dispatch(changeStatusRequest('success'))
        dispatch(isLogin({login: true}))
        dispatch(setInitialized(true))
        return null
    } catch (e) {
        errorHandler(e, dispatch)
        dispatch(setInitialized(true))
        return rejectWithValue(e)
    }
})

export const registration = createAsyncThunk('auth/registration', async (param: {email:string,password:string}, {
    dispatch,
    rejectWithValue
}) => {
    dispatch(changeStatusRequest('loading'))
    try {
        await authApi.registration(param.email, param.password)
        dispatch(changeStatusRequest('success'))
        return null
    } catch (e) {
        dispatch(changeStatusRequest('failed'))
        errorHandler(e, dispatch)
        rejectWithValue(e)
    }
    dispatch(setInitialized(true))
})

const slice = createSlice({
    name: 'app',
    initialState: {
        error: null as (string | null),
        isInitialezed: false,
        status: 'loading' as RequestStatusType,
        success: false
    },
    reducers: {
        changeStatusRequest(state, action: PayloadAction<RequestStatusType>) {
            state.status = action.payload
        },
        setErrorResponse(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
        setInitialized(state, action: PayloadAction<boolean>) {
            state.isInitialezed = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(registration.fulfilled, (state) => {
            state.success = true
        })
    }
})

export const appReducer = slice.reducer

export const {changeStatusRequest, setErrorResponse, setInitialized} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'success' | 'failed'