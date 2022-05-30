import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon0 from 'react-native-vector-icons/Ionicons';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';
import Health from '../../../assets/svg/Health.svg';
import SleepAnalysis from '../../../assets/svg/SleepAnalysis.svg';

const {width} = Dimensions.get('screen');
const SleepMonitorScreen: FC = () => {

    const navigation = useNavigation();

  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Box0}>
        <TouchableOpacity style={styles.Box0_0} onPress={()=>navigation.goBack()}>
          <Icon0 size={24} name="ios-chevron-back" color="#9EA3AE" />
        </TouchableOpacity>
        <View style={styles.Box0_1}>
          <Text style={styles.Box0_Text}> Sleep Monitor</Text>
        </View>
      </View>
      <View style={styles.Box1}>
        <Health />
      </View>

      <View style={styles.Box2}>
        <View style={styles.Box2_0}>
          <Text style={styles.Box2_0_Text}> Bedtime</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 27,
            }}>
            <Icon name="moon-o" size={24} color={'#9EA3AE'} />
            <Text style={styles.Box2_0_Text0}>22:00</Text>
          </View>
        </View>
        <View
          style={{
            width: 0,
            height: 60,
            borderWidth: 2,
            borderColor: 'orange',
            position: 'relative',
          }}></View>
        <View style={styles.Box2_1}>
          <Text style={styles.Box2_0_Text}> Wake up</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 27,
            }}>
            <Icon0 name="ios-sunny-outline" size={24} color={'#9EA3AE'} />
            <Text style={styles.Box2_0_Text0}>05:21</Text>
          </View>
        </View>
      </View>

      <View style={styles.Box3}>
        <SleepAnalysis />
        {/* <LineChart
          data={{
            labels: ['10PM', '11PM', '12PM', '1PM', '2PM', '3PM', '4PM'],
            datasets: [
              {
                data: [20, 30, 40, 30, 60, 35, 80],
              },
            ],
          }}
          width={width - 20}
          height={170}
          // yAxisLabel={'Rs'}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        /> */}
      </View>
    </ScrollView>
  );
};
export default SleepMonitorScreen;
