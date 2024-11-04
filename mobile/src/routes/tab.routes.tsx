import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Teste } from "../screens/Teste";
import { HomeView } from "../screens/home/view";
import { CartView } from "../screens/cart/view";
import { useRoute } from "@react-navigation/native";

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
                    display: route.name === 'cart' ? 'none' : 'flex',
                },
            })}
        >
            <Tab.Screen
                name='homeView'
                component={HomeView}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name='compass' color={color} size={30} />
                }}
            />

            <Tab.Screen
                name="teste"
                component={Teste}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='heart' color={color} size={size} />
                }}
            />

            <Tab.Screen
                name="cart"
                component={CartView}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='cart-arrow-down' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
};
