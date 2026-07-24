import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { useState } from 'react';
const Voucher = () => {



    const [activeTab, setActiveTab] = useState('active');


    const Active = [
        {
            id: '1',
            image: require('../assets/icons/bag1.png'),
            title: 'Gift From Customer Care',
            discount: '5% off for your next order',
            time: 'Valid Until 5.16.20'
        },
        {
            id: '2',
            image: require('../assets/icons/box.png'),
            title: 'Loyal Customer',
            discount: '15% off for your next order',
            time: 'Valid Until 6.20.20'
        },
    ]

    const BADGES = [
        {
            id: 'b1',
            title: 'First Purchase',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
            icon: 'lock-closed',
            progress: 1,
            completed: true,
        },
        {
            id: 'b2',
            title: 'Loyal Customer',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
            icon: 'heart',
            progress: 0.65,
            completed: false,
        },
        {
            id: 'b3',
            title: 'Review Maker',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
            icon: 'star',
            progress: 0.45,
            completed: false,
        },
        {
            id: 'b4',
            title: 'Big Soul',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
            icon: 'cloud',
            progress: 0.2,
            completed: false,
        },
        {
            id: 'b5',
            title: 'T-Shirt Collector',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod',
            icon: 'shirt',
            progress: 0,
            completed: false,
        },
        {
            id: 'b6',
            title: '10+ Orders',
            desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy',
            icon: 'happy',
            progress: 0.8,
            completed: false,
        },
    ];


    const Header = () => (
        <View style={styles.headerRow}>
            <Image
                source={require('../assets/images/pro52.png')}
                style={styles.avatar}
            />
            <Text style={styles.headerTitle}>Vouchers</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity>
                    <Image source={require('../assets/icons/Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/icons/Messages.png')} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('../assets/icons/Frame.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );


    const Tabs = ({ active, onChange }) => (
        <View style={styles.tabRow}>
            <TouchableOpacity
                style={[styles.tabPill, active === 'active' && styles.tabPillActive]}
                onPress={() => onChange('active')}
            >
                <Text style={[styles.tabText, active === 'active' && styles.tabTextActive]}>
                    Active Rewards
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.tabPill, active === 'progress' && styles.tabPillActive]}
                onPress={() => onChange('progress')}
            >
                <Text style={[styles.tabText, active === 'progress' && styles.tabTextActive]}>
                    Progress
                </Text>
            </TouchableOpacity>
        </View>
    );


    const active = ({ item }) => (
        <View>
            <View style={{ width: "100%", height: 140, }}>
                <ImageBackground style={{ flex: 1, }} source={require('../assets/images/Subtraction.png')} resizeMode='contain'>


                    <View style={{ position: "absolute", top: 30, left: 20, }}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", }}>
                            Voucher
                        </Text>
                    </View>

                    <View style={{ width: 100, height: 20, backgroundColor: "#F9F9F9", alignItems: "center", justifyContent: "center", borderRadius: 5, position: "absolute", right: 20, top: 30, }}>
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
                        <Text style={{ fontSize: 14, fontFamily: 'Raleway', fontWeight: "medium", color: "#FFFFFF" }}>
                            collected
                        </Text>
                    </TouchableOpacity>


                </ImageBackground>
            </View>
        </View>
    )

    // ---- Circular progress ring around a badge icon ----
    const ProgressRing = ({ progress, children }) => {
        const size = 76;
        const strokeWidth = 4;
        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        const dashOffset = circumference * (1 - progress);

        return (
            <View style={{ width: size, height: size }}>
                <Svg width={size} height={size}>
                    {/* background track */}
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke="#e8ecfb"
                        strokeWidth={strokeWidth}
                        fill="none"
                    />
                    {/* progress arc */}
                    <Circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        stroke='#3B6EF5'
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={dashOffset}
                        strokeLinecap="round"
                        rotation="-90"
                        origin={`${size / 2}, ${size / 2}`}
                    />
                </Svg>
                <View style={styles.ringCenter}>{children}</View>
            </View>
        );
    };

    // ---- Badge card (Progress tab / image 1) ----
    const BadgeCard = ({ item }) => (
        <View style={styles.badgeCard}>
            <View>
                <ProgressRing progress={item.progress}>
                    <Ionicons name={item.icon} size={22} color='#3B6EF5' />
                </ProgressRing>
                {item.completed && (
                    <View style={styles.checkBadge}>
                        <Ionicons name="checkmark" size={10} color="#fff" />
                    </View>
                )}
            </View>
            <Text style={styles.badgeTitle}>{item.title}</Text>
            <Text style={styles.badgeDesc} numberOfLines={3}>
                {item.desc}
            </Text>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Tabs active={activeTab} onChange={setActiveTab} />

            {activeTab === 'active' ? (
                <FlatList
                    data={Active}
                    renderItem={active}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <FlatList
                    key="progress-grid"
                    data={BADGES}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => <BadgeCard item={item} />}
                    columnWrapperStyle={styles.badgeRow}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </SafeAreaView>
    );
}

export default Voucher

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingHorizontal: 16
    },
    listContent: {
        paddingBottom: 24,
        paddingTop: 8
    },

    // Header
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 10
    },
    headerTitle: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a1a'
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    iconBtnFilled: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#3B6EF5',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    iconBtnLight: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#eef1fb',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
    dotBadge: {
        position: 'absolute',
        top: 6,
        right: 7,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#3B6EF5',
    },

    // Tabs
    tabRow: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f5',
        borderRadius: 22,
        padding: 4,
        marginBottom: 20,
    },
    tabPill: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 18,
        alignItems: 'center'
    },
    tabPillActive: {
        backgroundColor: '#dfe6fc'
    },
    tabText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#999'
    },
    tabTextActive: {
        color: '#3B6EF5'
    },

    // Voucher card
    card: {
        borderWidth: 2,
        borderColor: '#3B6EF5',
        borderStyle: 'solid',
        borderRadius: 14,
        marginBottom: 16,
        paddingHorizontal: 16,
        paddingTop: 12,
        paddingBottom: 14,
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden',
    },
    notch: { ...StyleSheet.absoluteFillObject },
    notchCircle: {
        position: 'absolute',
        top: '38%',
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#ffff',
        borderWidth: 1.5,
        borderColor: '#3B6EF5',
    },
    notchLeft: {
        left: -9
    },
    notchRight: {
        right: -9
    },

    cardTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardLabel: {
        fontSize: 15,
        fontWeight: '700',
        color: '#3B6EF5'
    },
    validText: {
        fontSize: 11,
        color: '#666'
    },

    dashedLine: {
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#004CFF',
        marginVertical: 12,

    },

    cardBottomRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCircle: {
        width: 34,
        height: 34,
        borderRadius: 17,
        backgroundColor: '#eef1fb',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    cardTextWrap: {
        flex: 1
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1a1a1a'
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#777',
        marginTop: 2
    },
    collectedBtn: {
        backgroundColor: '#3B6EF5',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 8,
    },
    collectedText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700'
    },

    // Badge grid (Progress tab)
    badgeRow: { justifyContent: 'space-between' },
    badgeCard: {
        width: '47%',
        alignItems: 'center',
        marginBottom: 28,
    },
    ringCenter: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBadge: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#3B6EF5',
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    badgeTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#1a1a1a',
        marginTop: 10,
        textAlign: 'center',
    },
    badgeDesc: {
        fontSize: 10,
        color: '#999',
        textAlign: 'center',
        marginTop: 4,
        lineHeight: 14,
    },
})

