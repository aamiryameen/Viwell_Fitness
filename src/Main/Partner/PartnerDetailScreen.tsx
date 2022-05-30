import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StarRating from 'react-native-star-rating';

const DATA =[
    {
        title:'Website',
        icon:''
    },
    {
        title:'Call',
        icon:''
    },
    {
        title:'Direction',
        icon:''
    },
    {
        title:'Share',
        icon:''
    },
]
const PartnerDetailScreen: FC = () => {
  const navigation = useNavigation();
  

  const renderHorizontalSeparator = () => {
    return <View style={{width: 20}} />;
  };
  const renderHorizontalListView = (index: any, item: any) => {
    return (
    <View style={{ justifyContent:'space-between', flexDirection:'row'}}>

            <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'400', color:'#89888E', }}>
            {item.title}
        </Text>
    </View>
    )
  };
  return (
    <View style={styles.container}>
        <Text style={{fontFamily:'Poppins', fontSize:24, fontWeight:'600', color:'#fff', }}>
            Under Development
            </Text>
      {/* <ImageBackground
        source={require('../../assets/images/partner.png') }
        style={{width:'100%', height:336}}
      >

      </ImageBackground>
      <View style={{width:'100%', backgroundColor:'#121212', marginTop:-45, borderTopLeftRadius:16, borderTopRightRadius:16, flex:1}}>
        <View style={{width:'100%', height:50, paddingTop:20, paddingLeft:30, flexDirection:'row', justifyContent:'space-between',paddingRight:20, alignItems:'center'}}>
            <Text style={{fontFamily:'Poppins', fontSize:24, fontWeight:'600', color:'#fff', }}>
            Mediclinic
            </Text>
            <View style={{width:56, height:25, backgroundColor:'#4DC41F', borderRadius:23, alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'600', color:'#fff',}}>
            Open
            </Text>
            </View>
        </View>

        <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'600', color:'#89888E',marginTop:10, marginLeft:30}}>
            The Dubai Mall - Financial Center Rd 
        </Text>
        <View style={{width:'50%', marginLeft:30, flexDirection:'row', marginTop:15}}>
        <StarRating
        disabled={false}
        maxStars={5}
        rating={0}
        starSize={20}
        // selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
       <Text style={{fontFamily:'Poppins', fontSize:11, fontWeight:'400', color:'#fff', marginLeft:10}}>
            {'(76 Reviews )'}
        </Text>
        </View>

            <View style={{width:'90%', height:46,alignSelf:'center', marginTop:28,justifyContent:'space-between', flexDirection:'row'}}>
                <View style={{width:'20%', height:46,alignItems:'center', justifyContent:'center'}}>
                    <Icon 
                        size={20}
                        color={'#89888E'}
                        name='web'
                    />
                    <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'400', color:'#89888E',}}>
                        Website
                    </Text>
                </View>
                <View style={{width:'20%', height:46,alignItems:'center', justifyContent:'center'}}>
                    <Icon 
                        size={20}
                        color={'#89888E'}
                        name='web'
                    />
                    <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'400', color:'#89888E',}}>
                        Website
                    </Text>
                </View>
                <View style={{width:'20%', height:46,alignItems:'center', justifyContent:'center'}}>
                    <Icon 
                        size={20}
                        color={'#89888E'}
                        name='web'
                    />
                    <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'400', color:'#89888E',}}>
                        Website
                    </Text>
                </View>
                <View style={{width:'20%', height:46,alignItems:'center', justifyContent:'center'}}>
                    <Icon 
                        size={20}
                        color={'#89888E'}
                        name='web'
                    />
                    <Text style={{fontFamily:'Poppins', fontSize:13, fontWeight:'400', color:'#89888E',}}>
                        Website
                    </Text>
                </View>
            </View>
      </View> */}
    </View>
  );
};

export default PartnerDetailScreen;


 {/* <FlatList
                data={DATA}
                keyExtractor={(item, index) => (index + 1).toString()}
                horizontal={true}
                contentContainerStyle={styles.contentContanier}
                ItemSeparatorComponent={renderHorizontalSeparator}
                showsVerticalScrollIndicator={false}
                renderItem={({index, item}) =>
                  renderHorizontalListView(index, item)
                }
              /> */}