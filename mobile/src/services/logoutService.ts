import AsyncStorage from "@react-native-async-storage/async-storage";
import { FOODHUB_USER } from "./loginService";

export async function logoutService() {
    try {
        await AsyncStorage.removeItem(FOODHUB_USER);
    } catch (error) {
        console.log(error);
        return;
    }
}