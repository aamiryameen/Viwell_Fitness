import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  ImageBackground,
  Alert,
  ScrollView
} from 'react-native';
import styles from './styles';
import OTPTextView from 'react-native-otp-textinput';
import Header from '../Header/Header';
import InStoreOTPPointScreen from '../InStoreOTPPoints/InStoreOTPPointScreen';
const InStoreOTPScreen: FC = () => {
  const [otpInput, setOtp] = useState('');
  const [inputText, setValue] = useState('');
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState('4624F');
  const [status, setStatus] = useState(false)
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
    setValue(inputText);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/PartnerHeader0.png')}
        style={{height: 360, width: '100%'}}>
        <Header />
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.Box1}>
          <Text style={styles.Box1_Text}>Nike Store</Text>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>
        </View>
        {status?
        <InStoreOTPPointScreen />
        :
        <>
        <Text style={styles.Box1_Text2}>40 % Discount</Text>
        <Text style={styles.Box1_Text1}>
          Please ask the merchant {'\n'}to enter the pin
        </Text>

        <View style={{width: '90%', alignSelf: 'center', marginTop: 30}}>
          <OTPTextView
            handleTextChange={(e: any) => setOtp(e)}
            containerStyle={styles.textInputContainer}
            textInputStyle={styles.roundedTextInput}
            //   defaultValue=""
            tintColor="#333333"
            offTintColor="#333333"
          />
        </View>

        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginTop: 40}}>
          <Text style={styles.Box1_Text00}>Valid for 1 min</Text>
          <Text style={styles.Box1_Text01}>Recreate Code</Text>
        </View>
        <TouchableOpacity style={styles.Box1_2} onPress={()=>setStatus(true)}>
          <Text style={styles.Box1_Text3}>Confirm</Text>
        </TouchableOpacity>
        </>
        
        
        }
      </View>
    </ScrollView>
  );
};
export default InStoreOTPScreen;
