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
import MainScreen from './MainSceen';

const Home = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('Home');
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  const overlayRef = useRef();
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <MainScreen/>
      <Animated.View ref={overlayRef} style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue },
        ],
      }}>

        <Animated.View>
          <MenuAnimation
            showMenu={showMenu}
            scaleValue={scaleValue}
            offsetValue={offsetValue}
            closeButtonOffset={closeButtonOffset}
            setShowMenu={setShowMenu}
          />

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20,
          }}>{currentTab}</Text>

          <Image source={logo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25,
          }} />

          <Button style={styles.button}onPress={()=>navigation.navigate('Features')} title="Features"/>

        </Animated.View>

      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

});
