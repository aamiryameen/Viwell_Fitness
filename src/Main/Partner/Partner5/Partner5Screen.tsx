import React, { FC, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  ImageBackground,
  Alert,
} from 'react-native';
import styles from './Partner5Screen.style';
import { ScrollView } from 'react-native-gesture-handler';
import OTPTextView from 'react-native-otp-textinput';
import Header from '../Header/Header';
import { useNavigation } from '@react-navigation/native';
const Partner5Screen: FC = () => {
  const [otpInput, setOtp] = useState('');
  const [inputText, setValue] = useState('');
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
    setValue(inputText);
  };

  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/PartnerHeader.png')}
        style={{ height: 360, width: '100%' }}>
        <Header navigation={navigation} />
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.Box1}>
          <Text style={styles.Box1_Text}>Nike.com Online Code</Text>
          <View style={styles.Box1_0}>
            <Text style={styles.Box1_Text0}>3000 Points</Text>
          </View>
        </View>

        <Text style={styles.Box1_Text2}>40 % Discount</Text>
        <Text style={styles.Box1_Text1}>
          Please ask the merchant to enter the pin
        </Text>

        <View style={{ width: '70%', alignSelf: 'center', marginTop: 30 }}>
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
          style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 40 }}>
          <Text style={styles.Box1_Text00}>Valid for 1 min</Text>
          <Text style={styles.Box1_Text01}>Recreate Code</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Partner4")} style={styles.Box1_2}>
          <Text style={styles.Box1_Text3}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Partner5Screen;
