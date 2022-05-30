import React, {FC} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
const InStoreOTPPointScreen: FC = () => {
    const navigation = useNavigation();

  return (
   
      <View >
        <Text style={styles.Box1_Text1}>You Just Saved </Text>
        <Text style={styles.Box1_Text2}>300 AED</Text>
        <Image
          source={require('../../../assets/images/Mask.png')}
          style={{alignSelf: 'center'}}
        />
        <TouchableOpacity
            onPress={()=>navigation.goBack()}
          style={{
            width: '100%',
            height: 56,
            borderRadius: 16,
            backgroundColor: '#E37C00',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
           <Text style={styles.Box1_Text3}>Back</Text>
  
          </TouchableOpacity>
      </View>
  
  );
};
export default InStoreOTPPointScreen;
