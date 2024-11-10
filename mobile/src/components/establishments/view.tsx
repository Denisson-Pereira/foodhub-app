import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { abstractGetService } from "../../services/abstractGetService";
import { useEstablishmentViewModel } from "./viewModel";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { upperCase } from "../../helpers/upperCase";
import { useNavigate } from "../../hooks/useNavigate";
import { useFoodHubContext } from "../../context";
import { colors } from "../../constants/colors";

export const EstablishmentView = () => {
    const { establishment, setEstablishment } = useEstablishmentViewModel();
    const { toggleFavoritesEstablishment, favoritesEstablishment} = useFoodHubContext();
    const { navigate } = useNavigate();

    useEffect(() => {
        async function getDates() {
            const response = await abstractGetService('establishments');
            setEstablishment(response);
        }
        getDates();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Featured Restaurants</Text>
                <TouchableOpacity
                    style={styles.textContainer}
                    onPress={() => navigate('AllEstablishments')}
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
                {establishment.map((item) => (
                    <View key={item.id} style={styles.cardContainer}>
                        <TouchableOpacity style={styles.card} onPress={() => navigate('EstablishmentsDetails', { id: item.id })}>
                            <Image
                                source={{ uri: item.cover }}
                                style={styles.image}
                            />
                            <View style={styles.star}>
                                <Text style={styles.priceBlack}>{item.evaluation}</Text>
                                <MaterialCommunityIcons name="star" color='#FFC529' />
                                <Text style={styles.plus}>(25+)</Text>
                            </View>
                            <TouchableOpacity onPress={() => toggleFavoritesEstablishment(item)} style={styles.favorite}>
                                        <AntDesign name={favoritesEstablishment.some(fav => fav.id === item.id) ? 'heart' : 'hearto'} color={favoritesEstablishment.some(fav => fav.id === item.id) ? colors.orange : 'white'} size={30} />
                                    </TouchableOpacity>
                            <View style={styles.info}>
                                <View style={styles.viewName}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Ionicons
                                        name="checkmark-circle-sharp"
                                        color="#029094"
                                        size={20}
                                    />
                                </View>
                                <View style={styles.viewDelivey}>
                                    <View style={styles.viewDeliveryContainer}>
                                        <Image
                                            source={require('../../assets/delivery.png')}
                                            style={styles.icons}
                                        />
                                        <Text style={styles.textDelivery}>Free delivery</Text>
                                    </View>
                                    <View style={styles.viewDeliveryContainer}>
                                        <Image
                                            source={require('../../assets/time.png')}
                                            style={styles.icons}
                                        />
                                        <Text style={styles.textDelivery}>{item.time} mins</Text>
                                    </View>
                                </View>
                                <View style={styles.tagContainer}>
                                    <View
                                        style={styles.viewTag}
                                    >
                                        <Text style={styles.textTag}>{upperCase(item.tag_1)}</Text>
                                    </View>
                                    <View
                                        style={styles.viewTag}
                                    >
                                        <Text style={styles.textTag}>{upperCase(item.tag_2)}</Text>
                                    </View>
                                    <View
                                        style={styles.viewTag}
                                    >
                                        <Text style={styles.textTag}>{upperCase(item.tag_3)}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    scrollContainer: {
        paddingHorizontal: 5,
        gap: 10,
    },
    card: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardContainer: {
        width: 300,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#00000037',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        // Adiciona um padding para afastar o conteúdo da borda
        marginVertical: 10,
    },
    favorite: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        right: 10,
        backgroundColor: '#ffffffc8',
        padding: 5,
        borderRadius: 50,
    },
    textOrange: {
        color: '#FE724C'
    },
    viewName: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5
    },
    viewDelivey: {
        flexDirection: 'row',
        gap: 40
    },
    textDelivery: {
        color: '#7E8392'
    },
    icons: {
        resizeMode: 'contain',
    },
    viewDeliveryContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    info: {
        padding: 10,
        gap: 7
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rating: {
        fontSize: 14,
        color: '#888',
    },
    deliveryInfo: {
        fontSize: 12,
        color: '#888',
    },
    viewTag: {
        backgroundColor: '#F6F6F6',
        padding: 10,
        borderRadius: 10

    },
    tagContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    textTag: {
        color: '#8A8E9B'
    },
    evaluation: {
        position: 'absolute',
        top: 10
    },
    star: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
        left: 10,
        backgroundColor: '#ffffff',
        padding: 7,
        borderRadius: 50,
        gap: 3
    },
    plus: {
        fontSize: 10,
        color: '#9796A1'
    },
    priceBlack: {
        color: '#000000',
        fontWeight: '700',
        fontSize: 18,
    },
});
