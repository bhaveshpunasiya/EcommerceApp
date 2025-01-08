import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "../utils/scaling";

export const HomeScreenstyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: moderateScale(10),
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    list: {
      paddingHorizontal: horizontalScale(8),
    },
  });