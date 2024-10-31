import { StyleSheet, Text } from "react-native";
import { CustomBackground } from "../../custom/customBackground";
import { useSignUpViewModel } from "./viewModel"

export const SignUpView = () => {
    const {} = useSignUpViewModel();

    return (
        <CustomBackground>
            <Text style={styles.title}>Sign Up</Text>
        </CustomBackground>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: '700',
        marginTop: 100,
        marginBottom: 50,
    },
});