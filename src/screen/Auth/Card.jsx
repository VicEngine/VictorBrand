// import React, { useState, useRef } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   FlatList,
//   StyleSheet,
//   Dimensions,
//   useWindowDimensions,
// } from 'react-native';

// const { width: SCREEN_WIDTH } = Dimensions.get('window');

// // 1. Your onboarding data — one object per slide
// const slides = [
//   {
//     id: '1',
//     image: require('../assets/images/pro.png'),
//     title: 'Hello',
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non consectetur turpis. Morbi eu eleifend lacus.',
//   },
//   {
//     id: '2',
//     image: require('../assets/images/pro.png'),
//     title: 'Track Spending',
//     description: 'Some other description text goes here.',
//   },
//   // ...more slides
// ];

// export default function OnboardingScreen() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const flatListRef = useRef(null);

//   // 2. Detect which slide is currently centered as user swipes
//   const onScroll = (event) => {
//     const index = Math.round(
//       event.nativeEvent.contentOffset.x / SCREEN_WIDTH
//     );
//     setActiveIndex(index);
//   };

//   // 3. Render each slide (the card you see in the screenshot)
//   const renderItem = ({ item }) => (
//     <View style={[styles.slide, { width: SCREEN_WIDTH }]}>
//       <View style={styles.card}>
//         <Image source={item.image} style={styles.image} />
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.description}>{item.description}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Background blue blob, top-left, behind everything */}
//       <View style={styles.backgroundBlob} />

//       <FlatList
//         ref={flatListRef}
//         data={slides}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={onScroll}
//         scrollEventThrottle={16}
//       />

//       {/* 4. Pagination dots */}
//       <View style={styles.pagination}>
//         {slides.map((_, index) => (
//           <View
//             key={index}
//             style={[
//               styles.dot,
//               index === activeIndex && styles.activeDot,
//             ]}
//           />
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   backgroundBlob: {
//     position: 'absolute',
//     top: 0,
//     left: -50,
//     width: 200,
//     height: 200,
//     backgroundColor: '#1A3FE5',
//     borderBottomRightRadius: 150,
//   },
//   slide: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     width: '85%',
//     borderRadius: 28,
//     backgroundColor: '#fff',
//     overflow: 'hidden', // keeps image corners rounded with the card
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.1,
//     shadowRadius: 20,
//     elevation: 6, // Android shadow
//   },
//   image: {
//     width: '100%',
//     height: 320,
//     resizeMode: 'cover',
//   },
//   textContainer: {
//     paddingHorizontal: 24,
//     paddingVertical: 28,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     marginBottom: 14,
//   },
//   description: {
//     fontSize: 15,
//     textAlign: 'center',
//     color: '#444',
//     lineHeight: 22,
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 30,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#C7D2FE', // light inactive dot
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     width: 24,             // active dot is wider (pill shape)
//     backgroundColor: '#1A3FE5',
//   },
// });

import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Card}>
        <Image source={require('../../assets/images/bubble3.png')} />
      </View>
      <View style={styles.back}>
        <View style={styles.pro}>
          <Image source={require('../../assets/images/pro2.png')} style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }} />
          <Text style={styles.first}>
            Hello
          </Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet,{'\n'}
            consectectur adipiscing elit.{'\n'}Sed non consectetur  turpis.
            {'\n'}Morbi eu eleifend lacus.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  card: {


  },
  back: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 99,
    alignSelf: "center"

  },
  pro: {
    width: 326,
    height: 614,
    backgroundColor: "#FFFFFF",
    resizeMode: "cover",
    borderRadius: 50,
    alignItems: "center",
    gap: 30,
  },
  first: {
    fontSize: 28,
    fontWeight: "bold",
  },
  content: {
    fontSize: 19,
    fontWeight: "light"
  },



})