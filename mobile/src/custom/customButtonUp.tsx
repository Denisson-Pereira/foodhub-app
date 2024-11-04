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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
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
