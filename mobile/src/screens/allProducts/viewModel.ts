import { useState } from "react";
import { IAllProductsModel } from "./model"
import { IProduct } from "../../models/IProduct";

export const useAllProductsViewModel = (): IAllProductsModel => {
    const [products, setProducts] = useState<IProduct[]>([]);

    return {products, setProducts};
}