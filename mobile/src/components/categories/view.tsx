import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { abstractGetService } from "../../services/abstractGetService";
import { ICategory } from "../../models/ICategory";

export const CategoriesView = () => {

    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        async function getDates() {
            const responde = await abstractGetService('categories');
            setCategories(responde);
        }
        getDates();
    }, []);

    return (
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {categories.map((item) => (
                <View 
                    key={item.id}
                    style={styles.view}
                >
                    <Image
                        style={styles.img} 
                        source={{ uri: item.image }}
                    />
                    <Text>{item.name}</Text>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 15,
        gap: 5
    },
    img: {
        width: 70,
        height: 70
    },

});