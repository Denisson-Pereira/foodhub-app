import { ActivityIndicator, Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSignUpViewModel } from "./viewModel"
import { useEffect } from "react";
import { BgCircleContainer, MainContainer } from "../../containers";
import { CustomButton, CustomInput } from "../../custom";

export const SignUpView = () => {
    const { name, login, password, isNameFocused, isLoginFocused, isPasswordFocused, error, setError, handleRegister, registering, forLogin, setIsNameFocused, setIsLoginFocused, setIsPasswordFocused, setName, setPassword, setLogin } = useSignUpViewModel();

    useEffect(() => {
        if (error) {
            Alert.alert("Erro", error, [{ text: "OK", onPress: () => setError(null) }]);
        }
    }, [error])

    return (
        <BgCircleContainer>
            <MainContainer>
                <Text style={styles.title}>Sign Up</Text>
                <SafeAreaView>
                    <View style={styles.viewContainer}>
                        <View style={styles.viewField}>
                            <Text style={styles.text}>Full name</Text>
                            <CustomInput
                                placeholder='You full name'
                                value={name}
                                onChangeText={setName}
                                secureTextEntry={false}
                                keyboardType='default'
                                isFocused={isNameFocused}
                                onFocus={() => setIsNameFocused(true)}
                                onBlur={() => setIsNameFocused(false)}
                            />
                        </View>
                        <View style={styles.viewField}>
                            <Text style={styles.text}>Login</Text>
                            <CustomInput
                                placeholder='Email or login'
                                value={login}
                                onChangeText={setLogin}
                                secureTextEntry={false}
                                keyboardType='default'
                                isFocused={isLoginFocused}
                                onFocus={() => setIsLoginFocused(true)}
                                onBlur={() => setIsLoginFocused(false)}
                            />
                        </View>
                        <View style={styles.viewField}>
                            <Text style={styles.text}>Password</Text>
                            <CustomInput
                                placeholder='Password'
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                                keyboardType='numeric'
                                isFocused={isPasswordFocused}
                                onFocus={() => setIsPasswordFocused(true)}
                                onBlur={() => setIsPasswordFocused(false)}
                            />
                        </View>
                        {!registering ? (
                            <CustomButton
                                title='SIGN UP'
                                onPress={handleRegister}
                                disabled={false}
                            />
                        ) : (
                            <ActivityIndicator size="large" color="#FE724C" style={styles.register} />
                        )}
                        <View style={styles.viewSignIn}>
                            <Text style={styles.textBlack}>Already have an account? </Text>
                            <TouchableOpacity
                                style={styles.touchable}
                                onPress={forLogin}
                            >
                                <Text style={styles.textOrange}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </MainContainer>
        </BgCircleContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '700',
        marginTop: 10,
        marginBottom: 50,
    },
    viewContainer: {
        gap: 30,
    },
    viewField: {
        gap: 15,
    },
    text: {
        color: '#9e9e9e',
        fontWeight: '500',
        fontSize: 20,
    },
    viewSignIn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchable: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textOrange: {
        color: '#FE724C',
        fontWeight: '600',
    },
    textBlack: {
        color: '#7e7e7e',
        fontWeight: '500',
    },
    register: {
    }
});