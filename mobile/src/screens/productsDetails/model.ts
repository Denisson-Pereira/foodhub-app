import { IProduct } from "../../models/IProduct";

export interface IProductsDetails {
    product: IProduct | null
    id: number
    setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>
}