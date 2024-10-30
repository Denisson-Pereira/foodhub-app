import { useNavigate } from "../../hooks/useNavigate"
import { IWelcomeModel } from "./model";

export const useWelcomeViewModel = (): IWelcomeModel => {
    const { navigate } = useNavigate();

    const login = () => {
        navigate('login');
    }

    return {login}
}