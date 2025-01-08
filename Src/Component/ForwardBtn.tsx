import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const ForwardBtn = (title:any) => {
  return (
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{title?.title}</Text>
         <Icon name="arrow-redo" size={24} color="#000" />
      </TouchableOpacity>

  )
}

export default ForwardBtn


const styles = StyleSheet.create({

    button: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 0.5,
      paddingVertical: 10,
      borderRadius: 5,
      width:"100%",
      paddingHorizontal:20,
      marginVertical:10,
    },
    buttonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: '500',
    },
  
  });