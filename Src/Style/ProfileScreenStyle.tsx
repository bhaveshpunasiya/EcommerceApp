import { StyleSheet } from "react-native";
import { moderateScale, verticalScale, horizontalScale } from "../utils/scaling";

export const ProfileScreenStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', 
    },
    contentContainer: {
      padding: moderateScale(20),
      marginTop: -verticalScale(40), 
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    userInfoContainer: {
      alignItems: 'center',
      marginBottom: verticalScale(20),
    },
    userName: {
      fontSize: moderateScale(30),
      fontWeight: 'bold',
      color: '#333',
      marginBottom: verticalScale(5),
    },
    userTagline: {
      fontSize: moderateScale(18),
      fontStyle: 'italic',
      color: '#666',
      marginBottom: verticalScale(10),
    },
    userBio: {
      fontSize: moderateScale(16),
      color: '#777',
      textAlign: 'center',
      marginHorizontal: horizontalScale(30),
    },
    socialLinksContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginVertical: verticalScale(30),
    },
  });