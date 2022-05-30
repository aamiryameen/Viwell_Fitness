import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Header from '../../components/Header/Header';
const DreamScreen: FunctionComponent = (prop: any) => {
  const [singleIndex, setSingleIndex] = useState(0);

  //     useEffect(() => {
  //         const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // const d = new Date(days);
  // const dayName = d.toString().split(3);
  // console.log(dayName)
  //     }, []);
  const DATA = [
    {
      id: 1,
      title: 'Avoid eating unhealthy food',
      days: 'S M T W T F S',
    },
    {
      id: 2,
      title: 'Avoid situations that would prompt unnecessary snacking',
      days: 'S M T W T F S',
    },
    {
      id: 3,
      title: 'Resist late night cravings',
      days: 'S M T W T F S',
    },
    {
      id: 4,
      title: 'Go to the gym',
      days: 'S M T W T F S',
    },
    {
      id: 5,
      title: 'Allow occasional cheat meals',
      days: 'S M T W T F S',
    },
    {
      id: 6,
      title: 'Track my food',
      days: 'S M T W T F S',
    },
  ];

  const DATA0 = [
    {
      id: 1,
      title: 'Avoid eating unhealthy food',
    },
  ];

  const updateSingleSegment = (index: React.SetStateAction<number>) => {
    setSingleIndex(index);
  };

  const renderListView = (index: any, item: any) => {
    return (
      <View style={styles.listConatiner}>
        <View style={{width: '66%'}}>
          <Text style={styles.title}>{item.title} </Text>
        </View>
        <View style={styles.weekContainer}>
          <Text style={styles.Days}>{item.days} </Text>
        </View>
      </View>
    );
  };
  const renderListView0 = (index: any, item: any) => {
    return (
      <View style={styles.listConatiner}>
        <View style={{width: '80%'}}>
          <Text style={styles.title}>{item.title} </Text>
        </View>
        <View style={styles.weekContainer0}>
          <Icon size={24} name="check" color={'#828282'} />
        </View>
      </View>
    );
  };
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require('../../assets/images/Rectangle.jpg')}
            style={{height: 467, width: '100%'}}
          >
            <Header />
          </ImageBackground>
          <View style={styles.Weight}>
            <View style={styles.Weight0}>
              <Text style={styles.Weight_Text}>Lose Weight</Text>
              <Text style={styles.Weight_Text0}>
                Remember! you have control over your weight{' '}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.DueDate}>Due Date</Text>
        <View style={styles.CalBox}>
          <View style={styles.IconBox}>
            <Icon size={24} name="calendar" color={'#fff'} />
            <Text style={styles.month}>July </Text>
            <Text style={styles.day}>10 </Text>
            <Text style={styles.year}>2021 </Text>
          </View>
        </View>

        <Text style={styles.reminder}>Reminder</Text>
        <View style={styles.timeBox}>
          <Text style={styles.every}>Everyday at</Text>

          <View style={styles.timeShow}>
            <Text style={styles.time}>12:00 PM </Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.Box3}>
            <SegmentedControlTab
              values={['Habit', 'Task', 'Note']}
              selectedIndex={singleIndex}
              tabStyle={{
                backgroundColor: '#252525',
                height: 50,
                borderColor: '#252525',
              }}
              activeTabStyle={{
                backgroundColor: '#252525',
                borderBottomColor: '#E37C00',
                borderBottomWidth: 5,
              }}
              onTabPress={updateSingleSegment}
              activeTabTextStyle={{
                color: '#ffff',
                fontFamily: 'SF Pro Display',
                fontSize: 16,
                fontWeight: '700',
              }}
              tabTextStyle={{
                color: '#BDBDBD',
                fontFamily: 'SF Pro Display',
                fontSize: 16,
                fontWeight: '700',
              }}
            />
          </View>
          {singleIndex == 0 ? (
            <View style={styles.habit}>
              <Text style={styles.habitText}>Habit</Text>
              <Text style={styles.info}>Repeat an action for each day</Text>
              <FlatList
                data={DATA}
                keyExtractor={(item, index) => (index + 1).toString()}
                // contentContainerStyle={styles.contentContanier}
                showsVerticalScrollIndicator={false}
                renderItem={({index, item}) => renderListView(index, item)}
              />

              <View style={{height: 100}}></View>
            </View>
          ) : singleIndex == 1 ? (
            <View style={styles.habit}>
              <Text style={styles.habitText}>Tasks</Text>
              <Text style={styles.info}>Set Due dates and check off items</Text>
              <FlatList
                data={DATA0}
                keyExtractor={(item, index) => (index + 1).toString()}
                // contentContainerStyle={styles.contentContanier}
                showsVerticalScrollIndicator={false}
                renderItem={({index, item}) => renderListView0(index, item)}
              />

              <View style={{height: 100}}></View>
            </View>
          ) : singleIndex == 2 ? (
            <View style={styles.habit}>
              <Text style={styles.habitText}>Note</Text>
              <Text style={styles.info}>
                {'\n'}1:Eat healthier for a month{'\n'}2: Make exercise a part
                of my daily routine{'\n'}3: Eat healthier for 3 months{'\n'}4:
                Reach my goal weight{'\n'}4: Reach my ideal body fat percentage
                {'\n'}
                {'\n'} Tips✨ {'\n'}
                {'\n'}• Guidelines taken from the World Health{'\n'}Organization
                and WebMD{'\n'}-https://bit.ly/3sZXMSC
                {'\n'}-https://bit.ly/3sYKMg7{'\n'}-https://wb.md/3nrsyTr{'\n'}
                {'\n'}• Medical Disclaimer: Consult your physician or another
                health care professional before starting any exercise or
                nutrition program.{'\n'}
                {'\n'}• These are general tips - weight loss comes in different
                forms!{'\n'}
                {'\n'}• Weight loss, or fat loss (to be more precise), happens
                with changes in both diet and exercise. It can take time, so try
                to be patient with yourself and enjoy the process of making your
                body healthier! • Working out with friends is a great way to
                keep yourself on track.
              </Text>

              <View style={{height: 50}}></View>
            </View>
          ) : null}
        </View>
      </ScrollView>
      <View style={styles.ButtonBox}>
        <View style={styles.Button}>
          <Text style={styles.ButtonText}>Start This Dream</Text>
        </View>
      </View>
    </>
  );
};

export default DreamScreen;
