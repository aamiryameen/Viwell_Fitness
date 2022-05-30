import React, { FC } from "react";
import { View, Text } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import {RootStackParamList} from '../../services/navigation/RootStackPrams';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
type authScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;
import styles from "./HomeScreen.style";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen: FC = () => {
 
  const navigation = useNavigation<authScreenProp>();

    return (
        <ScrollView style={styles.container}>
        <Text> HomeScreen </Text>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Detail')}
        >
          <Text style={styles.buttonTextStyle}>Go To Detail Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.buttonTextStyle} >Go To Search Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking1')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking1 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking2')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking2 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking3')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking3 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking4')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking4 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking5')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking5 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Tracking6')}
        >
          <Text style={styles.buttonTextStyle} >Go To Tracking6 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Graph1')}
        >
          <Text style={styles.buttonTextStyle} >Go To Graph1 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Graph2')}
        >
          <Text style={styles.buttonTextStyle} >Go To Graph2 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Graph3')}
        >
          <Text style={styles.buttonTextStyle} >Go To Graph3 Screen</Text>
        </RNBounceable>

        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Graph4')}
        >
          <Text style={styles.buttonTextStyle} >Go To Graph4 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Partner1')}
        >
          <Text style={styles.buttonTextStyle} >Go To Partner1 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Partner2')}
        >
          <Text style={styles.buttonTextStyle} >Go To Partner2 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Partner3')}
        >
          <Text style={styles.buttonTextStyle} >Go To Partner3 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Partner4')}
        >
          <Text style={styles.buttonTextStyle} >Go To Partner4 Screen</Text>
        </RNBounceable>
        <RNBounceable
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('Partner5')}
        >
          <Text style={styles.buttonTextStyle} >Go To Partner5 Screen</Text>
        </RNBounceable>
      </ScrollView>
    )
}
export default (HomeScreen)
