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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoginFocused, setIsLoginFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { setUser } = useFoodHubContext();
    const { navigate } = useNavigate();

    const onSubmit = async () => {
        const errorMessage = fillAllFields(login, password);
        if(errorMessage) {
            setError(errorMessage);
            return;
        }

        setIsLoading(true);

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
        } finally {
            setIsLoading(false);
        }
    };

    const signUp = () => {
        navigate('register');
    }

    return { login, password, setLogin, setPassword, onSubmit, isLoading, setIsLoading, isLoginFocused, isPasswordFocused, setIsLoginFocused, setIsPasswordFocused, error, setError, signUp };
};
