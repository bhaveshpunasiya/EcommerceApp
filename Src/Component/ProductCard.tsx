import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { horizontalScale, verticalScale, moderateScale } from '../utils/scaling';

const ProductCard = ({ item, isLiked, onLikeToggle }: any) => {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: item.avatar }} style={styles.image}>
          <TouchableOpacity style={styles.likeButton} onPress={() => onLikeToggle(item)}>
            <Icon
              name={isLiked ? 'heart' : 'heart-outline'}
              size={moderateScale(24)}
              color={isLiked ? 'red' : '#black'}
            />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.userName}>
          {item?.first_name} {item?.last_name}
        </Text>
        <Text style={styles.userEmail}>{item?.email}</Text>
      </View>

      <View style={styles.buttonContainer}>
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
    position: 'relative', // Ensure that the card is positioned relatively for absolute positioning of the like icon
  },
  image: {
    width: '100%',
    height: verticalScale(120), // Adjusted to make the image container a bit taller
    resizeMode: 'cover',
  },
  userName: {
    fontSize: moderateScale(14),
    fontWeight: '600',
    marginBottom: verticalScale(4),
  },
  userEmail: {
    fontSize: moderateScale(12),
    color: '#777',
    marginBottom: verticalScale(8),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginRight: moderateScale(5),
  },
  buttonText: {
    fontSize: moderateScale(12),
    fontWeight: '600',
  },
  likeButton: {
    position: 'absolute',
    right: moderateScale(-5), 
    backgroundColor: '#fff',  
    borderRadius: moderateScale(20),
    padding: moderateScale(5), 
    borderTopRightRadius:0,
    borderTopLeftRadius:0,
    borderBottomEndRadius:0
  },
});

export default ProductCard;
