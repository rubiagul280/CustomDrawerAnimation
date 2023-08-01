/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Animated, Image, TouchableOpacity } from 'react-native';
import menu from '../assets/menu.png';

const MenuAnimation = ({ showMenu, scaleValue, offsetValue, closeButtonOffset, setShowMenu }) => {
  const toggleMenu = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.88,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offsetValue, {
      toValue: showMenu ? 0 : 230,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    <TouchableOpacity onPress={toggleMenu}>
      <Image
        source={showMenu ? menu : menu}
        style={{
          width: 20,
          height: 20,
          tintColor: 'black',
          marginTop: 40,
        }}
      />
    </TouchableOpacity>
  );
};

export default MenuAnimation;
