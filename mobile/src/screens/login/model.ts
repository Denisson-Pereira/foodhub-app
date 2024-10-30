import React from "react"

export interface ILoginModel {
    login: string
    password: string
    isLoading: boolean
    setLogin: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    onSubmit: () => void
}