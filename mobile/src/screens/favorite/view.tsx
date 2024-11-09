import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { BgCleanContainer, MainContainer } from "../../containers";
import { CustomButtonUp } from "../../custom";
import { colors } from "../../constants/colors";
import { useFoodHubContext } from "../../context";
import { useNavigate } from "../../hooks/useNavigate";
import { pattersValues } from "../../helpers/pattersValues";
import { useState } from "react";

export const FavoriteView = () => {
    const { favorites, toggleFavorite } = useFoodHubContext();
    const { navigate } = useNavigate();

    const [selected, setSelected] = useState<'food' | 'establishment'>('food');
    return (
        <BgCleanContainer>
            <MainContainer>
                <View style={styles.header}>
                    <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                    <Text style={styles.headerTitle}>Favorites</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[styles.button, selected === 'food' && styles.selectedButton]}
                        onPress={() => setSelected('food')}
                    >
                        <Text style={[styles.buttonText, selected === 'food' && styles.selectedText]}>
                            Food Items
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, selected === 'establishment' && styles.selectedButton]}
                        onPress={() => setSelected('establishment')}
                    >
                        <Text style={[styles.buttonText, selected === 'establishment' && styles.selectedText]}>
                            Resturents
                        </Text>
                    </TouchableOpacity>
                </View>
                {selected === 'food' ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContainer}
                    >
                        {favorites.map((item) => (
                            <View style={styles.cardContainer} key={item.id}>
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
                                    <TouchableOpacity onPress={() => toggleFavorite(item)} style={styles.favorite}>
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
                            </View>
                        ))}
                    </ScrollView>
                ) : (
                    <Text>Restrents</Text>
                )}
            </MainContainer>
        </BgCleanContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        color: colors.black,
    },
    scrollContainer: {
        paddingHorizontal: 5,
        gap: 20,
        marginTop: 30,
        paddingBottom: 80
    },
    cardContainer: {
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#00000037',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
        marginVertical: 10,
    },
    card: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
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
    image: {
        width: '100%',
        height: 200,
        borderRadius: 20,
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
    },
    viewName: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 5,
    },
    container: {
        flexDirection: 'row',
        borderRadius: 40,
        overflow: 'hidden',
        backgroundColor: '#ffffff', 
        padding: 4, 
        borderWidth: 1,
        borderColor: '#F2EAEA',
    },
    button: {
        flex: 1,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 40,
    },
    selectedButton: {
        backgroundColor: colors.orange, 
    },
    buttonText: {
        color: colors.orange, 
        fontSize: 17,
        fontWeight: '500'
    },
    selectedText: {
        color: '#FFFFFF',
    },
});