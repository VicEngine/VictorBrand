import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Arrow from '../components/Arrow'
import { Star } from 'lucide-react-native'

const Product = () => {
    const Step2 = [
        {
            id: '1',
            Image: require('../assets/images/pro56.png')
        },
        {
            id: '2',
            Image: require('../assets/images/pro54.png')
        },
        {
            id: '3',
            Image: require('../assets/images/pro55.png')
        },
    ]
    const step = ({ item }) => (
        <View style={styles.step2}>
            <Image source={item.Image} style={styles.imgstep2} />
        </View>
    )

    const rating = 4;
    const maxStars = 5;
    const starColor = '#E6A123';

    return (
        <ScrollView style={styles.container}>
            <ImageBackground>
                <Image source={require('../assets/images/pro53.png')} style={{ height: 500, width: "100%" }} />
            </ImageBackground>

            <View style={styles.subcontainer}>
                <View style={styles.pricecontainer}>
                    <Text style={styles.price}>
                        $17,00
                    </Text>
                    <TouchableOpacity style={styles.share}>
                        <Image source={require('../assets/icons/share.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subtext}>
                    Lorem ipsum dolor sit amet, consectetur {'\n'} adipiscing elit. Etiam arcu mauris, scelerisque eu {'\n'} mauris id, pretium pulvinar sapien.
                </Text>

                <View style={styles.step1}>
                    <View style={styles.substep1}>
                        <Text style={styles.text1step1}>
                            Variations
                        </Text>
                        <Text style={styles.text2step1}>
                            Pink
                        </Text>
                        <Text style={styles.text2step1}>
                            M
                        </Text>
                    </View>
                    <Arrow />
                </View>
                <View>
                    <FlatList
                        data={Step2}
                        renderItem={step}
                        keyExtractor={(item) => item.id}
                        horizontal
                        scrollEnabled={false}
                    />
                </View>
                <Text style={styles.step3}>
                    Specifications
                </Text>
                <Text style={styles.step3}>
                    Material
                </Text>
                <View style={styles.step4Container}>
                    <View style={styles.step4}>
                        <Text style={styles.substep4}>
                            Coltton 95%
                        </Text>
                    </View>
                    <View style={styles.step4}>
                        <Text style={styles.substep4}>
                            Nylon 5%
                        </Text>
                    </View>
                </View>

                <Text style={styles.step5}>
                    Origin
                </Text>
                <View style={styles.step6}>
                    <Text style={styles.substep6}>
                        EU
                    </Text>
                </View>

                <View style={styles.step7}>
                    <Text style={styles.substep7}>
                        Size guide
                    </Text>
                    <Arrow />
                </View>

                <Text style={styles.step3}>
                    Delivery
                </Text>
                <View style={styles.step8Container}>
                    <View style={styles.step8}>
                        <Text style={styles.step8text}>
                            Standart
                        </Text>
                        <View style={styles.substep8}>
                            <Text style={styles.step8text1}>
                                5-7days
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.step8text2}>
                        $3,00
                    </Text>
                </View>

                <View style={styles.step8Container}>
                    <View style={styles.step8}>
                        <Text style={styles.step8text}>
                            Express
                        </Text>
                        <View style={styles.substep8}>
                            <Text style={styles.step8text1}>
                                1-2days
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.step8text2}>
                        $12,00
                    </Text>
                </View>

                <Text style={styles.step3}>
                    Rating & Reviews
                </Text>
                <View style={styles.step9Container}>
                    <View style={styles.container1}>
                        {Array.from({ length: maxStars }).map((_, index) => {
                            const isFilled = index < rating;

                            return (
                                <Star
                                    key={index}
                                    size={22}
                                    color={starColor}
                                    fill={isFilled ? starColor : 'transparent'}
                                    strokeWidth={2}
                                    style={styles.star}
                                />
                            );
                        })}
                    </View>
                    <View style={styles.step9}>
                        <Text style={styles.substep9}>
                            4/5
                        </Text>
                    </View>
                </View>

                <View style={styles.step10Container}>

                    <View style={styles.step10}>
                        <Image source={require('../assets/images/pro58.png')} style={styles.substep10} />
                    </View>

                    <View style={styles.substep10Container}>
                        <Text style={styles.step10text1}>
                            Veronika
                        </Text>
                        <View style={styles.container1}>
                            {Array.from({ length: maxStars }).map((_, index) => {
                                const isFilled = index < rating;

                                return (
                                    <Star
                                        key={index}
                                        size={22}
                                        color={starColor}
                                        fill={isFilled ? starColor : 'transparent'}
                                        strokeWidth={2}
                                        style={styles.star}
                                    />
                                );
                            })}
                        </View>
                        <Text style={styles.step10text2}>
                            Lorem ipsum dolor sit amet, consetetur sadipscing {'\n'} elitr, sed diam nonumy eirmod tempor invidunt ut {'\n'}labore et dolore magna aliquyam erat, sed ...
                        </Text>
                    </View>
                </View>
               <TouchableOpacity activeOpacity={0.5} style={styles.step11}>
                <Text style={styles.step11text}>
                    View All Reviews
                </Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    subcontainer: {
        padding: 20
    },
    pricecontainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    price: {
        fontSize: 26,
        fontFamily: "Raleway",
        fontWeight: "bold",
        color: "#000000"
    },
    share: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#FFEBEB",
        alignItems: "center",
        justifyContent: "center"
    },
    subtext: {
        fontFamily: "Nunito Sans",
        fontSize: 15,
        fontWeight: "regular",
        color: "#000000",
        marginTop: 10,
    },
    step1: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    substep1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    text1step1: {
        fontSize: 20,
        fontFamily: "Raleway",
        fontWeight: "bold"
    },
    text2step1: {
        fontSize: 14,
        fontWeight: "medium",
        fontFamily: "Raleway"
    },
    step2: {
        marginTop: 15,
        paddingHorizontal: 3,
    },
    imgstep2: {
        borderRadius: 6,

    },
    step3: {
        fontSize: 20,
        fontFamily: "Raleway",
        fontWeight: "bold",
        color: "#000000",
        marginTop: 15,
    },
    step4Container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 10,
    },
    step4: {
        width: 90,
        height: 40,
        backgroundColor: "#FFEBEB",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    substep4: {
        fontSize: 14,
        fontWeight: "medium",
        fontFamily: "Raleway",
        color: "#000000",
    },
    step5: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#202020",
        fontFamily: "Raleway",
        marginTop: 10,
    },
    step6: {
        width: 60,
        height: 30,
        backgroundColor: "#E5EBFC",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10
    },
    substep6: {
        fontSize: 14,
        fontWeight: "medium",
        fontFamily: "Raleway"
    },
    step7: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 15,
    },
    substep7: {
        fontSize: 17,
        fontFamily: "Raleway",
        fontWeight: "bold",
        color: "#202020"
    },
    step8Container: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#004CFF",
        marginTop: 10,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    step8: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    step8text: {
        fontFamily: "Ralway",
        fontSize: 16,
        fontWeight: "medium",
        color: '#000000',
    },
    substep8: {
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F5F8FF"
    },
    step8text1: {
        fontFamily: "Ralway",
        fontSize: 13,
        fontWeight: "medium",
        color: '#004cff',
    },
    step8text2: {
        fontFamily: "Ralway",
        fontSize: 16,
        fontWeight: "bold",
        color: '#000000',
    },
    container1: {
        flexDirection: 'row',

    },
    star: {
        marginHorizontal: 4,
    },
    step9Container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        gap: 20
    },
    step9: {
        width: 40,
        height: 20,
        borderRadius: 5,
        backgroundColor: "#DFE9FF",
        alignItems: "center",
        justifyContent: "center",
    },
    substep9: {
        fontSize: 14,
        fontWeight: "bold",
        fontFamily: "Raleway",
        color: "#202020"
    },
    step10Container: {
        flexDirection: "row",
        gap: 20,
        marginTop: 15
    },
    step10: {
        width: 45,
        height: 45,
        borderRadius: 22,
        backgroundColor: '#FFFFFF',
        alignItems: "center",
        justifyContent: "center",
        elevation: 1,
        shadowOpacity: 0.2,

    },
    substep10: {
        borderRadius: 25
    },
    substep10Container: {
        justifyContent: "center",
    },
    step10text1: {
        fontSize: 16,
        fontFamily: "Raleway",
        fontWeight: "bold",
        marginBottom: 8
    },
    step10text2: {
        fontSize: 12,
        fontWeight: "regular",
        fontFamily: "Nunito Sans",
        marginTop: 8,
    },
    step11:{
        width:"100%",
        height:55,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:"#004CFF",
        borderRadius:15,
        marginTop:15,
        elevation:4,
        shadowOpacity:0.4
    },
    step11text:{
        fontSize:16,
        fontWeight:'light',
        fontFamily:"Nunito Sans",
        color:"#F3F3F3"
    },
})