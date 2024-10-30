import React, { useEffect } from 'react'
import { useLoginViewModel } from './viewModel'
import { Alert, Button, Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export const LoginView = () => {
    const { login, password, setLogin, setPassword, onSubmit, isLoading, isLoginFocused, isPasswordFocused, setIsLoginFocused, setIsPasswordFocused, error } = useLoginViewModel();

    useEffect(() => {
        if(error) {
            Alert.alert("Erro", error);
        }
    }, [error])

    return (
        <ImageBackground
            style={[styles.safe]}
            source={require('../../assets/bgLogin.png')}
        >
            <Text style={styles.title}>Login</Text>
            <SafeAreaView>
                <View style={styles.viewContainer}>
                    <View style={styles.viewField}>
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput
                            style={isLoginFocused ? styles.inputFocused : styles.input}
                            placeholder='You email or login'
                            value={login}
                            onChangeText={setLogin}
                            onFocus={() => setIsLoginFocused(true)}
                            onBlur={() => setIsLoginFocused(false)}
                        />
                    </View>
                    <View style={styles.viewField}>
                        <Text style={styles.text}>Password</Text>
                        <TextInput
                            style={isPasswordFocused ? styles.inputFocused : styles.input}
                            placeholder='Password'
                            value={password}
                            onChangeText={setPassword}
                            onFocus={() => setIsPasswordFocused(true)}
                            onBlur={() => setIsPasswordFocused(false)}
                        />
                    </View>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.textOrange}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={styles.viewBtn}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={onSubmit}
                            disabled={isLoading}
                        >
                            <Text style={styles.textBtn}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.textBlack}>Don't have account? </Text>
                        <Text style={styles.textOrange}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <Image
                source={require('../../assets/signin.png')}
                style={styles.image}
            />
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    safe: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
        justifyContent: 'center',
        padding: 25
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContainer: {
        gap: 30,
    },
    viewField: {
        gap: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#E1E1E1',
        height: 70,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        fontWeight: '500',
    },
    inputFocused: {
        borderWidth: 2,
        borderColor: '#FE724C',
        height: 70,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        fontWeight: '500',
    },
    text: {
        color: '#9e9e9e',
        fontWeight: '500',
        fontSize: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        marginTop: 100,
        marginBottom: 50,
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
    viewBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        alignItems: 'center',
        width: 260,
        height: 70,
        borderRadius: 50,
        // Estilos de sombra para iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        // Estilo de elevação para Android
        elevation: 5,
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '600'
    },
    textBlack: {
        color: '#7e7e7e',
        fontWeight: '500',
    },
    image: {
        marginTop: 70
    },
})