import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CustomButtonUp } from "../../custom/customButtonUp";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useHeaderHomeViewModel } from "./viewModel";
import { useNavigate } from "../../hooks/useNavigate";

export const HeaderHomeView = () => {

    const { isPress, setIsPress, open } = useHeaderHomeViewModel();
    const { navigate } = useNavigate();

    return (
        <View style={styles.viewContainer}>
            <CustomButtonUp
                IconComponent={MaterialIcons}
                icon="notes"
                url=""
            />
            <View>
                <View style={styles.delivery}>
                    <Text style={styles.text}>Deliver to</Text>
                    <SimpleLineIcons
                        name={isPress ? "arrow-down" : "arrow-up"}
                        color='#7e7e7e'
                        onPress={open}
                    />
                </View>
                {isPress && (
                    <Text style={styles.textOrange}>
                        4102 Pretty View Lane
                    </Text>
                )}
            </View>
            <TouchableOpacity 
                style={styles.containerImage}
                onPress={() => navigate('profileView')}
            >
                <Image
                    source={require('../../assets/user.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    delivery: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    text: {
        color: '#7e7e7e',
        fontWeight: '500',
        fontSize: 15,
    },
    textOrange: {
        color: '#FE724C',
        fontWeight: '600',
        fontSize: 15,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    containerImage: {
        shadowColor: '#f89f2a',
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.55,
        shadowRadius: 10,
        elevation: 10,
        borderRadius: 10,
        width: 50,
        height: 50
    }
});