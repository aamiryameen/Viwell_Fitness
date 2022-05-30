import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import CalendarStrip from 'react-native-calendar-strip';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon0 from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Pie from 'react-native-pie';
import RNSpeedometer from 'react-native-speedometer';
import Graph from '../../assets/svg/Graph.svg';
import Graph0 from '../../assets/svg/Graph0.svg';
import Graph1 from '../../assets/svg/Graph1.svg';
import Graph2 from '../../assets/svg/Graph2.svg';
import Graph3 from '../../assets/svg/Graph3.svg';
import {useNavigation} from '@react-navigation/native';
import {WaterMonitorScreen} from './WaterMonitor/WaterMonitorScreen';

const TrackerScreen: FC = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(true);

  const ChangeStatus = () => {
    try {
      {
        status ? setStatus(false) : setStatus(true);
      }
    } catch (error) {}
  };
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
              source={require('../../assets/images/emoji1.png')}
              style={styles.Box1_0_0_Image}
            />
          </View>
        </View>
        <View style={styles.Box1_1}>
          <Image
            source={require('../../assets/images/emoji2.png')}
            style={styles.Box1_0_0_Image}
          />
        </View>
        <View style={styles.Box1_2}>
          <Image
            source={require('../../assets/images/emoji3.png')}
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

      {/* Box4 */}
      {status ? (
        <>
          <View style={styles.Box4}>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.Box4_0}
              onPress={() => ChangeStatus()}>
              <View style={styles.Box4_0_0}>
                <Icon name="bitbucket" size={16} color={'#9EA3AE'} />
                <Text style={styles.Box4_0_00_Text}>Water</Text>
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
            <TouchableOpacity
              activeOpacity={1}
              style={styles.Box4_0}
              onPress={() => navigation.navigate('SleepMonitor')}>
              <View style={styles.Box4_0_0}>
                <Icon name="moon-o" size={16} color={'#9EA3AE'} />
                <Text style={styles.Box4_0_00_Text}>Sleep</Text>
              </View>
              <View style={styles.Box4_1}>
                <Graph />
                <View style={{marginTop: 25}}>
                  <Graph3 />
                </View>
              </View>
              {/* <Graph3 /> */}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.Box5}    activeOpacity={1}  onPress={() => navigation.navigate('StepTracker')}>
            <View style={styles.Box4_0}>
              <View style={styles.Box4_0_0}>
                <Icon name="bitbucket" size={16} color={'#9EA3AE'} />
                <Text style={styles.Box4_0_0_Text}>Heart Rate</Text>
              </View>
              <View style={styles.Box4_1}>
                <Graph0 />
                <View style={{marginTop: 30}}>
                  <Graph2 />
                </View>
              </View>
            </View>
            <View
    
              style={styles.Box4_0}
            >
              <View style={styles.Box4_0_0}>
                <Icon name="moon-o" size={16} color={'#9EA3AE'} />
                <Text style={styles.Box4_0_0_Text}>Steps</Text>
              </View>
              <View style={styles.Box4_1}>
                <Graph1 />

                {/* <RNSpeedometer
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
            /> */}
              </View>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.footer}>
          <View style={styles.WaterHeader}>
            <TouchableOpacity onPress={() => ChangeStatus()}>
              <AntDesign size={24} name="close" color={'#000'} />
            </TouchableOpacity>
            <Text style={styles.AddWater}>Add Water</Text>
            <TouchableOpacity>
              <Icon0 size={27} name="md-settings-sharp" color={'#000'} />
            </TouchableOpacity>
          </View>

          {/* Box5 */}
          <View style={styles.BodyConatiner}>
            <View style={styles.Box5_0}>
              <TouchableOpacity style={styles.Box5_0_0}>
                <Icon0 size={24} name="remove" color={'#9EA3AE'} />
              </TouchableOpacity>
              <View style={styles.Box5_0_1}>
                <Image
                  source={require('../../assets/images/Group.png')}></Image>
              </View>
              <TouchableOpacity style={styles.Box5_0_2}>
                <Icon0 size={24} name="add" color={'#fff'} />
              </TouchableOpacity>
            </View>
            <Text style={{...styles.Box5_0_2_Text, color: '#9EA3AE', fontFamily: 'ABeeZee'}}>1/2 glass = 0.25 liters</Text>
          </View>

          {/* Box6 */}
          <View style={styles.Box6}>
            <View style={styles.Box6_0}>
              <Text style={styles.Box6_0_Text}>Ideal intake</Text>
              <Text style={{...styles.Box6_0_Text0, color: '#9EA3AE'}}>2.12 Litres</Text>
            </View>
            <View style={styles.Box6_1}>
              <Text style={styles.Box6_0_Text}>Goal intake</Text>
              <Text style={{...styles.Box6_0_Text0, color: '#9EA3AE'}}>4 Litres</Text>
            </View>
          </View>

          {/* Box7 */}
          <TouchableOpacity style={styles.Box7}>
            <Text style={styles.Box7_Text}>Apply</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};
export default TrackerScreen;
