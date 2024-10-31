import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface IButton {
    title: string
    onPress: () => void
    disabled: boolean
}

export const CustomButton: React.FC<IButton> = ({ title, onPress, disabled }) => {
    return (
        <View style={styles.viewBtn}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={styles.textBtn}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
})