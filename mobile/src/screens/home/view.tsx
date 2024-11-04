import { ScrollView, Text } from "react-native";
import { BgCleanContainer, MainContainer } from "../../containers";
import { HeaderHomeView } from "../../components/headerHome/view";

export const HomeView = () => {

    return (
        <BgCleanContainer>
            <MainContainer>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <HeaderHomeView />
                </ScrollView>
            </MainContainer>
        </BgCleanContainer>
    );
}