import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/Login";
import { Texte } from "../screens/Texte";

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: 'red'
            }}
        >
            <Stack.Screen
                name="login"
                component={Login}
                options={{
                    headerShown: true,
                    headerTitle: 'login'
                }}
            />

            <Stack.Screen
                name="teste"
                component={Texte}
                options={{
                    headerShown: true,
                    headerTitle: 'login'
                }}
            />
        </Stack.Navigator>
    )
}