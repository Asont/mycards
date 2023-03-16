import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {authSlice} from "./authSlice";
import {appReducer} from "./appSlice";

const rootReducer = combineReducers({
    auth:authSlice,
    app:appReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type useAppDispatch =ThunkDispatch<RootState, unknown, AnyAction>