import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const Shippingaddress = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>Settings</Text>
                <Text style={{ fontSize: 16, fontWeight: "medium", marginTop: 10 }}>Shippingaddress</Text>

                <View style={{ marginTop: 25 }}>
                    <Text style={{ fontSize: 13, fontWeight: "semibold" }}>Country</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Choose your country</Text>
                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#004CFF", alignItems: "center", justifyContent: "center" }}>
                            <Image source={require('../assets/images/Arrow.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={styles.addCardtext}> Address</Text>
                        <View style={styles.addCard}>
                            <TextInput
                                placeholder='Required'
                                placeholderTextColor={"#9EB4E8"}
                                style={{ fontSize: 16, fontWeight: "medium" }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={styles.addCardtext}>Town / City</Text>
                        <View style={styles.addCard}>
                            <TextInput
                                placeholder='Required'
                                placeholderTextColor={"#9EB4E8"}
                                style={{ fontSize: 16, fontWeight: "medium" }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={styles.addCardtext}>Postcode</Text>
                        <View style={styles.addCard}>
                            <TextInput
                                placeholder='Required'
                                placeholderTextColor={"#9EB4E8"}
                                style={{ fontSize: 16, fontWeight: "medium" }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    <View>
                        <Text style={styles.addCardtext}>Phone Number</Text>
                        <View style={styles.addCard}>
                            <TextInput
                                placeholder='Required'
                                placeholderTextColor={"#9EB4E8"}
                                style={{ fontSize: 16, fontWeight: "medium" }}
                            />
                        </View>
                    </View>
                </View>

                <View style={{flex:1,justifyContent:"flex-end"}}>
                    <TouchableOpacity style={{ marginTop: 20, width: "100%", backgroundColor: "#004CFF", alignItems: "center", paddingVertical: 15, borderRadius: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: "light", color: "#F3F3F3" }}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Shippingaddress

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        padding: 20,
    },
    addCard: {
        width: "100%",
        height: 50,
        backgroundColor: "#F1F4FE",
        justifyContent: "center",
        borderRadius: 15,
        paddingHorizontal: 15,
        marginTop: 5,
    },
    addCardtext: {
        fontSize: 13, fontWeight: "semibold"
    },

})