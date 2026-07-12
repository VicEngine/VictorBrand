import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Pressable, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
const Paymentmethods = () => {

  const [isVissible, setIsVissible] = useState(false)
  const [vissible, setVissible] = useState(false)
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#000000" }}>Settings</Text>
        <Text style={{ marginTop: 20, fontSize: 16, fontWeight: "medium", color: "#000000" }}>Paymentmethods</Text>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

          <TouchableOpacity activeOpacity={0.5} style={styles.card}>
            <View style={{ padding: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
              <Image source={require('../assets/icons/Mastercard.png')} />
              <TouchableOpacity onPress={() => setVissible(true)} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: "#ebeff9", alignItems: "center", justifyContent: "center", }}>
                <Image source={require('../assets/icons/Frame.png')} />
              </TouchableOpacity>
            </View>


            <Text style={{ fontSize: 12, fontWeight: "semibold", position: "absolute", bottom: 60, paddingLeft: 15, letterSpacing: 9.3 }}>
              **** **** **** 1579
            </Text>

            <Text style={{ position: "absolute", bottom: 30, left: 15, fontSize: 10, fontWeight: "semibold" }}>
              AMANDA MORGAN
            </Text>

            <Text style={{ position: "absolute", bottom: 30, right: 15, fontSize: 10, fontWeight: "semibold" }}>12/22</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setIsVissible(true)} activeOpacity={0.5} style={{ backgroundColor: "#004CFF", height: 180, width: 45, alignItems: "center", justifyContent: "center", borderRadius: 12, marginTop: 28 }}>
            <Text style={{ color: "#FFFFFF", fontSize: 22 }}>+</Text>
          </TouchableOpacity>
        </View>

        <Modal visible={isVissible} transparent={true} animationType='slide' onRequestClose={() => setIsVissible(false)}>
          <View style={styles.modalOverlay}>
            <Pressable style={StyleSheet.absoluteFill} onPress={() => setIsVissible(false)}>
              <BlurView intensity={80} tint='dark' style={StyleSheet.absoluteFill} />
            </Pressable>

            <View style={styles.modcontainer}>
              <View style={{ backgroundColor: "#F8FAFF", width: "100%", height: 80, justifyContent: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 20 }}>

                <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                  Add  Card
                </Text>


              </View>
              <View style={{ padding: 20 }}>
                <View>
                  <Text style={styles.addCardtext}> Card Holder</Text>
                  <View style={styles.addCard}>
                    <TextInput
                      placeholder='Required'
                      placeholderTextColor={"#9EB4E8"}
                      style={{ fontSize: 16, fontWeight: "medium" }}
                    />
                  </View>
                </View>

                <View style={{ marginTop: 15 }}>
                  <Text style={styles.addCardtext}> Card Number</Text>
                  <View style={styles.addCard}>
                    <TextInput
                      placeholder='Required'
                      placeholderTextColor={"#9EB4E8"}
                      style={{ fontSize: 16, fontWeight: "medium" }}
                    />
                  </View>
                </View>


                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ width: "48%" }}>
                    <Text style={styles.addCardtext}>Valid</Text>
                    <View style={{
                      width: "100%", paddingHorizontal: 15, height: 50, backgroundColor: "#F1F4FE",
                      justifyContent: "center", borderRadius: 15, marginTop: 5
                    }}>
                      <TextInput
                        placeholder='Required'
                        placeholderTextColor={"#9EB4E8"}
                        style={{ fontSize: 16, fontWeight: "medium" }}
                      />
                    </View>
                  </View>

                  <View style={{ width: "48%" }}>
                    <Text style={styles.addCardtext}>CVV</Text>
                    <View style={{
                      width: "100%", paddingHorizontal: 15, height: 50, backgroundColor: "#F1F4FE",
                      justifyContent: "center", borderRadius: 15, marginTop: 5
                    }}>
                      <TextInput
                        placeholder='Required'
                        placeholderTextColor={"#9EB4E8"}
                        style={{ fontSize: 16, fontWeight: "medium" }}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={{ marginTop: 20, width: "100%", backgroundColor: "#004CFF", alignItems: "center", paddingVertical: 15, borderRadius: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "light", color: "#F3F3F3" }}>
                    Save Changes
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>


        <Modal visible={vissible} transparent={true} animationType='slide' onRequestClose={() => setVissible(false)}>
          <View style={styles.modalOverlay}>
            <Pressable style={StyleSheet.absoluteFill} onPress={() => setVissible(false)}>
              <BlurView intensity={80} tint='dark' style={StyleSheet.absoluteFill} />
            </Pressable>

            <View style={styles.modcontainer}>
              <View style={{ backgroundColor: "#F8FAFF", width: "100%", height: 80, justifyContent: "center", borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 22, fontWeight: "bold" }}>
                   Edit Card
                  </Text>
                  <TouchableOpacity style={{paddingRight:10}}>
                    <Image source={require('../assets/icons/Delete.png')}/>
                  </TouchableOpacity>

                </View>
              </View>
              <View style={{ padding: 20 }}>
                <View>
                  <Text style={styles.addCardtext}> Card Holder</Text>
                  <View style={styles.addCard}>
                    <TextInput
                      placeholder='DE_KING'
                      placeholderTextColor={"#9EB4E8"}
                      style={{ fontSize: 16, fontWeight: "medium" }}
                    />
                  </View>
                </View>

                <View style={{ marginTop: 15 }}>
                  <Text style={styles.addCardtext}> Card Number</Text>
                  <View style={styles.addCard}>
                    <TextInput
                      placeholder='**** **** **** 1579'
                      placeholderTextColor={"#9EB4E8"}
                      style={{ fontSize: 16, fontWeight: "medium" }}
                    />
                  </View>
                </View>


                <View style={{ marginTop: 15, flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ width: "48%" }}>
                    <Text style={styles.addCardtext}>Valid</Text>
                    <View style={{
                      width: "100%", paddingHorizontal: 15, height: 50, backgroundColor: "#F1F4FE",
                      justifyContent: "center", borderRadius: 15, marginTop: 5
                    }}>
                      <TextInput
                        placeholder='12/22'
                        placeholderTextColor={"#9EB4E8"}
                        style={{ fontSize: 16, fontWeight: "medium" }}
                      />
                    </View>
                  </View>

                  <View style={{ width: "48%" }}>
                    <Text style={styles.addCardtext}>CVV</Text>
                    <View style={{
                      width: "100%", paddingHorizontal: 15, height: 50, backgroundColor: "#F1F4FE",
                      justifyContent: "center", borderRadius: 15, marginTop: 5
                    }}>
                      <TextInput
                        placeholder='209'
                        placeholderTextColor={"#9EB4E8"}
                        style={{ fontSize: 16, fontWeight: "medium" }}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={{ marginTop: 20, width: "100%", backgroundColor: "#004CFF", alignItems: "center", paddingVertical: 15, borderRadius: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: "light", color: "#F3F3F3" }}>
                    Save Changes
                  </Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Paymentmethods

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
    padding: 20
  },
  card: {
    width: "80%",
    height: 180,
    backgroundColor: "#E5EBFC",
    marginTop: 28,
    borderRadius: 12,
  },
  modcontainer: {
    backgroundColor: "#FFFFFF",
    height: '50%',

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'transparent'
  },
  addCard: {
    width: "100%",
    height: 50,
    backgroundColor: "#F1F4FE",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  addCardtext: {
    fontSize: 13, fontWeight: "semibold"
  },

})