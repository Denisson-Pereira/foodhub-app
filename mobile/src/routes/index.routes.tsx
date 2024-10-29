import { NavigationContainer } from "@react-navigation/native";
import { useFoodHubContext } from "../context";
import { TabRoutes } from "./tab.routes";
import { Login } from "../screens/Login";

export default function Routes() {
    const { user } = useFoodHubContext();

    return (
        <NavigationContainer>
            {user?.id ? <TabRoutes /> : <Login />}
        </NavigationContainer>
    )
}