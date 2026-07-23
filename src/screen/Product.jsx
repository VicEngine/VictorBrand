import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, Modal, Pressable, } from 'react-native'
import React from 'react'
import Arrow from '../components/Arrow'
import { Star } from 'lucide-react-native'
import { useState } from 'react'
const Product = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const [selectedSize, setSelectedSize] = useState('M')
    const [selectedColor, setSelectedColor] = useState('Pink')
    const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
    const variationOptions = ['Pink', 'M']

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
    const Step1 = [
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
        {
            id: '4',
            Image: require('../assets/images/pro57.png')
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

    const ForYou = [
        {
            id: '1',
            image: require('../assets/images/pro5.png'),
            title: 'Lorem ipsum dolor sit \n amet consectetur.',
            price: '$17,00'
        },
        {
            id: '2',
            image: require('../assets/images/pro6.png'),
            title: 'Lorem ipsum dolor sit \n amet consectetur.',
            price: '$17,00'
        },
        {
            id: '3',
            image: require('../assets/images/pro9.png'),
            title: 'Lorem ipsum dolor sit \n amet consectetur.',
            price: '$17,00'
        },
        {
            id: '4',
            image: require('../assets/images/pro4.png'),
            title: 'Lorem ipsum dolor sit \n amet consectetur.',
            price: '$17,00'
        },
        {
            id: '5',
            image: require('../assets/images/pro7.png')
        },
        {
            id: '6',
            image: require('../assets/images/pro8.png')
        },
    ]
    const step = ({ item }) => (
        <View style={styles.step2}>
            <Image source={item.Image} style={styles.imgstep2} />
        </View>
    )
    const step3 = ({ item }) => (
        <TouchableOpacity activeOpacity={0.5} style={styles.step2}>
            <Image source={item.Image} style={styles.imgstep2} />
        </TouchableOpacity>
    )

    const rating = 4;
    const maxStars = 5;
    const starColor = '#E6A123';

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

    const foryou = ({ item }) => (
        <View>
            <View style={styles.just}>
                <Image source={item.image} />
            </View>
            <View style={{ marginTop: 5 }}>
                <Text style={styles.protitle}>
                    {item.title}
                </Text>
                <Text style={styles.proprice}>
                    {item.price}
                </Text>
            </View>
        </View>
    )
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
                    <Arrow onPress={() => setIsVisible(true)} />
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
                <View style={{ flexDirection: "row", gap: 10, marginTop: 15, alignItems: "center" }}>
                    <Text style={styles.title}>
                        Just For You
                    </Text>
                    <Image source={require('../assets/icons/star.png')} />
                </View>

                <View>
                    <FlatList
                        data={ForYou}
                        renderItem={foryou}
                        keyExtractor={(item) => item.id}
                        scrollEnabled={false}
                        numColumns={2}
                        columnWrapperStyle={styles.rowtop}
                        contentContainerStyle={styles.listContent}

                    />
                </View>
                <View style={styles.loveContainer}>
                    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                        <Image
                            source={require('../assets/icons/love.png')}
                            style={[styles.favoriteIcon, isFavorite && styles.favoriteIconSelected]}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.love}>
                        <Text style={styles.Lovetext}>
                            Add to cart
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.love1}>
                        <Text style={styles.Lovetext}>
                            Buy now
                        </Text>
                    </TouchableOpacity>
                </View>
                <Modal visible={isVisible} onRequestClose={() => setIsVisible(false)} transparent animationType='slide'>
                    <View style={styles.modContainer}>
                        <Pressable onPress={() => setIsVisible(false)} style={StyleSheet.absoluteFill}>
                        </Pressable>
                        <View style={styles.modstep1}>

                            <View style={styles.modstep2}>
                                <View style={styles.modstep6}>
                                    <Image source={require('../assets/images/pro59.png')} style={styles.modimg} />
                                    <View>
                                        <Text style={styles.modtext}>
                                            $17.00
                                        </Text>
                                        <View style={styles.modstep5}>
                                            {variationOptions.map((option) => {
                                                const isSelected = selectedColor === option

                                                return (
                                                    <TouchableOpacity
                                                        key={option}
                                                        style={[styles.modstep4, isSelected && styles.modstep4Selected]}
                                                        onPress={() => setSelectedColor(option)}
                                                    >
                                                        <Text style={[styles.modtext1, isSelected && styles.modtextSelected]}>
                                                            {option}
                                                        </Text>
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.modstep7}>
                                <Text style={styles.modtext2}>
                                    Color Options
                                </Text>
                                <FlatList
                                    data={Step1}
                                    renderItem={step3}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    scrollEnabled={false}
                                />
                                <Text style={styles.modtext2}>
                                    size
                                </Text>
                                <View style={styles.modstep8Con}>
                                    {sizeOptions.map((size) => {
                                        const isSelected = selectedSize === size

                                        return (
                                            <TouchableOpacity
                                                key={size}
                                                style={[styles.modstep8, isSelected && styles.modstep8Selected]}
                                                onPress={() => setSelectedSize(size)}
                                            >
                                                <Text style={[styles.modtext1, isSelected && styles.modtextSelected]}>
                                                    {size}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>

                                <View style={styles.modstep9Con}>
                                    <Text style={styles.substep7}>
                                        Quantity
                                    </Text>
                                    <View style={styles.modsubstep9Con}>
                                        <TouchableOpacity style={styles.modstep9}>
                                            <Text style={styles.modstep9text1}>
                                                _
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={styles.modsubstep9}>
                                            <Text style={styles.modstep9text2}>
                                                1
                                            </Text>
                                        </View>
                                        <TouchableOpacity style={styles.modstep9}>
                                            <Text style={styles.modstep9text1}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>


                                <View style={styles.loveContainer}>
                                    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
                                        <Image
                                            source={require('../assets/icons/love.png')}
                                            style={[styles.favoriteIcon, isFavorite && styles.favoriteIconSelected]}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.love}>
                                        <Text style={styles.Lovetext}>
                                            Add to cart
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.love1}>
                                        <Text style={styles.Lovetext}>
                                            Buy now
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>
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
    step11: {
        width: "100%",
        height: 55,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#004CFF",
        borderRadius: 15,
        marginTop: 15,
        elevation: 4,
        shadowOpacity: 0.4
    },
    step11text: {
        fontSize: 16,
        fontWeight: 'light',
        fontFamily: "Nunito Sans",
        color: "#F3F3F3"
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
    proprice: {
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: 'Raleway',
        marginTop: 8
    },
    just: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFFF",
        height: "8.5%",
        padding: 7,
        borderRadius: 15,
        elevation: 1,
        shadowOpacity: 0.2,
    },
    listContent: {
        paddingTop: 20,
    },
    rowtop: {
        gap: 20,
        marginBottom: 10,
    },
    protitle: {
        fontSize: 12,
        fontWeight: "regular",
        fontFamily: 'Nunito Sans'
    },
    loveContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    favoriteIcon: {
        tintColor:'#000000',
    },
    favoriteIconSelected: {
        tintColor: '#F81140',
    },
    love: {
        width: '40%',
        height: 50,
        borderRadius: 20,
        backgroundColor: "#202020",
        alignItems: 'center',
        justifyContent: 'center'
    },
    love1: {
        width: '40%',
        height: 50,
        borderRadius: 20,
        backgroundColor: "#004CFF",
        alignItems: "center",
        justifyContent: 'center'
    },
    Lovetext: {
        fontSize: 16,
        fontFamily: "Nunito Sans",
        fontWeight: 'light',
        color: '#F3F3F3'
    },
    modContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },
    modstep1: {
        backgroundColor: "#FFFFFF",
        height: "65%",
    },
    modstep2: {
        width: "100%",
        height: "25%",
        backgroundColor: '#F8FAFF',
        justifyContent: "center",
        padding: 20,

    },
    modstep3: {

    },
    modstep4: {
        backgroundColor: "#F9F9F9",
        width: 40,
        height: 18,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 3
    },
    modstep4Selected: {
        backgroundColor: "#E5EBFC",
    },
    modtext: {
        fontSize: 26,
        fontFamily: 'Raleway',
        fontWeight: 'bold'
    },
    modtext1: {
        fontSize: 14,
        fontWeight: 'medium',
        fontFamily: 'Raleway'
    },
    modstep5: {
        gap: 10,
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 8
    },
    modstep6: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    modimg: {
        borderRadius: 10
    },
    modstep7: {
        padding: 20,
    },
    modtext2: {
        fontSize: 17,
        fontFamily: 'Raleway',
        fontWeight: "bold",

    },
    modstep8Con: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    modstep8: {
        width: 50,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F9F9F9',
        borderRadius: 5,
    },
    modstep8Selected: {
        backgroundColor: '#E5EBFC',
    },
    modtextSelected: {
        color: '#004CFF',
    },
    modstep9Con: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modsubstep9: {
        width: 70,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#E5EBFC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modsubstep9Con: {
        gap: 8,
        flexDirection: 'row'
    },
    modstep9text2: {
        fontFamily: 'Raleway',
        fontWeight: 'medium',
        fontSize: 29,
    },
    modstep9: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#004bfe',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modstep9text1: {
        color: '#004cff',
    },


})