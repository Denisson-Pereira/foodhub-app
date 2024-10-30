import { Button, Text, View } from "react-native"
import { useNavigate } from "../hooks/useNavigate"
import { useFoodHubContext } from "../context";
import { IUser } from "../models/IUser";
import { logoutService } from "../services/logoutService";

export const Teste = () => {

    return (
        <View>
            <Text>TESTE</Text>
        </View>
    )
}