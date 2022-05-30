


import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Icon, Input, SimpleButton, CheckBox, AuthContainer, OtpInput } from '../../components';
import { AuthStackParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import moment from 'moment';
import { AuthServices } from '../../services';
import { logError } from '../../utils/global';
import { LOCAL_STORAGE_KEYS, storeLocalData } from '../../utils/localstorage';
import { useVerifyOtpMutation } from '../../services/auth';
let myCounter = 0;
let timeout = null;
function VerifyCode(props: any) {

    const [counter, setCounter] = useState(90);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        startInterval()
        return () => clearInterval(timeout);
    }, []);

    myCounter = counter;
    const startInterval = () => {
        timeout = setInterval(() => {
            setCounter(counter => counter - 1);
            console.log("counter: ", myCounter); // counter always return 0 but myCounter the updated value
            if (myCounter === 0) clearInterval(timeout);

        }, 1000);
    };
    const [code, setCode] = useState("")
    const [rememberMe, setRememberMe] = useState(false);
    const navigation = useNavigation();
    let [verifyOtp, response] = useVerifyOtpMutation();
    let { data, isError, isLoading, error, isSuccess } = response;
    useEffect(() => {

    }, [code])

    const replaceText = (str: string) => {
        return str.replace(/.(?=.{4})/g, '*');
    }

    const handleVerifyCode = async () => {
        clearInterval(timeout);
        let userData = {
            "email": props?.route?.params?.data?.user_email,
            "purpose": "verify",
            "otp": code
        }
        let responseObj = await verifyOtp(userData)
        console.log("responseObj : ", responseObj)
        // if (isError) {
        //     Alert.alert(error?.data?.message)
        // } else if (isSuccess && data.msg == "Otp verified") {
        //     navigation.navigate("NewPassword", { data: props?.route?.params?.data })
        // }
        // AuthServices.verifyOTP(userData)
        //     .then((res) => {
        //         logError(res.data)
        //         if (res.data.msg == "Otp verified") {
        //             setLoading(false)
        //             navigation.navigate("NewPassword", { data:  data })
        //         } 
        //         // if (res.data.newAccount) {
        //         //     setLoading(false)
        //         //     navigation.navigate("VerifyAccount", { data: { ...res.data, user_email: email } })
        //         // } else {

        //         //     setLoading(false)
        //         // }
        //     })
        //     .catch((err) => { logError(err); Alert.alert("Invalid OTP"); setLoading(false) })
    }



    return (
        <AuthContainer>
            <View style={styles.textContainer}>
                <Text style={styles.headingTextStyle}>Enter 4-digit Verification code</Text>
            </View>
            <View>
                <Text style={styles.textStyle}>Code send to {replaceText(props?.route?.params?.data?.user_email)}</Text>
                <Text style={styles.textStyle}>This code will expired in <Text style={styles.redcolorText}>{moment.utc(myCounter * 1000).format('mm:ss')}</Text></Text>
            </View>
            <View style={styles.otpContainer}>
                <OtpInput otpValue={code} editable={true} setOtpValue={(value: any) => setCode(value)} />
            </View>
            <Text style={styles.textStyle}>Don't received the code? <Text onPress={() => {
                if (myCounter === 0) {
                    navigation.goBack()
                }
            }} style={styles.orangeColorText}>{'Resend Code'}</Text></Text>
            <>
                {code.length == 4 ?
                    <View style={styles.buttonContainer}>
                        <SimpleButton without={false} loading={isLoading} title="Verify" onPress={() => { handleVerifyCode() }} />
                    </View>
                    : null
                }
            </>
        </AuthContainer>
    );
}




const styles = StyleSheet.create({

    headingTextStyle: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: "ABeeZee-Italic",
        color: 'white'
    },
    textStyle: {
        fontSize: 16,
        color: '#828282',
        fontFamily: "ABeeZee-Regular",
        textAlign: "center"
    },
    redcolorText: {
        fontSize: 16,
        color: 'red',
        textAlign: "center"
    },
    orangeColorText: {
        fontSize: 16,
        color: VIWELL_COLORS.dashOrange,
        textAlign: "center"
    },
    textContainer: {
        marginVertical: "10%",
        marginHorizontal: "15%"
    },
    buttonContainer: {
        marginTop: "10%",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgotPassword: {
        color: "#BDBDBD",
    },
    otpContainer: {
        marginVertical: "15%",
        justifyContent: "center",
        alignItems: "center",
    }

});


export default VerifyCode;