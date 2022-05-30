import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './Tracking3Screen.style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Tracking3Screen: FC = () => {
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
          source={require('../../assets/images/anastase-maragos.jpg')}
          style={styles.Box0}>
          <View style={styles.Box0_0}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.Box0_0_0}>
              {/* <Ionicons size={40} name="back" color={'#fff'} /> */}
              <Ionicons name="chevron-back-sharp" size={30} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.Box0_0_0}>
              <Ionicons size={30} name="heart" color={'#fff'} />
            </TouchableOpacity>
          </View>
          <View style={styles.Box0_1}>
            <Text style={styles.Box0_1_Text}>Stephen Cury</Text>
          </View>
        </ImageBackground>

        {/* Box1 */}
        <View style={styles.Box1}>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_0_Text}>Basketball</Text>
          </View>

          <View style={styles.Box1_1}>
            <Text style={styles.Box0_1_Text}>Premium</Text>
          </View>
        </View>

        {/* Box2 */}

        <View style={styles.Box2}>
          <View style={styles.Box2_0}>
            <Ionicons size={40} name="play" color={'#fff'} />
            <Text style={styles.Box2_0_Text}>17 video lessons</Text>
          </View>

          <View style={styles.Box2_1}>
            <Ionicons size={40} name="time-sharp" color={'#fff'} />
            <Text style={styles.Box2_1_Text}>3 hrs, 41 min</Text>
          </View>
        </View>

        {/* Box3 */}
        <View style={styles.Box3}>
          <SegmentedControlTab
            values={['Overview', 'Lessons', 'Watch Party']}
            selectedIndex={singleIndex}
            tabStyle={{
              backgroundColor: '#000',
              height: 50,
              borderColor: '#000',
            }}
            activeTabStyle={{
              backgroundColor: '#000',
              borderBottomColor: 'orange',
              borderBottomWidth: 5,
            }}
            onTabPress={updateSingleSegment}
            activeTabTextStyle={{
              color: '#BDBDBD',
              fontFamily: 'SF Pro Display',
              fontSize: 16,
              fontWeight: '700',
            }}
            tabTextStyle={{
              color: '#fff',
              fontFamily: 'SF Pro Display',
              fontSize: 16,
              fontWeight: '700',
            }}
          />
        </View>
        {/* Box4 */}
        <View style={styles.Box4}>
          <View style={styles.Box4_0}>
            <Image
              source={require('../../assets/images/brooke.jpg')}
              style={styles.Box4_0_Image}
            />
          </View>
          <View style={styles.Box4_1}>
            <Text style={styles.Box4_1_Text}>Stephen Curry</Text>
            <Text style={styles.Box4_1_Text0}>Professional trainer</Text>
          </View>
        </View>

        {/* Box5 */}
        <View>
          <Text style={styles.Box5_Text}>
            Stephen Curry teaches the shooting, ball-handling, and scoring
            techniques that have made him a two-time MVP. For the first time
            ever, Stephen is teaching everything he’s learned, from perfect
            shooting mechanics to on-court concepts and basketball drills.
          </Text>
        </View>

        <View style={{height: 50}}></View>
      </ScrollView>

      {/* Box6 */}
      <View style={styles.Box6}>
        <View style={styles.Box6_0}>
          <TouchableOpacity style={styles.Box6_0_0}>
            <Text style={styles.Box6_0_0_Text}>Start Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Box6_0_1}>
            <Text style={styles.Box6_0_1_Text}>Add to your schedule</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Tracking3Screen;
