import React from "react";
import { Dimensions, ImageBackground, StyleSheet } from "react-native";

interface Props {
    children: React.ReactNode;
}

export const BgCleanContainer: React.FC<Props> = ({ children }) => {
    return (
        <ImageBackground
            style={styles.bg}
            source={require('../assets/bgClean.png')}
        >
            {children}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        height: Dimensions.get("window").height,
        overflow: 'hidden',
    },
});