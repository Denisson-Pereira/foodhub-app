import { Button, Text, View } from "react-native"
import { useNavigate } from "../hooks/useNavigate"
import { useFoodHubContext } from "../context";
import { IUser } from "../models/IUser";
import { logoutService } from "../services/logoutService";

export const Home = () => {
    const { navigate } = useNavigate();
    const { setUser } = useFoodHubContext();

    const limpar= async () => {
        await logoutService();
        setUser({} as IUser)
        navigate('login');
    }
    return (
        <View>
            <Text>HOME</Text>
            <Button 
                title="LOGOUT"
                onPress={limpar} 
            />
        </View>
    )
}