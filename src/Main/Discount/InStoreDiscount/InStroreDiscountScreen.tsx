import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  FlatList,
  ScrollView
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header/Header';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet',
  },
];

const renderItem = (item: any) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 3}}>
      <Icon size={15} name="checkmark-sharp" color={'#6BE42B'} />
      <Text style={styles.List_Text}>{item.title}</Text>
    </View>
  );
};
const InStoreDiscountScreen: FC = () => {

    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
     
      <ImageBackground
        source={require('../../../assets/images/PartnerHeader0.png')}
        style={{height: 360, width: '100%'}}>
        <Header />
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.Box1}>
          <Text style={styles.Box1_Text}>Nike Store</Text>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>
        </View>
        <Text style={styles.Box1_Text2}>40 % Discount</Text>
        <Text style={styles.Box1_Text01}>Nike Store Dubai Mall</Text>

        <Text style={styles.Box1_Text00}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Text>
        <Text style={styles.Box1_Text1}>Content</Text>
        {/* <View style={styles.Box1_1}></View> */}
        <FlatList
          data={DATA}
          renderItem={({item}) => renderItem(item)}
          keyExtractor={(item: any) => item.index}
        />
        <TouchableOpacity style={styles.Box1_2} onPress={()=>navigation.navigate('InStoreOTP')}>
          <Text style={styles.Box1_Text3}>Redeem ( 3000 Points )</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default InStoreDiscountScreen;
