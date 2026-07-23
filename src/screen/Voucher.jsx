import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Svg, { Circle } from 'react-native-svg';
import { useState } from 'react';
const Voucher = () => {



    const [activeTab, setActiveTab] = useState('active'); // 'active' | 'progress'

    // ---- Sample data — swap with your API data ----
    const VOUCHERS = [
        {
            id: 'v1',
            title: 'First Purchase',
            subtitle: '5% off for your next order',
            icon: 'bag-handle',
            validUntil: '5.16.20',
        },
        {
            id: 'v2',
            title: 'Gift From Customer Care',
            subtitle: '15% off your next purchase',
            icon: 'gift',
            validUntil: '6.20.20',
        },
    ];

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

    // ---- Header ----
    const Header = () => (
        <View style={styles.headerRow}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=8' }}
                style={styles.avatar}
            />
            <Text style={styles.headerTitle}>Vouchers</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconBtnFilled}>
                    <MaterialCommunityIcons name="ticket-outline" size={18} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtnLight}>
                    <Ionicons name="menu-outline" size={18} color='#3B6EF5' />
                    <View style={styles.dotBadge} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtnLight}>
                    <Ionicons name="settings-outline" size={18} color='#3B6EF5' />
                </TouchableOpacity>
            </View>
        </View>
    );

    // ---- Tabs (this drives which screen shows) ----
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

    // ---- Voucher ticket card (Active Rewards tab / image 2) ----
    const VoucherCard = ({ item }) => (
        <View style={styles.card}>
            <View style={styles.notch} pointerEvents="none">
                <View style={[styles.notchCircle, styles.notchLeft]} />
                <View style={[styles.notchCircle, styles.notchRight]} />
            </View>

            <View style={styles.cardTopRow}>
                <Text style={styles.cardLabel}>Voucher</Text>
                <Text style={styles.validText}>Valid Until {item.validUntil}</Text>
            </View>

            <View style={styles.dashedLine} />

            <View style={styles.cardBottomRow}>
                <View style={styles.iconCircle}>
                    <Ionicons name={item.icon} size={16} color='#3B6EF5' />
                </View>
                <View style={styles.cardTextWrap}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                </View>
                <TouchableOpacity style={styles.collectedBtn}>
                    <Text style={styles.collectedText}>Collected</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

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
                    key="active-list"
                    data={VOUCHERS}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <VoucherCard item={item} />}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
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
        alignItems: 'center'
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
        borderWidth: 1.5,
        borderColor: '#3B6EF5',
        borderStyle: 'dashed',
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
        borderStyle: 'dashed',
        borderColor: '#ddd',
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

