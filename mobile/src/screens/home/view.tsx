import { ScrollView, Text } from "react-native";
import { MainContainer } from "../../containers/mainContainer";

export const HomeView = () => {

    return (
        <MainContainer>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text>home</Text>
            </ScrollView>
        </MainContainer>
    );
}