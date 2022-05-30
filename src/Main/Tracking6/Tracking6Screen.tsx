import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './Tracking6Screen.style';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const Tracking5Screen: FC = () => {
  const navigation = useNavigation();
  const [singleIndex, setSingleIndex] = useState(0);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const updateSingleSegment = (index: React.SetStateAction<number>) => {
    setSingleIndex(index);
  };
  return (
    <>
      <ScrollView style={styles.container} nestedScrollEnabled={true}>
        {/* Box1 */}
        <ImageBackground
          source={require('../../assets/images/anastase1.png')}
          style={styles.Box0}>
          <View style={styles.Box0_0}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ alignSelf: 'center' }}>
              {/* <Ionicons size={40} name="back" color={'#fff'} /> */}
              <Ionicons name="chevron-back-sharp" size={30} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Box0_0_1}>
              <Text style={styles.Box0_0_1_Text}>Premium</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Box0_1}>
            <Text style={styles.Box0_1_Text}>ViWell</Text>
            <Text style={styles.Box0_1_Text0}>10K Steps {'\n'}20 Days</Text>
          </View>
        </ImageBackground>

        {/* Box1 */}
        <View style={styles.Box1}>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_0_Text}>
              Try to complete 10,000 Steps every day for the next 20 days
            </Text>
          </View>
        </View>

        {/* Box2 */}
        <View style={styles.Box2}>
          <View style={styles.Box2_0}>
            <Ionicons size={40} name="play" color={'#fff'} />
            <Text style={styles.Box2_0_Text}>Walking</Text>
          </View>

          <View style={styles.Box2_1}>
            <Ionicons size={40} name="time-sharp" color={'#fff'} />
            <Text style={styles.Box2_1_Text}>20 Days</Text>
          </View>
          <View style={styles.Box2_1}>
            <Ionicons size={40} name="time-sharp" color={'#fff'} />
            <Text style={styles.Box2_1_Text}>3000 Points</Text>
          </View>
        </View>

        {/* Box3 */}
        <View style={styles.Box3}>
          <View style={styles.Box3_0}>
            <Text style={styles.Box3_0_Text}>Rewards</Text>
          </View>

          <View style={styles.Box3_1}>
            <Text style={styles.Box3_1_Text}>See all</Text>
          </View>
        </View>

        {/* Box4 */}

        <ImageBackground
          source={require('../../assets/images/anastase2.png')}
          style={styles.Box4}>
          <TouchableOpacity style={styles.Box4_0}>
            <Text style={styles.Box4_0_Text}>3000 Points</Text>
          </TouchableOpacity>

          <View style={styles.Box4_1}>
            <Text style={styles.Box4_1_Text}>40% Discount{'\n'}</Text>

            <Text style={styles.Box4_1_Text0}>nike.com</Text>
          </View>
        </ImageBackground>

        {/* Box5 */}
        <View style={styles.Box5}>
          <View style={styles.Box5_0}>
            <Text style={styles.Box5_0_Text}>Audio</Text>
          </View>

          <View style={styles.Box5_1}>
            <Text style={styles.Box5_1_Text}>See all</Text>
          </View>
        </View>

        {/* Box6 */}
        <View style={styles.Box6}>
          <Image
            source={require('../../assets/images/image11.png')}
            style={styles.Box6_Image}
          />

          <Image
            source={require('../../assets/images/image12.png')}
            style={styles.Box6_Image}
          />
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>

      {/* Box7 */}
      <View style={styles.Box7}>
        <View style={styles.Box7_0}>
          <TouchableOpacity style={styles.Box7_0_0}>
            <Ionicons name="calendar" color={'#fff'} size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Box7_0_1}>
            <Text style={styles.Box7_0_1_Text}>Start Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Tracking5Screen;
