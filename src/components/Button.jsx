import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native'
import React from 'react'

const Button = ({ text, onPresss, }) => {
    return (

        <TouchableOpacity
            onPress={onPresss}
            text={text}
            style={styles.Button}>

            <Text style={styles.Buttontext}>{text}</Text>
        </TouchableOpacity>

    )
}

export default Button

const styles = StyleSheet.create({
    Button: {
        width: 335,
        height: 61,
        backgroundColor:"#004CFF",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 47,
        zIndex: 999,
    },
    Buttontext: {
        color: "#F3F3F3",
        fontSize: 22,
        fontWeight: "light",
        fontFamily: "Nunito Sans"
    },
})