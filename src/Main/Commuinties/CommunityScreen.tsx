import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  ScrollView,
} from 'react-native';

import Physical from '../../assets/svg/Physical.svg';
import SelectedPhysical from '../../assets/svg/PhysicalSelected.svg';
import Nut from '../../assets/svg/Nut.svg';
import SelectedNut from '../../assets/svg/NutSelected.svg';
import Money from '../../assets/svg/money.svg';
import SelectedMoney from '../../assets/svg/moneySelected.svg';
import Career from '../../assets/svg/career.svg';
import SelectedCareer from '../../assets/svg/careerSelected.svg';
import Social from '../../assets/svg/Social.svg';
import SelectedSocial from '../../assets/svg/SocialSelected.svg';
import Mental from '../../assets/svg/mental.svg';
import SelectedMental from '../../assets/svg/mentalSelected.svg';
import Notifications from '../../assets/svg/Notifications.svg';
import Search from '../../assets/svg/Search.svg';

import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import DataList from './DataList.json';
import ListData from './ListData';
import ListData0 from './ListData0';
import { Searchbar } from 'react-native-paper';

interface IProps {
  props: any;
}

const CommunityScreen = (props: IProps) => {
  const navigation = useNavigation();

  const [barVisible, setBarVisible] = useState(false);
  const [tabView, setTabView] = useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [search, setSearch] = useState(false);
  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);
  const [barData, setBarData] = useState([
    {
      selected: true,
      tab: 0,
      title: 'Physical\nWellbeing',
      image: <Physical />,
      selectedImage: <SelectedPhysical />,
    },
    {
      selected: false,
      tab: 1,
      title: 'Mental\nWellbeing',
      image: <Mental />,
      selectedImage: <SelectedMental />,
    },
    {
      selected: false,
      tab: 2,
      title: 'Nutritional\nWellbeing',
      image: <Nut />,
      selectedImage: <SelectedNut />,
    },
    {
      selected: false,
      tab: 3,
      title: 'Financial\nWellbeing',
      image: <Money />,
      selectedImage: <SelectedMoney />,
    },
    {
      selected: false,
      tab: 4,
      title: 'Career\nWellbeing',
      image: <Career />,
      selectedImage: <SelectedCareer />,
    },
    {
      selected: false,
      tab: 5,
      title: 'Social\nWellbeing',
      image: <Social />,
      selectedImage: <SelectedSocial />,
    },
  ]);

  const [userPic, setPic] = useState([
    {
      name: 'Lydia ko',
      des: 'Golf',
      image: require('../../assets/images/expert1.png'),
    },
    {
      name: 'Corporate Sports',
      des: 'Sport partner',
      image: require('../../assets/images/expert2.png'),
    },
    {
      name: 'Lydia ko',
      des: 'Golf',
      image: require('../../assets/images/expert1.png'),
    },
    {
      name: 'Corporate Sports',
      des: 'Sport partner',
      image: require('../../assets/images/expert2.png'),
    },
  ]);

  useEffect(() => { }, [barVisible, barData, tabView]);

  const _renderItems = (index: any, item: any) => {
    // console.log(item);

    return (
      <TouchableOpacity onPress={() => onPressItem(item, index)}>
        {item.selected ? item.selectedImage : item.image}
      </TouchableOpacity>
    );
  };

  const onPressItem = (item: any, index: any) => {
    let array = [...barData];
    array.map((ele, i) => {
      array[i] = { ...array[i], selected: false };
    });
    array[index] = { ...array[index], selected: true };

    if (barVisible) {
      setBarVisible(barVisible);
    }
    setBarData(array);
    setTabView(array[index].tab);
  };

  const renderSeparator = () => {
    return <View style={{ height: 20 }} />;
  };
  const renderHorizontalSeparator = () => {
    return <View style={{ width: 20 }} />;
  };
  const renderHorizontalListView = (index: any, item: any) => {
    return (
      <View style={styles.hrContainer}>
        <Avatar
          source={item.image}
          avatarStyle={{ height: 68, width: 68 }}
          containerStyle={{ height: 68, width: 68 }}
        />
        <Text style={styles.hrName}>{item.name}</Text>
        <Text style={styles.hrDes}>{item.des}</Text>
      </View>
    );
  };

  const SearchOn = () => { { search ? setSearch(false) : setSearch(true); } };
  return (
    <View style={styles.container}>
      <FlingGestureHandler
        direction={Directions.RIGHT}
        onFailed={() => setBarVisible(false)}
        onActivated={() => setBarVisible(true)}
      // onHandlerStateChange={({ nativeEvent }) => {
      //     if (nativeEvent.state === 4 && nativeEvent.absoluteX !== undefined) {
      //         setBarVisible(true)
      //     } else if (nativeEvent.state === 1 && nativeEvent.absoluteX <= 0) {
      //         setBarVisible(false)
      //     }
      // }}
      >
        <View style={{ marginTop: '5%' }}>
          <View
            style={{
              flex: 0.8,
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10%',
              backgroundColor: '#252525',
              marginLeft: barVisible ? '2.5%' : -SCREEN_WIDTH * 0.175,
              width: SCREEN_WIDTH * 0.2,
              borderRadius: 20,
            }}>
            <View style={{ flex: 0.2 }}>
              <Avatar
                source={{ uri: 'https://wallpapercave.com/wp/wp3396910.jpg' }}
                rounded
                onPress={() => navigation.navigate('UserProfile')}
                size={40}></Avatar>
            </View>

            <View
              style={{
                flex: 0.7,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                data={barData}
                keyExtractor={(item, index) => (index + 1).toString()}
                ItemSeparatorComponent={renderSeparator}
                showsVerticalScrollIndicator={false}
                renderItem={({ index, item }) => _renderItems(index, item)}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Notifications onPress={() => navigation.navigate('Notification')} />
              {renderSeparator()}
              <Search onPress={() => SearchOn()} />
            </View>
          </View>
        </View>
      </FlingGestureHandler>

      {/* Body     */}

      <View style={styles.container1}>
        <ScrollView contentContainerStyle={{ paddingBottom: '10%' }} >
          <Text style={styles.heading}>Communities</Text>

          <View>
            <ListData0 />
          </View>
          <View>
            <ListData />
          </View>

          <Text style={styles.heading}> Chat with your HR</Text>
          <View style={{ height: 200 }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={userPic}
              keyExtractor={(item, index) => (index + 1).toString()}
              horizontal={true}
              contentContainerStyle={styles.contentContanier}
              ItemSeparatorComponent={renderHorizontalSeparator}
              renderItem={({ index, item }) =>
                renderHorizontalListView(index, item)
              }
            />
          </View>
        </ScrollView>
        {search ? (
          <View style={styles.searchBox}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              placeholderTextColor={'#828282'}
              inputStyle={{ color: '#fff' }}
              iconColor="#828282"
              style={{
                color: '#000',
                borderRadius: 15,
                backgroundColor: '#252525',
              }}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default CommunityScreen;
