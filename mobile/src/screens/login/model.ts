import React from "react"

export interface ILoginModel {
    login: string
    password: string
    loading: boolean
    isLoginFocused: boolean
    isPasswordFocused: boolean
    error: string | null
    setLogin: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    setIsLoginFocused: React.Dispatch<React.SetStateAction<boolean>>
    setIsPasswordFocused: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<string | null>>
    onSubmit: () => void
    signUp: () => void
    handleLogin: () => void
}