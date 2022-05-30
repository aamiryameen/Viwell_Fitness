import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AudioListPlayerScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image style={styles.BannerImage} source={require('../../../assets/images/Group14084.jpg')} />
      <View style={styles.InfoContainer}>
        <Text style={styles.Duration}>01:50</Text>
        <Text style={styles.Title}>Time To Walk</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons name="reload" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons
            name="play-skip-back-sharp"
            size={30}
            color="#fff"></Ionicons>
        </TouchableOpacity>
        <View style={styles.PlayButton}>
          <TouchableOpacity style={styles.ControlButton0}>
            <Ionicons name="play-sharp" size={30} color="#fff"></Ionicons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons
            name="play-skip-forward-sharp"
            size={30}
            color="#fff"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons name="stop" size={30} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>

      <Text style={styles.activity}>Activity</Text>
      <View style={styles.ListContainer0}>
        <View style={styles.ListContainer1}>
          <View style={styles.ListContainer2}>
            <Text style={styles.InfoTitle}>Twenty mint walk left</Text>
            <Text style={styles.InfoDuration}>02:05</Text>
          </View>
        </View>
        <View style={styles.PerBox}>
          <Text style={styles.PerText}>65%</Text>
        </View>
      </View>
      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonTextStyle}>Go back to Home</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default AudioListPlayerScreen;
