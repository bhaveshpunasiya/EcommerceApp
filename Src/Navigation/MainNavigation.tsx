import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomNaviagtion from './BottomNaviagtion'
import CartScreen from '../Screen/WishlistScreen'
const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomNaviagtion" component={BottomNaviagtion} />
      </Stack.Navigator>
    </NavigationContainer>

    )
}

export default MainNavigation

const styles = StyleSheet.create({})