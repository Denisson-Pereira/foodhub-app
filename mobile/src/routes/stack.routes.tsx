import { createStackNavigator } from "@react-navigation/stack";
import { HomeView, LoginView, ProfileView, WelcomeView } from "../screens";
import { ProductsDetails } from "../screens/productsDetails/view";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'red'
            }}
        >
            <Stack.Screen
                name="welcome"
                component={WelcomeView}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="login"
                component={LoginView}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name="home"
                component={HomeView}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}