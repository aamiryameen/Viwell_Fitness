import React, {FC, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './Partner4Screen.style';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    title: 'Corporate Sports',
    partner: 'Sport Partner',
    image: require('../../../assets/images/Corporate.png'),
  },
  {
    id: 2,
    title: 'Nike',
    partner: 'Sport Partner',
    image: require('../../../assets/images/Corporate.png'),
  },
  {
    id: 3,
    title: 'Bhorjan',
    partner: 'Sport Partner',
    image: require('../../../assets/images/Corporate.png'),
  },
];
const renderItem = (item: any) => {
  return (
    <TouchableOpacity style={styles.ListBox}>
      <Image source={item.image} />
      <Text style={styles.List_Text}>{item.title}</Text>
      <Text style={styles.List_Text0}>{item.partner}</Text>
    </TouchableOpacity>
  );
};
const Partner4Screen: FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Box0 */}
      <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>Online Deals</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Partner3', {inStore: false})}
        style={{marginHorizontal: '5%'}}>
        <ImageBackground
          source={require('../../../assets/images/PartnerHeader.png')}
          imageStyle={{borderRadius: 20}}
          style={styles.Box_Image}>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>

          <Text style={styles.Box1_Text1}>40% Discount</Text>
          <Text style={styles.Box1_Text2}>nike.com</Text>
        </ImageBackground>
      </TouchableOpacity>

      <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>In store Discounts</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Partner3', {inStore: true})}
        style={{marginHorizontal: '5%'}}>
        <ImageBackground
          source={require('../../../assets/images/PartnerHeader0.png')}
          imageStyle={{borderRadius: 20}}
          style={styles.Box_Image}>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>

          <Text style={styles.Box1_Text1}>40% Discount</Text>
          <Text style={styles.Box1_Text2}>nike.com</Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>Partners</Text>
      </View>
      <View style={{paddingLeft: '5%'}}>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({item}) => renderItem(item)}
          ItemSeparatorComponent={() => {
            return <View style={{width: 10}} />;
          }}
          keyExtractor={(item: any) => item.index}
        />
      </View>
    </ScrollView>
  );
};
export default Partner4Screen;
