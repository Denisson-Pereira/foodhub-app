import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome, FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Teste } from "../screens/Teste";
import { HomeView } from "../screens/home/view";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#FE724C",
                tabBarInactiveTintColor: "#D3D1D8",
            }}
        >
            <Tab.Screen
                name='homeView'
                component={HomeView}
                options={{
                    tabBarIcon: ({color, size}) => <Ionicons name='compass' color={color} size={30} />
                }}
            />

            <Tab.Screen 
                name="teste"
                component={Teste}
                options={{
                    tabBarIcon: ({ color, size }) => <FontAwesome name='heart' color={color} size={size} />
                }}
            />

        </Tab.Navigator>
    )
}