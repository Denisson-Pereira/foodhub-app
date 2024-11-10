import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CartView, FavoriteView, HomeView, MapViewScreen, ProfileView } from "../screens";
import { useFoodHubContext } from "../context";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    const { quantidadeCart } = useFoodHubContext();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#FE724C",
                tabBarInactiveTintColor: "#D3D1D8",
                tabBarStyle: {
                    display: route.name === 'cartView' || route.name === 'favorite' || route.name === 'mapView' ? 'none' : 'flex',
                },
            })}
        >
            <Tab.Screen
                name='homeView'
                component={HomeView}
                options={{
                    tabBarIcon: ({ color }) => <Ionicons name='compass' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name='mapView'
                component={MapViewScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='map-marker' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name="cartView"
                component={CartView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.iconContainer}>
                            <FontAwesome5 name='shopping-bag' color={color} size={size} />
                                {parseInt(quantidadeCart) == 0 ? (
                                    <></>
                                ) : (
                                    <View style={styles.badgeContainer}>
                                        <Text style={styles.badgeText}>{quantidadeCart}</Text>
                                    </View>
                                )}
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="favorite"
                component={FavoriteView}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='heart' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name='profileView'
                component={ProfileView}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='bell' color={color} size={30} />
                }}
            />


        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        position: 'relative',
    },
    badgeContainer: {
        position: 'absolute',
        right: -6,
        top: -3,
        backgroundColor: '#f89f2a',
        borderRadius: 5,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
});