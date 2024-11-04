import { useFoodHubContext } from "../context";
import { TabRoutes } from "./tab.routes";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeView, LoginView, SignUpView } from "../screens";

const Stack = createStackNavigator();

export default function Routes() {
    const { user } = useFoodHubContext();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user?.id ? (
                    <>
                        <Stack.Screen name="home" component={TabRoutes} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="welcome" component={WelcomeView} />
                        <Stack.Screen name="login" component={LoginView} />
                        <Stack.Screen name="register" component={SignUpView} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
