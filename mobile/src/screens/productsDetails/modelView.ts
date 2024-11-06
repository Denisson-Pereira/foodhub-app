import { useState } from "react";
import { IProductsDetails } from "./model";
import { IProduct } from "../../models/IProduct";

export const useProductsDetailsViewModel = (): IProductsDetails => {
    const [product, setProduct] = useState<IProduct | null>(null);
    return {product, setProduct};
}