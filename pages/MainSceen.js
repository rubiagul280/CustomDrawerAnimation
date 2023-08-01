/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';

// Tab ICons...
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
// Photo
import logo from '../assets/logo.jpg';

import MenuAnimation from './AnimatedMenu';
import TabButton from './TabButtons';
import profile from '../assets/profile.png';

const MainScreen = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8,
        }} />

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20,
        }}>Rubia Gulzar</Text>


        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, 'Home', home)}
          {TabButton(currentTab, setCurrentTab, 'Features', search)}
          {TabButton(currentTab, setCurrentTab, 'Notifications', notifications)}

        </View>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
