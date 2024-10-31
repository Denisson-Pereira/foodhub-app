import React, { useEffect } from 'react'
import { useLoginViewModel } from './viewModel'
import { Alert, Dimensions, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { CustomInput } from '../../custom/customInput';
import { CustomButton } from '../../custom/customButton';
import { CustomBackground } from '../../custom/customBackground';

export const LoginView = () => {
    const { login, password, setLogin, setPassword, onSubmit, isLoading, isLoginFocused, isPasswordFocused, setIsLoginFocused, setIsPasswordFocused, error, setError, signUp } = useLoginViewModel();

    useEffect(() => {
        if (error) {
            Alert.alert("Erro", error, [{ text: "OK", onPress: () => setError(null) }]);
        }
    }, [error])

    return (
        <CustomBackground>
            <Text style={styles.title}>Login</Text>
            <SafeAreaView>
                <View style={styles.viewContainer}>
                    <View style={styles.viewField}>
                        <Text style={styles.text}>E-mail</Text>
                        <CustomInput
                            placeholder='You email or login'
                            value={login}
                            onChangeText={setLogin}
                            secureTextEntry={false}
                            keyboardType='email-address'
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
                    <TouchableOpacity style={styles.touchable}>
                        <Text style={styles.textOrange}>Forgot password?</Text>
                    </TouchableOpacity>
                    <CustomButton
                        title='LOGIN'
                        onPress={onSubmit}
                        disabled={isLoading}
                    />
                    <View style={styles.viewSignUp}>
                        <Text style={styles.textBlack}>Don't have account? </Text>
                        <TouchableOpacity 
                            style={styles.touchable}
                            onPress={signUp}
                        >
                            <Text style={styles.textOrange}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <Image
                source={require('../../assets/signin.png')}
                style={styles.image}
            />
        </CustomBackground>

    )
}

const styles = StyleSheet.create({
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
    textBlack: {
        color: '#7e7e7e',
        fontWeight: '500',
    },
    image: {
        marginTop: 70
    },
    viewSignUp:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
})