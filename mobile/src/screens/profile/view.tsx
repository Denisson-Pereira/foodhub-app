import { ScrollView, Text } from "react-native";
import { logoutService } from "../../services/logoutService";
import { useNavigate } from "../../hooks/useNavigate";
import { useFoodHubContext } from "../../context";
import { IUser } from "../../models/IUser";
import { MainContainer } from "../../containers";
import { CustomButton } from "../../custom";

export const ProfileView = () => {
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
                <Text>Profile</Text>
                <CustomButton title="LOGOUT" disabled={false} onPress={sair} />
            </ScrollView>
        </MainContainer>
    );
}