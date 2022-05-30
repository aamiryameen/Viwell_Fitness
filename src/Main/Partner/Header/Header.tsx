//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// create a component
const Header = (props: any) => {
  console.log(props.navigation)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props?.navigation?.goBack()} >
        <Icon size={24} name="arrow-back" color={"#fff"} />
      </TouchableOpacity>
      <Icon size={24} name="heart" color={"#fff"} />
    </View >
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height: 100,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
});

//make this component available to the app
export default Header;
