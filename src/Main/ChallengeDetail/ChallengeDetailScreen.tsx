import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import WalkingChalange from '../../assets/svg/WalkingChalange.svg'
import PointsChalange from '../../assets/svg/PointsChalange.svg'
import Endurance from '../../assets/svg/Endurance.svg'
import Audio1 from '../../assets/svg/audio-1.svg';
import Audio2 from '../../assets/svg/audio-2.svg';

const DATA0 = [
  {
    id: 1,
    points: '3000 Points',
    discount: '40% Discount',
    name: 'nike.com',
    image: require('../../assets/images/anastase2.png'),
  },
  {
    id: 1,
    points: '3000 Points',
    discount: '40% Discount',
    name: 'nike.com',
    image: require('../../assets/images/anastase2.png'),
  },
  {
    id: 1,
    points: '3000 Points',
    discount: '40% Discount',
    name: 'nike.com',
    image: require('../../assets/images/anastase2.png'),
  },
];
const ChallengeDetailScreen: FC = () => {
  
  const navigation = useNavigation();
  const [singleIndex, setSingleIndex] = useState(0);

  const [audios, setAudios] = useState([
    <Audio1 />,
    <Audio2 />,
    <Audio1 />,
    <Audio2 />,
    <Audio1 />,
    <Audio2 />,
  ]);
  const renderHorizontalSeparator = () => {
    return <View style={{width: 20}} />;
  };
  const renderHorizontalListView = (index: any, item: any) => {
    return <View>{item}</View>
     
  };

  const renderListView = (index: any, item: any) => {
    return (
      <ImageBackground source={item.image} style={styles.Box_Image}>
        <TouchableOpacity style={styles.Box4_0}>
            <Text style={styles.Box4_0_Text}>{item.points}</Text>
          </TouchableOpacity>

          <View style={styles.Box4_1}>
            <Text style={styles.Box4_1_Text}>{item.discount}{'\n'}</Text>
           <Text style={styles.Box4_1_Text0}>{item.name}</Text>
           </View>
      </ImageBackground>
    );
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
              style={{alignSelf: 'center'}}>
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
            <WalkingChalange />
            {/* <Ionicons size={40} name="play" color={'#fff'} /> */}
            <Text style={styles.Box2_0_Text}>Walking</Text>
          </View>

          <View style={styles.Box2_1}>
            <Endurance />
            {/* <Ionicons size={40} name="time-sharp" color={'#fff'} /> */}
            <Text style={styles.Box2_1_Text}>20 Days</Text>
          </View>
          <View style={styles.Box2_1}>
            <PointsChalange />
            {/* <Ionicons size={40} name="time-sharp" color={'#fff'} /> */}
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
        <View>
        <FlatList
                data={DATA0}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsVerticalScrollIndicator={false}
                renderItem={({index, item}) =>
                renderListView(index, item)
                }
              />
        {/* <FlatList
              data={DATA0}
              horizontal={true}
              keyExtractor={(item, index) => (index + 1).toString()}
              ItemSeparatorComponent={renderHorizontalSeparator}
              contentContainerStyle={styles.contentContanier}
              showsVerticalScrollIndicator={false}
              renderItem={({index, item}) => renderListView(index, item)}
            /> */}
          </View>
        {/* <ImageBackground
          source={require('../../assets/images/anastase2.png')}
          style={styles.Box4}>
          <TouchableOpacity style={styles.Box4_0}>
            <Text style={styles.Box4_0_Text}>3000 Points</Text>
          </TouchableOpacity>

          <View style={styles.Box4_1}>
            <Text style={styles.Box4_1_Text}>40% Discount{'\n'}</Text>
            <Text style={styles.Box4_1_Text0}>nike.com</Text>
          </View>
        </ImageBackground> */}

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
        {/* <View style={styles.Box6}> */}
        <FlatList
                data={audios}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsVerticalScrollIndicator={false}
                renderItem={({index, item}) =>
                  renderHorizontalListView(index, item)
                }
              />
         
        {/* </View> */}
        <View style={{height: 150}}></View>
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

export default ChallengeDetailScreen;
