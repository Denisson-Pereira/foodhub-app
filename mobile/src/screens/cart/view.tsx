import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers/mainContainer";
import { CustomButton, CustomButtonUp } from "../../custom";
import { CartItem, useFoodHubContext } from "../../context";
import { useNavigate } from "../../hooks/useNavigate";
import { BgCleanContainer } from "../../containers";
import { pattersValues } from "../../helpers/pattersValues";
import { colors } from "../../constants/colors";
import { useCartViewModel } from "./viewModel";
import { useEffect, useState } from "react";

export const CartView = () => {
    const { cart, removeCart, incrementQuantity, decrementQuantity, quantidadeCart } = useFoodHubContext();
    const { delivery, tax, setSubtotal, setTotal, subtotal, total } = useCartViewModel();
    const { navigate } = useNavigate();
    const [inputPromoCode, setInputPromoCode] = useState("");

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

    const codePromo = (code: string) => {
        const validPromoCode = "PROMO10";
        return code === validPromoCode;
    };

    const applyPromoCode = () => {
        if (codePromo(inputPromoCode)) {
            const discount = subtotal * 0.1;
            setTotal(subtotal - discount + tax + delivery);
            alert("Code applied!")
        } else {
            alert("Invalid promotional code!");
        }
    };

    useEffect(() => {
        const subtotalValue = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);
        setSubtotal(subtotalValue);
    }, [cart]);

    useEffect(() => {
        const totalValue = subtotal + ((tax + delivery)*100);
        setTotal(totalValue);
    }, [subtotal, tax, delivery]);

    const checkout = () => {
        Alert.alert("Order placed successfully!")
    }

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
                    style={styles.flatList}
                    ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
                />
                <View style={styles.viewContainer}>
                    <TextInput
                        placeholder="Promo Code"
                        style={styles.input}
                        value={inputPromoCode}
                        onChangeText={setInputPromoCode}
                    />
                    <TouchableOpacity style={styles.btnInput} onPress={applyPromoCode}>
                        <Text style={styles.btntext}>Apply</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerValues}>
                    <View style={styles.row}>
                        <Text style={styles.titleValue}>Subtotal</Text>
                        <View style={styles.row2}>
                            <Text style={styles.money}>$</Text>
                            <Text style={styles.moneyValue}>{pattersValues(subtotal.toString())}</Text>
                            <Text style={styles.usd}>USD</Text>
                        </View>
                    </View>
                    <View style={styles.separator} /> 
                    <View style={styles.row}>
                        <Text style={styles.titleValue}>Tax and Fees</Text>
                        <View style={styles.row2}>
                            <Text style={styles.money}>$</Text>
                            <Text style={styles.moneyValue}>{(tax).toPrecision(3)}</Text>
                            <Text style={styles.usd}>USD</Text>
                        </View>
                    </View>
                    <View style={styles.separator} /> 
                    <View style={styles.row}>
                        <Text style={styles.titleValue}>Delivery</Text>
                        <View style={styles.row2}>
                            <Text style={styles.money}>$</Text>
                            <Text style={styles.moneyValue}>{(delivery).toPrecision(3)}</Text>
                            <Text style={styles.usd}>USD</Text>
                        </View>
                    </View>
                    <View style={styles.separator} /> 
                    <View style={styles.row}>
                        <View style={styles.viewTotal}>
                            <Text style={styles.titleValue}>Total</Text>
                            <Text style={styles.textItems}>({quantidadeCart} items)</Text>
                        </View>
                        <View style={styles.row2}>
                            <Text style={styles.money}>$</Text>
                            <Text style={styles.moneyValue}>{pattersValues(total.toString())}</Text>
                            <Text style={styles.usd}>USD</Text>
                        </View>
                    </View>
                </View>
                <CustomButton 
                    title="CHECKOUT"
                    onPress={checkout}
                    disabled={false}
                />
            </MainContainer>
        </BgCleanContainer>
    );
};

const styles = StyleSheet.create({
    flatListContent: {
        height: 350,
    },
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
    item: {
        borderRadius: 15,
        padding: 10,
        marginVertical: 5,
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
    flatList: {
        flexGrow: 0,
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
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
    },
    input: {
        fontSize: 15,
        height: 60,
        flex: 1,
        paddingLeft: 7
    },
    emptyText:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: colors.grey,
    },
    btnInput: {
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 100,
        borderRadius: 50,
    },
    btntext: {
        color: colors.white,
        fontSize: 17,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 1
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#F1F2F3', 
        marginVertical: 10, 
    },
    containerValues: {
        padding: 10,
        marginVertical: 20,
        gap: 5
    },
    titleValue: {
        fontSize: 17,
        fontWeight: '500'
    },
    money: {
        fontSize: 20,
        fontWeight: '600'
    },
    moneyValue: {
        fontSize: 18,
        fontWeight: '600'
    },
    usd: {
        fontSize: 15,
        fontWeight: '400',
        color: colors.grey,
        paddingLeft: 5
    },
    viewTotal: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    textItems: {
        fontSize: 13,
        color: colors.grey
    }
});
