import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {authApi, RequestLoginType} from "../api/authApi";
import {changeStatusRequest} from "./appSlice";
import {errorHandler} from "../common/utils/errorCommonFunction";

export const loginIn = createAsyncThunk('auth/loginIn', async (param: RequestLoginType, {
    dispatch,
    rejectWithValue
}) => {
    try {
        dispatch(changeStatusRequest('loading'))
        await authApi.login(param)
        dispatch(changeStatusRequest('success'))
        dispatch(isLogin({login: true}))
        return null
    } catch (e) {
        dispatch(changeStatusRequest('failed'))
        errorHandler(e, dispatch)
        return rejectWithValue(e)
    }
})

export const logout = createAsyncThunk('auth/logout', async (undefined, {dispatch, rejectWithValue}) => {
    dispatch(changeStatusRequest('loading'))
    try {
        await authApi.logout()
        dispatch(changeStatusRequest('success'))
        return dispatch(isLogin({login: false}))
    } catch (e) {
        dispatch(changeStatusRequest('failed'))
        errorHandler(e, dispatch)
        rejectWithValue(e)
    }
})

const slice = createSlice({
    name: 'auth',
    initialState: {
        login: false,
        succsess:false,
    },
    reducers: {
        isLogin(state, action: PayloadAction<{ login: boolean }>) {
            state.login = action.payload.login
        }
    },
    extraReducers() {
    }
})

export const authSlice = slice.reducer

export const {isLogin} = slice.actions