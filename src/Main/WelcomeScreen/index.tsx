import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import {VIWELL_COLORS, FontSizes, FontWeights} from '../../styles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants/index';
import Logo from '../../assets/svg/logo.svg';
import {Icon, IconButton, Input, SimpleButton} from '../../components';
import {
  LOCAL_STORAGE_KEYS,
  storeLocalData,
} from '../../utils/localstorage';
import Email from '../../assets/svg/email.svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList, SetupProfileParamsList} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
function WelcomeScreen(props: any) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginHorizontal: '5%',
        }}>
        <Logo />
      </View>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.heading}>Welcome, Ala!</Text>
        <Text style={styles.item}>
          Before getting started, let us know your personal informations so we
          can help you building your fitness app better
        </Text>
      </View>
      <View
        style={{flex: 0.2, justifyContent: 'flex-end', marginHorizontal: '5%'}}>
        <SimpleButton
          without={false}
          title="Fill up my informations"
          onPress={() => {
            navigation.navigate('SelectAvatar');
          }}
        />
        <SimpleButton
          without={true}
          title="Skip for now"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Main'}],
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: VIWELL_COLORS.bgColor,
  },
  contentContainer: {
    paddingTop: '2.5%',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashContiner: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationWrapper: {
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDash: {
    height: 10,
    width: 30,
    borderRadius: 24 / 2,
  },
  paginationDots: {
    height: 10,
    width: 10,
    borderRadius: 24 / 2,
  },
  textContainer: {
    // marginTop: "10%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginHorizontal: '5%',
    marginBottom: '5%',
  },
  skipContainer: {
    marginTop: '5%',
    marginRight: '5%',
    alignSelf: 'flex-end',
  },
  heading: {
    ...FontWeights.Light,
    ...FontSizes.SubHeading,
  },
  body: {
    ...FontWeights.Light,
    ...FontSizes.Body,
    textTransform: 'capitalize',
  },
  item: {
    fontFamily: 'ABeeZee-Regular',
    color: '#828282',
    fontSize: hp('2.5%'),
    marginTop: '5%',
    textAlign: 'center',
    marginHorizontal: '5%',
  },
});

export default WelcomeScreen;
