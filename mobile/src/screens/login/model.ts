import React from "react"

export interface ILoginModel {
    login: string
    password: string
    isLoading: boolean
    isLoginFocused: boolean
    isPasswordFocused: boolean
    setLogin: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    setIsLoginFocused: React.Dispatch<React.SetStateAction<boolean>>
    setIsPasswordFocused: React.Dispatch<React.SetStateAction<boolean>>
    onSubmit: () => void
}