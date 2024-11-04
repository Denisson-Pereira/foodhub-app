import { Text, View } from "react-native";
import { CustomButtonUp } from "../../custom/customButtonUp";
import { MaterialIcons } from "@expo/vector-icons";

export const HeaderHomeView = () => {
    return (
        <View>
            <CustomButtonUp
                IconComponent={MaterialIcons}
                icon="notes"
                url=""
            />
        </View>
    );
}