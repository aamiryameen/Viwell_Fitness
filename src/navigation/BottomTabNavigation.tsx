import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, SearchStackNaivator, SetupProfileNavigator, UserProfileNavigator, CommunityStackNaivator, DiscountStackNaivator , TrackerStackNaivator} from './StackNavigation';

import { MainRoutesParamsList } from './types';
import Home from '../assets/svg/Home.svg';
import Percent from '../assets/svg/percent.svg';
import Feed from '../assets/svg/feed-unselected.svg';
import User from '../assets/svg/user.svg';
import Calender from '../assets/svg/calender.svg';
import Home1 from '../assets/svg/Home-unselected.svg';
import Percent1 from '../assets/svg/percent-selected.svg';
import Feed1 from '../assets/svg/feed.svg';
import User1 from '../assets/svg/user-unselected.svg';
import Calender1 from '../assets/svg/calender-selected.svg';

const TabStack = createBottomTabNavigator<MainRoutesParamsList>();

interface TabContainerProps {
  label?: string;
  focused?: boolean;
}

const TabNavigator = () => {
  const {Navigator, Screen} = TabStack;

  return (
    <Navigator
      initialRouteName="Home"
      navigationOptions={() => ({
        tabBarVisible: false,
      })}
      screenOptions={({route}) => ({
        tabBarShowLabel: false,

        tabBarStyle: {
          backgroundColor: 'black',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#1787E7',
        tabBarInactiveTintColor: '#FFFFFF',
        headerShown: false,

        tabBarIcon: ({focused, color}) => {
          let label, iconName: string;
          switch (route.name) {
            case 'Home':
              // label = 'Home'
              return focused ? <Home color={color} /> : <Home1 fill={color} />;
              break;
            case 'Calendar':
              return (
                focused ?
                  <Calender1 />
                  :
                  <Calender />)
            case 'Discount':
              // label = 'Search'
              return focused ? <Percent1 /> : <Percent />;
            case 'Feed':
              // label = 'My Page'
              return (focused ? <Feed1 /> : <Feed />)
            case 'Tracker':
              // label = 'Search'
              return focused ? <User /> : <User1 />;
            default:
              return null;
          }
        },
      })}>
      <Screen name="Home" component={HomeStackNavigator} />
      <Screen name="Calendar" component={SearchStackNaivator} />
      <Screen name="Discount" component={DiscountStackNaivator} />
      <Screen name="Feed" component={CommunityStackNaivator} />
      <Screen name="Tracker" component={TrackerStackNaivator} />
    </Navigator>
  );
};

export default TabNavigator;
