import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const Wishlist = () => {
    const Data = [
        {
            id: '1',
            image: require("../assets/images/pic2.png"),
        },
        {
            id: '2',
            image: require("../assets/images/pic3.png"),
        },
        {
            id: '3',
            image: require("../assets/images/pic4.png"),
        },
        {
            id: '4',
            image: require("../assets/images/pic5.png"),
        },
        {
            id: '5',
            image: require("../assets/images/pic6.png"),
        },
    ]

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

    const data = ({ item }) => (
        <View style={{ marginRight: 10, }}>
            <TouchableOpacity style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: "#FFFF", alignItems: "center", justifyContent: "center", marginTop: 10, }} >
                <Image source={item.image} style={{
                    width: 60, height: 60, borderRadius: 30,
                    borderWidth: 1, borderColor: "#E5E5EA",
                }} />
            </TouchableOpacity>
        </View>
    )

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
        <SafeAreaView style={styles.container}>

            <Text style={{ fontSize: 32, color: "#202020", fontWeight: "bold" }}>
                Wishlist
            </Text>
            <View style={{ marginVertical: 12 }}>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    paddingRight: 16, marginBottom: 15
                }}>
                    <Text style={{ fontSize: 32, color: "#202020", fontWeight: "bold" }}>
                        Recently Viewed
                    </Text>
                    <TouchableOpacity style={styles.arrowbutton}>
                        <Image source={require("../assets/images/Arrow.png")} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={Data}
                    renderItem={data}
                    keyExtractor={(item) => item.id}
                    horizontal
                    scrollEnabled={false}
                />
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 60 }}>
                    <TouchableOpacity style={styles.heartcircle}>
                        <Image source={require("../assets/images/Favorites.png")} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1,justifyContent:"flex-end",marginTop:50  }}>
                <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center",}}>
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
        </SafeAreaView >
    )
}

export default Wishlist

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9F9F9",
        padding: 20,
    },
    arrowbutton: {
        backgroundColor: "#004CFF",
        width: 35,
        height: 35,
        borderRadius: 17,
        justifyContent: "center",
        alignItems: "center"
    },
    heartcircle: {
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: "#007AFF",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 5,
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