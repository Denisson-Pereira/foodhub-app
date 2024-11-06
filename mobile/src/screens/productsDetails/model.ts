import { IProduct } from "../../models/IProduct";

export interface IProductsDetails {
    product: IProduct | null
    setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>
}