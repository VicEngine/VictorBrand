import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Arrow from '../components/Arrow'
import { useNavigation } from '@react-navigation/native'
const Wishlist = () => {
    const navigation = useNavigation()
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
        <View style={{ paddingHorizontal:3,marginTop:15 }}>
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

            <Text style={{ fontSize: 28, color: "#202020", fontWeight: "bold",fontFamily:'Raleway' }}>
                Wishlist
            </Text>
            <View style={{ marginTop:10 }}>
                <View style={{
                    flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                    paddingRight: 16, 
                }}>
                    <Text style={{ fontSize: 21, color: "#202020", fontWeight: "bold",fontFamily:'Raleway' }}>
                        Recently Viewed
                    </Text>
                  <Arrow onPress={()=>navigation.navigate('Recentlyviewed')}/>
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
            <View style={{flex:1,justifyContent:"flex-end"}}>
                <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center",}}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Most Popular</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <Text style={styles.see}>
                            See All
                        </Text>
                       <Arrow/>
                    </View>
                </View>
<View>
                <FlatList
                    data={DataItem}
                    renderItem={See}
                    horizontal
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                />
              </View>
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
// import {
//   SafeAreaView,
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   StyleSheet,
// } from 'react-native';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

// // ==========================================
// // 1. MOCK DATA
// // ==========================================
// const RECENTLY_VIEWED = [
//   { id: 'r1', image: 'https://i.pravatar.cc/150?img=11' },
//   { id: 'r2', image: 'https://i.pravatar.cc/150?img=12' },
//   { id: 'r3', image: 'https://i.pravatar.cc/150?img=13' },
//   { id: 'r4', image: 'https://i.pravatar.cc/150?img=14' },
//   { id: 'r5', image: 'https://i.pravatar.cc/150?img=15' },
// ];

// const MOST_POPULAR = [
//   {
//     id: 'p1',
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     price: 17.0,
//     salePrice: null,
//     tag: 'New',
//     likes: 1780,
//     image: 'https://picsum.photos/id/64/300/400',
//     colors: ['Pink', 'M'],
//   },
//   {
//     id: 'p2',
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     price: 17.0,
//     salePrice: 12.0,
//     tag: 'Sale',
//     likes: 1780,
//     image: 'https://picsum.photos/id/91/300/400',
//     colors: ['Pink', 'M'],
//   },
//   {
//     id: 'p3',
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     price: 27.0,
//     salePrice: null,
//     tag: 'Hot',
//     likes: 1780,
//     image: 'https://picsum.photos/id/103/300/400',
//     colors: ['Pink', 'M'],
//   },
//   {
//     id: 'p4',
//     name: 'Lorem ipsum dolor sit amet consectetur.',
//     price: 19.0,
//     salePrice: null,
//     tag: 'New',
//     likes: 1780,
//     image: 'https://picsum.photos/id/119/300/400',
//     colors: ['Pink', 'M'],
//   },
// ];

// // ==========================================
// // 2. SUB-COMPONENTS
// // ==========================================

// /**
//  * Top Header: Title + Recently Viewed Horizontal List
//  */
// const HeaderSection = () => (
//   <View style={styles.headerContainer}>
//     <Text style={styles.headerTitle}>Wishlist</Text>
    
//     <View style={styles.sectionRow}>
//       <Text style={styles.sectionLabel}>Recently viewed</Text>
//       <TouchableOpacity 
//         style={styles.arrowBtn}
//         hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//       >
//         <Ionicons name="arrow-forward" size={18} color="#fff" />
//       </TouchableOpacity>
//     </View>

//     <FlatList
//       data={RECENTLY_VIEWED}
//       horizontal
//       keyExtractor={(item) => item.id}
//       showsHorizontalScrollIndicator={false}
//       renderItem={({ item }) => (
//         <Image source={{ uri: item.image }} style={styles.recentAvatar} />
//       )}
//     />
//   </View>
// );

// /**
//  * Empty Wishlist View: Heart Icon + Most Popular Section
//  * Rendered automatically by FlatList when `wishlist` array is empty.
//  */
// const EmptyWishlistState = ({ onAddProduct }) => (
//   <View style={styles.emptyContainer}>
//     {/* Sunburst Heart Illustration */}
//     <View style={styles.emptyCircleWrap}>
//       <View style={styles.emptyCircle}>
//         <Ionicons name="heart-outline" size={40} color="#3B6EF5" />
//       </View>
//     </View>

//     {/* Section Header */}
//     <View style={styles.sectionRow}>
//       <Text style={styles.sectionTitle}>Most Popular</Text>
//       <TouchableOpacity style={styles.seeAllRow}>
//         <Text style={styles.seeAllText}>See All</Text>
//         <View style={styles.arrowBtnSmall}>
//           <Ionicons name="arrow-forward" size={14} color="#fff" />
//         </View>
//       </TouchableOpacity>
//     </View>

//     {/* Horizontal Most Popular Grid */}
//     <FlatList
//       data={MOST_POPULAR}
//       horizontal
//       keyExtractor={(item) => item.id}
//       showsHorizontalScrollIndicator={false}
//       renderItem={({ item }) => (
//         <View style={styles.popularCard}>
//           <Image source={{ uri: item.image }} style={styles.popularImage} />
          
//           <View style={styles.popularTag}>
//             <Text style={styles.popularTagText}>{item.tag}</Text>
//           </View>

//           <TouchableOpacity
//             style={styles.heartBtn}
//             onPress={() => onAddProduct(item)}
//             activeOpacity={0.7}
//           >
//             <Ionicons name="heart-outline" size={16} color="#3B6EF5" />
//             <Text style={styles.likesText}>{item.likes}</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     />
//   </View>
// );

// /**
//  * Populated Wishlist Item Row
//  */
// const WishlistItemRow = ({ item, onRemoveProduct }) => (
//   <View style={styles.wishItem}>
//     {/* Image + Trash Badge */}
//     <View style={styles.wishImageWrap}>
//       <Image source={{ uri: item.image }} style={styles.wishImage} />
//       <TouchableOpacity
//         style={styles.trashBtn}
//         onPress={() => onRemoveProduct(item.id)}
//         hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//       >
//         <Ionicons name="trash-outline" size={16} color="#fff" />
//       </TouchableOpacity>
//     </View>

//     {/* Product Info */}
//     <View style={styles.wishContent}>
//       <Text style={styles.wishName} numberOfLines={2}>{item.name}</Text>

//       {/* Pricing */}
//       <View style={styles.priceRow}>
//         {item.salePrice ? (
//           <>
//             <Text style={styles.oldPrice}>${item.price.toFixed(2)}</Text>
//             <Text style={styles.price}>${item.salePrice.toFixed(2)}</Text>
//           </>
//         ) : (
//           <Text style={styles.price}>${item.price.toFixed(2)}</Text>
//         )}
//       </View>

//       {/* Color/Size Pills */}
//       <View style={styles.tagRow}>
//         {item.colors.map((color, index) => (
//           <View key={`${color}-${index}`} style={styles.tagPill}>
//             <Text style={styles.tagPillText}>{color}</Text>
//           </View>
//         ))}
//       </View>
//     </View>

//     {/* Add to Cart Action */}
//     <TouchableOpacity 
//       style={styles.cartBtn}
//       hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
//     >
//       <MaterialCommunityIcons name="cart-outline" size={20} color="#3B6EF5" />
//     </TouchableOpacity>
//   </View>
// );

// // ==========================================
// // 3. MAIN SCREEN
// // ==========================================
// export default function WishlistScreen() {
//   const [wishlist, setWishlist] = useState([]);

//   // Handler: Add item without duplicates
//   const handleAddToWishlist = (product) => {
//     setWishlist((prev) => {
//       const exists = prev.some((p) => p.id === product.id);
//       return exists ? prev : [...prev, product];
//     });
//   };

//   // Handler: Remove item by ID
//   const handleRemoveFromWishlist = (id) => {
//     setWishlist((prev) => prev.filter((p) => p.id !== id));
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={wishlist}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <WishlistItemRow 
//             item={item} 
//             onRemoveProduct={handleRemoveFromWishlist} 
//           />
//         )}
//         ListHeaderComponent={<HeaderSection />}
//         ListEmptyComponent={
//           <EmptyWishlistState onAddProduct={handleAddToWishlist} />
//         }
//         contentContainerStyle={styles.listContent}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// }

// // ==========================================
// // 4. STYLESHEET
// // ==========================================
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   listContent: {
//     paddingHorizontal: 16,
//     paddingBottom: 24,
//   },

//   // Header Styles
//   headerContainer: {
//     marginBottom: 16,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: '700',
//     color: '#1a1a1a',
//     marginTop: 8,
//     marginBottom: 16,
//   },
//   sectionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   sectionLabel: {
//     fontSize: 15,
//     fontWeight: '600',
//     color: '#1a1a1a',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#1a1a1a',
//   },
//   recentAvatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 12,
//   },

//   // Buttons & Badges
//   arrowBtn: {
//     width: 28,
//     height: 28,
//     borderRadius: 14,
//     backgroundColor: '#3B6EF5',
//     alignItems: 'center',
//     justify: 'center',
//   },
//   arrowBtnSmall: {
//     width: 20,
//     height: 20,
//     borderRadius: 10,
//     backgroundColor: '#3B6EF5',
//     alignItems: 'center',
//     justify: 'center',
//     marginLeft: 6,
//   },
//   seeAllRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   seeAllText: {
//     color: '#3B6EF5',
//     fontWeight: '600',
//     fontSize: 13,
//   },

//   // Empty State Styles
//   emptyContainer: {
//     marginTop: 8,
//   },
//   emptyCircleWrap: {
//     alignItems: 'center',
//     justify: 'center',
//     paddingVertical: 28,
//   },
//   emptyCircle: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justify: 'center',
//     shadowColor: '#3B6EF5',
//     shadowOpacity: 0.15,
//     shadowRadius: 12,
//     shadowOffset: { width: 0, height: 4 },
//     elevation: 4,
//   },

//   // Popular Cards (Empty State Carousel)
//   popularCard: {
//     width: 110,
//     marginRight: 12,
//     borderRadius: 14,
//     overflow: 'hidden',
//     backgroundColor: '#f5f5f5',
//   },
//   popularImage: {
//     width: '100%',
//     height: 150,
//   },
//   popularTag: {
//     position: 'absolute',
//     top: 8,
//     left: 8,
//     backgroundColor: '#3B6EF5',
//     paddingHorizontal: 6,
//     paddingVertical: 2,
//     borderRadius: 6,
//   },
//   popularTagText: {
//     color: '#fff',
//     fontSize: 10,
//     fontWeight: '600',
//   },
//   heartBtn: {
//     position: 'absolute',
//     bottom: 8,
//     left: 8,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     paddingHorizontal: 6,
//     paddingVertical: 3,
//     borderRadius: 10,
//   },
//   likesText: {
//     fontSize: 10,
//     color: '#333',
//     marginLeft: 3,
//   },

//   // Populated Wishlist Items
//   wishItem: {
//     flexDirection: 'row',
//     marginBottom: 18,
//     alignItems: 'center',
//   },
//   wishImageWrap: {
//     position: 'relative',
//   },
//   wishImage: {
//     width: 70,
//     height: 90,
//     borderRadius: 12,
//   },
//   trashBtn: {
//     position: 'absolute',
//     top: -6,
//     left: -6,
//     width: 26,
//     height: 26,
//     borderRadius: 13,
//     backgroundColor: '#FF5A5F',
//     alignItems: 'center',
//     justify: 'center',
//   },
//   wishContent: {
//     flex: 1,
//     marginLeft: 14,
//   },
//   wishName: {
//     fontSize: 13,
//     color: '#333',
//     marginBottom: 6,
//   },
//   priceRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 6,
//   },
//   oldPrice: {
//     fontSize: 13,
//     color: '#f28b82',
//     textDecorationLine: 'line-through',
//     marginRight: 8,
//   },
//   price: {
//     fontSize: 15,
//     fontWeight: '700',
//     color: '#1a1a1a',
//   },
//   tagRow: {
//     flexDirection: 'row',
//   },
//   tagPill: {
//     backgroundColor: '#eef1fb',
//     paddingHorizontal: 10,
//     paddingVertical: 3,
//     borderRadius: 8,
//     marginRight: 6,
//   },
//   tagPillText: {
//     fontSize: 11,
//     color: '#333',
//   },
//   cartBtn: {
//     width: 32,
//     height: 32,
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: '#3B6EF5',
//     alignItems: 'center',
//     justify: 'center',
//   },
// });