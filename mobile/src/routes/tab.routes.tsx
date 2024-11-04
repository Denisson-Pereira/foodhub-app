import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeView } from "../screens/home/view";
import { CartView } from "../screens/cart/view";
import { FavoriteView } from "../screens/favorite/view";
import { MapView } from "../screens/map/view";
import { ProfileView } from "../screens/profile/view";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
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
                component={MapView}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name='map-marker' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name="cartView"
                component={CartView}
                options={{
                    tabBarIcon: ({ color }) => <FontAwesome name='cart-arrow-down' color={color} size={30} />
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