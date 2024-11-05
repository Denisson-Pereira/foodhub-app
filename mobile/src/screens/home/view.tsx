import { ScrollView, StyleSheet, Text, View } from "react-native";
import { BgCleanContainer, MainContainer } from "../../containers";
import { CategoriesView, EstablishmentView, FindBarView, HeaderHomeView, PopularView } from "../../components";


export const HomeView = () => {

    return (
        <BgCleanContainer>
            <MainContainer>
                <View style={styles.view}>
                    <HeaderHomeView />
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <FindBarView />
                        <CategoriesView />
                        <EstablishmentView />
                        <PopularView />
                    </ScrollView>
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