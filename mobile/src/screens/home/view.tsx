import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BgCleanContainer, MainContainer } from "../../containers";
import { CategoriesView, FindBarView, HeaderHomeView } from "../../components";


export const HomeView = () => {

    return (
        <BgCleanContainer>
            <MainContainer>
                    <View style={styles.view}>
                        <HeaderHomeView />
                        <FindBarView />
                        <CategoriesView />
                    </View>
            </MainContainer>
        </BgCleanContainer>
    );
}

const styles = StyleSheet.create({
    view: {
        gap: 10
    },
});