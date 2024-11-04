import { ScrollView, Text } from "react-native";
import { CustomButtonUp } from "../../custom/customButtonUp";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContainer } from "../../containers/mainContainer";

export const MapView = () => {
    return (
        <MainContainer>
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomButtonUp IconComponent={MaterialIcons} icon="arrow-back-ios" url="homeView" />
                <Text>Map</Text>
            </ScrollView>
        </MainContainer>
    );
};