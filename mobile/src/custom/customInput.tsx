import React from "react"
import { KeyboardType, StyleSheet, TextInput } from "react-native"

interface ICustomInputProps {
    placeholder: string
    value: string
    keyboardType: KeyboardType;
    secureTextEntry: boolean
    onChangeText: (text: string) => void
    isFocused: boolean 
    onFocus: () => void
    onBlur: () => void
}

export const CustomInput: React.FC<ICustomInputProps> = ({ placeholder, value, onChangeText, secureTextEntry, isFocused, onFocus, onBlur, keyboardType }) => {

    return (
        <TextInput
            style={isFocused ? styles.inputFocused : styles.input}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            value={value}
            keyboardType={keyboardType}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    )
}

const styles = StyleSheet.create({
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
})