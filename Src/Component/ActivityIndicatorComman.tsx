import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    BarIndicator,
  } from 'react-native-indicators';

const ActivityIndicatorComman = () => {
  return (
    <View style={styles.container}>
      <BarIndicator count={5} size={25} color='#27e398'/>
    </View>
  )
}

export default ActivityIndicatorComman

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
})