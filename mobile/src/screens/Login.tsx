import { useRef, useState } from "react"
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { loginService } from "../services/loginService";
import { useFoodHubContext } from "../context";
import { useNavigate } from "../hooks/useNavigate";

export const Login = () => {

    const login = useRef<string>('');
    const password = useRef<string>('');

    const { setUser } = useFoodHubContext();

    const { navigate } = useNavigate();

    async function handleLogin() {
        const date = await loginService(login.current, password.current, setUser);
        if(date) {
            setUser(date);
            navigate('teste')
            return date;
        }

    }

    return (
        <View style={styles.view}>
            <TextInput 
                keyboardType="email-address"
                placeholder="login"
                onChangeText={(text) => login.current = text}
            />
            <TextInput 
                keyboardType="numeric"
                placeholder="password"
                onChangeText={(text) => password.current = text}
            />
            <TouchableOpacity
                onPress={handleLogin}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})