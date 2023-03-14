import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authSlice} from "./authSlice";

const rootReducer = combineReducers({
    auth:authSlice
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector