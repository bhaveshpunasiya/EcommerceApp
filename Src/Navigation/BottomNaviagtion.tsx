import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import WishlistScreen from '../Screen/WishlistScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused, size }) => (
          <Ionicons
            name={focused ? 'home' : 'home-outline'} 
            size={size}
            color={focused ? 'blue' : 'black'}
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />

      <Tab.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'} 
              size={size}
              color={focused ? 'blue' : 'gray'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
