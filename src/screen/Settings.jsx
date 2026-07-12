import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation()

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 28, fontWeight: "bold" }}>Settings</Text>

                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, }}>
                            Personal
                        </Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Profile')} activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Profile
                                </Text>
                                <Image source={require('../assets/icons/right-arrow.png')} />
                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Shippingaddress')} activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Shipping Address
                                </Text>
                                <Image source={require('../assets/icons/right-arrow.png')} />
                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Paymentmethods')} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Payment metthods
                                </Text>
                                <Image source={require('../assets/icons/right-arrow.png')} />
                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>
                    </View>


                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, }}>
                            Shop
                        </Text>

                        <TouchableOpacity activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Country
                                </Text>
                                <View style={styles.subtitlebox}>
                                    <Text style={{ fontSize: 15, fontWeight: "regular" }}>
                                        Vietnam
                                    </Text>
                                    <Image source={require('../assets/icons/right-arrow.png')} />
                                </View>
                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("Currency")} activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Currency
                                </Text>
                                <View style={styles.subtitlebox}>
                                    <Text style={{ fontSize: 15, fontWeight: "regular" }}>
                                        $ USD
                                    </Text>
                                    <Image source={require('../assets/icons/right-arrow.png')} />
                                </View>
                            </View>
                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Sizes
                                </Text>
                                <View style={styles.subtitlebox}>
                                    <Text style={{ fontSize: 15, fontWeight: "regular" }}>
                                        Uk
                                    </Text>
                                    <Image source={require('../assets/icons/right-arrow.png')} />
                                </View>
                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Terms and Conditions
                                </Text>

                                <Image source={require('../assets/icons/right-arrow.png')} />

                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>
                    </View>


                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20, }}>
                            Account
                        </Text>

                        <TouchableOpacity onPress={()=>navigation.navigate('Language')} activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    Language
                                </Text>
                                <View style={styles.subtitlebox}>
                                    <Text style={{ fontSize: 15, fontWeight: "regular" }}>
                                        English
                                    </Text>
                                    <Image source={require('../assets/icons/right-arrow.png')} />
                                </View>
                            </View>

                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} style={styles.boxs}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={styles.titlebox}>
                                    About Slada
                                </Text>
                                <View style={styles.subtitlebox}>

                                    <Image source={require('../assets/icons/right-arrow.png')} />
                                </View>
                            </View>
                            <View style={styles.boxline}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity activeOpacity={0.4}>
                        <Text style={{ marginTop: 25, fontSize: 13, fontWeight: "semibold", color: "#D97474" }}>
                            Delete My Account
                        </Text>
                    </TouchableOpacity>

                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#202020", marginTop: 25 }}>
                        Slada
                    </Text>

                    <Text style={{ fontSize: 12, fontWeight: "regular", color: "#000000", marginTop: 5 }}>
                        Version 1.0 April, 2020
                    </Text>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        padding: 20
    },
    boxs: {
        marginTop: 20
    },
    titlebox: {
        fontSize: 16,
        fontWeight: "semibold",
    },
    subtitlebox: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    boxline: {
        borderBottomWidth: 1,
        borderColor: "#000000",
        marginVertical: 20,
        fontWeight: "normal",
    },
})