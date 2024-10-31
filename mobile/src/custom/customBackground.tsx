import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";

interface IBackground {
    children: React.ReactNode;
}

export const CustomBackground: React.FC<IBackground> = ({ children }) => {
    return (
        <ImageBackground
            style={styles.safe} 
            source={require('../assets/bgLogin.png')}
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    safe: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
        justifyContent: 'center',
        padding: 25
    },
});
