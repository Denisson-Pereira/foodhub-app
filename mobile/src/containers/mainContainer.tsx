import { StyleSheet, View } from "react-native";

type Props = {
    children: React.ReactNode;
}

export const MainContainer: React.FC<Props> = ({children}: Props) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 50,
    }
})