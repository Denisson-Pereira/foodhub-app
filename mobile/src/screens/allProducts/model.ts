import { IProduct } from "../../models/IProduct";

export interface IAllProductsModel {
    products: IProduct[];
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}