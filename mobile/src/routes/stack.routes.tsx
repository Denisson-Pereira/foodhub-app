import { createStackNavigator } from "@react-navigation/stack";
import { LoginView } from "../screens/login/view";
import { WelcomeView } from "../screens/welcome/view";
import { HomeView } from "../screens/home/view";

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