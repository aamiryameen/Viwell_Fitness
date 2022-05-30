import React, {FC, useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  LogBox,
  Image,
  ImageBackground,
  Animated,
} from 'react-native';

import Speedometer from 'react-native-speedometer-chart';

const Speedmeter: FC = () => {


  return (
<Speedometer
            value={50}
            totalValue={100}
            size={150}
            outerColor="#d3d3d3"
            internalColor="#E89925"
            style={{}}
            inner
            // showText
            // text="50.00"
            // textStyle={{ color: 'green' }}
            // showLabels
            // labelStyle={{ color: 'blue' }}
            // labelFormatter={number => `${number}%`}
            // showPercent
            // percentStyle={{ color: 'red' }}
          />
  )
}
export default Speedmeter