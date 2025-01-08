import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SocialButton from '../Component/SocialButton';
import ProfileHeader from '../Component/ProfileHeader'; 
import { moderateScale, verticalScale, horizontalScale } from '../utils/scaling';
import { ProfileScreenStyle } from '../Style/ProfileScreenStyle';
import ForwardBtn from '../Component/ForwardBtn';

const ProfileScreen = () => {
  return (
    <View style={ProfileScreenStyle.container}>
      <ProfileHeader
        backgroundImage="https://www.w3schools.com/w3images/forest.jpg" 
        profileImage="https://www.w3schools.com/w3images/avatar2.png" 
      />

      <View style={ProfileScreenStyle.contentContainer}>
        <View style={ProfileScreenStyle.userInfoContainer}>
          <Text style={ProfileScreenStyle.userName}>John Doe</Text>
          <Text style={ProfileScreenStyle.userTagline}>Mobile Developer</Text>
          <Text style={ProfileScreenStyle.userBio}>
            Passionate developer with a love for building intuitive and scalable applications.
          </Text>
        </View>

        <View>
          <ForwardBtn title="View Order"/>
          <ForwardBtn title="Address"/>
          <ForwardBtn title="Help & Support"/>
        </View>

      
        <View style={ProfileScreenStyle.socialLinksContainer}>
          <SocialButton text="FaceBook" gradientColors={['#FF5F6D', '#FFC371']} />
          <SocialButton text="Insta" gradientColors={['#FF5F6D', '#FFC371']} />
          <SocialButton text="Twitter" gradientColors={['#FF5F6D', '#FFC371']} />
        </View>

      </View>
    </View>
  );
};



export default ProfileScreen;

