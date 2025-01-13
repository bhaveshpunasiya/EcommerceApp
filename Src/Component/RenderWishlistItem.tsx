import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

interface RenderWishlistItemProps {
  item: any;
  onRemove: (itemId: number) => void;
}

const RenderWishlistItem: React.FC<RenderWishlistItemProps> = ({ item, onRemove }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item?.avatar }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.userName}>
          {item?.first_name} {item?.last_name}
        </Text>
        <Text style={styles.userEmail}>{item?.email}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => onRemove(item?.id)}>
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
    paddingHorizontal: moderateScale(10),
    marginVertical: verticalScale(5),
    elevation: 3,
    shadowColor: '#000',
    paddingVertical:10
  },
  image: {
    width: horizontalScale(80),
    height: verticalScale(50),
    resizeMode: 'contain',
    marginRight: moderateScale(10),
  },
  itemDetails: {
    flex: 1,
  },
  userName: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    marginBottom: verticalScale(4),
  },
  userEmail: {
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

export default RenderWishlistItem;
