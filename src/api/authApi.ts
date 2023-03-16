import {instance} from "./instance";

export const authApi = {
    login(data:{email: string, password: string, rememberMe: boolean}){
        return instance.post<RequestLoginType,ResponseLoginType>('/auth/login', data)
    }
}


type ResponseLoginType = {
    _id: string
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
}