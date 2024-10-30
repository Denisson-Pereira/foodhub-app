import { useState } from "react";
import { ISignUpModel } from "./model";
import { Alert } from "react-native";
import { signUpService } from "../../services/signUpService";
import { useNavigate } from "../../hooks/useNavigate";

export const useSignUpViewModel = (): ISignUpModel => {
    const [name, setName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
    const [isLoginFocused, setIsLoginFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);

    const { navigate } = useNavigate();

    const onSubmit = async () => {
        try {
            const response = await signUpService(name, login, password);
            if(response) return Alert.alert("ok!");
            navigate('welcome');
        } catch (error) {
            console.log(error);
            Alert.alert("Ops!, Something went wrong.")
        }
    }

    return {name, login, password, isLoginFocused, isNameFocused, isPasswordFocused, setName, setLogin, setPassword, setIsNameFocused, setIsLoginFocused, setIsPasswordFocused, onSubmit}
}