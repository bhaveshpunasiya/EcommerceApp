import { StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: () => null,
        tabBarIcon: ({ focused, size }) => (
          <Image
            source={require('../Image/Home.png')}
            style={{
              width: size,
              height: size,
              tintColor: focused ? 'blue' : 'black',  
            }}
          />
        ),
      }}
    >
      <Tab.Screen
       options={{
          headerShown: false,
        }}
         name="HomeScreen" component={HomeScreen} />
      
      <Tab.Screen
       
        name="ProfileScreen" 
        component={ProfileScreen} 
        options={{
            headerShown: false,
          tabBarIcon: ({ focused, size }) => (
            <Image
              source={require('../Image/Profile.png')}  
              style={{
                width: size,
                height: size,
                tintColor: focused ? 'blue' : 'gray', 
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});

