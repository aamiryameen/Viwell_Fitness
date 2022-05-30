


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import { Icon, Input, SimpleButton, CheckBox, AuthContainer } from '../../components';
import { AuthStackParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { AuthServices } from '../../services';
import { useResetPasswordMutation } from '../../services/auth';

function ResetPassword(props: any) {
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();

    useEffect(() => { }, [secureText])
    let [resetPassword, response] = useResetPasswordMutation();
    console.log(response)
    let { data, isError, isLoading, error, isSuccess } = response;

    const handleResetPassword = () => {

        if (password) {
            let userData = {
                email: props.route.params.data.user_email,
                newPassword: password
            }
            resetPassword(userData)
            if (isError) {
                Alert.alert(error?.data?.message)
            } else if (isSuccess) {
                navigation.navigate('ResetPassword')
            }
            // setLoading(true)

            // AuthServices.resetPassword(userData)
            //     .then((res) => {
            //         console.log(res.data)
            //         navigation.navigate('ResetPassword')
            //         setLoading(false)
            //     })
            //     .catch((err) => {
            //         setLoading(false)
            //     })
        } else {
            Alert.alert("Please enter your password");
        }

    }

    return (
        <AuthContainer>
            <View style={styles.textContainer}>
                <Text style={styles.headingTextStyle}>Reset your {'\n'}password here</Text>
            </View>
            <View style={styles.tagLineContainer}>
                <Text style={styles.tagLine} >Make sure using the strongest combination for your new password</Text>
            </View>
            <Input
                value={password}
                placeholder="New password"
                secureTextEntry={secureText}
                onChangeText={(email) => setPassword(email)}
                leftIcon={<Icon.FontAwesome name="lock" size={25} color="#BDBDBD" />}
                leftIconContainerStyle={{ marginHorizontal: "5%" }}
                rightIcon={secureText ?
                    <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                        <Icon.AntDesign name="eye" size={25} color={"#000000"} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                        <Icon.AntDesign name="eye" size={25} color={"#BDBDBD"} />
                    </TouchableOpacity>}
                rightIconContainerStyle={{ marginRight: "5%" }}
            />
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} loading={isLoading} title="Reset my password" onPress={() => { handleResetPassword() }} />
            </View>
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
    }

});


export default ResetPassword;