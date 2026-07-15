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



// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

// export default function App() {
//   // 1. Initialise your list of results in state
//   const [results, setResults] = useState([
//     { id: '1', text: 'Learn React Native' },
//     { id: '2', text: 'Build an awesome app' },
//     { id: '3', text: 'Deploy to App Store' },
//   ]);

//   // 2. The deletion function
//   const deleteItem = (idToDelete) => {
//     // Filter out the item that matches the id
//     const updatedResults = results.filter(item => item.id !== idToDelete);
//     // Update the state with the new array
//     setResults(updatedResults);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>My Results</Text>
      
//       <FlatList
//         data={results}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text>{item.text}</Text>
//             {/* 3. Pass the item's ID to the delete function on press */}
//             <TouchableOpacity 
//               style={styles.deleteButton} 
//               onPress={() => deleteItem(item.id)}
//             >
//               <Text style={styles.deleteText}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   item: { 
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     padding: 15, 
//     backgroundColor: '#f9f9f9', 
//     borderWidth: 1, 
//     borderColor: '#eee', 
//     borderRadius: 8, 
//     marginBottom: 10 
//   },
//   deleteButton: { backgroundColor: '#ff4d4d', padding: 8, borderRadius: 5 },
//   deleteText: { color: '#fff', fontWeight: 'bold' }
// });


// import React, { useState } from 'react';
// import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

// export default function WishlistScreen() {
//   // 1. Your initial wishlist items array
//   const [wishlistItems, setWishlistItems] = useState([
//     { id: '1', title: 'Lorem ipsum dolor...', price: '$17,00', image: 'url_to_pink_shirt' },
//     { id: '2', title: 'Lorem ipsum dolor...', price: '$12,00', image: 'url_to_sunglasses' },
//     { id: '3', title: 'Lorem ipsum dolor...', price: '$27,00', image: 'url_to_pink_dress' },
//     { id: '4', title: 'Lorem ipsum dolor...', price: '$19,00', image: 'url_to_yellow_bg' },
//   ]);

//   // Dummy data for "Recently Viewed" and "Most Popular" sections
//   const recentlyViewed = [/* ... */];
//   const mostPopular = [/* ... */];

//   // 2. Delete function
//   const deleteItem = (idToDelete) => {
//     setWishlistItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* HEADER */}
//       <Text style={styles.headerTitle}>Wishlist</Text>

//       {/* RECENTLY VIEWED (Stays visible on both screens) */}
//       <View style={styles.section}>
//         <Text style={styles.sectionTitle}>Recently viewed</Text>
//         {/* Horizontal avatar list code goes here */}
//       </View>

//       {/* 3. CONDITIONAL RENDERING: Checks if wishlist has items */}
//       {wishlistItems.length > 0 ? (
//         // --- SCREEN 1: Active Wishlist ---
//         <FlatList
//           data={wishlistItems}
//           scrollEnabled={false} // since it's nested in a ScrollView
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image source={{ uri: item.image }} style={styles.productImage} />
              
//               {/* Floating Delete Bin Button */}
//               <TouchableOpacity 
//                 style={styles.deleteButton} 
//                 onPress={() => deleteItem(item.id)}
//               >
//                 <Text style={styles.binIcon}>🗑️</Text> {/* Replace with your Vector Icon */}
//               </TouchableOpacity>

//               <View style={styles.details}>
//                 <Text>{item.title}</Text>
//                 <Text style={styles.price}>{item.price}</Text>
//               </View>
//             </View>
//           )}
//         />
//       ) : (
//         // --- SCREEN 2: Empty State Layout ---
//         <View style={styles.emptyStateContainer}>
//           <View style={styles.blueHeartCircle}>
//             {/* Blue Heart Icon with rays inside the circle */}
//             <Text style={styles.heartIcon}>💙</Text> 
//           </View>
          
//           {/* Most Popular Section at the bottom */}
//           <View style={styles.mostPopularSection}>
//             <View style={styles.row}>
//               <Text style={styles.sectionTitle}>Most Popular</Text>
//               <Text style={styles.seeAll}>See All →</Text>
//             </View>
//             {/* Horizontal FlatList for popular products */}
//           </View>
//         </View>
//       )}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', padding: 16 },
//   headerTitle: { fontSize: 28, fontWeight: 'bold' },
//   sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
//   card: { flexDirection: 'row', marginBottom: 15, position: 'relative' },
//   productImage: { width: 100, height: 100, borderRadius: 8 },
//   deleteButton: { position: 'absolute', left: 10, bottom: 10, backgroundColor: '#fff', borderRadius: 50, padding: 5 },
//   emptyStateContainer: { alignItems: 'center', marginTop: 40 },
//   blueHeartCircle: { width: 120, height: 120, borderRadius: 60, backgroundColor: '#f0f5ff', justifyContent: 'center', alignItems: 'center', marginBottom: 40 },
//   mostPopularSection: { width: '100%', marginTop: 20 },
//   row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
//   seeAll: { color: 'blue' }
// });