import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'

const Currency = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const [selectedCurrency, setSelectedCurrency] = useState(route.params?.selectedCurrency || '$ USD')
    const currencies = ['$ USD', '€ EURO', '₫ VND', '₽ RUB']

    useEffect(() => {
        if (route.params?.selectedCurrency) {
            setSelectedCurrency(route.params.selectedCurrency)
        }
    }, [route.params?.selectedCurrency])

    const handleSelectCurrency = (currency) => {
        setSelectedCurrency(currency)
        navigation.navigate('Settings', {
            selectedCurrency: currency,
            selectedLanguage: route.params?.selectedLanguage,
        })
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Settings</Text>
                <Text style={{ fontSize: 16, fontWeight: 'medium', marginTop: 10 }}>Currency</Text>

                {currencies.map((currency) => {
                    const isSelected = selectedCurrency === currency

                    return (
                        <TouchableOpacity
                            key={currency}
                            onPress={() => handleSelectCurrency(currency)}
                            style={[styles.box, isSelected && styles.selectedBox]}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text>{currency}</Text>
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
        borderRadius: 15,
        marginTop: 20,
        justifyContent: "center",
        paddingHorizontal: 15
    },
    selectedBox: {
        backgroundColor: '#E5EBFC',
    },
})