import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";

interface Props {
    children: React.ReactNode;
}

export const BgProductsContainer: React.FC<Props> = ({ children }) => {
    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/bgAllProducts.png')}
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
        paddingHorizontal: 20,
        paddingTop: 120,
    },
});