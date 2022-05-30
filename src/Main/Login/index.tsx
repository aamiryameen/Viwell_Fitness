import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { AuthServices } from '../../services';
import { logError } from '../../utils/global';
import { getLocalData, LOCAL_STORAGE_KEYS, storeLocalData } from '../../utils/localstorage';
import { responsePathAsArray } from 'graphql';
import { ValidateEmail } from '../../utils';
import { useUserLoginMutation } from '../../services/auth';
import CustomModal from '../../components/common/Modal';

function Login(props: any) {

    const [email, setEmail] = useState(props.route.params.email)
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false)
    const [visibleModal, setVisibleModal] = useState(props.errorModalVisible)
    const [errors, setErrors] = useState({ email: '', password: '' })
    const [errorMessage, setErrorMessage] = useState('')

    const navigation = useNavigation();
    let [userLogin, response] = useUserLoginMutation();
    let { data, isError, isLoading, error, isSuccess } = response;

    useEffect(() => { }, [secureText, rememberMe]);

    const isFormValid = () => {

        let validationErrors = { email: '', password: '' }

        if (email === undefined || email === '' || email.trim() === '')
            validationErrors.email = "Please Enter Your Email"
        else if (!ValidateEmail(email.trim()))
            validationErrors.email = "Please Enter Valid Email"
        if (password === undefined || password === '' || password.trim() === '')
            validationErrors.password = "Please Enter Your Password"
        else if (password.trim().length < 6)
            validationErrors.password = "Password should be six characters long!"

        if ((validationErrors.email.length === 0 && validationErrors.password.length === 0) && validationErrors.constructor === Object) {
            setErrors(validationErrors)
            return true
        }
        else {
            setErrors(validationErrors)
            return false
        }
    }

    const showMessag = () => {

        if (visibleModal) {

            return (
                <CustomModal isShow={visibleModal} error='Error' responseMessage={errorMessage} modalType={'error'} />
            )
        }

    }

    const handleLoginFunction = async () => {

        if (isFormValid()) {

            setVisibleModal(false)

            try {

                let userDetails = {
                    email: email,
                    password: password
                }
                let res = await userLogin(userDetails).unwrap()

                if (res) {

                 let token =   await storeLocalData(LOCAL_STORAGE_KEYS.userToken, JSON.stringify(res))
                   console.log(token)
                 navigation.navigate("SetupProfile")
                    if (!res.token) {
                        
                        navigation.navigate("VerifyAccount", { data: { ...res.data, user_email: email.trim() } })
                    } else {
                        navigation.navigate("SetupProfile")
                      let token =  await storeLocalData(LOCAL_STORAGE_KEYS.userToken, JSON.stringify(res))
                        // let tokenData = await getLocalData(LOCAL_STORAGE_KEYS.userToken)
                        console.log(token)
                    }

                    // if (res.data.msg == "Please Verify your Account") {
                    //     alert("111")
                    //     navigation.navigate("VerifyAccount", { data: { ...res.data, user_email: email } })
                    // } else {
                    //     alert("2222")
                    //     navigation.navigate("SetupProfile")
                    //     await storeLocalData(LOCAL_STORAGE_KEYS.userToken, JSON.stringify(data))
                    //     //         let tokenData = await getLocalData(LOCAL_STORAGE_KEYS.userToken)
                    // }

                }
            } catch (e) {

                if (e?.data?.error) {
                    console.log("shwoing error", e?.data?.error)
                    setVisibleModal(true)
                    setErrorMessage(e?.data?.message)
                    showMessag()
                }
            }
        }
    }

    return (
        <AuthContainer>
            <View style={styles.textContainer}>
                <Text style={styles.headingTextStyle}>Welcome to VIWell App! {'\n'}Let’s setup your account.</Text>
            </View>
            <>
                <Input
                    value={email}
                    placeholder="Your name"
                    onChangeText={(email: string) => setEmail(email)}
                    leftIcon={<Icon.FontAwesome name="user" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginHorizontal: "5%" }} />
                {errors.email ? <Text style={styles.errorStyle}>{errors.email} </Text> : null}
            </>
            <>
                <Input
                    value={password}
                    placeholder="Password"
                    secureTextEntry={secureText}
                    onChangeText={(password: string) => setPassword(password)}
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
                {errors.password ? <Text style={styles.errorStyle}>{errors.password} </Text> : null}
            </>
            <View style={styles.rowContainer}>
                <CheckBox value={rememberMe} onPress={() => setRememberMe(!rememberMe)} title="Remember me" />
                <Text onPress={() => navigation.navigate('ForgotPassword', { data: { user_email: props.route.params.email } })} style={styles.forgotPassword}>Forgot Password</Text>
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} loading={isLoading} title="Login Now" onPress={() => {
                    handleLoginFunction()

                }} />
                {visibleModal && showMessag()}
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
    buttonContainer: {
        marginTop: "10%",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgotPassword: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "ABeeZee-Regular",
        // fontWeight:"600"
    },
    errorStyle: {
        color: 'red',
        fontSize: 11,
        marginTop: -5
    },

});


export default Login;