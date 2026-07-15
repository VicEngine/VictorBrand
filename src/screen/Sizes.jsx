import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const Sizes = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [selectedSize, setSelectedSize] = useState(route.params?.selectedSize || 'UK')
    const sizes = ['US', 'EU', 'UK']

    useEffect(() => {
        if (route.params?.selectedSize) {
            setSelectedSize(route.params.selectedSize)
        }
    }, [route.params?.selectedSize])

    const handleSelectSize = (size) => {
        setSelectedSize(size)
        navigation.navigate('Settings', {
            selectedSize: size,
            selectedLanguage: route.params?.selectedLanguage,
            selectedCurrency: route.params?.selectedCurrency,
        })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Settings</Text>
                <Text style={{ fontSize: 16, fontWeight: 'medium', marginTop: 10 }}>Sizes</Text>

                {sizes.map((size) => {
                    const isSelected = selectedSize === size

                    return (
                        <TouchableOpacity
                            key={size}
                            onPress={() => handleSelectSize(size)}
                            style={[styles.box, isSelected && styles.selectedBox]}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{size}</Text>
                                <Image
                                    source={
                                        isSelected
                                            ? require('../assets/images/Check1.png')
                                            : require('../assets/images/Check2.png')
                                    }
                                />
                            </View>
                        </TouchableOpacity>
                    )
                })}

            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Sizes

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
        borderRadius: 15,
        marginTop: 20,
        justifyContent: "center",
        paddingHorizontal: 15
    },
    selectedBox: {
        backgroundColor: '#E5EBFC',
    },
})