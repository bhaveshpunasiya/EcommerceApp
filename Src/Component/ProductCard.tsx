import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

const ProductCard = ({ item, inCart, onAddToCart }: any) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.productName}>{item?.title}</Text>
        <View style={styles.priceRatingContainer}>
          <Text style={styles.productPrice}>Mrp: ₹{item?.price.toFixed(2)}</Text>
          <Text style={styles.productRating}>⭐ {item?.rating?.rate}</Text>
        </View>
        <Text style={styles.productCategory}>Category: {item?.category}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => onAddToCart(item)}>
          <Text style={styles.buttonText}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: moderateScale(16),
    margin: moderateScale(8),
    flex: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: '100%',
    height: verticalScale(120),
    resizeMode: 'contain',
    marginBottom: moderateScale(8),
  },
  productName: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginBottom: verticalScale(4),
  },
  productPrice: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    marginBottom: verticalScale(8),
  },
  productCategory: {
    fontSize: moderateScale(12),
    color: '#777',
    marginBottom: verticalScale(4),
  },
  productRating: {
    fontSize: moderateScale(12),
    color: '#888',
    marginBottom: verticalScale(8),
    marginLeft: horizontalScale(10),
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  priceRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: verticalScale(8),
  },
});

export default ProductCard;
