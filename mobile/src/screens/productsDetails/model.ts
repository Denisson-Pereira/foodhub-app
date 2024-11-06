import { IProduct } from "../../models/IProduct";
import { ProductsDetailsRouteProp } from "../../types/navigationTypes";

export interface IProductsDetails {
    product: IProduct | null
    route: ProductsDetailsRouteProp
    id: number
    setProduct: React.Dispatch<React.SetStateAction<IProduct | null>>
}