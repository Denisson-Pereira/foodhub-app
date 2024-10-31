export interface ISignUpModel {
    name: string
    login: string
    password: string
    error: string | null
    isNameFocused: boolean
    isLoginFocused: boolean
    isPasswordFocused: boolean
    registering: boolean
    setName: React.Dispatch<React.SetStateAction<string>>
    setLogin: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setError: React.Dispatch<React.SetStateAction<string | null>>
    setIsNameFocused: React.Dispatch<React.SetStateAction<boolean>>
    setIsLoginFocused: React.Dispatch<React.SetStateAction<boolean>>
    setIsPasswordFocused: React.Dispatch<React.SetStateAction<boolean>>
    handleRegister: () => void
    forLogin: () => void
}