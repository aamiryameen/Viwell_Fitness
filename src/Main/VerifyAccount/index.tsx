


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Icon, Input, SimpleButton, CheckBox, AuthContainer, IconButton } from '../../components';
import { AuthStackParamList } from '../../navigation/types';
import { VIWELL_COLORS } from '../../styles';
import ChatBubble from '../../assets/svg/chat-bubble.svg'
import { AuthServices } from '../../services';
import { logError } from '../../utils/global';
import { useRequestOtpMutation } from '../../services/auth';


function VerfiyAccount(props: any) {
    const navigation = useNavigation();

    console.log(props.route.params.data)

    const [phoneLoading, setPhoneLoading] = useState(false)
    const [emailLoading, setEmailLoading] = useState(false)
    let [requestOtp, response] = useRequestOtpMutation();
    // console.log(response)
    let { data, isError, isLoading, error, isSuccess } = response;
    const replaceText = (str: string) => {
        return str?.replace(/.(?=.{4})/g, '\u2B24');
    }
    const handleRequestOtp = async (method: any) => {
        method == "phone" ? setPhoneLoading(true) : setEmailLoading(true);
        try {
            let responseObj = await requestOtp({ email: props?.route?.params?.data?.user_email, method: method })
            console.log("responseObj : ", responseObj)
            if (responseObj?.error) {
                setPhoneLoading(false); setEmailLoading(false)
                Alert.alert(responseObj?.error?.data?.message[0])
            }
            else if (responseObj?.data.msg == "OTP Sent") {
                console.log("success : ", response)
                console.log(props?.route?.params?.data);
                navigation.navigate('VerifyCode', { data: props?.route?.params?.data })
                setPhoneLoading(false); setEmailLoading(false)
            }
            // if (response?.isError) {
            //     setPhoneLoading(false); setEmailLoading(false)
            //     Alert.alert(response?.error?.data?.message)
            // }
            // else if (response?.isSuccess) {
            //     console.log("success : ", response)
            //     console.log(props?.route?.params?.data);
            //     navigation.navigate('VerifyCode', { data: props?.route?.params?.data })
            //     setPhoneLoading(false); setEmailLoading(false)
            // }

        } catch (error) {
            console.log(error);

        }

        // method == "phone" ? setPhoneLoading(true) : setEmailLoading(true);
        // AuthServices.requestOTP({ email: props?.route?.params.user_email, method: method })
        //     .then((res) => {
        //         logError(res.data)
        //         setPhoneLoading(false); setEmailLoading(false)
        //         navigation.navigate('VerifyCode', { data: props?.route.params.data })
        //     })
        //     .catch((err) => { logError(err); setPhoneLoading(false); setEmailLoading(false) })

    }

    const mungeEmailAddress = (str: string) => {
        var i = str.indexOf('@');
        var startIndex = i * .2 | 0;
        var endIndex = i * 1 | 0;
        return str.slice(startIndex - (endIndex)).replace(/./g, '\u2B24') +
            str.slice(endIndex);
    }

    useEffect(() => {

    }, [phoneLoading, emailLoading])


    return (
        <AuthContainer>

            <View style={styles.textContainer}>
                <Text style={styles.headingTextStyle}>Verify your Account</Text>
            </View>
            <View style={styles.tagLineContainer}>
                <Text style={styles.tagLine} >Select which contact details should we use to verify your account</Text>
            </View>

            <TouchableOpacity onPress={() => handleRequestOtp("phone")} style={styles.itemContainer}>
                <View style={styles.contentContainer}>
                    <ChatBubble />
                    <View style={{ width: 20 }} />
                    <View>
                        <Text style={styles.viaTextStyle}>Via sms:</Text>
                        <Text style={styles.textStyle}>{replaceText(props?.route?.params?.data?.phoneNumber ? props?.route?.params?.data?.phoneNumber : "123456789")}</Text>
                    </View>
                    {phoneLoading ?
                        <View style={{ alignItems: "center" }}>
                            <ActivityIndicator color={VIWELL_COLORS.dashOrange} />
                        </View>
                        :
                        null
                    }
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRequestOtp("email")} style={styles.itemContainer}>
                <View style={styles.contentContainer}>
                    <Icon.MaterialCommunityIcons name="email" size={40} color={VIWELL_COLORS.dashOrange} />
                    <View style={{ width: 20 }} />
                    <View>
                        <Text style={styles.viaTextStyle}>Via email:</Text>
                        <Text style={styles.textStyle}>{mungeEmailAddress(props?.route?.params?.data?.user_email)}</Text>
                    </View>
                    {emailLoading ?
                        <View style={{ alignItems: "center" }}>
                            <ActivityIndicator color={VIWELL_COLORS.dashOrange} />
                        </View>
                        :
                        null
                    }
                </View>
            </TouchableOpacity>

        </AuthContainer>
    );
}

const styles = StyleSheet.create({

    headingTextStyle: {
        fontSize: 28,
        textAlign: "center",
        fontFamily: "ABeeZee-Italic",
        color: 'white'
    },
    textContainer: {
        marginVertical: "10%",
    },
    tagLineContainer: {
        marginBottom: "5%"
    },
    tagLine: {
        color: "#828282",
        fontSize: 18,
        fontFamily: "ABeeZee-Regular",
        textAlign: "center",
    },
    viaTextStyle: {
        color: "#828282",
        fontFamily: "ABeeZee-Regular",
        fontSize: 16,
    },
    textStyle: {
        color: "#BDBDBD",
        fontFamily: "ABeeZee-Regular",
        fontSize: 16,
    },
    itemContainer: {
        marginTop: "5%",
        height: 120,
        padding: "10%",
        backgroundColor: "#333333",
        borderRadius: 16
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "flex-start"
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
        fontFamily: "ABeeZee-Regular",
    }

});


export default VerfiyAccount;