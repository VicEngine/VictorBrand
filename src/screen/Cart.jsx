// import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
// import React from 'react';
// import { SafeAreaProvider, SafeAreaView, } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

// const Cart = () => {
//     const navigation = useNavigation();
//     const DataItem = [
//         {
//             id: '1',
//             image: require('../assets/images/pro15.png'),
//             title: 'New'
//         },
//         {
//             id: '2',
//             image: require('../assets/images/pro14.png'),
//             title: 'Sale'
//         },
//         {
//             id: '3',
//             image: require('../assets/images/pro12.png'),
//             title: 'Hot'
//         },
//         {
//             id: '4',
//             image: require('../assets/images/pro13.png'),
//             title: 'New'
//         },
//     ]
//     const See = ({ item }) => (
//         <View style={styles.allcontainer}>
//             <TouchableOpacity activeOpacity={0.9} style={styles.suball}>
//                 <Image source={item.image} />
//             </TouchableOpacity>
//             <View style={styles.allcontainertext}>
//                 <View style={styles.allsubtext}>
//                     <Text style={styles.alltext}>
//                         1780
//                     </Text>
//                     <Image source={require('../assets/icons/heart1.png')} />
//                 </View>
//                 <View>
//                     <Text style={styles.allnewtext}>
//                         {item.title}
//                     </Text>
//                 </View>
//             </View>
//         </View>
//     )
//     return (
//         <SafeAreaProvider>
//             <SafeAreaView style={styles.container}>
//                 <View style={styles.subcontainer}>
//                     <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
//                         <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
//                             Cart
//                         </Text>
//                         <View style={{ backgroundColor: "#E5EBFC", width: 30, height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
//                             <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
//                                 0
//                             </Text>
//                         </View>
//                     </View>

//                     <View style={{ width: "100%", height: 80, marginTop: 15, backgroundColor: "#F9F9F9", borderRadius: 15, padding: 10, }}>
//                         <Text style={{ fontSize: 14, fontWeight: "bold", color: "#000000" }}>
//                             Shipping Address
//                         </Text>
//                         <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
//                             <Text style={{ fontSize: 10, fontWeight: "regular", color: "#000000", marginTop: 8, }}>
//                                 26, Duong So 2, Thao Dien Ward, An Phu, District 2,{'\n'}Ho Chi Minh city
//                             </Text>
//                             <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#004BFE", alignItems: "center", justifyContent: "center" }}>
//                                 <Image source={require('../assets/icons/pen.png')} />
//                             </TouchableOpacity>
//                         </View>
//                     </View>

//                     <TouchableOpacity activeOpacity={0.5} style={styles.containerEmptycart}>
//                         <View style={styles.Emptycart}>
//                             <Image source={require('../assets/icons/cartbag.png')} />
//                         </View>
//                     </TouchableOpacity>

//                     <View style={{ marginTop: 30 }}>
//                         <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center", }}>
//                             <Text style={{ fontSize: 18, fontWeight: "bold" }}>Most Popular</Text>
//                             <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
//                                 <Text style={styles.see}>
//                                     See All
//                                 </Text>
//                                 <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
//                                     <Image source={require('../assets/images/Arrow.png')} />
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                         <FlatList
//                             data={DataItem}
//                             renderItem={See}
//                             horizontal
//                             keyExtractor={(item) => item.id}
//                             showsHorizontalScrollIndicator={false}
//                         />
//                     </View>

//                 </View>
//                 <View style={{ flex: 1, justifyContent: "flex-end" }}>
//                     <View style={{ width: "100%", height: 60, backgroundColor: "#F9F9F9", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
//                         <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
//                             <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000000" }}>
//                                 Total
//                             </Text>
//                             <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000000" }}>
//                                 $0,00
//                             </Text>
//                         </View>
//                         <TouchableOpacity onPress={() => navigation.navigate('Payment') }  style={{ backgroundColor: "#FFFFFF", paddingVertical: 10, paddingHorizontal: 18, borderRadius: 10 }}>
//                             <Text style={{ fontSize: 16, fontWeight: "regular" }}>
//                                 Checkout
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </SafeAreaView>
//         </SafeAreaProvider>
//     )
// }

// export default Cart

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#F2F2F2",
//         flex: 1,

//     },
//     subcontainer: {
//         padding: 20,
//     },
//     containerEmptycart: {
//         marginVertical: 90,
//         alignItems: "center",
//     },
//     Emptycart: {
//         width: 150,
//         height: 150,
//         backgroundColor: "#FFFFFF",
//         borderRadius: 75,
//         alignItems: "center",
//         justifyContent: "center",
//         shadowOpacity: 0.2
//     },
//     see: {
//         fontSize: 15,
//         fontWeight: "bold",
//     },
//     allcontainer: {
//         width: 104,
//         height: 140,
//         backgroundColor: "#FFFF",
//         marginTop: 15,
//         borderRadius: 10,
//         marginLeft: 10
//     },
//     suball: {
//         alignItems: "center",
//     },
//     allcontainertext: {
//         flexDirection: "row",
//         alignItems: "center",
//         marginLeft: 5,
//         marginTop: 5,
//         justifyContent: "space-between"

//     },
//     allsubtext: {
//         flexDirection: "row",
//         alignItems: "center",
//         gap: 3
//     },
//     alltext: {
//         fontSize: 15,
//         fontWeight: "bold",
//         fontFamily: 'Raleway',
//         color: "#000000"
//     },
//     allnewtext: {
//         fontSize: 13,
//         fontWeight: 'medium',
//         marginRight: 5
//     },

// })




import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BLUE = '#3B6EF5';

// ---- Sample data — swap with your API data ----
const PRODUCTS = [
  { id: 'p1', name: 'Lorem ipsum dolor sit amet consectetur.', price: 17.0, image: 'https://picsum.photos/id/64/300/400' },
  { id: 'p2', name: 'Lorem ipsum dolor sit amet consectetur.', price: 17.0, image: 'https://picsum.photos/id/91/300/400' },
  { id: 'p3', name: 'Lorem ipsum dolor sit amet consectetur.', price: 17.0, image: 'https://picsum.photos/id/103/300/400' },
  { id: 'p4', name: 'Lorem ipsum dolor sit amet consectetur.', price: 17.0, image: 'https://picsum.photos/id/119/300/400' },
  { id: 'p5', name: 'Lorem ipsum dolor sit amet consectetur.', price: 17.0, image: 'https://picsum.photos/id/177/300/400' },
  { id: 'p6', name: 'Lorem ipsum dolor sit amet consectetur.', price: 17.0, image: 'https://picsum.photos/id/188/300/400' },
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Days in each month (index 0 = January), non-leap year default for Feb
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// ---- Header ----
const Header = () => (
  <Text style={styles.header}>Recently viewed</Text>
);

// ---- Filter row: "Today" pill + date pill with chevron ----
const FilterRow = ({ monthIndex, selectedDay, onOpenCalendar }) => (
  <View style={styles.filterRow}>
    <TouchableOpacity style={styles.todayPill}>
      <Text style={styles.todayText}>Today</Text>
    </TouchableOpacity>

    <View style={styles.datePill}>
      <Ionicons name="checkmark-circle" size={18} color={BLUE} style={{ marginRight: 6 }} />
      <Text style={styles.dateText}>
        {MONTHS[monthIndex]}, {selectedDay}
      </Text>
      <TouchableOpacity onPress={onOpenCalendar} style={styles.chevronBtn}>
        <Ionicons name="chevron-down" size={16} color={BLUE} />
      </TouchableOpacity>
    </View>
  </View>
);

// ---- Product grid card ----
const ProductCard = ({ item }) => (
  <View style={styles.productCard}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
    <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
  </View>
);

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
              <Ionicons name="chevron-back" size={18} color='#3B6EF5'/>
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
export default function RecentlyViewedScreen() {
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [monthIndex, setMonthIndex] = useState(3); // 3 = April
  const [selectedDay, setSelectedDay] = useState(18);

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setCalendarVisible(false); // close after picking, remove this line to keep it open
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FilterRow
        monthIndex={monthIndex}
        selectedDay={selectedDay}
        onOpenCalendar={() => setCalendarVisible(true)}
      />

      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard item={item} />}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

      <CalendarModal
        visible={calendarVisible}
        onClose={() => setCalendarVisible(false)}
        monthIndex={monthIndex}
        onChangeMonth={setMonthIndex}
        selectedDay={selectedDay}
        onSelectDay={handleSelectDay}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  listContent: { paddingBottom: 24 },

  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 8,
    marginBottom: 14,
  },

  // Filter row
  filterRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  todayPill: {
    backgroundColor: '#f2f2f5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 18,
    marginRight: 10,
  },
  todayText: { fontSize: 13, fontWeight: '600', color: '#555' },
  datePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfe6fc',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 18,
  },
  dateText: { fontSize: 13, fontWeight: '600', color: '#3B6EF5'},
  chevronBtn: { marginLeft: 6 },

  // Product grid
  gridRow: { justifyContent: 'space-between' },
  productCard: { width: '48%', marginBottom: 20 },
  productImage: { width: '100%', height: 150, borderRadius: 14, marginBottom: 8 },
  productName: { fontSize: 12, color: '#333', marginBottom: 4 },
  productPrice: { fontSize: 14, fontWeight: '700', color: '#1a1a1a' },

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