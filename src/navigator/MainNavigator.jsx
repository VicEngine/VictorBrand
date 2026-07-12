import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screen/User";
import Auth from "./AuthStack";
import TabNavigator from "./TabNavigator"
import Flashsale from "../screen/Flashsale";
import Payment from "../screen/Payment";
import Settings from "../screen/Settings";
import Profile from "../screen/Profile";
import Paymentmethods from "../screen/Paymentmethods";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Tab" component={TabNavigator} />
            <Stack.Screen name="Flashsale" component={Flashsale} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Paymentmethods" component={Paymentmethods} />
        </Stack.Navigator>
    );
}
