import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  FlatList,
  Alert,
  Image,
  ScrollView
} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import calendarImage from '../../assets/svg/calendar.png';
import Bitmap from '../../assets/svg/Bitmap.jpg';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
// import {Image} from 'react-native-svg';
import Event from '../../assets/svg/event.svg';
import calendarEmpty from '../../assets/svg/calendarEmpty.png';
import { FontWeights } from '../../styles';

const INITIAL_DATE = '2020-02-02';

const CalendarScreen: FunctionComponent = (prop: any) => {
  const [currentDate, setDate] = useState();
  const [selected, setSelected] = useState('');
  const [status, setStatus] = useState(true)

  const [events, setEvents] = useState([
    <Event />,
    <Event />,
    <Event />,
    <Event />,
    <Event />,
    <Event />,
  ]);

  const onDayPress= (day:any) => {
    try {
      setSelected(day.dateString);
      {status?setStatus(false):setStatus(true)}
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    try {
      const date = new Date().getDate();
      return setDate(date);
    } catch (err) {
      console.log(err);
    }
  }, [currentDate]);

  

  const renderHorizontalSeparator = () => {
    return <View style={{width: 20}} />;
  };

  const renderHorizontalListView = (index: any, item: any) => {
    return <View>{item}</View>;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <Text style={styles.HeaderText}>Calendar</Text>
          <ImageBackground
            source={(require = calendarImage)}
            style={{
              height: 24,
              width: 24,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 10, marginTop: 3}}>{currentDate}</Text>
          </ImageBackground>
        </View>
        <Fragment>
          <Calendar
            current={currentDate}
            minDate={'2012-05-10'}
            maxDate={'2050-01-26'}
            onDayPress={onDayPress}
            
            // style={{
            //   borderWidth: 1,
            //   borderColor: 'gray',
            //   height: 350,
            // }}
            // renderArrow={direction => <Icon size={30} name='keyboard-arrow-left' />}
            markedDates={{
              '2022-01-15': {marked: true, dotColor: '#40CDFF'},
              '2022-01-16': {marked: true, dotColor: '#40CDFF'},
              '2022-01-26': {marked: true, dotColor: '#40CDFF'},
              '2022-01-27': {marked: true, dotColor: '#40CDFF'},
              '2022-01-28': {marked: true, dotColor: '#40CDFF'},

             
            }}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
              arrowColor: '#000',
              disabledArrowColor: '#000',
              monthTextColor: '#000',
              indicatorColor: '#000',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '700',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </Fragment>
        {status? (
          <View>
            <View>
              <Text style={styles.DateText}>Mar 17, 2020</Text>
              <Text style={styles.FutureText}>Future</Text>
            </View>
            <View style={styles.UserInfo}>
              <View style={styles.InfoTitle}>
                <View style={styles.InfoTitle0}>
                  <Text style={styles.InfoTitle_Text}>
                    Will start in 1 hours
                  </Text>
                  <Text style={styles.InfoTitle_Text0}>13:00 PM</Text>
                </View>
              </View>
              <View style={styles.InfoUser}>
                <View style={styles.pic}>
                  <Image
                    source={(require = Bitmap)}
                    style={{
                      height: 50,
                      width: 50,
                      alignSelf: 'center',
                      borderRadius: 25,
                    }}
                  />
                </View>
                <View style={styles.name}>
                  <Text style={styles.name_Text}>Visit doctor</Text>
                  <Text style={styles.designation}>Dave Holden (Dentist)</Text>
                </View>
                <View style={styles.menu}>
                  <Icon size={24} name="more-vert" />
                </View>
              </View>
              <View style={styles.address}>
                <View style={{width: '10%', marginTop: 18}}>
                  <Icon size={24} name="location-pin" color={'#8A9CB2'} />
                </View>
                <View style={{height: 79, justifyContent: 'center'}}>
                  <Text style={styles.address_Text}>
                    Family Medicine Clinic {'\n'}2301 First Avenue Dallas
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <Text style={styles.body}>Events </Text>
              <Text style={{color: '#E37C00'}}>See all</Text>
            </View>
            <FlatList
              data={events}
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
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Image
              source={(require = calendarEmpty)}
              style={styles.emptyImage}
            />
            <Text
              style={styles.emptyText}>
              It's empty for now. 
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default CalendarScreen;
