import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  LogBox
} from 'react-native';
import styles from './SearchScreen.style';
import {RootStackParamList} from '../../services/navigation/RootStackPrams';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Data from '../detail/playlist.json';
import { ScrollView } from 'react-native-gesture-handler';

type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const SearchScreen: FC = () => {
  const navigation = useNavigation<authScreenProp>();
  const [num] = useState(0)
  
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])



const renderItem = ({item, index}) => {
  return (
    <>
    {num==index?
    <View style={styles.ListContainer0}>
      <View style={styles.ListContainer1}>
          <Text style={styles.InfoTitle}>{item.title}</Text>
          <Text style={styles.InfoDuration}>{item.duration}</Text>
        
      </View>
      <View style={styles.PerBox}>
        <Text style={styles.PerText}>65%</Text>
      </View>
    </View>
    :
    <View style={styles.ListContainer0}>
      <View style={[styles.ListContainer1,{backgroundColor:'transparent'}]}>
          <Text style={styles.InfoTitle}>{item.title}</Text>
          <Text style={styles.InfoDuration}>{item.duration}</Text>
        
      </View>
      <TouchableOpacity style={styles.PerBox}>
          <Ionicons name="play-sharp" size={30} color="#fff"></Ionicons>
        </TouchableOpacity>
    </View>
    }
    </>
  );
};
  return (
    <ScrollView style={styles.container} nestedScrollEnabled={true}>
      <View
        style={{
          height: 328,
          width: '100%',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Image style={styles.BannerImage} source={require('../../assets/image16.jpg')} />
      </View>

      <View style={styles.InfoContainer}>
        <Text style={styles.Duration}>01:50</Text>
        <Text style={styles.Title}>Time To Walk</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons name="reload" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons
            name="play-skip-back-sharp"
            size={30}
            color="#fff"></Ionicons>
        </TouchableOpacity>
        <View style={styles.PlayButton}>
          <TouchableOpacity style={styles.ControlButton0}>
            <Ionicons name="play-sharp" size={30} color="#fff"></Ionicons>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons
            name="play-skip-forward-sharp"
            size={30}
            color="#fff"></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ControlButton}>
          <Ionicons name="stop" size={30} color="#fff"></Ionicons>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.activity}>Chapters</Text>
      </View>
      <SafeAreaView >
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={{height:50}}></View>
    </ScrollView>
  );
};

export default SearchScreen;
