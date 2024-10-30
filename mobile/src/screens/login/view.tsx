import React from 'react'
import { useLoginViewModel } from './viewModel'
import { Button, SafeAreaView, StyleSheet, TextInput, View } from 'react-native';

export const LoginView = () => {
    const { login, password, setLogin, setPassword, onSubmit, isLoading } = useLoginViewModel();
    return (
        <SafeAreaView>
            <View>
                <TextInput
                    placeholder='login'
                    value={login}
                    onChangeText={setLogin}
                />
                <TextInput
                    placeholder='password'
                    value={password}
                    onChangeText={setPassword}
                />
                <Button 
                    title='Login'
                    onPress={onSubmit}
                    disabled={isLoading}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})