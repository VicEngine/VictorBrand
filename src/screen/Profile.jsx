import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const Profile = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 28, fontWeight: "bold", color: "#000000" }}>
                    Settings
                </Text>

                <Text style={{ fontSize: 18, fontWeight: "medium", color: "#000000", marginTop: 12 }}>
                    Your Profile
                </Text>
                <View style={{ marginTop: 30, backgroundColor: "#FFFF", width: 110, height: 110, borderRadius: 55, alignItems: "center", justifyContent: "center" }}>
                    <Image source={require('../assets/images/pro52.png')} style={{ borderRadius: 50 }} />

                    <TouchableOpacity style={{ backgroundColor: "#004BFE", width: 30, height: 30, borderRadius: 15, alignItems: "center", justifyContent: "center", borderColor: "#fff", borderWidth: 2, position: "absolute", top: 0, right: 3 }}>
                        <Image source={require('../assets/icons/pen.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ width: "100%", height: 60, backgroundColor: "#F1F4FE", marginTop: 20, justifyContent: "center", paddingLeft: 20, borderRadius: 10 }}>
                    <TextInput
                        placeholder='User Name'
                        placeholderTextColor={'black'}
                        style={{ fontSize: 17, fontWeight: "regular", }} />
                </View>

                <View style={{ width: "100%", height: 60, backgroundColor: "#F1F4FE", marginTop: 20, justifyContent: "center", paddingLeft: 20, borderRadius: 10 }}>
                    <TextInput
                        placeholder='gmail@example.com'
                        placeholderTextColor={'black'}
                        style={{ fontSize: 17, fontWeight: "regular", }} />
                </View>

                <View style={{ width: "100%", height: 60, backgroundColor: "#F1F4FE", marginTop: 20, justifyContent: "center", paddingLeft: 20, borderRadius: 10 }}>
                    <TextInput
                        placeholder='************'
                        placeholderTextColor={'black'}
                        style={{ fontSize: 17, fontWeight: "regular", }} />
                </View>

                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <TouchableOpacity activeOpacity={0.5} style={{ paddingVertical: 16, paddingHorizontal: 20, backgroundColor: "#004CFF", borderRadius: 15, alignItems: "center" }}>
                        <Text style={{ fontSize: 16, color: "#F3F3F3", fontWeight: "light" }}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        padding: 20,
    },
})