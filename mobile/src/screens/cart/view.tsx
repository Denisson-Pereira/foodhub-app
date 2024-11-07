import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers/mainContainer";
import { CustomButtonUp } from "../../custom";
import { CartItem, useFoodHubContext } from "../../context";
import { useNavigate } from "../../hooks/useNavigate";
import { BgCleanContainer } from "../../containers";

export const CartView = () => {
    const { cart, removeCart, incrementQuantity, decrementQuantity } = useFoodHubContext();
    const { navigate } = useNavigate();

    const renderStars = (rating: string) => {
        const numericRating = Math.min(5, Math.max(0, Math.round(parseFloat(rating))));
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <Fontisto
                    key={i}
                    name="star"
                    size={18}
                    color={i < numericRating ? "#FFD700" : "#E0E0E0"}
                />
            );
        }
        return <View style={styles.starsContainer}>{stars}</View>;
    };

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.item}>
            <TouchableOpacity
                style={styles.itemContent}
                onPress={() => navigate('ProdutosDetalhes', { id: item.id })}
            >
                <Image
                    source={{ uri: item.image }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.textValor}>{item.price}</Text>
                    <View style={styles.containerStar}>
                        {renderStars(item.evaluation)}
                    </View>
                    <Text style={styles.quantity}>Qtd: {item.quantity}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.buttonsContainer}>
                <View style={styles.incrementDecrementContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => incrementQuantity(item.cartId)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => decrementQuantity(item.cartId)}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeCart(item.cartId)}>
                    <Text style={styles.removeButtonText}>Remover</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <BgCleanContainer
        >
            <MainContainer>
                <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                <Text>Favorite</Text>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={item => item.cartId}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContent}
                />
            </MainContainer>
        </BgCleanContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 10,
    },
    flatListContent: {
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        borderRadius: 10,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    textValor: {
        fontSize: 16,
        fontWeight: '700',
        color: '#00BFFF',
    },
    quantity: {
        marginTop: 5,
        fontSize: 14,
        color: '#777',
    },
    buttonsContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    incrementDecrementContainer: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#00A6EB',
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: '600',
        fontSize: 18,
    },
    removeButton: {
        backgroundColor: '#FF6347',
        padding: 8,
        borderRadius: 5,
        width: 80,
        marginTop: 5,
    },
    removeButtonText: {
        color: '#FFF',
        fontWeight: '600',
        textAlign: 'center',
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    containerStar: {
        flexDirection: 'row',
        gap: 5,
    },
    totalContainer: {
        margin: 15,
        padding: 15,
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#00BFFF',
    },
    valorComDescontoText: {
        fontSize: 18,
        fontWeight: '800',
        color: '#1dc525',
    },
    cupomContainer: {
        marginTop: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    copiarButton: {
        backgroundColor: '#00A6EB',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    copiarButtonText: {
        color: '#FFF',
        fontWeight: '600',
    },
    cupomInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#DDD',
    },
    aplicarButton: {
        backgroundColor: '#1dc525',
        padding: 10,
        borderRadius: 5,
    },
    aplicarButtonText: {
        color: '#FFF',
        fontWeight: '600',
    },
    cupom: {
        color: '#8f8e8e',
        marginBottom: 5
    },
    containerFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    }
});