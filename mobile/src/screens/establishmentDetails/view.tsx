import { useEffect } from "react"
import { abstractGetByIdService } from "../../services/abstractGetByIdService"
import { useEstablishmentDetailsViewModel } from "./viewModel"
import { Text, View } from "react-native";

export const EstablishmentDetailsView = () => {
    const { establishment, id, setEstablishment} = useEstablishmentDetailsViewModel();

    useEffect(() => {
        const fetchEstablishment = async () => {
            try {
                const response = await abstractGetByIdService('establishments', id);
                setEstablishment(response);
            } catch (error) { 
                console.log(error);
            }
        };
        fetchEstablishment();
    }, [id]);

    return (
        <View>
            {establishment ? (
                <View>
                    <Text>{establishment.address}</Text>
                </View>
            ) : (
                <View>
                    <Text>SEM DADOS</Text>
                </View>
            )}
        </View>
    );
}