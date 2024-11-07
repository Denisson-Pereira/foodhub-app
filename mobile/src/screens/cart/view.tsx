import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers/mainContainer";
import { CustomButtonUp } from "../../custom";
import { CartItem, useFoodHubContext } from "../../context";
import { useNavigate } from "../../hooks/useNavigate";
import { BgCleanContainer } from "../../containers";
import { pattersValues } from "../../helpers/pattersValues";
import { colors } from "../../constants/colors";

export const CartView = () => {
    const { cart, removeCart, incrementQuantity, decrementQuantity } = useFoodHubContext();
    const { navigate } = useNavigate();

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.item}>
            <TouchableOpacity
                style={styles.itemContent}
                onPress={() => navigate('ProductsDetails', { id: item.id })}
            >
                <Image source={{ uri: item.image }} style={styles.img} />
                <View style={styles.container2}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemEstablishment}>{item.establishment}</Text>
                    <Text style={styles.itemPrice}>${pattersValues(item.price)}</Text>
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity onPress={() => removeCart(item.cartId)} style={styles.x}>
                        <AntDesign name="close" color={colors.orange} size={20} />
                    </TouchableOpacity>
                    <View style={styles.btnPlus}>
                        <TouchableOpacity onPress={() => decrementQuantity(item.cartId)}>
                            <AntDesign name="minuscircleo" color={colors.orange} size={25} />
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => incrementQuantity(item.cartId)}>
                            <AntDesign name="pluscircle" color={colors.orange} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <BgCleanContainer>
            <MainContainer>
                <View style={styles.header}>
                    <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                    <Text style={styles.headerTitle}>Cart</Text>
                </View>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.cartId}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                />
            </MainContainer>
        </BgCleanContainer>
    );
};

const styles = StyleSheet.create({
    flatListContent: {
        paddingTop: 20,
        paddingBottom: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 8,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        color: colors.black,
    },
    item: {
        borderRadius: 15,
        padding: 10,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 6,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 5,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
    },
    itemEstablishment: {
        fontSize: 14,
        color: colors.grey,
        marginVertical: 3,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: colors.orange,
    },
    container3: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    x: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    btnPlus: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    quantityText: {
        fontSize: 16,
        fontWeight: '500',
        marginHorizontal: 8,
    },
});
