import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BgProductsContainer } from "../../containers";
import { colors } from "../../constants/colors";
import { useEffect } from "react";
import { abstractGetService } from "../../services/abstractGetService";
import { useAllProductsViewModel } from "./viewModel";
import { useNavigate } from "../../hooks/useNavigate";
import { pattersValues } from "../../helpers/pattersValues";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFoodHubContext } from "../../context";

export const AllProductsView = () => {
    const { favorites, toggleFavorite } = useFoodHubContext();
    const { products, setProducts } = useAllProductsViewModel();
    const { navigate } = useNavigate();

    useEffect(() => {
        async function fetchDates() {
            const responde = await abstractGetService('products');
            setProducts(responde);
        }
        fetchDates();
    }, [])

    return (
        <BgProductsContainer>
            <Text style={styles.titleBlack}>Fast</Text>
            <Text style={styles.titleOrange}>Food</Text>
            <Text style={styles.titleText}>80 type of pizza</Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {products.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.card}
                        onPress={() => navigate('ProductsDetails', { id: item.id })}
                    >
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                        <View style={styles.preco}>
                            <Text style={styles.priceOrange}>$</Text>
                            <Text style={styles.priceBlack}>{pattersValues(item.price)}</Text>
                        </View>
                        <TouchableOpacity style={styles.favorite} onPress={() => toggleFavorite(item)}>
                            <AntDesign name={favorites.some(fav => fav.id === item.id) ? 'heart' : 'hearto'} color={favorites.some(fav => fav.id === item.id) ? colors.orange : 'white'} size={30} />
                        </TouchableOpacity>
                        <View style={styles.star}>
                            <Text style={styles.priceBlack}>{item.evaluation}</Text>
                            <MaterialCommunityIcons name="star" color='#FFC529' />
                            <Text style={styles.plus}>(25+)</Text>
                        </View>
                        <View style={styles.info}>
                            <View style={styles.viewName}>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            <View style={styles.viewDelivey}>
                                <Text style={styles.textDelivery}>{item.establishment}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </BgProductsContainer>
    );
}

const styles = StyleSheet.create({
    titleBlack: {
        fontSize: 50,
        fontWeight: '700',
        color: colors.black
    },
    titleOrange: {
        fontSize: 60,
        fontWeight: '700',
        color: colors.orange
    },
    titleText: {
        fontSize: 20,
        color: colors.grey,
        fontWeight: '500'

    },
    scrollContainer: {
        paddingHorizontal: 5,
        gap: 20,
        marginTop: 30,
        paddingBottom: 80
    },
    card: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,

    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
    },
    preco: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: 10,
        backgroundColor: '#FFFFFF',
        padding: 5,
        borderRadius: 10,
    },
    priceOrange: {
        color: colors.orange,
        fontSize: 18,
        fontWeight: '700'
    },
    priceBlack: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 18,
    },
    favorite: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        backgroundColor: '#ffffff5e',
        padding: 5,
        borderRadius: 50,
    },
    star: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 180,
        left: 10,
        backgroundColor: '#ffffff',
        padding: 7,
        borderRadius: 50,
        gap: 3
    },
    info: {
        padding: 10,
        gap: 8,
    },
    viewName: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
    },
    viewDelivey: {
        flexDirection: 'row',
        gap: 20,
    },
    textDelivery: {
        color: '#7E8392',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    plus: {
        fontSize: 10,
        color: '#9796A1'
    }
});