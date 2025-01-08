// ProfileHeader.js
import React from 'react';
import { View, ImageBackground, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale, verticalScale, horizontalScale } from '../utils/scaling';

interface ProfileHeaderProps {
    backgroundImage: string;
    profileImage: string;
}


const ProfileHeader = ({ backgroundImage, profileImage }:ProfileHeaderProps) => {
  return (
    <ImageBackground
      source={{ uri: backgroundImage }} 
      style={styles.backgroundImage}
    >
      <View style={styles.profileImageContainer}>
        <LinearGradient
          colors={['#FF5F6D', '#FFC371']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.profileImageBorder}
        >
          <Image
            source={{ uri: profileImage }} // Profile image URL passed as prop
            style={styles.profileImage}
          />
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: verticalScale(170), 
    justifyContent: 'flex-end', 
    paddingBottom: verticalScale(40), 
    backgroundColor: '#f8f8f8',
  },
  profileImageContainer: {
    width: horizontalScale(120),
    height: verticalScale(100),
    borderRadius: 60, // Circle profile picture
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  profileImageBorder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    padding: moderateScale(4),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 60,
  },
});
