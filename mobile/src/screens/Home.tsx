import { Button, Text, View } from "react-native"
import { useNavigate } from "../hooks/useNavigate"
import { useFoodHubContext } from "../context";
import { IUser } from "../models/IUser";
import { logoutService } from "../services/logoutService";
import { useEffect, useState } from "react";
import { IProduct } from "../models/IProduct";
import { abstractGetService } from "../services/abstractGetService";

export const Home = () => {
    const { navigate } = useNavigate();
    const { setUser } = useFoodHubContext();

    const limpar= async () => {
        await logoutService();
        setUser({} as IUser)
        navigate('login');
    }

    const [dados, setDados] = useState<IProduct[]>([]);

    useEffect(() => {
        const pegarDados = async () => {
            try {
                const response = await abstractGetService('establishments');
                setDados(response);
            } catch (error) {
                console.log(error);
            }
        }
        pegarDados();
    }, []);

    return (
        <View>
            <Text>HOME</Text>
            <Button 
                title="LOGOUT"
                onPress={limpar} 
            />
            <View>
                {dados.map((item) => (
                    <Text key={item.id}>{item.name}</Text>
                ))}
            </View>
        </View>
    )
}