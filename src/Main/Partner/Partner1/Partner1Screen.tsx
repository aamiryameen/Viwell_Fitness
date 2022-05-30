import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './Partner1Screen.style';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header/Header';
import { useNavigation } from '@react-navigation/native';
const Partner1Screen: FC = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      {/* Box0 */}
      {/* <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>How do you feel today?</Text>
      </View> */}
      <ImageBackground
        source={require('../../../assets/images/PartnerHeader.png')}
        style={{ height: 360, width: '100%' }}>
        <Header />
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.Box1}>
          <Text style={styles.Box1_Text}>Start Now</Text>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>
        </View>
        <Text style={styles.Box1_Text1}>You Just Saved </Text>
        <Text style={styles.Box1_Text2}>300 AED</Text>
        <Image
          source={require('../../../assets/images/Mask.png')}
          style={{ alignSelf: 'center' }}
        />
        <TouchableOpacity onPress={() => navigation.reset({
          index: 0,
          routes: [{ name: 'Partner1' }]
        })}
          style={{
            width: '100%',
            height: 56,
            borderRadius: 16,
            backgroundColor: '#E37C00',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.Box1_Text3}>Back</Text>

        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Partner1Screen;
