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
                    <Text style={styles.txt}>{item.name}</Text>
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
        paddingVertical: 10,
        gap: 5,
        backgroundColor: 'white',
        shadowColor: '#00000037',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        // Adiciona um padding para afastar o conteúdo da borda
        marginBottom: 20,
        borderRadius: 50
    },
    img: {
        width: 70,
        height: 70
    },
    txt: {
        color: '#67666D',
        fontSize: 11
    }
});