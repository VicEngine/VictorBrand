import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FormInput from '../../components/FormInput'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'
import Cut from '../../components/Cut'
const Login = () => {

const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/images/bubble 02.png')} />
                <View style={styles.bubble}>
                    <Image source={require('../../assets/images/bubble 01.png')} />
                </View>
            </View>
            <View style={styles.rightbob}>
                <Image
                    source={require('../../assets/images/bubblle 03.png')}
                />
            </View>

            <View style={{ marginTop: 80, paddingLeft: 38 }} >
                <Text style={{ fontSize: 52, fontWeight: "bold" }}>Login</Text>
                <View style={{ flexDirection: "row", gap: 10, zIndex: 999 }}>
                    <Text style={{ fontSize: 19, fontWeight: "light", fontFamily: "Nunito Sans" }}>Good to see you back!</Text>
                    <Image source={require('../../assets/images/heart.png')} />
                </View>
            </View>
            <View style={{ zIndex: 999 }}>
                <FormInput
                    placeholder='Email'
                    placeholderTextColor='#F8F8F8'
                    keyboardType='email-address'
                />
            </View>

            {/*Next*/}
            <Button text={'Next'} onPresss={() => navigation.navigate('Password')} />

            {/*Buttom*/}
            <View style={styles.downbob}>
                <Image source={require('../../assets/images/bubble 04.png')}
                    style={{ width: 268, height: 359.65 }} />
            </View>

            {/*Cancel*/}
            <Cut onPress={() => navigation.goBack('Shoppe')} />




        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        flex: 1
    },
    bubble: {
        position: 'absolute',
        Top: 40,
        left: 0,
    },
    rightbob: {
        position: "absolute",
        top: 294,
        right: 0,
    },
    downbob: {
        position: "absolute",
        right: 3,
        bottom: 5
    },
})
