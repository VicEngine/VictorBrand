import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, FlatList, Pressable } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
const Password = () => {
  const PIN_LENGTH = 8;

  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const inputRef = useRef(null);

  const dots = Array.from({ length: PIN_LENGTH }, (_, i) => ({ id: i }));

  return (

    <View style={styles.conatiner}>
      <ImageBackground style={{ flex: 1, }}>
        {/*Bubble 1*/}
        <Image source={require('../../assets/images/bubble 02.png')}
          style={{ width: "84%", }} />
        <View style={styles.bubble}>
          {/*Bubble 2*/}
          <Image source={require('../../assets/images/bubble 01.png')} />
        </View>
      </ImageBackground>

      <View style={styles.profile}>
        <Image source={require('../../assets/images/pro.png')}
          style={{ width: 106, height: 106, borderRadius: 106 }} />
      </View>

      <Text style={{ fontSize: 28, fontWeight: "bold", fontFamily: 'Raleway', textAlign: "center", marginTop: 5, }}>
        Hell0, Romina!!
      </Text>


      <Text style={{ marginTop: 58, textAlign: "center", fontFamily: "Nunito Sans", fontSize: 19, color: "#000000", fontWeight: "light" }}>
        Type your password
      </Text>



      <Pressable onPress={() => inputRef.current?.focus()}>
        <View style={{ alignItems: "center" }}>
          <TextInput
            ref={inputRef}
            value={pin}
            onChangeText={(text) => {
              if (text.length <= PIN_LENGTH) setPin(text);
            }}
            maxLength={PIN_LENGTH}
            secureTextEntry
            keyboardType='default'
            autoFocus
            style={styles.hiddenInput}
          />
          <FlatList
            data={dots}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.dotsContainer}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.dot,
                  item.id < pin.length ? styles.dotFilled : styles.dotEmpty,
                ]}
              />
            )}
            scrollEnabled={false}
          />
        </View>
      </Pressable>



      <TouchableOpacity onPress={() => navigation.navigate('Recoverypass')} style={{ marginTop: 58, alignItems: "center" }}>
        <Text style={{ fontFamily: "Nunito Sans", fontSize: 19, color: "#000000", fontWeight: "light" }}>
          Forgot your password?
        </Text>
      </TouchableOpacity>

    </View>

  )
}

export default Password

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2'",

  },
  bubble: {
    position: 'absolute',
    Top: 40,
    left: 0,
  },
  profile: {
    width: 122,
    height: 122,
    borderRadius: 122,
    backgroundColor: "#FFFFFF",
    alignSelf: "center",
    marginTop: "39%",
    justifyContent: "center",
    alignItems: "center",
  },
  // --- Hidden input ---
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    height: 0,
    width: 0,
  },

  // --- Dots ---
  dotsContainer: {
    gap: 12,
    alignItems: 'center',
  },
  dot: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "black",
    marginTop: 40,

  },
  dotFilled: {
    backgroundColor: '#2563EB',
  },
  dotEmpty: {
    backgroundColor: '#D1D5DB',
  },
})