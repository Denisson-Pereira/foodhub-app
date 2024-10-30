import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../models/IUser";
import { connectionService } from "./connectionService";

export const FOODHUB_USER = '@Foodhub:user'

export async function loginService(login: string, password: string, setUser: (user: IUser) => void) {
    try {
        const { data } = await connectionService.post('/auth/login', {
            login: login,
            password: password
        });
        if (!data.id) {
            return {msg: 'Not found!'}
        } else {
            await AsyncStorage.setItem(FOODHUB_USER, JSON.stringify(data));
            setUser(data);
            return data;
        }
    } catch (error: any) {
        console.log(error)
        const errorMessage = error.response?.data?.message || 'Erro ao conectar ao servidor!';
        return { msg: errorMessage }; 
    }
}