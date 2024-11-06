import { useState } from "react";
import { IProductsDetails } from "./model";
import { IProduct } from "../../models/IProduct";
import { useRoute } from "@react-navigation/native";
import { ProductsDetailsRouteProp } from "../../types/navigationTypes";

export const useProductsDetailsViewModel = (): IProductsDetails => {
    const [product, setProduct] = useState<IProduct | null>(null);
    const route = useRoute<ProductsDetailsRouteProp>();
    const { id } = route.params;
    return {product, route, id, setProduct, };
}