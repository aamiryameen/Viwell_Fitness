import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  Alert,
  TextInput,
  ScrollView
} from 'react-native';
import styles from './styles';
import Header from '../Header/Header';
import OnlineOTPPointScreen from '../OnlineOTPPoint/OnlineOTPPointScreen';
const OTPConfirmScreen: FC = () => {

    const [otpInput, setOtp] = useState('')
    const [inputText, setValue] = useState('')
    const [text, onChangeText] = useState();
    const [status, setStatus] = useState(false)

  const [number, onChangeNumber] =useState('4624F');

  const alertText = () => {
    if (otpInput) {
      Alert.alert(otpInput);
    }
  };

 const  clear = () => {
    setOtp('');
  };

 const  updateOtpText = () => {
    // will automatically trigger handleOnTextChange callback passed
    setValue(inputText);
  };
  return (
    <ScrollView style={styles.container}>
      {/* Box0 */}
      {/* <View style={styles.Box0}>
        <Text style={styles.Box0_Text}>How do you feel today?</Text>
      </View> */}
      <ImageBackground
        source={require('../../../assets/images/PartnerHeader.png')}
        style={{height: 360, width: '100%'}}>
        <Header />
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.Box1}>
          <Text style={styles.Box1_Text}>Nike.com Online Code</Text>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>
        </View>
        {status?
        <OnlineOTPPointScreen />
        :
        <>
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
            onChangeText={(e:any)=>onChangeNumber(e)}
            value={number}
            placeholder="4624F"
            // keyboardType=""
            placeholderTextColor="#fff"
            maxLength={4}

        />
        </View>
        <TouchableOpacity
          style={styles.Box1_2} onPress={()=>setStatus(true)}>
          <Text style={styles.Box1_Text3}>Confirm</Text>
        </TouchableOpacity>
        </>
        }
      </View>
    </ScrollView>
  );
};
export default OTPConfirmScreen;
