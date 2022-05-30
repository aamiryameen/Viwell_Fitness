import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  Alert,
  TextInput,
} from 'react-native';
import styles from './Partner2Screen.style';
import { ScrollView } from 'react-native-gesture-handler';
import OTPTextView from 'react-native-otp-textinput';
import Header from '../Header/Header';
import { useNavigation } from '@react-navigation/native';
const Partner2Screen: FC = () => {

  const [otpInput, setOtp] = useState('')
  const [inputText, setValue] = useState('')
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState('4624F');
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const alertText = () => {
    if (otpInput) {
      Alert.alert(otpInput);
    }
  };

  const clear = () => {
    setOtp('');
  };

  const updateOtpText = () => {
    // will automatically trigger handleOnTextChange callback passed
    setValue(inputText);
  };
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
      {/* Box0 */}
      {/* <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>How do you feel today?</Text>
      </View> */}
      <ImageBackground
        source={require('../../../assets/images/PartnerHeader.png')}
        style={{ height: 360, width: '100%' }}>
        <Header />
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.Box1}>
          <Text style={styles.Box1_Text}>Nike.com Online Code</Text>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>
        </View>
        <Text style={styles.Box1_Text00}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </Text>
        <Text style={styles.Box1_Text1}>Coupon</Text>
        <Text style={styles.Box1_Text2}>40 % Discount</Text>
        <View
          style={styles.Box1_1}>
          <TextInput
            style={styles.input}
            onChangeText={(e: any) => onChangeNumber(e)}
            value={number}
            placeholder="4624F"
            // keyboardType=""
            placeholderTextColor="#fff"
            maxLength={4}

          />
        </View>
        {/* <OTPTextInput containerStyle={{borderWidth:1, backgroundColor:"#fff"}} /> */}
        {/* <View style={{width:'70%', alignSelf:'center'}}>
        <OTPTextView
          handleTextChange={(e:any) => setOtp(e)}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
        //   defaultValue=""
        tintColor="#333333"
        offTintColor="#333333"
        />
       </View> */}



        <TouchableOpacity onPress={() => navigation.navigate("Partner4")}
          style={styles.Box1_2}>
          <Text style={styles.Box1_Text3}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView >
  );
};
export default Partner2Screen;
