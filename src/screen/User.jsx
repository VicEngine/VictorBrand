import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const Home = () => {



  let Fruit = ["Banana", "Orange"]

  Fruit.push("Apple");
  Fruit.pop();
  console.log("firstFruit",Fruit);
  Fruit.unshift("Cashew");
  console.log( "Fruit",Fruit);

  const allItems = ["bag", "shoes", "wire", "charger"]
  const previewItems = allItems.slice(0, 3);
  console.log("allItems",previewItems); // Output: ["bag", "shoes"]

const theCart =["pen", "pencil", "eraser", "sharpener"]
theCart.splice(1, 2, "marker", "highlighter");
console.log("theCart",theCart); // Output: ["pen", "marker", "highlighter", "sharpener"]`
  const Data = [
    {
      id: '1',
      image: require('../assets/images/pic2.png'),

    },

    {
      id: '2',
      image: require('../assets/images/pic3.png'),

    },
    {
      id: '3',
      image: require('../assets/images/pic4.png'),

    },
    {
      id: '4',
      image: require('../assets/images/pic5.png'),

    },
    {
      id: '5',
      image: require('../assets/images/pic6.png'),

    },

  ]

  const Story = [
    {
      id: '1',
      image: require('../assets/images/pic01.png'),
      livecard: require('../assets/icons/baige.png'),
    },
    {
      id: '2',
      image: require('../assets/images/pic02.png'),

    },
    {
      id: '3',
      image: require('../assets/images/pic03.png'),

    },
    {
      id: '4',
      image: require('../assets/images/pic04.png'),

    },
  ]

  const New = [
    {
      id: '1',
      image: require('../assets/images/pro33.png'),
      price: '$17,oo'
    },
    {
      id: '2',
      image: require('../assets/images/pro35.png'),
      price: '$32,oo'
    },
    {
      id: '3',
      image: require('../assets/images/pro34.png'),
      price: '$21,oo'
    },
  ]

  const DataItem = [
    {
      id: '1',
      image: require('../assets/images/pro10.png'),
      title: 'New'
    },
    {
      id: '2',
      image: require('../assets/images/pro37.png'),
      title: 'Sale'
    },
    {
      id: '3',
      image: require('../assets/images/pro36.png'),
      title: 'Hot'
    },
    {
      id: '4',
      image: require('../assets/images/pro38.png'),

    },
  ]

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
  ];

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
  const renderItem = ({ item }) => (
    <View style={{ justifyContent: "center", paddingHorizontal: 10, marginTop: 10 }}>
      <TouchableOpacity activeOpacity={0.7} style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#707070", }}>
        <Image source={item.image} style={{ width: 50, height: 50, borderRadius: 50 }} />
      </TouchableOpacity>
    </View>
  )

  const stories = ({ item }) => (
    <View >
      <TouchableOpacity activeOpacity={0.9} style={styles.piccontainer}>
        <Image
          source={item.image}
          style={styles.pic}
        />
      </TouchableOpacity>
      <View style={styles.live}>
        <Image source={item.livecard} />
      </View>

      <TouchableOpacity style={styles.play}>
        <Image source={require('../assets/icons/play.png')} />
      </TouchableOpacity>
    </View>
  )

  const NewItem = ({ item }) => (
    <View>
      <View style={styles.space}>
        <TouchableOpacity activeOpacity={0.9} style={styles.pro}>
          <Image source={item.image} />
        </TouchableOpacity>
        <Text style={styles.protitle}>
          {item.title}
        </Text>
        <Text style={styles.proprice}>
          {item.price}
        </Text>
      </View>
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

  const flashSale = ({ item }) => (
    <View style={styles.Flashcard}>
      <Image source={item.image} />
      <View style={styles.discount}>
        <Image source={require('../assets/icons/discount.png')} />
      </View>
    </View>
  )

  const topproducts = ({ item }) => (
    <TouchableOpacity style={styles.products} >
      <Image source={item.image} />
    </TouchableOpacity>
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
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
              <View style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: "#fff", alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../assets/images/pic1.png')} />
              </View>
              <View style={{ width: 115, height: 35, backgroundColor: "#004cFF", borderRadius: 35, alignItems: "center", justifyContent: "center" }}>
                <Text>
                  My Activity
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", gap: 25 }}>
              <Image source={require('../assets/icons/Icon.png')} />
              <Image source={require('../assets/icons/Messages.png')} />
              <Image source={require('../assets/icons/Frame.png')} />
            </View>
          </View>

          <Text style={{ fontSize: 28, fontWeight: "bold", marginTop: 20 }}>
            Hello,Romina!
          </Text>

          <View style={{ width: "100%", height: 70, backgroundColor: "#F8F8F8", marginTop: 20, justifyContent: "center", paddingHorizontal: 15, gap: 4 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold", }}>
              Announcement
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 10, fontWeight: "regular", color: "#202020" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing eli.{'\n'}Maecenas hendrerit luctus libero ac vulputate
              </Text>

              <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
                <Image source={require('../assets/images/Arrow.png')} />
              </TouchableOpacity>

            </View>
          </View>
          <Text style={styles.title}>
            Recently Viewed
          </Text>
          <View>
            <FlatList
              data={Data}
              renderItem={renderItem}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Text style={styles.title}>
            My Orders
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15, marginTop: 20 }}>
            <TouchableOpacity style={{ width: 86, height: 35, backgroundColor: "#E5EBFC", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
              <Text style={{ color: '#0042E0', fontSize: 16, fontWeight: "medium" }}>
                To Pay
              </Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ width: 118, height: 35, backgroundColor: "#E5EBFC", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
              <Text style={{ color: '#0042E0', fontSize: 16, fontWeight: "medium" }}>
                To Recieve
              </Text>
              <View style={styles.dot}></View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 118, height: 35, backgroundColor: "#E5EBFC", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
              <Text style={{ color: '#0042E0', fontSize: 16, fontWeight: "medium" }}>
                To Review
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>
            Stories
          </Text>

          <View>
            <FlatList
              data={Story}
              renderItem={stories}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View>
              <Text style={styles.title}>
                New Items
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
          <View>
            <FlatList
              data={New}
              renderItem={NewItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 20, justifyContent: "flex-end", alignItems: "center", marginTop: 15 }}>
            <Text style={styles.see}>
              See All
            </Text>
            <TouchableOpacity style={{ width: 25, height: 25, borderRadius: 25, backgroundColor: "#0C54FF", alignItems: "center", justifyContent: "center" }}>
              <Image source={require('../assets/images/Arrow.png')} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={DataItem}
            renderItem={See}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
          />

          <View>
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

            <FlatList
              data={categories}
              keyExtractor={(item) => item.id}
              numColumns={2}
              scrollEnabled={false}
              renderItem={({ item }) => <CategoryCard item={item} />}
              columnWrapperStyle={{
                justifyContent: "space-between",
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>

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

          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 8 }}>
            Top Products
          </Text>

          <FlatList
            data={Product}
            renderItem={topproducts}
            keyExtractor={(item) => item.id}
            horizontal
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
    padding: 20
  },
  dot: {
    position: "absolute",
    top: 0,
    right: -5,
    width: 14,
    height: 14,
    backgroundColor: '#08C514',
    borderRadius: 14
  },
  title: {
    marginTop: 15,
    fontSize: 21,
    fontWeight: "bold"
  },
  piccontainer: {

  },
  pic: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  live: {
    position: "absolute",
    top: 12,
    left: 15,
  },
  play: {
    position: "absolute",
    top: 75,
    left: 50,
  },
  pro: {
    width: 140,
    height: 140,
    backgroundColor: '#ffff',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
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
  space: {
    paddingHorizontal: 5
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
  Flashcard: {
    width: "30%",
    height: 115,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 6,
    marginTop: 20
  },
  discount: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  row: {
    gap: 6
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
})

