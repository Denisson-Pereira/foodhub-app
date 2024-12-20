import { useFoodHubContext } from "../context";
import { TabRoutes } from "./tab.routes";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { WelcomeView, LoginView, SignUpView, AllProductsView, AllEstablishmentView, EstablishmentDetailsView } from "../screens";
import StackRoutes from "./stack.routes";
import { ProductsDetails } from "../screens/productsDetails/view";

const Stack = createStackNavigator();

export default function Routes() {
    const { user } = useFoodHubContext();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {user?.id ? (
                    <>
                        <Stack.Screen name="home" component={TabRoutes} />
                        <Stack.Screen name="ProductsDetails" component={ProductsDetails} />
                        <Stack.Screen name="AllProducts" component={AllProductsView} />
                        <Stack.Screen name="AllEstablishments" component={AllEstablishmentView} />
                        <Stack.Screen name="EstablishmentsDetails" component={EstablishmentDetailsView} />

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
