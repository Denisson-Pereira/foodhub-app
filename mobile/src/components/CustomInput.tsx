import { StyleSheet, TextInput } from "react-native"

export const CustomInput = () => {
    return (
        <TextInput

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