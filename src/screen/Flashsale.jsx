import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Flashsale = () => {
  const All = [
    {
      id: '1',
      title: 'All',
    },
    {
      id: '2',
      title: '10%',
    },
    {
      id: '3',
      title: '20%',
    },
    {
      id: '4',
      title: '30%',
    },
    {
      id: '5',
      title: '40%',
    },
    {
      id: '6',
      title: '50%',
    },
  ]

  const ForYou = [
    {
      id: '1',
      image: require('../assets/images/pro5.png'),
      title: 'Lorem ipsum dolor sit \n amet consectetur.',

    },
    {
      id: '2',
      image: require('../assets/images/pro6.png'),
      title: 'Lorem ipsum dolor sit \n amet consectetur.',

    },
    {
      id: '3',
      image: require('../assets/images/pro9.png'),
      title: 'Lorem ipsum dolor sit \n amet consectetur.',

    },
    {
      id: '4',
      image: require('../assets/images/pro4.png'),
      title: 'Lorem ipsum dolor sit \n amet consectetur.',

    },
    {
      id: '5',
      image: require('../assets/images/pro7.png'),
      title: 'Lorem ipsum dolor sit \n amet consectetur.',

    },
    {
      id: '6',
      image: require('../assets/images/pro8.png'),
      title: 'Lorem ipsum dolor sit \n amet consectetur.',

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

  const all = ({ item }) => (
    <TouchableOpacity style={{ justifyContent: "center", paddingHorizontal: 17 }}>
      <Text style={{ fontSize: 13, fontWeight: "bold" }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  )
  const foryou = ({ item }) => (
    <View>
      <View style={styles.just}>
        <View>
          <Image source={item.image} />
          <View style={styles.discount}>
            <Image source={require('../assets/icons/discount.png')} />
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.protitle}>
          {item.title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Text style={styles.proprice}>
            $16,00
          </Text>
          <Text style={styles.proprice1}>
            $20,00
          </Text>
        </View>
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
  const newItem = ({ item }) => (
    <View>
      <View style={{ width: "90%", height: 140, backgroundColor: "#FFFF", alignItems: "center", justifyContent: "center", borderRadius: 15, marginTop: 20, }}>
        <View>
          <Image source={item.image} style={{ borderRadius: 15 }} />
          <View style={styles.discount}>
            <Image source={require('../assets/icons/discount.png')} />
          </View>
        </View>
      </View>
      <Text style={{ marginTop: 6, fontSize: 16, fontWeight: "light", color: "#202020" }}>
        Lerem ipsum dolor sit{'\n'}amet consectetur.
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={{ marginTop: 6, fontSize: 16, fontWeight: "bold" }}>
          $16,00
        </Text>
        <Text style={{ marginTop: 6, fontSize: 16, fontWeight: "bold", opacity: 0.4, color: "#F1AEAE" }}>
          20,00
        </Text>
      </View>
    </View>
  )
  return (
    <View style={styles.container}>
      <ScrollView >
        <ImageBackground>

          <View style={styles.bob}>
            <Image source={require('../assets/images/bubble1.png')} />
          </View>
          <View>
            <View style={styles.bob1}>
              <Image source={require('../assets/images/bubble2.png')} />
              <View style={styles.bob2}>
                <Image source={require('../assets/icons/clock1.png')} />
                <Image source={require('../assets/icons/Timer1.png')} />
              </View>
            </View>
          </View>

        </ImageBackground>
        <SafeAreaView style={styles.container1}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            Flash Sale
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "medium", marginTop: 5 }}>
            Choose Your Discount
          </Text>

          <View style={{ width: "100%", height: 40, backgroundColor: "#F9F9F9", borderRadius: 10, marginTop: 30 }}>
            <FlatList
              data={All}
              renderItem={all}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            />
          </View>

          <View style={{ flexDirection: "row", gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>
              20%
            </Text>
            <Text style={{ fontSize: 21, fontWeight: "bold" }}>
              Discount
            </Text>
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


          <View>
            <Image source={require('../assets/images/bigpro.png')} style={{ width: "100%", borderRadius: 12, height: 146 }} />
            <View style={styles.big2}>
              <Text style={{ fontSize: 28, fontWeight: "medium" }}>
                Big Sale
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "bold", marginTop: 5 }}>
                Up to 50%
              </Text>
            </View>

            <View style={styles.big}>
              <View style={styles.big1}>
                <Text style={{ color: "#FFF", fontWeight: "bold", fontSize: 11 }}>
                  Happening{'\n'}Now
                </Text>
              </View>
              <Image source={require('../assets/images/bubble 1.5.png')} />
            </View>
            <View style={styles.big4}>
              <Image source={require("../assets/images/bubble 1.7.png")} style={{ borderTopRightRadius: 10 }} />
            </View>
            <View style={styles.big3}>
              <Image source={require('../assets/images/bubble 1.6.png')} />
            </View>

          </View>

          <FlatList
            data={NewItem}
            renderItem={newItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
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
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default Flashsale

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  bob: {
    position: 'absolute',
    right: 0,

  },
  bob1: {
    position: 'absolute',
    right: 0,
  },
  bob2: {
    position: "absolute",
    bottom: 45,
    right: 20,

    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  container1: {
    flex: 1,
    padding: 25,
    marginTop: 25,
  },
  listContent: {
    paddingTop: 20,
  },
  discount: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  rowtop: {
    justifyContent: 'space-between',
    marginBottom: 28,
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
    marginTop: 8,

  },
  proprice1: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: 'Raleway',
    marginTop: 8,
    opacity: 0.5,
    color: "#F1AEAE",

  },
  just: {
    flex: 1,
    width: "99%",
    backgroundColor: "#FFF",
    height: "5%",
    padding: 10,
    borderRadius: 15
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
  see: {
    fontSize: 15,
    fontWeight: "bold",
  },
})