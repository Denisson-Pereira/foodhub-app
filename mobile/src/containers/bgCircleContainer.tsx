import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";

interface Props {
    children: React.ReactNode;
}

export const BgCircleContainer: React.FC<Props> = ({ children }) => {
    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/bgLogin.png')}
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
        justifyContent: 'center',
    },
});