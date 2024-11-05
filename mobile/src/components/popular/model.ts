import { IProduct } from "../../models/IProduct";

export interface IPoupularModel {
    popularItens: IProduct[]
    setPopularItens: React.Dispatch<React.SetStateAction<IProduct[]>>
}