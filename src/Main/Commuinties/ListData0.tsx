import React, {useEffect, useState, FC} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import DataList0 from './DataList0.json';

const ListData0: FC = props => {
  const [userPic, setPic] = useState([
    {
      image: require('../../assets/images/expert1.png'),
    },
    {
      image: require('../../assets/images/expert1.png'),
    },
    {
      image: require('../../assets/images/expert1.png'),
    },
    {
      image: require('../../assets/images/expert1.png'),
    },
    {
      image: require('../../assets/images/expert1.png'),
    },
  ]);

  
  const renderHorizontalSeparator = () => {
    return <View style={{width: 20}} />;
  };

  const list = (array: any) => {
    return array.map((element: any) => {
      return (
        <View>
          <Text style={styles.userName}>{element.title}</Text>
        </View>
      );
    });
  };

  const listPic = (array: any) => {
    return userPic.map((element: any, index: any) => {
      return (
        <View>
          <Avatar source={element.image} containerStyle={{marginLeft: -10}} />
        </View>
      );
    });
  };
  const renderListView = (index: any, item: any) => {
    const data = item.name;
    console.log(item.user);
    return (
      <View style={styles.comContainer}>
        <View style={styles.comContainer0}>
          <Text style={styles.comContainer0_Text}>{item.title}</Text>
          <Text style={styles.comContainer1_Text}>{item.des}</Text>
        </View>
        <View style={styles.comContainer1}>
          <View style={styles.comContainer1_0}>
            <View style={styles.comContainer1_0_0}>
              {listPic(item.user)}
              {/* <Avatar source={require('../../assets/images/Path.png')} />
              <Avatar
                source={require('../../assets/images/Path.png')}
                containerStyle={{marginLeft: -10}}
              />*/}
            </View>
            <View style={styles.comContainer1_1}>
              <View style={styles.comContainer1_1_0}>
                <Icon size={14} name="person" color={'#ffff'} />
                <Text style={styles.person}>{item.per}</Text>
              </View>
              <View style={styles.comContainer1_1_1}>
                <Icon size={14} name="chatbubble-ellipses" color={'#ffff'} />
                <Text style={styles.message}>{item.message}</Text>
              </View>
            </View>
          </View>
          <View style={styles.userList}>{list(item.name)}</View>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
            showsHorizontalScrollIndicator={false}
        data={DataList0}
        horizontal={true}
        keyExtractor={(item, index) => (index + 1).toString()}
        ItemSeparatorComponent={renderHorizontalSeparator}
        contentContainerStyle={styles.contentContanier}
        renderItem={({index, item}) => renderListView(index, item)}
      />
    </View>
  );
};

export default ListData0;
