import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

interface RenderCartItemProps {
  item: any;
  onRemove: (itemId: number) => void;
}

const RenderCartItem: React.FC<RenderCartItemProps> = ({ item, onRemove }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item?.title}</Text>
        <Text style={styles.productPrice}>Mrp: ₹{item?.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item.id)}>
        <LinearGradient colors={['#FF6347', '#FF4500']} style={styles.gradientBorder}>
          <Text style={styles.buttonText}>Remove</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    marginVertical: verticalScale(5),
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: horizontalScale(80),
    height: verticalScale(80),
    resizeMode: 'contain',
    marginRight: moderateScale(10),
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
  },
  productPrice: {
    fontSize: moderateScale(14),
    color: '#777',
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBorder: {
    borderRadius: moderateScale(12),
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(5),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
});

export default RenderCartItem;
