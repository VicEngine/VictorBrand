import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react';
import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const navigation = useNavigation();
    const DataItem = [
        {
            id: '1',
            image: require('../assets/images/pro15.png'),
            title: 'New'
        },
        {
            id: '2',
            image: require('../assets/images/pro14.png'),
            title: 'Sale'
        },
        {
            id: '3',
            image: require('../assets/images/pro12.png'),
            title: 'Hot'
        },
        {
            id: '4',
            image: require('../assets/images/pro13.png'),
            title: 'New'
        },
    ]
    const See = ({ item }) => (
        <View style={styles.allcontainer}>
            <TouchableOpacity activeOpacity={0.9} style={styles.suball}>
                <Image source={item.image} />
            </TouchableOpacity>
            <View style={styles.allcontainertext}>
                <View style={styles.allsubtext}>
                    <Text style={styles.alltext}>
                        1780
                    </Text>
                    <Image source={require('../assets/icons/heart1.png')} />
                </View>
                <View>
                    <Text style={styles.allnewtext}>
                        {item.title}
                    </Text>
                </View>
            </View>
        </View>
    )
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
                            Cart
                        </Text>
                        <View style={{ backgroundColor: "#E5EBFC", width: 30, height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
                                0
                            </Text>
                        </View>
                    </View>

                    <View style={{ width: "100%", height: 80, marginTop: 15, backgroundColor: "#F9F9F9", borderRadius: 15, padding: 10, }}>
                        <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000000" }}>
                            Shipping Address
                        </Text>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={{ fontSize: 10, fontWeight: "regular", color: "#000000", marginTop: 8, }}>
                                26, Duong So 2, Thao Dien Ward, An Phu, District 2,{'\n'}Ho Chi Minh city
                            </Text>
                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#004BFE", alignItems: "center", justifyContent: "center" }}>
                                <Image source={require('../assets/icons/pen.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity activeOpacity={0.5} style={styles.containerEmptycart}>
                        <View style={styles.Emptycart}>
                            <Image source={require('../assets/icons/cartbag.png')} />
                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: 30 }}>
                        <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center", }}>
                            <Text style={{ fontSize: 18, fontWeight: "bold" }}>Most Popular</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                <Text style={styles.see}>
                                    See All
                                </Text>
                                <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require('../assets/images/Arrow.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <FlatList
                            data={DataItem}
                            renderItem={See}
                            horizontal
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>

                </View>
                <View style={{ flex: 1, justifyContent: "flex-end" }}>
                    <View style={{ width: "100%", height: 60, backgroundColor: "#F9F9F9", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
                        <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
                                Total
                            </Text>
                            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
                                $0,00
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Payment') }  style={{ backgroundColor: "#FFFFFF", paddingVertical: 10, paddingHorizontal: 18, borderRadius: 10 }}>
                            <Text style={{ fontSize: 16, fontWeight: "regular" }}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2F2F2",
        flex: 1,

    },
    subcontainer: {
        padding: 20,
    },
    containerEmptycart: {
        marginVertical: 90,
        alignItems: "center",
    },
    Emptycart: {
        width: 150,
        height: 150,
        backgroundColor: "#FFFFFF",
        borderRadius: 75,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.2
    },
    see: {
        fontSize: 15,
        fontWeight: "bold",
    },
    allcontainer: {
        width: 104,
        height: 140,
        backgroundColor: "#FFFF",
        marginTop: 15,
        borderRadius: 10,
        marginLeft: 10
    },
    suball: {
        alignItems: "center",
    },
    allcontainertext: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5,
        marginTop: 5,
        justifyContent: "space-between"

    },
    allsubtext: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3
    },
    alltext: {
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: 'Raleway',
        color: "#000000"
    },
    allnewtext: {
        fontSize: 13,
        fontWeight: 'medium',
        marginRight: 5
    },

})



