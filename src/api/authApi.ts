import {instance} from "./instance";

export const authApi = {
    login(data: { email: string, password: string, rememberMe: boolean }) {
        return instance.post<RequestLoginType, ResponseLoginType>('/auth/login', data)
    },
    logout() {
        return instance.delete('/auth/me')
    },
    registration(email:string, password:string){
        return instance.post<RequestRegistrationType, ResponseRegistrationType>('/auth/register', {email, password})
    }
}

export const appApi = {
    initialized() {
        return instance.post<ResponseLoginType>('/auth/me', {})
    }
}


export type ResponseLoginType = {
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

export type ResponseRegistrationType = {
    addedUser: any
    error?: string
}

export type RequestLoginType = {
    email: string
    password: string
    rememberMe: boolean
}

export type RequestRegistrationType = {
    email: string
    password: string
}