import { IUser } from "../models/User";
import { connection } from "./connection";

export async function loginService(
    login: string,
    password: string,
    setUsuario: (usuario: IUser) => void
) {
    try {
        const { data } = await connection.post('/auth/login', {
            login: login,
            password: password
        });

        if (!data.id) {
            return { status: false, msg: 'Usuário não encontrado.' };
        }

        setUsuario(data);
        return { usuario: data, status: true };

    } catch (error) {
        console.error("Erro no login:", error);
        return { status: false, msg: 'Erro ao tentar logar. Por favor, tente novamente.' };
    }
}
