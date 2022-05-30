


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Icon, Input, SimpleButton, CheckBox, AuthContainer, IconButton } from '../../components';
import { AuthStackParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import ChatBubble from '../../assets/svg/chat-bubble.svg'
import { AuthServices } from '../../services';
import { logError } from '../../utils/global';


function ForgotPassword(props: any) {
    const navigation = useNavigation();
    let { data } = props?.route?.params;
    const [phoneLoading, setPhoneLoading] = useState(false)
    const [emailLoading, setEmailLoading] = useState(false)

    const replaceText = (str: string) => {
        return str.replace(/.(?=.{4})/g, '\u2B24');
    }
    const handleRequestOtp = () => {
        setEmailLoading(true);
        AuthServices.forgetPassword({ email: data.user_email })
            .then((res) => {
                logError(res.data)
                setPhoneLoading(false); setEmailLoading(false)
                navigation.navigate('VerifyCode', { data: props?.route.params.data })
            })
            .catch((err) => { logError(err); setPhoneLoading(false); setEmailLoading(false) })

    }

    const mungeEmailAddress = (str: string) => {
        var i = str.indexOf('@');
        var startIndex = i * .2 | 0;
        var endIndex = i * 1 | 0;
        return str.slice(startIndex - (endIndex)).replace(/./g, '\u2B24') +
            str.slice(endIndex);
    }



    return (
        <AuthContainer>

            <View style={styles.textContainer}>
                <Text style={styles.headingTextStyle}>Forgot your password?</Text>
            </View>
            <View style={styles.tagLineContainer}>
                <Text style={styles.tagLine} >Select which contact details should we use to reset your password</Text>
            </View>

            {/* <TouchableOpacity onPress={() => handleRequestOtp("phone")} style={styles.itemContainer}>
                <View style={styles.contentContainer}>
                    <ChatBubble />
                    <View style={{ width: 20 }} />
                    <View>
                        <Text style={styles.viaTextStyle}>Via sms:</Text>
                        <Text style={styles.textStyle}>{replaceText(data?.phoneNumber ? data?.phoneNumber : "123456789")}</Text>
                    </View>
                    {phoneLoading ?
                        <View style={{ alignItems: "center" }}>
                            <ActivityIndicator color={VIWELL_COLORS.dashOrange} />
                        </View>
                        :
                        null
                    }
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => handleRequestOtp()} style={styles.itemContainer}>
                <View style={styles.contentContainer}>
                    <Icon.MaterialCommunityIcons name="email" size={40} color={VIWELL_COLORS.dashOrange} />
                    <View style={{ width: 10 }} />
                    <View>
                        <Text style={styles.viaTextStyle}>Via email:</Text>
                        <Text style={styles.textStyle}>{mungeEmailAddress(data.user_email)}</Text>
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


export default ForgotPassword;