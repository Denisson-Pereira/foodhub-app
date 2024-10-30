import { connectionService } from "./connectionService";

export async function signUpService(name: string, login: string, password: string) {
    try {
        const { data } = await connectionService.post('/auth/register', {
            name: name,
            login: login,
            password: password
        });
        return data;
    } catch (error) {
        console.log(error);
        return {msg: 'Erro for sign up!'};
    }
}