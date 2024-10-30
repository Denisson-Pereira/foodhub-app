import { useState } from "react"
import { loginService } from "../../services/loginService";
import { useFoodHubContext } from "../../context";
import { useNavigate } from "../../hooks/useNavigate";
import { Alert } from "react-native";

export const useLoginViewModel = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { setUser } = useFoodHubContext();
    const { navigate } = useNavigate();

    const onSubmit = async () => {
        try {
            setIsLoading(true)
            const response = await loginService(login, password, setUser);
            if (response) {
                setUser(response);
                navigate('home')
                return response;
            }
        } catch (error) {
            console.log(error);
            Alert.alert("Ops!, Something went wrong.")
        } finally {
            setIsLoading(false);
        }
    }

    return { login, password, setLogin, setPassword, onSubmit, isLoading };
}