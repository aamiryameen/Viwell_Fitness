import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  ImageBackground,
} from 'react-native';
import styles from './Tracking2Screen.style';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


const Tracking1Screen: FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

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
              style={{ marginTop: 15, marginLeft: 10 }}>
              <Ionicons name="chevron-back-sharp" size={24} color={'#fff'} />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <View style={styles.Box0_1}>
          <Text style={styles.Box0_1_Text}>
            5 Effective Exercises to Try Out at Home
          </Text>
          <Text style={styles.Box0_1_Text1}>{'\n'} 5 oct 2021 3 mint read</Text>
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

      <View style={styles.Box3}>
        <Text style={styles.Box3_Text}>
          Habits with symbol can be automaticlly synced from Apple Health.
        </Text>
      </View>

      {/* Box4 */}
      <View style={styles.Box4}>
        <View style={styles.Box4_0}>
          <ImageBackground
            source={require('../../assets/images/image_12.jpg')}
            borderRadius={20}
            style={styles.Box4_0_Image}>
            <Text style={styles.Box4_0_Text}>Running</Text>
          </ImageBackground>
        </View>
        <View style={styles.Box4_1}>
          <ImageBackground
            source={require('../../assets/images/image_11.jpg')}
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
      <View style={{ height: 50 }}></View>
    </ScrollView>
  );
};

export default Tracking1Screen;
