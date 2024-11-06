import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { abstractGetByIdService } from "../../services/abstractGetByIdService";
import { useProductsDetailsViewModel } from "./modelView";
import { BgCleanContainer } from "../../containers";
import { FontAwesome5 } from "@expo/vector-icons";
import { pattersValues } from "../../helpers/pattersValues";

export const ProductsDetails = () => {
    const { product, id, setProduct } = useProductsDetailsViewModel();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await abstractGetByIdService('products', id);
                setProduct(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    return (
        <BgCleanContainer>
            <View style={styles.container}>
                {product ? (
                    <>
                        <Image source={{ uri: product.image }} style={styles.productImage} />
                        <View style={styles.detailsContainer}>
                            <Text style={styles.productName}>{product.name}</Text>
                            <Text style={styles.productRating}>⭐ {product.evaluation} (30+)</Text>
                            <Text style={styles.productPrice}>${pattersValues(product.price)}</Text>
                            <Text style={styles.productDescription}>{product.description}</Text>

                            <Text style={styles.sectionTitle}>Choice of Add On</Text>
                            <View style={styles.addonContainer}>
                                <Text style={styles.addonItem}>Pepper Julienned +$2.30</Text>
                                <Text style={styles.addonItem}>Baby Spinach +$4.70</Text>
                                <Text style={styles.addonItem}>Mushroom +$2.50</Text>
                            </View>
                            <View style={styles.btn}>
                                <TouchableOpacity style={styles.addToCartButton}>
                                    <View style={styles.btnView}>
                                        <FontAwesome5 name="shopping-bag" color="#FE724C" size={20} />
                                    </View>
                                    <Text style={styles.addToCartText}>ADD TO CART</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>
                ) : (
                    <Text style={styles.noDataText}>SEM DADOS {id}</Text>
                )}
            </View>
        </BgCleanContainer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,

    },
    productImage: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    detailsContainer: {
        marginTop: 16,
    },
    productName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    productRating: {
        fontSize: 16,
        color: "#666",
        marginVertical: 4,
    },
    productPrice: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FE724C",
        marginVertical: 8,
    },
    productDescription: {
        fontSize: 16,
        color: "#666",
        marginBottom: 16,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 8,
    },
    addonContainer: {
        marginBottom: 16,
    },
    addonItem: {
        fontSize: 16,
        color: "#666",
        paddingVertical: 4,
    },
    addToCartButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: "#FE724C",
        paddingVertical: 12,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 16,
        width: 300,
        // Estilos de sombra para iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        // Estilo de elevação para Android
        elevation: 5,
    },
    addToCartText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
    noDataText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginTop: 20,
    },
    btnView: {
        backgroundColor: "#FFF",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
});
