import { StyleSheet, Text, View, Image, TextInput, Modal, TouchableOpacity, } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import Cut from '../../components/Cut';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
const NewPassword = () => {
  const navigation = useNavigation();
  const [showMaxAttemptsModal, setShowMaxAttemptsModal] = useState(false);

  const handleOkay = () => {
    setShowMaxAttemptsModal(false);
    // navigation.goBack() or navigate to login, etc.
  };
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 50 }}>
        <Image source={require('../../assets/images/bubble1.png')} />
        <View style={styles.bob}>
          <Image source={require('../../assets/images/bubble2.png')} />
        </View>
      </View>
      <View style={{ width: 122, height: 122, borderRadius: 122, backgroundColor: "#fff", alignSelf: "center", transform: [{ translateY: -22 }], justifyContent: "center", alignItems: "center" }}>
        <Image source={require('../../assets/images/pro.png')} style={{ height: 102, width: 102, borderRadius: 102 }} />
      </View>
      <Text style={{ textAlign: "center", fontSize: 21, fontWeight: "bold", }}>
        Setup New Password
      </Text>
      <Text style={{ marginTop: 10, textAlign: "center", fontSize: 19, fontWeight: "light" }}>
        Please,setup a new password for{'\n'} your account
      </Text>
      <View style={{ width: 335, height: 50, backgroundColor: "#F8F8F8", borderRadius: 8, justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: 27 }}>
        <TextInput
          placeholder='New Password'
          placeholderTextColor={"#DCDCDC"}
          style={{ fontSize: 19, fontWeight: "medium", }} />
      </View>
      <View style={{ width: 335, height: 50, backgroundColor: "#F8F8F8", borderRadius: 8, justifyContent: "center", alignItems: "center", alignSelf: "center", marginTop: 18 }}>
        <TextInput
          placeholder='Repeat Password'
          placeholderTextColor={"#DCDCDC"}
          style={{ fontSize: 19, fontWeight: "medium", }} />
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Button text={'Save'} onPresss={() => navigation.navigate("Card")} />
        <Cut onPress={() => navigation.goBack()} />
      </View>
      {/* Max attempts modal
      <Modal
        visible={showMaxAttemptsModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowMaxAttemptsModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.iconCircle}>
              <Ionicons name="alert" size={32} color="#fff" />
            </View>

            <Text style={styles.modalText}>
              You reached out maximum amount of attempts.{'\n'}
              Please, try later.
            </Text>

            <TouchableOpacity style={styles.okayButton} onPress={handleOkay}>
              <Text style={styles.okayButtonText}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>       */}
    </View>
  )
}

export default NewPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  bob: {
    position: "absolute",
    top: 0,
    right: 0
  },
  //      // Modal styles
  //   modalOverlay: {
  //     flex: 1,
  //     backgroundColor: 'rgba(0,0,0,0.6)',
  //     justifyContent: 'flex-end', // or 'center' depending on design
  //   },
  //   modalCard: {
  //     backgroundColor: '#fff',
  //     borderTopLeftRadius: 24,
  //     borderTopRightRadius: 24,
  //     paddingTop: 40,
  //     paddingBottom: 30,
  //     paddingHorizontal: 24,
  //     alignItems: 'center',
  //   },
  //   iconCircle: {
  //     width: 64,
  //     height: 64,
  //     borderRadius: 32,
  //     backgroundColor: '#E63946',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     marginBottom: 24,
  //     // Optional outer ring effect
  //     shadowColor: '#E63946',
  //     shadowOpacity: 0.2,
  //     shadowRadius: 20,
  //   },
  //   modalText: {
  //     fontSize: 18,
  //     textAlign: 'center',
  //     color: '#222',
  //     lineHeight: 26,
  //     marginBottom: 24,
  //   },
  //   okayButton: {
  //     backgroundColor: '#1A1A1A',
  //     paddingVertical: 16,
  //     width: '100%',
  //     borderRadius: 30,
  //     alignItems: 'center',
  //   },
  //   okayButtonText: {
  //     color: '#fff',
  //     fontSize: 16,
  //     fontWeight: '600',
  //   },
})