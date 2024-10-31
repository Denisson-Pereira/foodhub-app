import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../models/IUser";
import { connectionService } from "./connectionService";
import { ILogin } from "../models/ILogin";

export const FOODHUB_USER = '@Foodhub:user'

export async function loginService(login: ILogin, setUser: (user: IUser) => void) {
    try {
        const { data } = await connectionService.post('/auth/login', {
            login: login.login,
            password: login.password
        });

        if (!data.id) {
            return { msg: 'Usuário não encontrado!' };
        } else {
            await AsyncStorage.setItem(FOODHUB_USER, JSON.stringify(data));
            setUser(data);
            return data;
        }
    } catch (error: any) {
        const errorMessage = error.response?.data || "Erro inesperado.";
        console.log("Erro no login:", errorMessage);
        return { msg: errorMessage };
    }
}
