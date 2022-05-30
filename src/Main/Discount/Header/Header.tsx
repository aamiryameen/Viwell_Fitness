//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// create a component
const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity  onPress={()=>navigation.goBack()}>
        <Icon size={24} name="arrow-back" color={"#fff"} />
      </TouchableOpacity>
      <Icon size={24} name="heart" color={"#fff"}/>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    height:100,
    width:'93%',
    flexDirection:'row',
    alignSelf:'center'
  },
});

//make this component available to the app
export default Header;
