import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  ImageBackground,
  ScrollView
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WalkingChalange from '../../assets/svg/WalkingChalange.svg'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; 


const ArtcleDetailScreen: FC = () => {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      {/* Box1 */}

      <View style={styles.Box0}>
        <View style={styles.Box0_0}>
          <ImageBackground
            source={require('../../assets/images/Image.jpg')}
            style={styles.Box0_0_Image}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{marginTop: 15, marginLeft: 10}}>
              <Ionicons name="chevron-back-sharp" size={24} color={'#fff'} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.Box0_1}>
          <Text style={styles.Box0_1_Text}>
            5 Effective Exercises to Try Out at{'\n'} Home
          </Text>
          <Text style={styles.Box0_1_Text1}>{'\n'} 5 Oct 2021  .  3 mint read</Text>
        </View>
      </View>
      <View style={styles.Box1}>
        <Text style={styles.Box1_Text}>
          Returning to the gym after the Conditional Movement Control Order
          (CMCO) can be a daunting scenario for many fitness enthusiasts. The
          gym is a communal space, hence why these individuals fear that going
          back to the gym can increase their risk of contracting COVID-19. This
          is a logical concern as respiratory droplets can live on surfaces for
          days1.{'\n'}
          {'\n'}However, gyms and fitness centres may not necessarily pose a
          bigger health risk to you than other communal areas1. This is because
          gyms and fitness centres will most likely undergo stringent
          sanitisation
        </Text>
      </View>

      {/* Box2 */}

      <View style={styles.Box2}>
        <View style={styles.Box2_0}>
          <Text style={styles.Box2_0_Text}>Related Habit</Text>
        </View>
        <TouchableOpacity style={styles.Box2_1}>
          <Text style={styles.Box2_1_Text}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Box3 */}
<>
<View style={{...styles.Box3, width: wp(56)}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={styles.Box3_Text}>
        Habits with   
        </Text>
         <AntDesign name='heart' color="#9c1e35" size={hp(2)} style={{marginHorizontal: wp(1), marginTop: hp(0.4)}}/>
        <Text style={styles.Box3_Text}>symbol can be automaticlly synced </Text>
  </View>
  <Text style={styles.Box3_Text}>from Apple Health.</Text>
      </View>

     
</>
    

      {/* Box4 */}
      <View style={styles.Box4}>
        <View style={styles.Box4_0}>
          <ImageBackground
            source={require('../../assets/images/image121.jpg')}
            borderRadius={20}
            style={styles.Box4_0_Image}>
            <Text style={styles.Box4_0_Text}>Running</Text>
          </ImageBackground>
        </View>
        <View style={styles.Box4_1}>
          <ImageBackground
            source={require('../../assets/images/image111.jpg')}
            borderRadius={20}
            style={styles.Box4_1_Image}>
            <Text style={styles.Box4_1_Text}>Quick{'\n'}Stretch</Text>
          </ImageBackground>
        </View>
      </View>

      {/* BOX5 */}

      <View style={styles.Box5}>
        <View style={styles.Box5_0}>
          <View style={styles.Box5_0_0}>
            <Ionicons name="heart-outline" size={24} color={'#BDBDBD'} />
            <Text style={styles.Box5_0_0_Text}>120</Text>
          </View>

          <View style={styles.Box5_0_1}>
            <Ionicons name="ios-chatbox-outline" size={24} color={'#BDBDBD'} />
            <Text style={styles.Box5_0_1_Text}>120</Text>
          </View>
        </View>
        <View style={styles.Box5_1}></View>
        <View style={styles.Box5_2}>
          <View style={styles.Box5_2_0}>
            <Ionicons name="bookmark-outline" size={24} color={'#BDBDBD'} />
          </View>
          <View style={styles.Box5_2_1}>
            <Ionicons name="ios-share-social" size={24} color={'#BDBDBD'} />
          </View>
        </View>
      </View>
      <View style={{height: 50}}></View>
    </ScrollView>
  );
};

export default ArtcleDetailScreen;
