import { useState } from "react";
import { ISignUpModel } from "./model";
import { signUpService } from "../../services/signUpService";
import { useNavigate } from "../../hooks/useNavigate";
import { IRegister } from "../../models/IRegister";
import { fillAllFields } from "../../helpers/fillAllFields";

export const useSignUpViewModel = (): ISignUpModel => {
    const [name, setName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isNameFocused, setIsNameFocused] = useState<boolean>(false);
    const [isLoginFocused, setIsLoginFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [created, setCreated] = useState<boolean>(false);

    const { navigate } = useNavigate();

    const onSubmit = async () => {
        const errorMessage = fillAllFields(name, login, password);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        try {
            const register: IRegister = { name, login, password }
            const response = await signUpService(register);
            if(response?.msg) {
                setError(response.msg);
            } else {
                setCreated(true);
            }
            navigate('login');
        } catch (error) {
            console.log(error);
        }
    }

    const forLogin = () => {
        navigate('login');
    }

    return {name, login, password, isLoginFocused, isNameFocused, isPasswordFocused, error, created, setName, setLogin, setPassword, setIsNameFocused, setIsLoginFocused, setIsPasswordFocused, setError, setCreated, onSubmit, forLogin}
}