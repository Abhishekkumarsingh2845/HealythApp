import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Explore from "./Explore";
import Favourite from "./Favourite";
import Profile from "./Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


const exploreIcon = require('./../Assets/p1.png');
const favouriteIcon = require('./../Assets/bx-bookmark (1).png');
const profileIcon = require('./../Assets/p2.png');

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#085A46" },
      }}
    >
      <Tab.Screen 
        name="Explore" 
        component={Explore} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={exploreIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? 'black' : '#fff', 
              }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Favourite" 
        component={Favourite} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={favouriteIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? 'black' : '#fff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={profileIcon}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? 'black' : '#fff',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
