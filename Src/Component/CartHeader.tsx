import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

const CartHeader = ({ cartCount,onPress ,title}: any) => {
  return (
    <View style={styles.header}>
      <Image source={require('../Image/logo.png')} style={styles.logo1} />
      {
        title ? <Text style={styles.Header}>{title}</Text> : null
      }
      <TouchableOpacity style={styles.cartIconContainer} onPress={onPress} >
        <Image source={require('../Image/cart.png')} style={styles.logo} />
        <Text style={styles.cartCount}>{cartCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    marginHorizontal: 10,
  },
  logo: {
    width: horizontalScale(40),
    height: verticalScale(40),
    resizeMode: 'contain',
  },
  logo1: {
    width: horizontalScale(60),
    height: verticalScale(50),
    resizeMode: 'contain',
  },
  cartIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  cartCount: {
    position: 'absolute',
    left: 30,
    top: 5,
    backgroundColor: '#ff3d00',
    color: '#fff',
    borderRadius: 10,
    width: verticalScale(15),
    height: verticalScale(15),
    textAlign: 'center',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
  },
  Header:{
    fontSize: moderateScale(24),
    fontWeight: '600',
    marginBottom: verticalScale(4),
  }
});

export default CartHeader;
