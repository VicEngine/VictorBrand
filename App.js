import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import MainNavigator from "./src/navigator/MainNavigator";

export default function App() {
    const [fontsLoaded] = useFonts({
        "Nunito Sans": require("./src/assets/fonts/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf"),
        "Nunito Sans Italic": require("./src/assets/fonts/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf"),
        "Raleway Italic": require("./src/assets/fonts/Raleway-Italic-VariableFont_wght.ttf"),
        "Raleway": require("./src/assets/fonts/Raleway-VariableFont_wght.ttf")
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="#004CFF" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    );
}