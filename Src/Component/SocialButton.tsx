import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../utils/scaling'; // Import scaling function

// Defining the types for the props
interface SocialButtonProps {
  text: string;
  gradientColors: string[]; // Array of gradient colors
}

const SocialButton: React.FC<SocialButtonProps> = ({ text, gradientColors }) => {
  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.buttonBorder}
    >
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  buttonBorder: {
    borderRadius: moderateScale(12),
    padding: moderateScale(3),
  },
  button: {
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(20),
    borderRadius: moderateScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: '#000',
    fontWeight: 'bold',
  },
});

export default SocialButton;
