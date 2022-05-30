import React, {FC, useState} from 'react';
import {View, TouchableOpacity, Text, Image,ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const AudioPlayerScreen: FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.BannerImage} source={require('../../../assets/images/Group14085.jpg')} />
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
        <View style={{height:50}}></View>
    </ScrollView>
  );
};

export default AudioPlayerScreen;
