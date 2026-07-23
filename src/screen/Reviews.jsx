import { StyleSheet, Text, View,Image,FlatList, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
const Reviews = () => {
    const REVIEWS = [
  {
    id: '1',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
  },
  {
    id: '2',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
  },
  {
    id: '3',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
  },
  {
    id: '4',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum',
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let iconName = 'star-outline';
    if (rating >= i) {
      iconName = 'star';
    } else if (rating >= i - 0.5) {
      iconName = 'star-half';
    }
    stars.push(
      <Ionicons
        key={i}
        name={iconName}
        size={16}
        color="#F5A623"
        style={{ marginRight: 2 }}
      />
    );
  }
  return <View style={styles.starRow}>{stars}</View>;
};

const ReviewItem = ({ item }) => (
  <View style={styles.reviewItem}>
    <Image source={require('../assets/images/pro60.png')} style={styles.avatar} />
    <View style={styles.reviewContent}>
      <Text style={styles.name}>Veronika</Text>
      <StarRating rating={item.rating} />
      <Text style={styles.reviewText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</Text>
    </View>
  </View>
);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Reviews</Text>
      <FlatList
        data={REVIEWS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ReviewItem item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default Reviews

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 8,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  starRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  reviewText: {
    fontSize: 13,
    lineHeight: 19,
    color: '#666',
  },
})
