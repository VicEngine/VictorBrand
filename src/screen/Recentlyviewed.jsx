
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Modal,
   ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BLUE = '#3B6EF5';


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

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

// Days in each month (index 0 = January), non-leap year default for Feb
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ---- Header ----


// ---- Filter row: "Today" pill + date pill with chevron ----
const FilterRow = ({ monthIndex, selectedDay, onOpenCalendar }) => (
    <View style={styles.filterRow}>
        <TouchableOpacity style={styles.todayPill}>
            <Text style={styles.todayText}>Today</Text>
        </TouchableOpacity>

        <View style={styles.datePill}>
            <Text style={styles.dateText}>
                {MONTHS[monthIndex]}, {selectedDay}
            </Text>
            <Ionicons name="checkmark-circle" size={18} color={BLUE} style={{ marginRight: 6 }} />
        </View>
            <TouchableOpacity onPress={onOpenCalendar} style={styles.chevronBtn}>
                <Ionicons name="chevron-down" size={16} color={"#fff"} />
            </TouchableOpacity>
    </View>
);

// ---- Product grid card ----
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

// ---- Calendar modal ----
const CalendarModal = ({
    visible,
    onClose,
    monthIndex,
    onChangeMonth,
    selectedDay,
    onSelectDay,
}) => {
    const totalDays = DAYS_IN_MONTH[monthIndex];
    const dayNumbers = Array.from({ length: totalDays }, (_, i) => i + 1);

    const goPrevMonth = () => onChangeMonth((monthIndex + 11) % 12);
    const goNextMonth = () => onChangeMonth((monthIndex + 1) % 12);

    return (
        <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
            {/* Backdrop closes the modal when tapped */}
            <TouchableOpacity style={styles.backdrop} activeOpacity={1} onPress={onClose}>
                {/* stopPropagation-style: wrap the card so taps inside don't close it */}
                <TouchableOpacity activeOpacity={1} style={styles.calendarCard}>
                    <View style={styles.monthRow}>
                        <TouchableOpacity onPress={goPrevMonth} style={styles.monthArrowBtn}>
                            <Ionicons name="chevron-back" size={18} color='#3B6EF5' />
                        </TouchableOpacity>
                        <View style={styles.monthPill}>
                            <Text style={styles.monthPillText}>{MONTHS[monthIndex]}</Text>
                        </View>
                        <TouchableOpacity onPress={goNextMonth} style={styles.monthArrowBtn}>
                            <Ionicons name="chevron-forward" size={18} color='#3B6EF5' />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.dayGrid}>
                        {dayNumbers.map((day) => {
                            const isSelected = day === selectedDay;
                            return (
                                <TouchableOpacity
                                    key={day}
                                    style={[styles.dayCell, isSelected && styles.dayCellSelected]}
                                    onPress={() => onSelectDay(day)}
                                >
                                    <Text style={[styles.dayText, isSelected && styles.dayTextSelected]}>
                                        {String(day).padStart(2, '0')}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <TouchableOpacity style={styles.closeChevron} onPress={onClose}>
                        <Ionicons name="chevron-up" size={18} color='#3B6EF5' />
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

// ---- Main screen ----
export default function Recentlyviewed() {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [monthIndex, setMonthIndex] = useState(3); // 3 = April
    const [selectedDay, setSelectedDay] = useState(18);

    const handleSelectDay = (day) => {
        setSelectedDay(day);
        setCalendarVisible(false); // close after picking, remove this line to keep it open
    };

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
           <Text style={{ fontSize: 21, color: "#202020", fontWeight: "bold",fontFamily:'Raleway' }}>
                                  Recently Viewed
                              </Text>
            <FilterRow
                monthIndex={monthIndex}
                selectedDay={selectedDay}
                onOpenCalendar={() => setCalendarVisible(true)}
            />

            <FlatList
                data={ForYou}
                renderItem={foryou}
                keyExtractor={(item) => item.id}
                scrollEnabled={false}
                numColumns={2}
                columnWrapperStyle={styles.rowtop}
                contentContainerStyle={styles.listContent}

            />

            <CalendarModal
                visible={calendarVisible}
                onClose={() => setCalendarVisible(false)}
                monthIndex={monthIndex}
                onChangeMonth={setMonthIndex}
                selectedDay={selectedDay}
                onSelectDay={handleSelectDay}
            />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },


   

    // Filter row
    filterRow: {
         flexDirection: 'row', 
         alignItems: 'center',
          marginTop:20, 
          gap:20
        },
    todayPill: {
        backgroundColor: '#F9F9F9',
        width:"30%",
        height:30,
        borderRadius: 20,
        alignItems:"center",
        justifyContent:"center"
    },
    todayText: { fontSize: 13, fontWeight: '600', color: '#555' },
    datePill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5EBFC',
       width:"30%",
       height:30,
       borderRadius:20,
       gap:10,
       justifyContent:'center'
    },
    dateText: { fontSize: 13, fontWeight: '600', color: '#3B6EF5' },
    chevronBtn: { 
        marginLeft: 6,
        backgroundColor:"#004BFE",
        borderRadius:15,
        width:30,
        height:30,
        alignItems:"center",
        justifyContent:"center"
     },

    // Product grid
    just: {
        flex: 1,
        width: "100%",
        backgroundColor: "#FFF",
        height: "8.5%",
        padding: 7,
        borderRadius: 15,
        elevation:2,
        shadowOpacity:0.2
    },
    protitle: {
        fontSize: 12,
        fontWeight: "regular",
        fontFamily: 'Nunito Sans'
    },
    proprice: {
        fontSize: 17,
        fontWeight: "bold",
        fontFamily: 'Raleway',
        marginTop: 8
    },
    listContent: {
        paddingTop: 20,
    },
    rowtop: {
        gap: 20,
        marginBottom: 15,
    },
    // Calendar modal
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'flex-start',
    },
    calendarCard: {
        marginTop: 90,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingTop: 16,
        paddingBottom: 8,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },
    monthRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 14,
    },
    monthArrowBtn: { padding: 6 },
    monthPill: {
        backgroundColor: '#eef1fb',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 14,
        marginHorizontal: 10,
    },
    monthPillText: { fontSize: 14, fontWeight: '700', color: '#1a1a1a' },

    dayGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    dayCell: {
        width: '14.28%', // 7 per row
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 6,
    },
    dayCellSelected: {
        backgroundColor: '#3B6EF5',
        borderRadius: 100,
    },
    dayText: { fontSize: 13, color: '#333' },
    dayTextSelected: { color: '#fff', fontWeight: '700' },

    closeChevron: {
        alignSelf: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#eef1fb',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 6,
    },
});