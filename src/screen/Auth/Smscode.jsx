import { StyleSheet, Text, View, Image,Pressable,TextInput,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react';
import Cut from '../../components/Cut';
import { useNavigation } from '@react-navigation/native';
const Smscode = () => {
    const PIN_LENGTH =4;
    const [pin,setPin] = useState('')
    const inputRef = useRef(null)
    const dots = Array.from({ length: PIN_LENGTH }, (_, i) => ({ id: i }));
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 50 }}>
                <Image source={require('../../assets/images/bubble1.png')}
                />
                <View style={styles.bob}>
                    <Image source={require('../../assets/images/bubble2.png')} />
                </View>
            </View>
            <View style={{ width: 122, height: 122, borderRadius: 122, backgroundColor: "#fff", alignSelf: "center", transform: [{ translateY: -24 }], alignItems: "center", justifyContent: "center" }
            }>

                <Image source={require('../../assets/images/pro.png')} style={{ width: 106, height: 106, borderRadius: 106 }} />
            </View>
            <Text style={{textAlign:"center",fontSize:21,fontWeight:"bold"}}>
                Password Recovery
            </Text>
            <Text style={{marginTop:25,textAlign:"center",fontSize:19,fontWeight:"light"}}>
                Enter 4-digits code we sent you{'\n'}on your phone number
            </Text>
            <Text style={{marginTop:25,fontSize:16,fontWeight:"bold",textAlign:"center"}}>
                +98*******00
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
                <View style={{flex:1,justifyContent:"center"}}>
                <TouchableOpacity onPress={()=> navigation.navigate('NewPassword')} style={{width:201,height:50,backgroundColor:"#FF5790",alignItems:"center",justifyContent:"center",alignSelf:"center",borderRadius:15}}>
                    <Text style={{fontSize:22,fontWeight:"light",color:"#F3F3F3"}}>
                        Send Again
                    </Text>
                </TouchableOpacity>
                <Cut onPress={()=> navigation.goBack()}/>
                </View>
        </View>
    )
}

export default Smscode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    bob: {
        position: "absolute",
        top: 0,
        right: 0,
    },
      hiddenInput: {
    position: 'absolute',
    opacity: 0,
    height: 0,
    width: 0,
  },

  
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