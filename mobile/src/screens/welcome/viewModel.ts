import { useNavigate } from "../../hooks/useNavigate"
import { IWelcomeModel } from "./model";

export const useWelcomeViewModel = (): IWelcomeModel => {
    const { navigate } = useNavigate();

    const login = () => {
        navigate('login');
    }

    const signUp = () => {
        navigate('register');
    }

    return { login, signUp }
}