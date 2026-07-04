import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider, } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const navigation = useNavigation();
  const categories = [
    {
      id: "1",
      title: "Clothing",
      count: 109,
      images: [
        require("../assets/images/pro29.png"),
        require("../assets/images/pro30.png"),
        require("../assets/images/pro31.png"),
        require("../assets/images/pro32.png"),

      ],
    },
    {
      id: "2",
      title: "Shoes",
      count: 530,
      images: [
        require("../assets/images/pro25.png"),
        require("../assets/images/pro26.png"),
        require("../assets/images/pro27.png"),
        require("../assets/images/pro28.png"),
      ],
    },
    {
      id: "3",
      title: "Bags",
      count: 87,
      images: [
        require("../assets/images/pro21.png"),
        require("../assets/images/pro22.png"),
        require("../assets/images/pro23.png"),
        require("../assets/images/pro24.png"),
      ],
    },
    {
      id: "4",
      title: "Lingerie",
      count: 218,
      images: [
        require("../assets/images/pro17.png"),
        require("../assets/images/pro18.png"),
        require("../assets/images/pro19.png"),
        require("../assets/images/pro20.png"),
      ],
    },
    {
      id: "5",
      title: "Watch",
      count: 218,
      images: [
        require("../assets/images/pro43.png"),
        require("../assets/images/pro44.png"),
        require("../assets/images/pro45.png"),
        require("../assets/images/pro46.png"),
      ],
    },
    {
      id: "6",
      title: "Hoodies",
      count: 218,
      images: [
        require("../assets/images/pro39.png"),
        require("../assets/images/pro40.png"),
        require("../assets/images/pro41.png"),
        require("../assets/images/pro42.png"),
      ],
    },
  ];

  const Product = [
    {
      id: '1',
      image: require('../assets/images/pic11.png')
    },
    {
      id: '2',
      image: require('../assets/images/pic10.png')
    },
    {
      id: '3',
      image: require('../assets/images/pic9.png')
    },
    {
      id: '4',
      image: require('../assets/images/pic8.png')
    },
    {
      id: '5',
      image: require('../assets/images/pic7.png')
    },
  ]

  const NewItem = [
    {
      id: '1',
      image: require('../assets/images/pro47.png'),
      price: '$17,00',
    },
    {
      id: '2',
      image: require('../assets/images/pro48.png'),
      price: '$32,00',
    },
    {
      id: '3',
      price: '$21,00',
    },
  ]

  const FlashSale = [
    {
      id: '1',
      image: require('../assets/images/pro16.png'),

    },
    {
      id: '2',
      image: require('../assets/images/pro15.png'),

    },
    {
      id: '3',
      image: require('../assets/images/pro14.png'),

    },
    {
      id: '4',
      image: require('../assets/images/pro12.png'),

    },
    {
      id: '5',
      image: require('../assets/images/pro13.png'),

    },
    {
      id: '6',
      image: require('../assets/images/pro11.png'),

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

  const CategoryCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageGrid}>
          {item.images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={styles.image}
              resizeMode="cover"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.count}</Text>
          </View>
        </View>
      </View>
    );
  };

  const topproducts = ({ item }) => (
    <TouchableOpacity style={styles.products} >
      <Image source={item.image} />
    </TouchableOpacity>
  )
  const newItem = ({ item }) => (
    <View>
      <View style={{ width: "90%", height: 140, backgroundColor: "#FFFF", alignItems: "center", justifyContent: "center", borderRadius: 15, marginTop: 20, }}>
        <Image source={item.image} style={{ borderRadius: 15 }} />
      </View>
      <Text style={{ marginTop: 6, fontSize: 16, fontWeight: "light", color: "#202020" }}>
        Lerem ipsum dolor sit{'\n'}amet consectetur.
      </Text>
      <Text style={{ marginTop: 6, fontSize: 16, fontWeight: "bold" }}>
        {item.price}
      </Text>
    </View>
  )

  const flashSale = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Flashsale')} style={styles.Flashcard}>
      <Image source={item.image} />
      <View style={styles.discount}>
        <Image source={require('../assets/icons/discount.png')} />
      </View>
    </TouchableOpacity>
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
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 30, flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={styles.tag}>
              Shop
            </Text>
            <View style={{ backgroundColor: "#F8F8F8", width: "80%", height: 50, borderRadius: 30, justifyContent: "space-between", flexDirection: "row", alignItems: "center", paddingHorizontal: 20, }}>
              <TextInput
                placeholder='Search'
                placeholderTextColor={'#C7C7C7'}
                style={{ fontSize: 16, fontWeight: "medium", flex: 1 }}
              />
              <TouchableOpacity>
                <Image source={require('../assets/icons/cam.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={{marginTop:20}}>
            <Image source={require('../assets/images/bigpro1.png')} style={{ width: "100%", borderRadius: 12, height: 146, }} />
            <View style={styles.big2}>
              <Text style={{ fontSize: 28, fontWeight: "bold",color:"#fff" }}>
                Big Sale
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5,color:"#fff" }}>
                Up to 50%
              </Text>
            </View>

            <View style={styles.big}>
              <View style={styles.big1}>
                <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 11 }}>
                  Happening{'\n'}Now
                </Text>
              </View>
              <Image source={require('../assets/images/bubble 1.2.png')} style={{ borderBottomLeftRadius: 12 }} />
            </View>
            <View style={styles.big4}>
              <Image source={require("../assets/images/bubble 1.3.png")} style={{ borderTopRightRadius: 10 }} />
            </View>
            <View style={styles.big3}>
              <Image source={require('../assets/images/bubble 1.1.png')}  style={{ borderBottomRightRadius: 12 }} />
            </View>

          </TouchableOpacity>


          <View style={styles.categorySection}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <View>
                <Text style={styles.title}>
                  Categories
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 15 }}>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  See All
                </Text>
                <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
                  <Image source={require('../assets/images/Arrow.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.grid}>
              {categories.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </View>
          </View>

          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 8 }}>
            Top Products
          </Text>

          <FlatList
            data={Product}
            renderItem={topproducts}
            keyExtractor={(item) => item.id}
            horizontal
          />
          <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>New Items</Text>
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
            data={NewItem}
            renderItem={newItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
            <Text style={styles.title}>
              Flash Sale
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <Image source={require('../assets/icons/clock.png')} />
              <Image source={require('../assets/icons/Timer.png')} />
            </View>
          </View>

          <FlatList
            data={FlashSale}
            renderItem={flashSale}
            keyExtractor={(item) => item.id}
            numColumns={3}
            scrollEnabled={false}
            columnWrapperStyle={styles.row}
          />


          <View style={{ flexDirection: "row", gap: 20, justifyContent: "space-between", alignItems: "center", marginTop: 15 }}>
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

          <View style={{ flexDirection: "row", gap: 10, marginTop: 15, alignItems: "center" }}>
            <Text style={styles.title}>
              Just For You
            </Text>
            <Image source={require('../assets/icons/star.png')} />
          </View>

          <FlatList
            data={ForYou}
            renderItem={foryou}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            numColumns={2}
            columnWrapperStyle={styles.rowtop}
            contentContainerStyle={styles.listContent}

          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    padding: 20,
  },

  tag: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#202020"
  },
  bob1: {
    position: "absolute",
    bottom: 0,
    left: 0
  },


  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 15
  },

  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  image: {
    width: "48%",
    height: 80,
    borderRadius: 10,
    marginBottom: 6,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  categorySection: {
    marginTop: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  badge: {
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },

  badgeText: {
    fontSize: 14,
    fontWeight: "600",
  },

  products: {
    width: 65,
    height: 65,
    borderRadius: 65,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 10
  },

  row: {
    gap: 6
  },
  discount: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  Flashcard: {
    width: "30%",
    height: 115,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 6,
    marginTop: 20
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
  just: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFF",
    height: "8.5%",
    padding: 10,
    borderRadius: 15
  },
  listContent: {
    paddingTop: 20,
  },
  rowtop: {
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  big: {
    position: "absolute",
    bottom: 0,


  },
  big1: {
    position: "absolute",
    bottom: 8,
    left: 20,
    zIndex: 1

  },
  big2: {
    position: "absolute",
    top: 8,
    padding: 20,
    zIndex: 1

  },
  big3: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  big4: {
    position: "absolute",
    top: 0,
    right: 0,
  },
})