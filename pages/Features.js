/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// Photo
import photo from '../assets/photo.jpg';
import TabButton from './TabButtons';
import MenuAnimation from './AnimatedMenu';
import MainScreen from './MainSceen';

const Features = ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState('Features');
  const [showMenu, setShowMenu] = useState(false);
  const overlayRef = useRef();
  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
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

          <Image source={photo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25,
          }} />

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold'
            , paddingTop: 15,
            paddingBottom: 5,
          }}>Hello there!</Text>


        </Animated.View>

      </Animated.View>
    </SafeAreaView>

  );
};

export default Features;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5359D1',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

