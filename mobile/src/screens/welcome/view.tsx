import { Entypo } from "@expo/vector-icons";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useWelcomeViewModel } from "./viewModel";

export const WelcomeView = () => {
    const { login } = useWelcomeViewModel();

    return (
        <ImageBackground
            style={[styles.safe]}
            source={require('../../assets/welcome.png')}
        >
            <Image 
                source={require('../../assets/Group.png')} 
                style={styles.image}
            />
            <View style={styles.view}>
                <TouchableOpacity
                    style={styles.loginField}
                    onPress={login}
                >
                    <Text style={styles.text}>Begin your journey with us today</Text>
                </TouchableOpacity>
                <View style={styles.signInField}>
                    <Text style={styles.text}>Already have an account?</Text>
                    <TouchableOpacity>
                        <Text style={styles.underlineText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    safe: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 600,
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginField: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#545264c3',
        width: 330,
        height: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#ffffff',
    },
    text: {
        color: '#ffffff',
        fontWeight: '600',
    },
    underlineText: {
        color: '#ffffff',
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    signInField: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 5,
    }
})