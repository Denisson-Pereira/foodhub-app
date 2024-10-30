export interface ISignUpModel {
    name: string
    login: string
    password: string
    isNameFocused: boolean
    isLoginFocused: boolean
    isPasswordFocused: boolean
    setName: React.Dispatch<React.SetStateAction<string>>
    setLogin: React.Dispatch<React.SetStateAction<string>>
    setPassword: React.Dispatch<React.SetStateAction<string>>
    setIsNameFocused: React.Dispatch<React.SetStateAction<boolean>>
    setIsLoginFocused: React.Dispatch<React.SetStateAction<boolean>>
    setIsPasswordFocused: React.Dispatch<React.SetStateAction<boolean>>
    onSubmit: () => void
}