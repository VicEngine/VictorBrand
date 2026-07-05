import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from '../screen/User'
import Home from '../screen/Home'
import Wishlist from '../screen/Wishlist'
import Payment from '../screen/Payment'
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
   <Tab.Screen name="Wishlist" component={Wishlist}/>
      <Tab.Screen name="Payment" component={Payment}/>
      <Tab.Screen name="User" component={User} />
   
    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})