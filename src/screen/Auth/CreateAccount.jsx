import {
  StyleSheet, Text, Dimensions,
  View, Image, TouchableOpacity,
  ScrollView, TextInput
}
  from 'react-native'
import React, { useEffect, useState } from 'react'

import FormInput from '../../components/FormInput'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../../components/Button';
import Cut from '../../components/Cut';

const CreateAccount = () => {
  const { width } = Dimensions.get('window');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')
  const [countryCode, setCountryCode] = useState('GB')
  const [callingCode, setCallingCode] = useState('44');
  const [pickerVisible, setPickerVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [phone, setPhone] = useState('');
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const navigation = useNavigation();
  const route = useRoute();

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };
  const fullPhoneNumber = `+${callingCode}${phone}`;

  useEffect(() => {
    if (route.params?.photoUri) {
      setCapturedPhoto(route.params.photoUri);
    }
  }, [route.params?.photoUri]);

  return (

    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require('../../assets/images/Group03.png')} style={{ color: "#F2F5FE", }} />
        </View>
        <View position='absolute' style={{ top: 122, left: 30 }}>
          <Text style={{ fontSize: 50, fontWeight: 'bold', fontFamily: "Raleway" }}>Create {'\n'} Account</Text>
        </View>

        <View style={styles.cure}>
          <Image source={require('../../assets/images/Group01.png')} />
        </View>

        <View style={{ flex: 1, }}>
          <TouchableOpacity onPress={() => navigation.navigate('Camera')} style={styles.camera}>
            {capturedPhoto ? (
              <Image source={{ uri: capturedPhoto }} style={styles.photoPreview} />
            ) : (
              <Image source={require('../../assets/images/Group02.png')} />
            )}
          </TouchableOpacity>


          <View style={{ gap: 20 }}>
            <View style={styles.FormInput}>
              <FormInput
                title="email"
                placeholder="Email"
                placeholderTextColor="#D2D2D2"
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                style={{ flex: 1 }} />
            </View>

            <View style={styles.password}>

              <TextInput
                placeholder='Password'
                placeholderTextColor="#F8F8F8"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                style={{ fontSize: 13.8, fontFamily: "poppins", flex: 1 }}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{}} >
                <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={22} color="#888" />
              </TouchableOpacity>

            </View>

            {/* <View style={styles.number}>
              <TouchableOpacity
                style={styles.countryCode}
                onPress={() => setPickerVisible(true)}
              >
                <CountryPicker
                  countryCode={countryCode}
                  withFlag
                  withCallingCode
                  withFilter
                  withEmoji
                  visible={pickerVisible}
                  onSelect={onSelectCountry}
                  onClose={() => setPickerVisible(false)}
                  containerButtonStyle={{ flexDirection: 'row', alignItems: 'center' }}
                />
                <Image source={require('../../assets/images/arrow-down (1).png')} style={{ marginLeft: 4, transform: [{ translateY: 5 }] }} />
              </TouchableOpacity>
              <View style={styles.divider} />
              <Text style={styles.dialCode}>+{callingCode}</Text>

              <TextInput
                placeholder='Your number'
                placeholderTextColor="#F8F8F8"
                keyboardType='phone-pad'
                value={phone}

                onChangeText={setPhone}
                style={{ fontSize: 13.8, fontFamily: "poppins", flex: 1, }}
              />

            </View> */}
          </View>

        </View>

        {/*Done*/}
        <Button text='Done' onPresss={() => navigation.navigate('Tab')} />

        {/*Cancel*/}
        <Cut onPress={() => navigation.goBack()} />

      </ScrollView>
    </View>

  )
}

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  cure: {
    position: "absolute",
    top: 50,
    right: 0,
  },
  camera: {
    paddingLeft: 35,
    marginTop: 67,
  },
  photoPreviewContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  photoPreview: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#3B6EF5',
  },
  password: {
    width: 335,
    height: 52.37,
    backgroundColor: "#D2D2D2",
    alignSelf: "center",
    justifyContent: "space-between",
    borderRadius: 25,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  number: {
    width: 335,
    height: 55.37,
    backgroundColor: "#D2D2D2",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 14


  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,

  },

  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 10
  },

  dialCode: {
    fontSize: 15,
    color: '#333',
    marginRight: 6
  },


  inputWrapper: {

    justifyContent: 'center',

    alignSelf: "center"
  },

  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#ddd',
    marginHorizontal: 10
  },
  dialCode: {
    fontSize: 15,
    color: '#333',
    marginRight: 6
  },
})


