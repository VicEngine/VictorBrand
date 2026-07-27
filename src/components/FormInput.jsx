import { StyleSheet, Text, View,TextInput } from 'react-native'
import { useState } from 'react'
import React from 'react'

const FormInput = ({ placeholder, keyboardType, placeholderTextColor }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.Area}>
            <View>
                <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor} 
                keyboardType={keyboardType}
                value={email}
                onChangeText={setEmail}
                style={styles.FormInput}
                />
            </View>

        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    Area:{
        gap:20,
    },

    FormInput:{
        backgroundColor:"#D2D2D2",
        fontSize:13.8,
        fontFamily:"poppins",
        width:335,
        height:52.37,
        paddingHorizontal:20,
        borderRadius:25,
        marginTop:25,
        alignSelf:"center",
    }
})