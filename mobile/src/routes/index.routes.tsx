import { useFoodHubContext } from "../context";
import { TabRoutes } from "./tab.routes";
import { LoginView } from "../screens/login/view";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

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
                        <Stack.Screen name="login" component={LoginView} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
