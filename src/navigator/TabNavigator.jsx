import { Platform, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import User from '../screen/User'
import Home from '../screen/Home'
import Wishlist from '../screen/Wishlist'
import Cart from '../screen/Cart'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#0052FF",
        tabBarInactiveTintColor: '#000000',


        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: '#f1f5f9',
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingBottom: Platform.OS === 'ios' ? 28 : 0,
          elevation: 0,
          shadowOpacity: 0,
        },

        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'Home') iconSource = require('../assets/icons/Shop.png');
          else if (route.name === 'Wishlist') iconSource = require('../assets/icons/heart.png');
          else if (route.name === 'Cart') iconSource = require('../assets/icons/cart.png');
          else if (route.name === 'User') iconSource = require('../assets/icons/user.png');


          return (
            <SafeAreaView>
              <Image
                source={iconSource}
                style={{
                  width: 20,
                  height: 20,
                  marginTop:20,
                  tintColor: focused ? '#000000' : '#004CFF'
                }}
               
              />
               <View
              style={{borderColor:focused ? "#000000": 'transparent',
              borderBottomWidth:3,
             marginTop:3,
              width:12,
            position:"relative",
            left:5.1,
              
              }}/>
            </SafeAreaView>
          );
        }
      })}

    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="User" component={User} />

    </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({})