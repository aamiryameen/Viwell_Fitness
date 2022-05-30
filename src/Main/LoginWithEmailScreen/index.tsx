import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Alert} from 'react-native';
import {VIWELL_COLORS, FontSizes, FontWeights} from '../../styles';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/constants/index';
import Intro1st from '../../assets/svg/intro-1.svg';
import {Icon, IconButton, Input} from '../../components';
import {
  LOCAL_STORAGE_KEYS,
  storeLocalData,
} from '../../utils/localstorage';
import Logo from '../../assets/svg/logo.svg';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthStackParamList} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import {ValidateEmail} from '../../utils';
function LoginWithEmail(props: any) {
  const navigation = useNavigation();
  const [errors, setErrors] = useState({email: ''});
  const [email, setEmail] = useState('');
  const onSigninButtonPressed = () => {
    if (isFormValid()) {
      navigation.navigate('Login', {email: email});
    }
  };
  const isFormValid = () => {
    let validationErrors = {email: ''};
    if (email === undefined || email === '' || email.trim() === '')
      validationErrors.email = 'Please Enter Your Email';
    else if (!ValidateEmail(email.trim()))
      validationErrors.email = 'Please Enter Valid Email';
    if (
      validationErrors.email.length === 0 &&
      validationErrors.constructor === Object
    ) {
      setErrors(validationErrors);
      return true;
    } else {
      setErrors(validationErrors);
      return false;
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.7,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: '5%',
        }}>
        <Logo />
      </View>
      <View
        style={{flex: 0.3, justifyContent: 'center', marginHorizontal: '5%'}}>
        <Input
          value={email}
          placeholder="Email address"
          onChangeText={text => setEmail(text)}
          leftIcon={
            <Icon.MaterialCommunityIcons
              name="email"
              size={25}
              color="#B2B2B2"
            />
          }
          leftIconContainerStyle={{marginLeft: '4.5%'}}
        />
        {errors.email ? (
          <Text style={styles.errorStyle}>{errors.email} </Text>
        ) : null}
        <IconButton
          style={{marginTop: 8}}
          email
          title="Continue with email"
          onPress={() => onSigninButtonPressed()}
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
    ...FontWeights.Light,
    ...FontSizes.Label,
    marginTop: 10,
    textAlign: 'center',
    marginHorizontal: '5%',
  },
  errorStyle: {
    color: 'red',
    fontSize: 11,
    marginTop: -5,
  },
});
export default LoginWithEmail;
