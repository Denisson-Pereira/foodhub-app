import { useRoute } from "@react-navigation/native";
import { Text, View } from "react-native";
import { ProductsDetailsRouteProp } from "../../types/navigationTypes"
import { useEffect } from "react";
import { abstractGetByIdService } from "../../services/abstractGetByIdService";
import { useProductsDetailsViewModel } from "./modelView";

export const ProductsDetails = () => {
    const { product, setProduct } = useProductsDetailsViewModel();
    const route = useRoute<ProductsDetailsRouteProp>();
    const { id } = route.params;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await abstractGetByIdService('products', id);
                setProduct(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [id])

    return (
        <View>
            {product ? (
                <Text>{product.name}</Text>
            ) : (
                <Text>SEM DADOS {id}</Text>
            )}
        </View>
    );
}