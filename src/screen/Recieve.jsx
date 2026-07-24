import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import Arrow from '../components/Arrow'
const Recieve = () => {
  const ORDERS_DATA = [
    {
      id: '1',
      orderNumber: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Packed',
      itemCount: 3,
      images: [
        require("../assets/images/pro74.png"),
        require("../assets/images/pro72.png"),
        require("../assets/images/pro67.png"),

      ],
    },

  ];
  const DATA = [
    {
      id: '1',
      orderNumber: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Shipped',
      itemCount: 4,
      images: [
        require("../assets/images/pro75.png"),
        require("../assets/images/pro68.png"),
        require("../assets/images/pro61.png"),
        require("../assets/images/pro70.png"),

      ],
    },

  ];
  const DATA1 = [
    {
      id: '1',
      orderNumber: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Delivered',
      itemCount: 2,
      images: [
        require("../assets/images/pro71.png"),
        require("../assets/images/pro63.png"),
      ],
    },

  ];

  const DATA2 = [
    {
      id: '1',
      orderNumber: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Shipped',
      itemCount: 4,
      images: [
        require("../assets/images/pro62.png"),
        require("../assets/images/pro68.png"),
        require("../assets/images/pro64.png"),
        require("../assets/images/pro73.png"),

      ],
    },

  ];

  const DATA3 = [
    {
      id: '1',
      orderNumber: '#92287157',
      deliveryType: 'Standard Delivery',
      status: 'Shipped',
      itemCount: 4,
      images:
        require("../assets/images/pro69.png"),

    },

  ];


  const OrderCard = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        {/* 1. Left Collage Grid */}
        <View style={styles.collageContainer}>
          <View style={{ padding: 10 }}>
            <View style={styles.topRow}>
              <Image source={item.images[0]} style={styles.topImage} />
              <Image source={item.images[1]} style={styles.topImage} />
            </View>
            <Image source={item.images[2]} style={styles.bottomImage} />
          </View>
        </View>


        {/* 2. Middle Details Column */}
        <View style={styles.detailsContainer}>
          <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
          <Text style={styles.deliveryType}>{item.deliveryType}</Text>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>

        {/* 3. Right Action Column */}
        <View style={styles.actionContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.itemCount} items</Text>
          </View>

          <TouchableOpacity style={styles.trackButton} activeOpacity={0.8}>
            <Text style={styles.trackButtonText}>Track</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const DataCard = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        {/* 1. Left Collage Grid */}
        <View style={styles.collageContainer}>
          <View style={{ padding: 10 }}>
            <View style={styles.topRow}>
              <Image source={item.images[0]} style={styles.topImage} />
              <Image source={item.images[1]} style={styles.topImage} />
            </View>

            <View style={styles.bottomRow}>
              <Image source={item.images[2]} style={styles.bottomImage1} />
              <Image source={item.images[3]} style={styles.bottomImage1} />
            </View>
          </View>
        </View>

        {/* 2. Middle Details Column */}
        <View style={styles.detailsContainer}>
          <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
          <Text style={styles.deliveryType}>{item.deliveryType}</Text>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>

        {/* 3. Right Action Column */}
        <View style={styles.actionContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.itemCount} items</Text>
          </View>

          <TouchableOpacity style={styles.trackButton} activeOpacity={0.8}>
            <Text style={styles.trackButtonText}>Track</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const DataCard1 = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        {/* 1. Left Collage Grid */}
        <View style={styles.collageContainer}>
          <View style={{ padding: 10 }}>
            <View style={styles.topRow1}>
              <Image source={item.images[0]} style={styles.topImage1} />
              <Image source={item.images[1]} style={styles.topImage1} />
            </View>


          </View>
        </View>

        {/* 2. Middle Details Column */}
        <View style={styles.detailsContainer}>
          <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
          <Text style={styles.deliveryType}>{item.deliveryType}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 2 }}>
            <Text style={styles.statusText}>{item.status}</Text>
            <Image source={require('../assets/images/Check1.png')} />
          </View>
        </View>

        {/* 3. Right Action Column */}
        <View style={styles.actionContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.itemCount} items</Text>
          </View>

          <TouchableOpacity style={styles.trackButton1} activeOpacity={0.8}>
            <Text style={styles.trackButtonText1}>Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const DataCard2 = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        {/* 1. Left Collage Grid */}
        <View style={styles.collageContainer}>
          <View style={{ padding: 10 }}>
            <View style={styles.topRow}>
              <Image source={item.images[0]} style={styles.topImage} />
              <Image source={item.images[1]} style={styles.topImage} />
            </View>

            <View style={styles.bottomRow}>
              <Image source={item.images[2]} style={styles.bottomImage1} />
              <Image source={item.images[3]} style={styles.bottomImage1} />
            </View>


          </View>
        </View>

        {/* 2. Middle Details Column */}
        <View style={styles.detailsContainer}>
          <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
          <Text style={styles.deliveryType}>{item.deliveryType}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 2 }}>
            <Text style={styles.statusText}>{item.status}</Text>
            <Image source={require('../assets/images/Check1.png')} />
          </View>
        </View>

        {/* 3. Right Action Column */}
        <View style={styles.actionContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.itemCount} items</Text>
          </View>

          <TouchableOpacity style={styles.trackButton1} activeOpacity={0.8}>
            <Text style={styles.trackButtonText1}>Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const DataCard3 = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        {/* 1. Left Collage Grid */}
        <View style={styles.collageContainer}>
          <View style={{ padding: 10 }}>

            <Image source={item.images} style={{ height: 100, transform: [{ scaleY: 1 }] }} />




          </View>
        </View>

        {/* 2. Middle Details Column */}
        <View style={styles.detailsContainer}>
          <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
          <Text style={styles.deliveryType}>{item.deliveryType}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 2 }}>
            <Text style={styles.statusText}>{item.status}</Text>
            <Image source={require('../assets/images/Check1.png')} />
          </View>
        </View>

        {/* 3. Right Action Column */}
        <View style={styles.actionContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.itemCount} items</Text>
          </View>

          <TouchableOpacity style={styles.trackButton1} activeOpacity={0.8}>
            <Text style={styles.trackButtonText1}>Review</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.userInfo}>

            <View style={styles.pro}>
              <Image
                source={require('../assets/images/pro58.png')}
                style={styles.avatar}
              />
            </View>

            <View>
              <Text style={styles.headerTitle}>To Receive</Text>
              <Text style={styles.headerSubtitle}>My Orders</Text>
            </View>
          </View>

          <View style={styles.headerActions}>
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
        <View style={styles.screen}>
          <FlatList
            data={ORDERS_DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <OrderCard item={item} />}
            contentContainerStyle={styles.listPadding}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.screen}>
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DataCard item={item} />}
            contentContainerStyle={styles.listPadding}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.screen}>
          <FlatList
            data={DATA1}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DataCard1 item={item} />}
            contentContainerStyle={styles.listPadding}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.screen}>
          <FlatList
            data={DATA2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DataCard2 item={item} />}
            contentContainerStyle={styles.listPadding}
            scrollEnabled={false}
          />
        </View>

        <View style={styles.screen}>
          <FlatList
            data={DATA3}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <DataCard3 item={item} />}
            contentContainerStyle={styles.listPadding}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );

}

export default Recieve

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pro: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#ffff",
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.2
  },
  avatar: {
    borderRadius: 24,
  },
  headerTitle: {
    fontFamily: 'Raleway',
    fontSize: 21,
    fontWeight: 'bold',
    color: '#202020',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#202020',
    fontFamily: 'Raleway',
    marginTop: 2,
    fontWeight: 'medium'
  },
  headerActions: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center'
  },

  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    shadowOpacity: 0.3,
    elevation: 5,
    marginTop: 20,
    width: "100%",
    height: 135,
    shadowOffset: 0.5,
  },

  collageContainer: {
    width: 100,
    height: 120,
    backgroundColor: '#FFFFFF',
    shadowOpacity: 0.3,
    elevation: 3,
    borderRadius: 15


  },
  collageContainer1: {
    width: 100,
    height: 90,
    borderRadius: 12,
    backgroundColor: '#F0F0F0',
  },
  topRow: {
    flexDirection: "row",
    height: 50,
    marginBottom: 2
  },
  topRow1: {
    flexDirection: "row",
    height: 50,
    marginBottom: 2
  },
  bottomRow: {
    flexDirection: 'row',
    height: 48,

  },
  topImage: {

    height: '100%',
    marginRight: 2,
    borderRadius: 4,
  },
  topImage1: {
    height: 100,
    marginRight: 2,
    borderRadius: 2,
  },
  bottomImage: {
    height: 50,
    borderRadius: 4,
  },
  bottomImage1: {
    flex: 1,
    height: '100%',
    marginRight: 2,
    borderRadius: 4,
  },

  /* --- Order Info Styles --- */
  detailsContainer: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },
  orderNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#202020',
    fontFamily: 'Raleway'
  },
  deliveryType: {
    fontSize: 14,
    color: '#202020',
    marginTop: 2,
    fontFamily: 'Raleway'
  },
  statusText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#202020',
    fontFamily: 'Raleway'
  },

  /* --- Action Button Styles --- */
  actionContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 80,
  },
  badge: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 13,
    color: '#000000',
    fontWeight: 'medium',
    fontFamily: 'Raleway'
  },
  trackButton: {
    backgroundColor: '#004CFF', // Blue highlight color
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
  },
  trackButton1: {
    borderColor: '#004CFF', // Blue highlight color
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
  },
  trackButtonText: {
    color: '#FFFFFF',
    fontWeight: 'medium',
    fontSize: 16,
    fontFamily: 'Raleway'
  },
  trackButtonText1: {
    color: '#004CFF',
    fontWeight: 'medium',
    fontSize: 16,
    fontFamily: 'Raleway'
  },

})


