import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Modal, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { BlurView } from 'expo-blur'
const Payment = ({ navigation }) => {
    const [isVissible, setIsVissible] = useState(false)
    const [payVissible, setPayVissible] = useState(false)


    const Data = [
        {
            id: '1',
            image: require('../assets/images/pro50.png'),
        },
        {
            id: '2',
            image: require('../assets/images/pro49.png'),
        },
    ]

    const Active = [
        {
            id: '1',
            image: require('../assets/icons/bag1.png'),
            title: 'First Purchase',
            discount: '5% off for your next order',
            time: 'Valid Until 5.16.20'
        },
        {
            id: '2',
            image: require('../assets/icons/box.png'),
            title: 'Gift From Customer Care',
            discount: '15% off for your next order',
            time: 'Valid Until 6.20.20'
        },
    ]

    const data = ({ item }) => (
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 4, paddingVertical: 6 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                <TouchableOpacity activeOpacity={0.5} style={{ width: 72, height: 72, backgroundColor: "#FFF", borderRadius: 36, alignItems: "center", justifyContent: "center" }}>
                    <Image source={item.image} style={{ width: 56, height: 56, resizeMode: 'contain' }} />
                    <View style={styles.num}>
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                            1
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ fontSize: 12, fontWeight: "regular", marginLeft: 6 }}>
                    Lorem ipsum dolor sit amet{'\n'}consectetur.
                </Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                $17,00
            </Text>
        </View>
    )


    const active = ({ item }) => (
        <View>
            <View style={{ width: "100%", height: 140, }}>
                <ImageBackground style={{ flex: 1, }} source={require('../assets/images/Subtraction.png')} resizeMode='contain'>


                    <View style={{ position: "absolute", top: 30, left: 20, }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", }}>
                            Voucher
                        </Text>
                    </View>

                    <View style={{ width: 100, height: 20, backgroundColor: "#FFEBEB", alignItems: "center", justifyContent: "center", borderRadius: 5, position: "absolute", right: 20, top: 30, }}>
                        <Text style={{ fontSize: 11, fontWeight: "medium", }}>
                            {item.time}
                        </Text>
                    </View>

                    <View
                        style={{ borderBottomWidth: 2, borderColor: "#004CFF", borderStyle: "dashed", marginTop: 6, position: "relative", top: 45, marginLeft: 6, marginRight: 5 }}
                    />




                    <View style={{ position: "absolute", bottom: 30, left: 8 }}>
                        <View style={{ paddingLeft: 12, flexDirection: "row", alignItems: "center", gap: 8, }}>
                            <Image source={item.image} />
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                                {item.title}
                            </Text>
                        </View>


                        <Text style={{ paddingLeft: 20, fontSize: 12, fontWeight: "bold", marginTop: 5 }}>
                            {item.discount}
                        </Text>
                    </View>

                    <TouchableOpacity style={{ backgroundColor: '#004CFF', height: 28, width: 80, alignItems: "center", justifyContent: "center", borderRadius: 10, marginRight: 10, position: "absolute", bottom: 20, right: 16 }}>
                        <Text style={{fontSize:14,fontFamily:'Raleway',fontWeight:"medium",color:"#FFFFFF"}}>
                            Apply
                        </Text>
                    </TouchableOpacity>


                </ImageBackground>
            </View>
        </View>
    )

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Payment</Text>

                        <View style={styles.card}>
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

                        <View style={styles.card1}>
                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000000" }}>
                                Contact Information
                            </Text>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{ fontSize: 10, fontWeight: "regular", color: "#000000", marginTop: 8, }}>
                                    +84932000000{'\n'}amandamorgan@exmple.com
                                </Text>
                                <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#004BFE", alignItems: "center", justifyContent: "center" }}>
                                    <Image source={require('../assets/icons/pen.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 15 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
                                <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                                    Items
                                </Text>
                                <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#E5EBFC", alignItems: "center", justifyContent: "center", }}>
                                    <Text style={{ fontSize: 18, fontWeight: "bold", }}>
                                        2
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: "#fff", borderColor: "#004BFE", paddingVertical: 10, paddingHorizontal: 23, borderRadius: 15, borderWidth: 2 }}>
                                <Text style={{ fontWeight: "regular", fontSize: 13, color: "#004BFE" }}>
                                    Add Voucher
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                data={Data}
                                renderItem={data}
                                keyExtractor={(item) => item.id}
                                scrollEnabled={false}
                            />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 21, fontWeight: "bold" }}>
                            Shipping Options
                        </Text>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => setIsVissible(!isVissible)} style={styles.shipping}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                {isVissible ? (<Image source={require('../assets/images/Check1.png')} />) : (<Image source={require('../assets/images/Check3.png')} />)}
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                    Standard
                                </Text>
                                <View style={{ paddingHorizontal: 17, paddingVertical: 8, backgroundColor: "#FFF", borderRadius: 5 }}>
                                    <Text>
                                        5-7 days
                                    </Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                FREE
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.5} onPress={() => setIsVissible(!isVissible)} style={styles.shipping2}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                {isVissible ? (<Image source={require('../assets/images/Check3.png')} />) : <Image source={require('../assets/images/Check1.png')} />}
                                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                    Express
                                </Text>
                                <View style={{ paddingHorizontal: 17, paddingVertical: 8, backgroundColor: "#FFF", borderRadius: 5 }}>
                                    <Text>
                                        1-2 days
                                    </Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                                $12,00
                            </Text>
                        </TouchableOpacity>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>
                            Delivered on or before Thursday, 23 April 2020
                        </Text>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                            <Text style={{ fontSize: 21, fontWeight: "bold" }}>
                                Payment Method
                            </Text>
                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#004BFE", alignItems: "center", justifyContent: "center" }}>
                                <Image source={require('../assets/icons/pen.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: 80, height: 40, backgroundColor: "#E5EBFC", alignItems: "center", justifyContent: "center", borderRadius: 16 }}>
                            <Text>
                                Card
                            </Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, justifyContent: "flex-end", marginTop: 10 }}>
                        <View style={{ width: "100%", height: 60, backgroundColor: "#F9F9F9", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
                            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
                                    Total
                                </Text>
                                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
                                    $34,00
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => setPayVissible(true)} style={{ backgroundColor: "#202020", paddingVertical: 12, paddingHorizontal: 40, borderRadius: 10 }}>
                                <Text style={{ fontSize: 16, fontWeight: "regular", color: "#F3F3F3" }}>
                                    Pay
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Modal visible={payVissible} transparent={true} animationType='slide' onRequestClose={() => setPayVissible(false)}>
                        <View style={styles.modalOverlay}>
                            <Pressable style={StyleSheet.absoluteFill} onPress={() => setPayVissible(false)}>
                                <BlurView intensity={80} tint="dark" style={StyleSheet.absoluteFill} />
                            </Pressable>
                            <View style={styles.modcontainer}>

                                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                                    Active Vouchers
                                </Text>

                                <FlatList
                                    data={Active}
                                    renderItem={active}
                                    keyExtractor={(item) => item.id}
                                />
                            </View>
                        </View>
                    </Modal>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",

    },
    card: {
        width: "100%",
        height: 75,
        borderRadius: 13,
        backgroundColor: "#F9F9F9",
        borderRadius: 15,
        padding: 10,
        marginTop: 10,


    },
    card1: {
        width: "100%",
        height: 75,
        borderRadius: 13,
        backgroundColor: "#F9F9F9",
        borderRadius: 15,
        padding: 10,
        marginTop: 10,


    },
    num: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#E5EBFC",

        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        right: 0,
        borderWidth: 2,
        borderColor: "#fff"
    },
    shipping: {
        width: "100%",
        height: 50,
        backgroundColor: "#E5EBFC",
        marginTop: 12,
        borderRadius: 15,
        justifyContent: "center",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    },
    shipping2: {
        width: "100%",
        height: 50,
        backgroundColor: "#F9F9F9",
        marginTop: 12,
        borderRadius: 15,
        justifyContent: "center",
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    container: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        minHeight: "50%",
    },

    heading: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'transparent'
    },
    modcontainer: {
        backgroundColor: "#F8FAFF",
        height: '50%',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
})
