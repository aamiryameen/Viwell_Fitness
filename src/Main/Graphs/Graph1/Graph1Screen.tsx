import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './Graph1Screen.style';
import { ScrollView } from 'react-native-gesture-handler';
import CalendarStrip from 'react-native-calendar-strip';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pie from 'react-native-pie';
import RNSpeedometer from 'react-native-speedometer';
import { useNavigation } from '@react-navigation/native';


const Graph1Screen: FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Box0 */}
      <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>How do you feel today?</Text>
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
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{
            type: 'background',
            duration: 300,
            highlightColor: '#9265DC',
          }}
          style={{ height: 70, paddingBottom: 10 }}
          //   calendarHeaderStyle={{color: 'white'}}
          calendarColor={'#000'}
          dateNumberStyle={{
            color: 'white',
            fontSize: 18,
            fontFamily: 'ABeeZee',
            fontWeight: '400',
          }}
          dateNameStyle={{ color: '#9EA3AE', fontFamily: 'ABeeZee' }}
          //   iconContainer={{flex: 0.1}}
          //   customDatesStyles={this.state.customDatesStyles}
          highlightDateNameStyle={{ color: 'white' }}
          highlightDateNumberStyle={{ color: '#9EA3AE' }}
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

      {/* Box4 */}
      <View style={styles.Box4}>
        <TouchableOpacity onPress={() => {navigation.navigate("WaterTracker") }} style={styles.Box4_0}>
          <View style={styles.Box4_0_0}>
            <Icon name="bitbucket" size={16} color={'#9EA3AE'} />
            <Text style={styles.Box4_0_0_Text}>Water</Text>
          </View>
          <View style={styles.Box4_1}>
            <Pie
              radius={52}
              innerRadius={45}
              sections={[
                {
                  percentage: 60,
                  color: '#E37C00',
                },
              ]}
              backgroundColor="#ddd"
            />
            <View style={styles.Box4_1_0}>
              <Text style={styles.Box4_1_0_Text}>55% </Text>
              <Text style={styles.Box4_1_0_Text0}>Litres </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("SleepMonitor") }}  style={styles.Box4_0}>
          <View style={styles.Box4_0_0}>
            <Icon name="moon-o" size={16} color={'#9EA3AE'} />
            <Text style={styles.Box4_0_0_Text}>Sleep</Text>
          </View>
          <View style={styles.Box4_1}></View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => { navigation.navigate("StepsTracker") }} style={styles.Box5}>
        <View style={styles.Box4_0}>
          <View style={styles.Box4_0_0}>
            <Icon name="bitbucket" size={16} color={'#9EA3AE'} />
            <Text style={styles.Box4_0_0_Text}>Water</Text>
          </View>
          <View style={styles.Box4_1}></View>
        </View>
        <View style={styles.Box4_0}>
          <View style={styles.Box4_0_0}>
            <Icon name="moon-o" size={16} color={'#9EA3AE'} />
            <Text style={styles.Box4_0_0_Text}>Steps</Text>
          </View>
          <View style={styles.Box4_1}>
            <RNSpeedometer
              value={20}
              //value for Speedometer
              size={100}
              //Size of Speedometer
              minValue={0}
              //Min value for Speedometer
              maxValue={100}
              //Max value for Speedometer
              allowedDecimals={0}
              //Decimals value allowed or not
              labels={[
                {
                  name: 'Under',
                  labelColor: '#192126',
                  activeBarColor: '#F3A735',
                },
                {
                  name: 'Medium Risk',
                  labelColor: '#192126',
                  activeBarColor: '#F3A735',
                },
                {
                  name: 'High Risk',
                  labelColor: '#192126',
                  activeBarColor: 'lightgary',
                },
              ]}
            //Labels for the different steps of Speedometer
            />
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Graph1Screen;
