import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screen/Home";
import Auth from "./AuthStack";
import TabNavigator from "./TabNavigator"
import Flashsale from "../screen/Flashsale";
import Payment from "../screen/Payment";
import Settings from "../screen/Settings";
import Profile from "../screen/Profile";
import Paymentmethods from "../screen/Paymentmethods";
import Shippingaddress from "../screen/Shippingaddress";
import Language from "../screen/Language";
import Currency from "../screen/Currency";
import Sizes from "../screen/Sizes";
import Product from "../screen/Product";
import Reviews from "../screen/Reviews";
import Voucher from "../screen/Voucher";
import Recieve from "../screen/Recieve";
import Recentlyviewed from "../screen/Recentlyviewed";
import Camera from "../screen/Camera";

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
            <Stack.Screen name="Shippingaddress" component={Shippingaddress} />
            <Stack.Screen name="Language" component={Language} />
            <Stack.Screen name="Currency" component={Currency} />
            <Stack.Screen name="Sizes" component={Sizes} />
            <Stack.Screen name="Product" component={Product} />
            <Stack.Screen name="Reviews" component={Reviews} />
            <Stack.Screen name="Voucher" component={Voucher} />
            <Stack.Screen name="Recieve" component={Recieve} />
            <Stack.Screen name="Recentlyviewed" component={Recentlyviewed} />
            <Stack.Screen name="Camera" component={Camera}/>
        </Stack.Navigator>
    );
}
