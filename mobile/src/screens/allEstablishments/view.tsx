import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { BgCleanContainer, MainContainer } from "../../containers"
import { useAllEstablishmentsViewModel } from "./viewModel"
import { useEffect } from "react";
import { abstractGetService } from "../../services/abstractGetService";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { upperCase } from "../../helpers/upperCase";
import { colors } from "../../constants/colors";
import { HeaderHomeView } from "../../components";

export const AllEstablishmentView = () => {
    const { establishmnts, setEstabilshments } = useAllEstablishmentsViewModel();

    useEffect(() => {
        async function fetchDates() {
            const responde = await abstractGetService('establishments');
            setEstabilshments(responde);
        }
        fetchDates();
    }, [])

    return (
        <BgCleanContainer>
            <MainContainer>
                <HeaderHomeView />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.scroll}
                >
                    {establishmnts.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.shadowBox}
                        >
                            <View style={styles.containerRow}>
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.img}
                                />
                                <View>
                                    <View style={styles.containerRow}>
                                        <Text style={styles.textEstablishment}>{item.name}</Text>
                                        <Ionicons
                                            name="checkmark-circle-sharp"
                                            color="#029094"
                                            size={20}
                                        />
                                    </View>
                                    <View style={styles.containerRow}>
                                        <MaterialCommunityIcons name="cash-check" color="#43bd63" size={20} />
                                        <Text style={styles.textGreen}>Pay through the app</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.containerRow2}>
                                <View>
                                    <Text style={styles.textGrey}>Estimated Time</Text>
                                    <View style={styles.containerRow}>
                                        <Text style={styles.textTime}>{item.time}</Text>
                                        <Text style={styles.time}>min</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.textGrey}>Delivery Price</Text>
                                    <Text style={styles.textGreen}>{item.price}</Text>
                                </View>
                            </View>
                            <View style={styles.tagContainer}>
                                <View
                                    style={styles.viewTag}
                                >
                                    <Text>{upperCase(item.tag_1)}</Text>
                                </View>
                                <View
                                    style={styles.viewTag}
                                >
                                    <Text>{upperCase(item.tag_2)}</Text>
                                </View>
                                <View
                                    style={styles.viewTag}
                                >
                                    <Text>{upperCase(item.tag_3)}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </MainContainer>
        </BgCleanContainer>
    )
}

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 20,
    },
    shadowBox: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 30,
        marginBottom: 20,
        // Propriedades de sombra para iOS
        shadowColor: '#0000002f',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        // Propriedade de sombra para Android
        elevation: 8,
        
    },
    containerRow: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    },
    containerRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textGrey: {
        color: '#9796A1',
        fontWeight: '500'
    },
    img: {
        width: 40,
        height: 40
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
    textGreen: {
        color: "#43bd63",
        fontWeight: '700'
    },
    textEstablishment: {
        fontSize: 30,
        fontWeight: '800'
    },
    textTime: {
        fontSize: 30,
        fontWeight: '800',
        color: colors.orange
    },
    time: {
        color: colors.orange
    },
});