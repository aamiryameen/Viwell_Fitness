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
  UIManager,
  Platform,
  LayoutAnimation,
} from 'react-native';

import { VIWELL_COLORS, FontWeights, FontSizes } from '../../styles';
import { ArticlesCardView, ClassesCardView, SimpleButton } from '../../components';
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

import Event from '../../assets/svg/event.svg';
import Partner from '../../assets/svg/partner.svg';
import Habit from '../../assets/svg/habit.svg';
import Practise from '../../assets/svg/practise.svg';

import Audio1 from '../../assets/svg/audio-1.svg';
import Audio2 from '../../assets/svg/audio-2.svg';
import Expert1 from '../../assets/svg/expert-1.svg';
import Expert2 from '../../assets/svg/expert-2.svg';

import Dream from '../../assets/svg/Dream.svg';
import Task from '../../assets/svg/Task.svg'
import { useNavigation } from '@react-navigation/native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import {
  Directions,
  FlingGestureHandler,
  State,
} from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

interface IProps {
  props: any;
}

const HomeScreen = (props: IProps) => {
  const navigation = useNavigation();
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const [barVisible, setBarVisible] = useState(false);
  const [tabView, setTabView] = useState(0);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [search, setSearch] = useState(false)
  const onChangeSearch = (query: React.SetStateAction<string>) => setSearchQuery(query);
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

  const [classes, setClasses] = useState([
    {
      tag: "Premium",
      coach_name: "Stephen Curry",
      sport_name: "Basketball",
      image: require("../../assets/images/classes.png")
    },
    {
      tag: "Free",
      coach_name: "Stephen Curry",
      sport_name: "Basketball",
      image: require("../../assets/images/classes.png")
    },
    {
      tag: "Premium",
      coach_name: "Stephen Curry",
      sport_name: "Basketball",
      image: require("../../assets/images/classes.png")
    },
    {
      tag: "Free",
      coach_name: "Stephen Curry",
      sport_name: "Basketball",
      image: require("../../assets/images/classes.png")
    },
    {
      tag: "Premium",
      coach_name: "Stephen Curry",
      sport_name: "Basketball",
      image: require("../../assets/images/classes.png")
    },
    {
      tag: "Free",
      coach_name: "Stephen Curry",
      sport_name: "Basketball",
      image: require("../../assets/images/classes.png")
    },
  ]);

  const [articles, setArticles] = useState([
    {
      date: "02-10-2022",
      title: "What your Doctor doesn't know about your nutrition",
      reading_time: "3",
      image: require("../../assets/images/articles.png")
    },
    {
      date: "02-10-2022",
      title: "What your Doctor doesn't know about your nutrition",
      reading_time: "3",
      image: require("../../assets/images/articles.png")
    },
    {
      date: "02-10-2022",
      title: "What your Doctor doesn't know about your nutrition",
      reading_time: "3",
      image: require("../../assets/images/articles.png")
    },
    {
      date: "02-10-2022",
      title: "What your Doctor doesn't know about your nutrition",
      reading_time: "3",
      image: require("../../assets/images/articles.png")
    },
    {
      date: "02-10-2022",
      title: "What your Doctor doesn't know about your nutrition",
      reading_time: "3",
      image: require("../../assets/images/articles.png")
    },
    {
      date: "02-10-2022",
      title: "What your Doctor doesn't know about your nutrition",
      reading_time: "3",
      image: require("../../assets/images/articles.png")
    }
  ]);

  const [events, setEvents] = useState([
    <Event />,
    <Event />,
    <Event />,
    <Event />,
    <Event />,
    <Event />,
  ]);
  const [audios, setAudios] = useState([
    <Audio1 />,
    <Audio2 />,
    <Audio1 />,
    <Audio2 />,
    <Audio1 />,
    <Audio2 />,
  ]);
  const [expert, setExperts] = useState([
    <Expert1 />,
    <Expert2 />,
    <Expert1 />,
    <Expert2 />,
    <Expert1 />,
    <Expert2 />,
  ]);
  const [practise, setPractise] = useState([
    <Practise />,
    <Practise />,
    <Practise />,
    <Practise />,
    <Practise />,
    <Practise />,
  ]);
  const [partners, setPartners] = useState([
    <Partner />,
    <Partner />,
    <Partner />,
    <Partner />,
    <Partner />,
    <Partner />,
    <Partner />,
    <Partner />,
  ]);

  const [Dreams, setDreams] = useState([
    <Dream />,
    <Dream />,
    <Dream />,
    <Dream />,
    <Dream />,
    <Dream />,
  ])
  const [Challenge, setChangle] = useState([
    <Task />,
    <Task />,
    <Task />,
    <Task />,
    <Task />,
    <Task />,
  ])

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
    return <View>{item}</View>;
  };

  const renderHorizontalListView0 = (index: any, item: any) => {
    return <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Dreams')}>{item}</TouchableOpacity>;
  };
  const renderHorizontalListView1 = (index: any, item: object) => {
    return <ClassesCardView item={item} onPress={() => navigation.navigate('Exclusive')} />;
  };
  const renderHorizontalListView2 = (index: any, item: object) => {
    return <ArticlesCardView item={item} onPress={() => navigation.navigate('ArticleDetail')} />;
  };
  const renderHorizontalListView3 = (index: any, item: any) => {
    return <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SportsDetail')}>{item}</TouchableOpacity>;
  };
  const renderHorizontalListView4 = (index: any, item: any) => {
    return <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('ChallengeDetail')}>{item}</TouchableOpacity>;
  };


  const renderHorizontalListView5 = (index: any, item: any) => {
    return (
      <>
        {index == 0 ?
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('WorkOutMusic')}>{item}</TouchableOpacity>
          : index == 1 ?
            <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('AudioBook')}>{item}</TouchableOpacity>
            : index == 2 ?
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('AudioPlayer')}>{item}</TouchableOpacity>
              :
              <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('AudioListPlayer')}>{item}</TouchableOpacity>
        }
      </>
    )
  };
  const renderHorizontalListView6 = (index: any, item: any) => {
    return <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('PartnerDetail')}>{item}</TouchableOpacity>;
  };
  const renderHorizontalListView7 = (index: any, item: any) => {
    return <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('EventDetail')}>{item}</TouchableOpacity>;
  };

  const SearchOn = () => {
    {
      search ?
        setSearch(false)
        :
        setSearch(true)
    }
  }
  return (
    <View style={styles.container}>

      <FlingGestureHandler
        direction={Directions.RIGHT}
        onFailed={() => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setBarVisible(false) }}
        onActivated={() => { LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setBarVisible(true) }}
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
              marginLeft: barVisible ? '2.5%' : -SCREEN_WIDTH * 0.155,
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
                data={barData}
                keyExtractor={(item, index) => (index + 1).toString()}
                ItemSeparatorComponent={renderSeparator}
                showsHorizontalScrollIndicator={false}
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

      <View style={styles.container1}>

        <ScrollView contentContainerStyle={{ paddingBottom: '10%' }} showsVerticalScrollIndicator={false}>
          {tabView == 0 ? (
            <View style={{ marginTop: '5%' }}>
              <Text style={styles.heading}>{'Physical\nWellbeing'}</Text>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Exclusive Classes </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={classes}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView1(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Articles </Text>
              </View>
              <FlatList
                data={articles}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView2(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Favorited Experts </Text>
              </View>
              <FlatList
                data={expert}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Events </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={events}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView7(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Audio </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={audios}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView5(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Challenges</Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>

              <FlatList
                data={Challenge}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView4(index, item)
                }
              />

              <View style={styles.rowContainer}>
                <Text style={styles.body}>Dreams </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <View style={{ marginHorizontal: '5%' }}>
                <Text style={{ color: 'gray', marginVertical: '5%' }}>
                  Dreams with ❤️ symbol can be automaticlly synced from Apple Health.
                </Text>
              </View>
              <FlatList
                data={Dreams}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView0(index, item)
                }
              />


              <View style={styles.rowContainer}>
                <Text style={styles.body}>New Habit </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <View style={{ marginHorizontal: '5%' }}>
                <Text style={{ color: 'gray', marginVertical: '5%' }}>
                  Habits with ❤️ symbol can be automaticlly synced from Apple
                  Health.
                </Text>
                <Habit />
              </View>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Sport Practices </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={practise}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView3(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Partners </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={partners}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView6(index, item)
                }
              />
            </View>
          ) : null}
          {tabView == 1 ? (
            <View style={{ marginTop: '5%' }}>
              <Text style={{ ...styles.heading, color: '#D0AAD0' }}>
                {'Mental\nWellbeing'}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Exclusive Classes </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={classes}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView1(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Articles </Text>
              </View>
              <FlatList
                data={articles}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView2(index, item)
                }
              />
            </View>
          ) : null}
          {tabView == 2 ? (
            <View style={{ marginTop: '5%' }}>
              <Text style={{ ...styles.heading, color: '#8AC47D' }}>
                {'Nutritional\nWellbeing'}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Exclusive Classes </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={classes}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView1(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Articles </Text>
              </View>
              <FlatList
                data={articles}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView2(index, item)
                }
              />
            </View>
          ) : null}
          {tabView == 3 ? (
            <View style={{ marginTop: '5%' }}>
              <Text style={{ ...styles.heading, color: '#93D2E1' }}>
                {'Financial\nWellbeing'}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Exclusive Classes </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={classes}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView1(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Articles </Text>
              </View>
              <FlatList
                data={articles}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView2(index, item)
                }
              />
            </View>
          ) : null}
          {tabView == 4 ? (
            <View style={{ marginTop: '5%' }}>
              <Text style={{ ...styles.heading, color: '#3BB3E7' }}>
                {'Career\nWellbeing'}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Exclusive Classes </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={classes}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView1(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Articles </Text>
              </View>
              <FlatList
                data={articles}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView2(index, item)
                }
              />
            </View>
          ) : null}
          {tabView == 5 ? (
            <View style={{ marginTop: '5%' }}>
              <Text style={{ ...styles.heading, color: '#FD635D' }}>
                {'Social\nWellbeing'}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Exclusive Classes </Text>
                <Text style={{ color: '#E37C00' }}>See all</Text>
              </View>
              <FlatList
                data={classes}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView1(index, item)
                }
              />
              <View style={styles.rowContainer}>
                <Text style={styles.body}>Articles </Text>
              </View>
              <FlatList
                data={articles}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({ index, item }) =>
                  renderHorizontalListView2(index, item)
                }
              />
            </View>
          ) : null}
        </ScrollView>
        {search ?
          <View
            style={styles.searchBox}>
            <Searchbar
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
              placeholderTextColor={'#828282'}
              inputStyle={{ color: '#fff' }}
              iconColor="#828282"
              style={{ color: '#000', borderRadius: 15, backgroundColor: '#252525' }}
            />
          </View>
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  container1: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentContanier: {
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  heading: {
    marginLeft: '5%',
    ...FontWeights.Bold,
    ...FontSizes.Heading,
    color: '#E89925',
  },
  body: {
    ...FontWeights.Bold,
    ...FontSizes.Label,
  },
  item: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    marginTop: 10,
  },
  searchBox: {
    position: 'absolute',
    bottom: 0,
    width: '99%',
    alignSelf: 'center',
  }
});

export default HomeScreen;
