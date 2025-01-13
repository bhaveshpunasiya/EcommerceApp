import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
  } from 'react-native-indicators';

const ActivityIndicatorComman = () => {
  return (
    <SkypeIndicator  size={25} color='#27e398'/>
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