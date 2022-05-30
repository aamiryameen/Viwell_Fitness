import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ScrollView
} from 'react-native';
import styles from './styles';
import CalendarStrip from 'react-native-calendar-strip';
import Icon from 'react-native-vector-icons/Entypo';
import Icon0 from 'react-native-vector-icons/Ionicons';

const WaterMonitorScreen: FC = () => {

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
            {/* Box0 */}
            <View style={styles.Box0}>
            <Text style={styles.Box0_Text}> How do you feel today?</Text>
            </View>

        {/* Box1 */}
        <View style={styles.Box1}>
          <View style={styles.Box1_0}>
            <View style={styles.Box1_0_0}>
              <Image
                source={require('../../../assets/images/emoji1.png')}
                style={styles.Box1_0_0_Image}
              />
            </View>
          </View>
          <View style={styles.Box1_1}>
            <Image
              source={require('../../../assets/images/emoji2.png')}
              style={styles.Box1_0_0_Image}
            />
          </View>
          <View style={styles.Box1_2}>
            <Image
              source={require('../../../assets/images/emoji3.png')}
              style={styles.Box1_0_0_Image}
            />
          </View>
        </View>

        {/* Box2 */}
        <View style={styles.Box3}>
          <CalendarStrip
            scrollable
            calendarAnimation={{type: 'sequence', duration: 30}}
            daySelectionAnimation={{
              type: 'background',
              duration: 300,
              highlightColor: '#9265DC',
            }}
            style={{height: 70, paddingBottom: 10}}
            //   calendarHeaderStyle={{color: 'white'}}
            calendarColor={'#000'}
            dateNumberStyle={{
              color: 'white',
              fontSize: 18,
              fontFamily: 'ABeeZee',
              fontWeight: '400',
            }}
            dateNameStyle={{color: '#9EA3AE', fontFamily: 'ABeeZee'}}
            //   iconContainer={{flex: 0.1}}
            //   customDatesStyles={this.state.customDatesStyles}
            highlightDateNameStyle={{color: 'white'}}
            highlightDateNumberStyle={{color: '#9EA3AE'}}
            highlightDateContainerStyle={{
              backgroundColor: '#384046',
              height: 50,
              width: 45,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 6,
              borderBottomColor: '#E37C00',
            }}
            //   markedDates={this.state.markedDates}
            //   datesBlacklist={this.datesBlacklistFunc}
            //   selectedDate={this.state.selectedDate}
            //   onDateSelected={this.onDateSelected}
            //   useIsoWeekday={false}
          />
        </View>
      
      <View style={styles.footer}>
        <View
          style={styles.Box4}>
          <TouchableOpacity>
            <Icon size={27} name="cross" color={'#000'} />
          </TouchableOpacity>
          <Text
            style={styles.Box4_Text}>
            Add Water
          </Text>
          <TouchableOpacity>
            <Icon0 size={27} name="md-settings-sharp" color={'#000'} />
          </TouchableOpacity>
        </View>

        {/* Box5 */}
        <View
          style={styles.Box5}>
          <View
            style={styles.Box5_0}>
            <TouchableOpacity
              style={styles.Box5_0_0}>
              <Icon0 size={24} name="remove" color={'#9EA3AE'} />
            </TouchableOpacity>
            <View
              style={styles.Box5_0_1}>
              <Image source={require('../../../assets/images/Group.png')}></Image>
            </View>
            <TouchableOpacity
              style={styles.Box5_0_2}>
              <Icon0 size={24} name="add" color={'#fff'} />
            </TouchableOpacity>
          </View>
          <Text
            style={styles.Box5_0_2_Text}>
            1/2 glass = 0.25 liters
          </Text>
        </View>

        {/* Box6 */}
        <View
          style={styles.Box6}>
          <View
            style={styles.Box6_0}>
            <Text
              style={styles.Box6_0_Text}>
              Ideal intake
            </Text>
            <Text
              style={styles.Box6_0_Text0}>
              2.12 Litres
            </Text>
          </View>
          <View
            style={styles.Box6_1}>
            <Text
              style={styles.Box6_0_Text}>
              Goal intake
            </Text>
            <Text
              style={styles.Box6_0_Text0}>
              4 Litres
            </Text>
          </View>
        </View>

        {/* Box7 */}
        <TouchableOpacity
          style={styles.Box7}>
          <Text
            style={styles.Box7_Text}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};
export default WaterMonitorScreen;
