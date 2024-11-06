import { connectionService } from "./connectionService";

export const abstractGetByIdService = async (item: string, id: number) => {
    try {
        const response = await connectionService.get(`/${item}/${id}`);
        return response.data;
    } catch (error) {
        console.log('Erro with detes', error);
    }
}