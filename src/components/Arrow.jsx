import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Arrow = (onPress) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={require('../assets/images/Arrow.png')} />
        </TouchableOpacity>
    )
}

export default Arrow

const styles = StyleSheet.create({
    container: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: "#0C54FF",
        alignItems: "center",
        justifyContent: "center"
    },
})