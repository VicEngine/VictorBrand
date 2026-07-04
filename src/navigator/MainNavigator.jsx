import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screen/User";
import Auth from "./AuthStack";
import TabNavigator from "./TabNavigator"
import Flashsale from "../screen/Flashsale";
const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Flashsale" component={Flashsale}/>
        </Stack.Navigator>
    );
}
