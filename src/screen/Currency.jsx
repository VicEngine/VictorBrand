import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const Currency = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 28, fontWeight: "bold" }}>Settings</Text>
                <Text style={{ fontSize: 16, fontWeight: "medium", marginTop: 10 }}>Currency</Text>

                <TouchableOpacity style={styles.box}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text>
                        $ USD
                    </Text>
                    <TouchableOpacity>
                    <Image source={require('../assets/images/Check1.png')} />
                    </TouchableOpacity>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text>
                        € EURO
                    </Text>
                    <TouchableOpacity>
                    <Image source={require('../assets/images/Check2.png')} />
                    </TouchableOpacity>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text>
                        ₫ VND
                    </Text>
                    <TouchableOpacity>
                    <Image source={require('../assets/images/Check2.png')} />
                    </TouchableOpacity>
                    </View>
                    
                </TouchableOpacity>

                <TouchableOpacity style={styles.box}>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <Text>
                        ₽ RUB
                    </Text>
                    <TouchableOpacity>
                    <Image source={require('../assets/images/Check2.png')} />
                    </TouchableOpacity>
                    </View>
                    
                </TouchableOpacity>


            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Currency

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
        padding: 20,
    },
    box: {
        width: "100%",
        height: 50,
        backgroundColor: "#F9F9F9",
        borderRadius:15,
        marginTop:20,
        justifyContent:"center",
        paddingHorizontal:15
    },
})