import { StyleSheet } from "react-native";
import { moderateScale, verticalScale, horizontalScale } from "../utils/scaling";

export const WishlistScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: moderateScale(10),
    },
    backButton: {
      position: 'absolute',
      top: verticalScale(10),
      left: horizontalScale(10),
      zIndex: 10,
      padding: moderateScale(5),
    },
    title: {
      fontSize: moderateScale(18),
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom:verticalScale(10)
    },
    emptyCartText: {
      fontSize: moderateScale(16),
      color: '#888',
      textAlign: 'center',
      marginTop: verticalScale(20),
    },
    list: {
      paddingHorizontal: horizontalScale(8),
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: moderateScale(16),
      margin: moderateScale(8),
      flexDirection: 'row',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
    },
    image: {
      width: horizontalScale(80),
      height: verticalScale(80),
      resizeMode: 'contain',
      marginRight: moderateScale(10),
    },
    itemDetails: {
      flex: 1,
      justifyContent: 'center',
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
    removeButton: {
      borderRadius: moderateScale(12),
      width: verticalScale(80),
      height: verticalScale(30),
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: moderateScale(10),
    },
    gradientBorder: {
      flex: 1,
      borderWidth: 1,
      borderRadius: moderateScale(12),
      borderColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      padding: moderateScale(4),
    },
    buttonText: {
      fontSize: moderateScale(16),
      color: '#fff',
    },
    proceedButton: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#00b894',
      paddingVertical: moderateScale(15),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: moderateScale(10),
      marginHorizontal: moderateScale(10),
      marginBottom: verticalScale(20),
    },
    proceedButtonText: {
      fontSize: moderateScale(16),
      fontWeight: '600',
      color: '#fff',
    },
  });