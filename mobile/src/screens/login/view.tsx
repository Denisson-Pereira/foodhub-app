import React, { useEffect, useState } from 'react';
import { useLoginViewModel } from './viewModel';
import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { BgCircleContainer, MainContainer } from '../../containers';
import { CustomButton, CustomInput } from '../../custom';

export const LoginView = () => {
    const { login, password, setLogin, setPassword, isLoginFocused, loading, isPasswordFocused, setIsLoginFocused, setIsPasswordFocused, error, setError, signUp, handleLogin } = useLoginViewModel();

    useEffect(() => {
        if (error) {
            Alert.alert("Erro", error, [{ text: "OK", onPress: () => setError(null) }]);
        }
    }, [error]);

    return (
        <BgCircleContainer>
            <MainContainer>
                <Text style={styles.title}>Login</Text>
                <SafeAreaView>
                    <View style={styles.viewContainer}>
                        <View style={styles.viewField}>
                            <Text style={styles.text}>E-mail</Text>
                            <CustomInput
                                placeholder='Your email or login'
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
                        {!loading ? (
                            <CustomButton
                                title='LOGIN'
                                onPress={handleLogin}
                                disabled={loading}
                            />
                        ) : (
                            <ActivityIndicator size="large" color="#FE724C" style={styles.loader} />
                        )}
                
                        <View style={styles.viewSignUp}>
                            <Text style={styles.textBlack}>Don't have an account? </Text>
                            <TouchableOpacity
                                style={styles.touchable}
                                onPress={signUp}
                            >
                                <Text style={styles.textOrange}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </MainContainer>
        </BgCircleContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewContainer: {
        gap: 40,
    },
    viewField: {
        gap: 15,
    },
    text: {
        color: '#9e9e9e',
        fontWeight: '500',
        fontSize: 20,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
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
    viewSignUp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        marginTop: 20,
    }
});
