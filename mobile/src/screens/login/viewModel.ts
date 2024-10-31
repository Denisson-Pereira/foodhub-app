import { useState } from "react";
import { loginService } from "../../services/loginService";
import { useFoodHubContext } from "../../context";
import { useNavigate } from "../../hooks/useNavigate";
import { ILoginModel } from "./model";
import { ILogin } from "../../models/ILogin";
import { fillAllFields } from "../../helpers/fillAllFields";


export const useLoginViewModel = (): ILoginModel => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoginFocused, setIsLoginFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const { setUser } = useFoodHubContext();
    const { navigate } = useNavigate();

    const onSubmit = async () => {
        const errorMessage = fillAllFields(login, password);
        if(errorMessage) {
            setError(errorMessage);
            return;
        }

        try {
            const loginData: ILogin = { login, password }
            const response = await loginService(loginData, setUser);

            if (response?.msg) {
                setError(response.msg);
            } else {
                setUser(response);
                navigate('home');
            }
        } catch (error) {
            console.log("Erro inesperado:", error);
        }
    };

    const handleLogin = async () => {
        setLoading(true); 
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        await onSubmit(); 
        setLoading(false); 
    };

    const signUp = () => {
        navigate('register');
    }

    return { login, password, setLogin, setPassword,loading, setLoading, isLoginFocused, isPasswordFocused, setIsLoginFocused, setIsPasswordFocused, error, setError, signUp, handleLogin };
};
