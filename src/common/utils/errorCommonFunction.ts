import axios, {AxiosError} from "axios";
import {setErrorResponse} from "../../app/appSlice";
import {ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";

export const errorHandler = (e:any, dispatch:ThunkDispatch<unknown, unknown, AnyAction>) => {
    const err = e as Error | AxiosError<{ error: string }>
    if (axios.isAxiosError(err)) {
        const error = err.response?.data ? err.response.data.error : err.message
        dispatch(setErrorResponse(error))
    } else {
        dispatch(setErrorResponse(`Native error ${err.message}`))
    }
}