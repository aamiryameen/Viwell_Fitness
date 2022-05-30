import React, {Fragment, FunctionComponent, useEffect, useState} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {Avatar} from 'react-native-elements';

const NotificationScreen: FunctionComponent = (prop: any) => {
  const DATA = [
    {
      id: 1,
      title: 'First',
      des: 'Amzing Lorem Ipsum is simply dummy tex',
      days: '5 days ago',
      image: require('../../assets/images/expert1.png'),
    },
    {
      id: 2,
      title: 'Second Item',
      des: 'Amzing Lorem Ipsum is simply dummy tex',
      days: '5 days ago',
      image: require('../../assets/images/expert1.png'),
    },
    {
      id: 3,
      title: 'Third Item',
      des: 'Amzing Lorem Ipsum is simply dummy tex',
      days: '5 days ago',
      image: require('../../assets/images/expert1.png'),
    },
    {
      id: 4,
      title: 'Third Item',
      des: 'Amzing Lorem Ipsum is simply dummy tex',
      days: '5 days ago',
      image: require('../../assets/images/expert1.png'),
    },
    {
      id: 5,
      title: 'Third Item',
      des: 'Amzing Lorem Ipsum is simply dummy tex',
      days: '5 days ago',
      image: require('../../assets/images/expert1.png'),
    },
    {
      id: 6,
      title: 'Third Item',
      des: 'Amzing Lorem Ipsum is simply dummy tex',
      days: '5 days ago',
      image: require('../../assets/images/expert1.png'),
    },
  ];

  const renderSeparator = () => {
    return <View style={{height: 10}} />;
  };
  const renderListView = (index: any, item: any) => {
    return (
      <View
        style={styles.ListContainer}>
        <View
          style={styles.imageContainer}>
          <Avatar
            source={item.image}
            avatarStyle={{height: 50, width: 50}}
            containerStyle={{height: 50, width: 50}}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.des}</Text>
        </View>
        <View
          style={styles.timeContainer}>
          <Text style={styles.Time}>{item.days}</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.HeaderContainer}>
        <Text style={styles.Header_Text}>Notifications</Text>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => (index + 1).toString()}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        renderItem={({index, item}) => renderListView(index, item)}
      />
    </ScrollView>
  );
};

export default NotificationScreen;
