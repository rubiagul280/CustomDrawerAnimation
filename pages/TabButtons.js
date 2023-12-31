/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';


// For multiple Buttons...
export default function TabButton(currentTab, setCurrentTab, title, image){
  return (

    <TouchableOpacity onPress={() => {
      if (title == 'LogOut') {
        // Do your Stuff...
      } else {
        setCurrentTab(title);
      }
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15,
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? '#5359D1' : 'white',
        }} />

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? '#5359D1' : 'white',
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
};
