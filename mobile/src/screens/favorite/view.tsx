import { ScrollView, Text } from "react-native";
import { CustomButtonUp } from "../../custom/customButtonUp";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers/mainContainer";

export const FavoriteView = () => {
    return (
        <MainContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                <Text>Favorite</Text>
            </ScrollView>
        </MainContainer>
    );
};