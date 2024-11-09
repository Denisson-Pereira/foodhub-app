import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useNavigate } from "../hooks/useNavigate";
import { ComponentType } from "react";

export const CustomButtonUp = ({ IconComponent, icon, url }: { IconComponent: ComponentType<any>; icon: string; url: string }) => {
    const { navigate } = useNavigate();

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigate(url)} style={styles.container}>
                <IconComponent
                    name={icon}
                    style={styles.btn}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#00000037',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    container: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    btn: {
        fontSize: 15,
    },
});
