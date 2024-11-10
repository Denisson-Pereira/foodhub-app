import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { abstractGetService } from "../../services/abstractGetService";
import { IProduct } from "../../models/IProduct";
import { useNavigate } from "../../hooks/useNavigate";

export const FindBarView = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>(""); 
    const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

    const { navigate } = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            const response = await abstractGetService("products");
            setProducts(response);
        }
        fetchProducts();
    }, []);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredProducts([]); 
        } else {
            setFilteredProducts(
                products.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, products]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>What would you like to order</Text>
            <View style={styles.view}>
                <View style={styles.inputContainer}>
                    <AntDesign name="search1" size={25} color='#767F9D' />
                    <TextInput
                        style={styles.input}
                        placeholder="Find for food or restaurant..."
                        value={searchTerm}
                        onChangeText={setSearchTerm} 
                    />
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="tune-variant" color='#FE724C' size={30} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.productList}>
                {searchTerm !== "" && filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                        <TouchableOpacity 
                            key={item.id} 
                            style={styles.productContainer}
                            onPress={() => navigate('ProductsDetails', { id: item.id })}
                        >
                            <Image 
                                source={{ uri: item.image }} 
                                style={styles.img}
                            />
                            <View>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text>{item.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    searchTerm !== "" && <Text style={styles.noResults}>No products found</Text>
                )}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FCFCFD',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        width: "90%",
        height: 60,
        gap: 10,
        paddingHorizontal: 20,
    },
    input: {
        fontSize: 17,
        fontWeight: '600',
        flex: 1,
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        padding: 5,
    },
    productContainer: {
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
        flexDirection: 'row',
        gap: 10
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
    },
    noResults: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FE724C',
        textAlign: 'center',
        marginTop: 20,
    },
    productList: {
        marginTop: 10,
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
});
