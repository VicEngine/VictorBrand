import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Cut = ({onPress}) => {
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={styles.container}>
            <Text style={styles.cuttext}>Cancel</Text>
        </TouchableOpacity>
    )
}

export default Cut

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 30
    },

    cuttext: {
        fontSize: 15,
        fontFamily: "Nunito Sans",
        fontWeight: "light"
    },
})