import React, { useEffect, useState } from 'react';
import { View, TextInput, Keyboard } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

interface IProps {
    otpValue: any
    editable: any
    setOtpValue: any
}

const OtpInput = (props: IProps) => {

    return <SmoothPinCodeInput
        value={props.otpValue}
        onTextChange={(code: any) => {
            props.setOtpValue(code);
        }}
        editable={props.editable}
        cellSpacing={5}
        cellStyleFocused={{
            width: 68,

            height: 72,
            borderRadius: 16
        }}
        cellStyle={{
            width: 68,
            backgroundColor: '#333333',
            height: 72,
            borderRadius: 16
        }}
        codeLength={4}
        textStyle={{
            color: '#fff',
            fontSize: 24
        }}
        animated={false}
        restrictToNumbers={true}

        onFulfill={(code: any) => {
            props.setOtpValue(code);
            Keyboard.dismiss()
        }}
    />
};

export default OtpInput;