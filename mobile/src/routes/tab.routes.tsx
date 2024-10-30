import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather, FontAwesome } from "@expo/vector-icons";
import StackRoutes from "./stack.routes";
import { Teste } from "../screens/Teste";
import { Home } from "../screens/Home";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#00A6EB',
                },
                headerTintColor: '#fff',
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 90,
                    backgroundColor: '#ffffff',
                },
                tabBarActiveTintColor: '#00A6EB',
            }}
        >
            <Tab.Screen
                name='Teste'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
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