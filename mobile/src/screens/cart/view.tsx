import { ScrollView, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers/mainContainer";
import { CustomButtonUp } from "../../custom";

export const CartView = () => {
    return (
        <MainContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                <Text>Cart</Text>
            </ScrollView>
        </MainContainer>
    );
};