import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logoutService } from "../../services/logoutService";
import { useNavigate } from "../../hooks/useNavigate";
import { useFoodHubContext } from "../../context";
import { IUser } from "../../models/IUser";
import { BgProfileContainer, MainContainer } from "../../containers";
import { CustomButton, CustomInput } from "../../custom";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../../constants/colors";

export const ProfileView = () => {
    const { navigate } = useNavigate();
    const { user, setUser } = useFoodHubContext();

    const sair = async () => {
        await logoutService();
        setUser({} as IUser);
        navigate('welcome');
    }

    return (
        <BgProfileContainer>
            <MainContainer>
                <View>
                    <View style={styles.container}>
                        <View style={styles.containerPerson}>
                            <View style={styles.containerImg}>
                                <Image
                                    source={require('../../assets/user.png')}
                                    style={styles.img}
                                />
                                <View style={styles.viewIcon}>
                                    <FontAwesome name="camera" color="#B3B3B3" size={15} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerDates}>
                        <View style={styles.containerInput}>
                            <Text style={styles.txtTitle}>Full name</Text>
                            <View style={styles.containerInner}>
                                <Text style={styles.txt}>{user.name}</Text>
                            </View>
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={styles.txtTitle}>E-mail or login</Text>
                            <View style={styles.containerInner}>
                                <Text style={styles.txt}>{user.login}</Text>
                            </View>
                        </View>
                        <View style={styles.containerInput}>
                            <Text style={styles.txtTitle}>Phone Number</Text>
                            <View style={styles.containerInner}>
                                <Text style={styles.txt}>+1 (783) 0986 8786</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            onPress={sair}
                            style={styles.btn}
                        >
                            <View style={styles.iconPower} >
                                <FontAwesome5 name="power-off" color={colors.orange} size={20} />
                            </View>
                            <Text style={styles.textBtn}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </MainContainer>
        </BgProfileContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 50,
        marginBottom: 20,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    viewIcon: {
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 50,
        position: 'absolute',
        bottom: -7,
        right: 0
    },
    containerDates: {
        justifyContent: 'center',
        gap: 40
    },
    containerBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    containerInput: {
        justifyContent: 'center',
        gap: 20
    },
    txtTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.grey,
        paddingLeft: 10
    },
    containerInner: {
        borderWidth: 1,
        borderColor: '#E1E1E1',
        height: 70,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        marginHorizontal: 5
    },
    txt: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.black,
    },
    btn: {
        width: 260,
        height: 70,
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 50,
        gap: 10
    },
    textBtn: {
        fontSize: 20,
        fontWeight: '500',
        color: colors.white,
    },
    iconPower: {
        backgroundColor: colors.white,
        borderRadius: 50,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    }
});