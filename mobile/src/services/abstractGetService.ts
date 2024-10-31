import { connectionService } from "./connectionService";

export const abstractGetService = async (item: string) => {
    try {
        const response = await connectionService.get(`/${item}`);
        return response.data;
    } catch (error) {
        console.log('Erro with dates', error);
    }
}