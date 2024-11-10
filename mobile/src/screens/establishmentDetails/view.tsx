import { useEffect } from "react"
import { abstractGetByIdService } from "../../services/abstractGetByIdService"
import { useEstablishmentDetailsViewModel } from "./viewModel"
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BgCleanContainer, MainContainer } from "../../containers";
import { AntDesign, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { abstractGetService } from "../../services/abstractGetService";
import { IProduct } from "../../models/IProduct";
import { useNavigate } from "../../hooks/useNavigate";
import { useFoodHubContext } from "../../context";
import { colors } from "../../constants/colors";
import { pattersValues } from "../../helpers/pattersValues";

export const EstablishmentDetailsView = () => {
    const { establishment, id, products, setProducts, setEstablishment } = useEstablishmentDetailsViewModel();
    const { navigate } = useNavigate();
    const { favorites, toggleFavorite } = useFoodHubContext();

    useEffect(() => {
        const fetchEstablishment = async () => {
            try {
                const response = await abstractGetByIdService('establishments', id);
                setEstablishment(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchEstablishment();
    }, [id]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await abstractGetService('products');
                setProducts(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [])

    return (
        <BgCleanContainer>
            <MainContainer>
                <View style={styles.containerMain}>
                    {establishment ? (
                        <View style={styles.containerImgTitle}>
                            <Image
                                source={{ uri: establishment.cover }}
                                style={styles.imgCover}
                            />
                            <View style={styles.container}>
                                <View style={styles.containerPerson}>
                                    <View style={styles.containerImg}>
                                        <Image
                                            source={{ uri: establishment.image }}
                                            style={styles.img}
                                        />
                                        <View style={styles.viewIcon}>
                                            <FontAwesome name="check-circle" color="#029094" size={20} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.containerInfo}>
                                <Text style={styles.textName}>{establishment.name}</Text>
                                <Text style={styles.textAddress}>{establishment.address}</Text>
                                <Text style={styles.textPrice}>{establishment.price}</Text>
                            </View>
                            <Text style={styles.title}>Products</Text>
                            <ScrollView
                                style={styles.containerProducts}
                                showsVerticalScrollIndicator={false}
                            >
                                {products.filter(product => product.establishment === establishment.name).map((item) => (
                                    <View key={item.id} style={styles.cardContainer}>
                                        <TouchableOpacity
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
                                                <MaterialCommunityIcons name="star" color='#FFC529' />
                                                <Text style={styles.priceBlack}>{item.evaluation}</Text>
                                            </View>
                                            <View style={styles.info}>
                                                <View style={styles.viewName}>
                                                    <Text style={styles.name}>{item.name}</Text>
                                                </View>
                                                <View style={styles.viewDelivey}>
                                                    <Text style={styles.textDelivery}>{item.description}</Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                                <View style={styles.space}></View>
                            </ScrollView>
                        </View>
                    ) : (
                        <View>
                            <Text>SEM DADOS</Text>
                        </View>
                    )}
                </View>
            </MainContainer>
        </BgCleanContainer>
    );
}

const styles = StyleSheet.create({
    imgCover: {
        width: '100%',
        height: 200,
        borderRadius: 20
    },
    containerMain: {

    },
    containerImgTitle: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    container: {
        position: 'absolute',
        width: 200,
        height: 150,
        top: '10%',
        left: '50%',
        transform: [
            { translateX: -100 },
        ],
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        zIndex: 1,
    },
    containerImg: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#f89f2a',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.55,
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 10,
    },
    containerPerson: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 100,
        marginBottom: 20,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    viewIcon: {
        backgroundColor: 'white',
        borderRadius: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        bottom: -7,
        right: 0
    },
    cardContainer: {
        width: "100%",
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
        backgroundColor: '#ffffffc8',
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
        textAlign: 'justify',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    containerProducts: {

    },
    containerInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    textPrice: {
        fontSize: 15,
        color: '#50b36a',
        fontWeight: '700'
    },
    textName: {
        fontSize: 25,
        color: colors.black,
        fontWeight: '800'
    },
    textAddress: {
        fontSize: 15,
        color: colors.grey,
        fontWeight: '500'
    },
    title: {
        fontSize: 25,
        paddingLeft: 5,
        fontWeight: '700',
        marginVertical: 10
    },
    space: {
        height: 100,
        marginBottom: 1000,
    }
});