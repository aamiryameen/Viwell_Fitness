
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Alert, NativeModules } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../navigation/types';
import { VIWELL_COLORS } from '../../styles';
import { heightHp, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import User from '../../assets/svg/user-icon.svg';
import Modal from 'react-native-modal';
import { useLogoutAllDevicesMutation, useUpdateEmailMutation, useUpdateEmployeeMutation, useChangePasswordMutation } from '../../services/auth';
import { clearAllLocalData, getLocalData, LOCAL_STORAGE_KEYS } from '../../utils/localstorage';
import { ValidateEmail } from '../../utils';
import { isNamedType } from 'graphql';

let token;
let refreshToken;

function EditProfile(props: any) {

    // const [height, setHeight] = useState("");
    //     let token: string = '';
    // let refreshToken: string = '';
    // cosnt [,changePasswordResponse] = useChangePasswordMutation()

    let userProfileData = props.route.params.getUserProfileData
    const [name, setName] = useState(userProfileData ? userProfileData?.name : '')
    const [phone, setPhone] = useState(userProfileData ? userProfileData?.phoneNumber[0].number : "")
    const [email, setEmail] = useState(userProfileData ? userProfileData?.email : '');
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState('')
    const [secureText, setSecureText] = useState(true);
    const [newPasswordsecureText, setNewPasswordSecureText] = useState(true);
    const [updateEmailErrors, setUpdateEmailErrors] = useState({ email: '', name: '' })
    const [changePasswordErrors, setChangePasswordErrors] = useState({ password: '', newPassword: '' })

    const [updateEmailModal, setUpdateEmailModal] = useState(false)
    const [changePasswordModal, setChangePasswordModal] = useState(false)

    const navigation = useNavigation();

    const progressCustomStyles = {
        borderRadius: 10,
        borderWidth: 0,
        justifyContent: "center",
        backgroundColor: "white",
        emptyBackground: "#333333"
    };
    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerTitle: () => headerTitle(),
    //         headerRight: () => headerRight()
    //     });
    // }, [navigation]);

    const headerTitle = () => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ProgressBarAnimated
                    width={SCREEN_WIDTH * 0.4}
                    height={10}
                    value={40}
                    {...progressCustomStyles}
                    onComplete={() => { }}
                />
            </View>

        )
    }

    const headerRight = () => {
        return (
            <TouchableOpacity style={{ marginRight: 20 }} >
                <Text style={{ color: "white", fontSize: 16, fontFamily: 'ABeeZee-Regular', }}>Skip</Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        getToken();
    }, [])

    const getToken = async () => {
        let tokenData = await getLocalData(LOCAL_STORAGE_KEYS.userToken)
        let userData = JSON.parse(tokenData);
        token = userData.token;
        refreshToken = userData.refreshToken;
    }

    useEffect(() => {

    }, [secureText, phone, email, name, password]);
    const [updateEmployee, updateEmployeResponse] = useUpdateEmployeeMutation();
    const [isChangePassword, changePasswordResponse] = useChangePasswordMutation()

    const [updateEmail, response] = useUpdateEmailMutation();
    let { data, isError, isLoading, error, isSuccess } = response;

    let [logoutAllDevices, responseInfo] = useLogoutAllDevicesMutation();

    const onUpdateEmployeeDetails = async () => {

        let employeeInfo = {
            name: name,
        }
        try {

            const res = await updateEmployee({ employeeInfo, token }).unwrap()
setTimeout(() => {
    navigation.replace('UserMenu')
}, 100);
           
       
        } catch (error) {

            console.log('error', error);

        }

    }

    const onUpdateEmail = async () => {

        if (isUpdatedEmailFormValid()) {

            if (email === userProfileData?.email) {

                return Alert.alert(
                    'Error',
                    "Please enter your new Email",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                );
            }
            else if (email != userProfileData?.email) {
                let responseObj = await updateEmail({ newEmail: email, token });
                console.log("responseObj : ", responseObj)
                //    let  await updateEmail({ newEmail: email, token })
                //     //  updateEmail({ newEmail: email, token })
                    if (responseObj.error) {
                        Alert.alert(responseObj.error?.data?.message)
                    } else if (responseObj.data.msg=="Please verify new Email") {
                        setUpdateEmailModal(false);
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Auth' }]
                        })
                        logoutAllDevices(refreshToken);
                        clearAllLocalData()
                        let tokenData = await getLocalData(LOCAL_STORAGE_KEYS.userToken);
                    }
            }
        }
    }


    const onChangePassword = () => {

        if (isChangePasswordFormValid()) {

            if (password === newPassword) {
                return (
                    Alert.alert(
                        'Error',
                        "please enter new password",
                        [
                            {
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    )
                )
            } else {

                changePasswordDetails()

            }
        }
    }

    const changePasswordDetails = async () => {

        let changePassword = {
            currentPassword: password,
            newPassword: newPassword,
        }
        try {

            const res = await isChangePassword({ changePassword, token }).unwrap()

            navigation.goBack()
        } catch (error) {

            console.log('error', error);

        }
    }

    const isUpdatedEmailFormValid = () => {

        let validationErrors = { email: '', name: '' }

        if (email === undefined || email === '' || email.trim() === '')
            validationErrors.email = "Please Enter Your Email"
        else if (!ValidateEmail(email.trim()))
            validationErrors.email = "Please Enter Valid Email"

            if (name === undefined || name === '' || name.trim() === '')
            validationErrors.name = "Please Enter Your Name"
        else if (name.trim().length < 1 )
            validationErrors.name = "Please Enter Your Name"

        if ( (validationErrors.email.length === 0 && validationErrors.name.length === 0  )&& validationErrors.constructor === Object) {
            setUpdateEmailErrors(validationErrors)
            return true
        }
        else {
            setUpdateEmailErrors(validationErrors)
            return false
        }
    }

    const isChangePasswordFormValid = () => {

        let validationErrors = { password: '', newPassword: '' }

        if (password === undefined || password === '' || password.trim() === '')
            validationErrors.password = "Please Enter Your Password"
        else if (password.trim().length < 6)
            validationErrors.password = "Password should be six characters long!"
        if (newPassword === undefined || newPassword === '' || newPassword.trim() === '')
            validationErrors.newPassword = "Please Enter Your Password"
        else if (newPassword.trim().length < 6)
            validationErrors.newPassword = "Password should be six characters long!"

        if ((validationErrors.password.length === 0 && validationErrors.newPassword.length === 0) && validationErrors.constructor === Object) {
            setChangePasswordErrors(validationErrors)
            return true
        }
        else {
            setChangePasswordErrors(validationErrors)
            return false
        }
    }

    return (
        <View style={styles.container}>
           
            <View style={{ flex: 0.9, marginHorizontal: "5%", marginTop: "5%" }}>

                <Input
                    value={name}
                    placeholder={userProfileData ? userProfileData?.name : 'Name'}
                    onChangeText={(email: any) => setName(email)}
                    leftIcon={<User width={20} />}
                    leftIconContainerStyle={{ marginLeft: "5%", marginRight: 0 }} />
                   {updateEmailErrors.name ? <Text style={styles.errorStyle}>{updateEmailErrors.name} </Text> : null}
                    <TouchableOpacity  onPress={() => {
                    setUpdateEmailModal(true)}} activeOpacity={0.5}>
                    <Input
                    value={email}
                    editable={false}
                    placeholder={userProfileData ? userProfileData?.email : 'Email'}
                    onChangeText={(email: any) => setEmail(email)}
                    leftIcon={<Icon.MaterialCommunityIcons name="email" size={20} color="#B2B2B2" />}
                    leftIconContainerStyle={{ marginLeft: "5%", marginRight: 2.5 }} />
                    </TouchableOpacity>
          
                <Input
                    value={phone}
                    keyboardType='decimal-pad'
                    placeholder={userProfileData ? userProfileData?.phoneNumber[0].number : 'Phone Number'}
                    onChangeText={(email: any) => setPhone(email)}
                    leftIcon={<Icon.FontAwesome name="phone" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginLeft: "5%", marginRight: "1%" }}
                />
                {/* <Input
                    value={password}
                    placeholder="Password"
                    secureTextEntry={secureText}
                    onChangeText={(email) => setPassword(email)}
                    leftIcon={<Icon.FontAwesome name="lock" size={25} color="#BDBDBD" />}
                    leftIconContainerStyle={{ marginLeft: "5%", marginRight: "2.5%" }}
                    rightIcon={secureText ?
                        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                            <Icon.AntDesign name="eye" size={25} color={"#000000"} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                            <Icon.AntDesign name="eye" size={25} color={"#BDBDBD"} />
                        </TouchableOpacity>}
                    rightIconContainerStyle={{ marginRight: "5%" }}
                /> */}
                {/* <SimpleButton without={false} title="Update Email" onPress={() => {
                    setUpdateEmailModal(true)
                }} /> */}
                <View style={{ marginTop: "5%" }}>
                    <SimpleButton without={false} title="Change Password" onPress={() => {
                        setChangePasswordModal(true)
                    }} />

                </View>

            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Save" onPress={onUpdateEmployeeDetails} />
            </View>
            <Modal isVisible={updateEmailModal} >
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => { setUpdateEmailModal(false); setEmail(userProfileData ? userProfileData?.email : '') }} style={{ alignSelf: "flex-end", padding: "5%" }}>
                        <Icon.AntDesign name={"closecircle"} color={"white"} size={20} />
                    </TouchableOpacity>
                    <View style={{ marginTop: "5%" }}>
                        <Text style={styles.headingTextStyle}> Edit your email</Text>
                        <Input
                            value={email}
                            placeholder={userProfileData ? userProfileData?.email : 'Enter email'}
                            onChangeText={(email: any) => setEmail(email)}
                            leftIcon={<Icon.MaterialCommunityIcons name="email" size={20} color="#B2B2B2" />}
                            leftIconContainerStyle={{ marginLeft: "5%", marginRight: 2.5 }} />
                        {updateEmailErrors.email ? <Text style={styles.errorStyle}>{updateEmailErrors.email} </Text> : null}
                    </View>
                    <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                        <SimpleButton without={false} loading={isLoading} title="Update" onPress={onUpdateEmail} />
                    </View>
                </View>
            </Modal>

            <Modal isVisible={changePasswordModal}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity onPress={() => { setChangePasswordModal(false), setSecureText(true), setNewPasswordSecureText(true) }} style={{ alignSelf: "flex-end", padding: "5%" }}>
                        <Icon.AntDesign name={"closecircle"} color={"white"} size={20} />
                    </TouchableOpacity>
                    <View style={{ marginTop: "5%" }}>
                        <Text style={styles.headingTextStyle}>Change Your Password</Text>
                        <Input
                            value={password}
                            placeholder="Old Password"
                            secureTextEntry={secureText}
                            onChangeText={(pas) => setPassword(pas)}
                            leftIcon={<Icon.FontAwesome name="lock" size={25} color="#BDBDBD" />}
                            leftIconContainerStyle={{ marginLeft: "5%", marginRight: "2.5%" }}
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
                        {changePasswordErrors.password ? <Text style={styles.errorStyle}>{changePasswordErrors.password} </Text> : null}
                        <Input
                            value={newPassword}
                            placeholder="New Password"
                            secureTextEntry={newPasswordsecureText}
                            onChangeText={(pas) => setNewPassword(pas)}
                            leftIcon={<Icon.FontAwesome name="lock" size={25} color="#BDBDBD" />}
                            leftIconContainerStyle={{ marginLeft: "5%", marginRight: "2.5%" }}
                            rightIcon={newPasswordsecureText ?
                                <TouchableOpacity onPress={() => setNewPasswordSecureText(!newPasswordsecureText)}>
                                    <Icon.AntDesign name="eye" size={25} color={"#000000"} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setNewPasswordSecureText(!newPasswordsecureText)}>
                                    <Icon.AntDesign name="eye" size={25} color={"#BDBDBD"} />
                                </TouchableOpacity>}
                            rightIconContainerStyle={{ marginRight: "5%" }}
                        />
                        {changePasswordErrors.newPassword ? <Text style={styles.errorStyle}>{changePasswordErrors.newPassword} </Text> : null}
                    </View>
                    <View style={{ marginTop: "5%", marginHorizontal: "10%" }}>
                        <SimpleButton without={false} loading={isLoading} title="Change Password" onPress={onChangePassword} />

                    </View>
                </View>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
    },
    modalContainer: {
        backgroundColor: VIWELL_COLORS.bgColor,
        height: SCREEN_HEIGHT * 0.6,
        borderRadius: 25
    },

    stepTextStyle: {
        marginTop: "5%",
        fontSize: 16,
        fontFamily: 'ABeeZee-Regular',
        textAlign: "center",
        color: '#FF8E7C'
    },
    selectedContainer: {
        backgroundColor: VIWELL_COLORS.bgColor,
        height: SCREEN_HEIGHT * 0.25,
        width: SCREEN_WIDTH * 0.4,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    unSelectedContainer: {
        backgroundColor: '#333333',
        height: SCREEN_HEIGHT * 0.25,
        width: SCREEN_WIDTH * 0.4,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    addPhotoText: {
        marginTop: "5%",
        color: "#828282",
        fontSize: 16,
        fontFamily: 'ABeeZee-Regular',
        textAlign: "center"
    },
    buttonContainer: {
        flex: 0.1,
        marginHorizontal: "5%",
        marginVertical: heightHp(2.4)
    },
    headingTextStyle: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: 'ABeeZee-Italic',
        color: 'white', marginBottom: "5%"
    },
    textContainer: {
        marginTop: "5%",
        marginBottom: "10%"
    },
    avatarContainer: {
        borderStyle: "dashed",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "gray",
        borderRadius: SCREEN_HEIGHT * 0.15,
        height: SCREEN_HEIGHT * 0.15,
        width: SCREEN_WIDTH * 0.3
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgotPassword: {
        color: "#BDBDBD",
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH * 1,
    },
    flatlistContainer: {
        height: SCREEN_HEIGHT * 0.15,
        width: SCREEN_WIDTH * 0.3,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 25,
    },
    selectedItemContainer: {
        height: SCREEN_HEIGHT * 0.15,
        width: SCREEN_WIDTH * 0.3,
        justifyContent: "center",
        alignItems: 'center',
        overflow: "hidden",
        borderRadius: SCREEN_HEIGHT * 0.2,
        borderWidth: 2,
        borderColor: VIWELL_COLORS.dashOrange
    },
    errorStyle: {
        color: 'red',
        fontSize: 11,
        marginTop: -5
    },


});


export default EditProfile;