import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const FindBarView = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                What would you like to order
            </Text>
            <View style={styles.view}>
                <View style={styles.inputContainer}>
                    <AntDesign
                        name="search1"
                        size={25}
                        color='#767F9D'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Find for food or restourant..."
                    />
                </View>
                <TouchableOpacity>
                    <MaterialCommunityIcons
                        name="tune-variant"
                        color='#FE724C'
                        size={30}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    view: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FCFCFD',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        width: "90%",
        height: 60,
        gap: 10,
        paddingHorizontal: 20
    },
    input: {
        fontSize: 17,
        fontWeight: '600'
    },
    text: {
        fontSize: 40,
        fontWeight: '700',
        padding: 5
    },
});