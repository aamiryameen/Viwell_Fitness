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
} from 'react-native';
import styles from './Graph3Screen.style';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon0 from 'react-native-vector-icons/Ionicons';

import Speedmeter from './Speedmeter';
import Data from './DataList.json';

const Graph3Screen: FC = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const renderItem = (index: any,item : any) => {
    return (
      <View style={styles.Box2_0}>
        <View style={styles.Box2_0_0}>
          <View style={styles.Box2_0_0_0}>
            <Icon size={16} name={item.icon} color="#192126" />
            <Text style={styles.Box2_0_0_0_Text}> {item.title}</Text>
            <View style={styles.Box2_0_0_1}></View>
            <Text style={styles.Box2_0_0_0_Text1}> {item.time}</Text>
          </View>
          <View style={styles.Box2_0_0_2}>
            <Text style={styles.Box2_0_0_2_Text}> {item.activity}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.Box2_0_1}>
          <Icon0 size={20} name="ios-chevron-forward" color="#9EA3AE" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Box0}>
        <Text style={styles.Box0_Text}> Steps Tracker</Text>
      </View>

      <View style={styles.Box1}>
        <View style={styles.Box1_0}>
          <Text style={styles.Box1_0_Text}>Avg Heart rate</Text>
          <Text style={styles.Box1_0_Text0}>125</Text>
        </View>
        <View style={styles.Box1_1}>
          <Speedmeter />

          <Text style={styles.Box1_1_Text}>512 Steps</Text>
          <Text style={styles.Box1_1_Text0}>from 2560 Steps512 Steps</Text>
        </View>
      </View>

      {/* Box2 */}
      <View style={styles.Box2}>
        <Text style={styles.Box2_Text}>Today’s Activity</Text>
        <FlatList
          data={Data}
          renderItem={({ index, item }) => renderItem(index, item)} 
          keyExtractor={(item, index) => ((index + 1).toString())}
          />
      </View>
    </ScrollView>
  );
};
export default Graph3Screen;
