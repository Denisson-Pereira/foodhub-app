import { IRegister } from "../models/IRegister";
import { connectionService } from "./connectionService";

export async function signUpService(register: IRegister) {
    try {
        const { data } = await connectionService.post('/auth/register', {
            name: register.name,
            login: register.login,
            password: register.password
        });
        return data;
    } catch (error) {
        console.log(error);
        return {msg: 'Erro for sign up!'};
    }
}