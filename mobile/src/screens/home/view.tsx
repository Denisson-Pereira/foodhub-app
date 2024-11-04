import { ScrollView, Text } from "react-native";
import { MainContainer } from "../../containers/mainContainer";
import { HeaderHomeView } from "../../components/headerHome/view";
import { BgCleanContainer } from "../../containers/bgCleanContainer";

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