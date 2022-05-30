import React, {FC, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants/index';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-elements';
import {Searchbar} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';

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
const DATA = [
  {
    id: 1,
    title: 'Corporate Sports',
    partner: 'Sport Partner',
    image: require('../../assets/images/Corporate.png'),
  },
  {
    id: 2,
    title: 'Nike',
    partner: 'Sport Partner',
    image: require('../../assets/images/Corporate.png'),
  },
  {
    id: 3,
    title: 'Bhorjan',
    partner: 'Sport Partner',
    image: require('../../assets/images/Corporate.png'),
  },
];
const DATA0 = [
  {
    id: 1,
    points: '3000 Points',
    discount: '40% Discount',
    name: 'nike.com',
    image: require('../../assets/images/PartnerHeader.png'),
  },
  {
    id: 1,
    points: '3000 Points',
    discount: '40% Discount',
    name: 'nike.com',
    image: require('../../assets/images/PartnerHeader.png'),
  },
  {
    id: 1,
    points: '3000 Points',
    discount: '40% Discount',
    name: 'nike.com',
    image: require('../../assets/images/PartnerHeader.png'),
  },
];
const DATA00 = [
  {
    id: 1,
    points: 'Free',
    discount: 'Free Haircut',
    name: '1847',
    image: require('../../assets/images/PartnerHeader0.png'),
  },
  {
    id: 1,
    points: 'Free',
    discount: 'Free Haircut',
    name: '1847',
    image: require('../../assets/images/PartnerHeader0.png'),
  },
  {
    id: 1,
    points: 'Free',
    discount: 'Free Haircut',
    name: '1847',
    image: require('../../assets/images/PartnerHeader0.png'),
  },
];
const renderItem = (item: any) => {
  return (
    <View style={styles.ListBox}>
      <Image source={item.image} />
      <Text style={styles.List_Text}>{item.title}</Text>
      <Text style={styles.List_Text0}>{item.partner}</Text>
    </View>
  );
};

const DiscountScreen: FC = () => {
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
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
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
      array[i] = {...array[i], selected: false};
    });
    array[index] = {...array[index], selected: true};

    if (barVisible) {
      setBarVisible(barVisible);
    }
    setBarData(array);
    setTabView(array[index].tab);
  };
  const renderHorizontalSeparator = () => {
    return <View style={{width: 20}} />;
  };

  const renderListView = (index: any, item: any) => {
    return (
      <ImageBackground source={item.image} style={styles.Box_Image}>
       <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('OnlineDiscount')}>
        <View style={styles.Box1_0}>
          <Text style={styles.Box1_Text0}>{item.points}</Text>
        </View>

        <Text style={styles.Box1_Text1}>{item.discount}</Text>
        <Text style={styles.Box1_Text2}>{item.name}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  const renderListView0 = (index: any, item: any) => {
    return (
      <ImageBackground source={item.image} style={styles.Box_Image}>
        <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('InStoreDiscount')}>
        <View style={styles.Box1_0}>
          <Text style={styles.Box1_Text0}>{item.points}</Text>
        </View>

        <Text style={styles.Box1_Text1}>{item.discount}</Text>
        <Text style={styles.Box1_Text2}>{item.name}</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };
  const renderSeparator = () => {
    return <View style={{height: 20}} />;
  };
  const SearchOn = () => {
    {
      search ? setSearch(false) : setSearch(true);
    }
  };
  return (
    <View style={styles.container0}>
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
        <View style={{marginTop: '5%'}}>
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
            <View style={{flex: 0.2}}>
              <Avatar
                source={{uri: 'https://wallpapercave.com/wp/wp3396910.jpg'}}
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
                data={barData}
                keyExtractor={(item, index) => (index + 1).toString()}
                ItemSeparatorComponent={renderSeparator}
                showsVerticalScrollIndicator={false}
                renderItem={({index, item}) => _renderItems(index, item)}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Notifications
                onPress={() => navigation.navigate('Notification')}
              />
              {renderSeparator()}
              <Search onPress={() => SearchOn()} />
            </View>
          </View>
        </View>
      </FlingGestureHandler>
      <View style={styles.container1}>
        <ScrollView style={styles.container}>
          <View style={styles.Box0}>
            <Text style={styles.Box0_Text}>Online Deals</Text>
          </View>

          <View>
            <FlatList
              data={DATA0}
              horizontal={true}
              keyExtractor={(item, index) => (index + 1).toString()}
              ItemSeparatorComponent={renderHorizontalSeparator}
              contentContainerStyle={styles.contentContanier}
              showsHorizontalScrollIndicator={false}
              renderItem={({index, item}) => renderListView(index, item)}
            />
          </View>

          <View style={styles.Box0}>
            <Text style={styles.Box0_Text}>In store Discounts</Text>
          </View>

          <View>
            <FlatList
              data={DATA00}
              horizontal={true}
              keyExtractor={(item, index) => (index + 1).toString()}
              ItemSeparatorComponent={renderHorizontalSeparator}
              contentContainerStyle={styles.contentContanier}
              showsHorizontalScrollIndicator={false}
              renderItem={({index, item}) => renderListView0(index, item)}
            />
          </View>

          <View style={styles.Box0}>
            <Text style={styles.Box0_Text}>Partners</Text>
          </View>
          <View style={{marginLeft: '5%',marginTop:10}}>
            <FlatList
              data={DATA}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => renderItem(item)}
              keyExtractor={(item: any) => item.index}
            />
          </View>
          <View style={{height:50}}></View>
        </ScrollView>
        {search?
        <View
        style={styles.searchBox}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholderTextColor={'#828282'}
          inputStyle={{color: '#fff'}}
          iconColor="#828282"
          style={{color: '#000', borderRadius: 15, backgroundColor: '#252525'}}
        />
      </View>
      :null}
      </View>
    </View>
  );
};
export default DiscountScreen;
