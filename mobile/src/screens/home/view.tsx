import { ScrollView, Text } from "react-native";
import { MainContainer } from "../../containers/mainContainer";
import { CustomButton } from "../../custom/customButton";
import { logoutService } from "../../services/logoutService";
import { useNavigate } from "../../hooks/useNavigate";
import { useFoodHubContext } from "../../context";
import { IUser } from "../../models/IUser";

export const HomeView = () => {
    const { navigate } = useNavigate();
    const { setUser } = useFoodHubContext();

    const sair = async () => {
        await logoutService();
        setUser({} as IUser);
        navigate('welcome');
    }

    return (
        <MainContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text>home</Text>
                <CustomButton title="LOGOUT" disabled={false} onPress={sair} />
            </ScrollView>
        </MainContainer>
    );
}