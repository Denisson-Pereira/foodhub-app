import { ScrollView, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers";
import { CustomButtonUp } from "../../custom";

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