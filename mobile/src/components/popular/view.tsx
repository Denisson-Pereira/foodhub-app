import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { usePopularViewModel } from "./viewModel";
import { abstractGetService } from "../../services/abstractGetService";
import { IProduct } from "../../models/IProduct";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigate } from "../../hooks/useNavigate";
import { pattersValues } from "../../helpers/pattersValues";

export const PopularView = () => {
    const { popularItens, setPopularItens } = usePopularViewModel();
    const [filterDates, setFilterDates] = useState<IProduct[]>([]);
    const { navigate } = useNavigate();

    useEffect(() => {
        async function getDates() {
            const response = await abstractGetService('products');
            setPopularItens(response);
        }
        getDates();
    }, []);

    useEffect(() => {
        if (popularItens) {
            const dates = popularItens.filter(item => parseFloat(item.evaluation) >= 3);
            setFilterDates(dates);
        }
    }, [popularItens]);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Popular Items</Text>
                <TouchableOpacity 
                    style={styles.textContainer}
                    onPress={() => navigate('AllProducts')}
                >
                    <Text style={styles.textOrange}>View All</Text>
                    <AntDesign name="right" color='#FE724C' size={10} />
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContainer}
            >
                {filterDates.map((item) => (
                    <View style={styles.cardContainer}>
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
                            <TouchableOpacity style={styles.favorite}>
                                <AntDesign name="heart" color='white' size={30} />
                            </TouchableOpacity>
                            <View style={styles.star}>
                                <MaterialCommunityIcons name="star" color='#FFC529' />
                                <Text style={styles.priceBlack}>{item.evaluation}</Text>
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
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 220,
        justifyContent: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    scrollContainer: {
        paddingHorizontal: 5,
        gap: 10
    },
    cardContainer: {
        width: 190,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#00000037',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        marginVertical: 10,
    },
    card: {
        overflow: 'hidden',

    },
    star: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 180,
        left: 10,
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 50,
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
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textOrange: {
        color: '#FE724C'
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
        color: '#FE724C',
        fontSize: 10,
    },
    priceBlack: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 18,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
    },
    info: {
        padding: 10,
        gap: 7,
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
        fontSize: 15,
        fontWeight: 'bold',
    },
});
