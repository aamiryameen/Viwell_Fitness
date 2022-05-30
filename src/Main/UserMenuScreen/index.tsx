


import React, { useEffect, useLayoutEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Avatar } from 'react-native-elements';
import { Icon } from '../../components';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Watch from '../../assets/svg/watch.svg';
import Star from '../../assets/svg/star.svg';
import Badge from '../../assets/svg/badge.svg';
import Setting from '../../assets/svg/Settings.svg';
import Help from '../../assets/svg/Help.svg';
import Subscription from '../../assets/svg/Subscription.svg';
import Privacy from '../../assets/svg/Privacy.svg';
import Logout from '../../assets/svg/Logout.svg';
import About from '../../assets/svg/About.svg';
import Profile from '../../assets/svg/Profile.svg';
import PersonalInfo from '../../assets/svg/PersonalInfo.svg';
import Level from '../../assets/svg/Level.svg';
import Youtube from '../../assets/svg/youtube.svg';
import Instagram from '../../assets/svg/instagram.svg';
import Linkedin from '../../assets/svg/linkedin.svg';
import Twitter from '../../assets/svg/twitter.svg';
import Facebook from '../../assets/svg/facebook.svg';
import { useLogoutMutation } from '../../services/auth';
import { useGetProfileQuery, } from '../../services/auth';
import { clearAllLocalData, getLocalData, LOCAL_STORAGE_KEYS } from '../../utils/localstorage';
import { useFocusEffect } from '@react-navigation/native';
import { useLazySetProfilePictureQuery } from '../../generated/graphql'
import * as ImagePicker from 'expo-image-picker';
import { useTheme } from '@react-navigation/native'

let token;
let refreshToken;

function UserMenu(props: any) {

    const profileData = useGetProfileQuery(token)

    const myTheme = useTheme();

    const [trigger, res] = useLazySetProfilePictureQuery()

    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [profileImage, setProfileImage] = useState('');

    let [logout, response] = useLogoutMutation();

    let { data, isError, isLoading, error, isSuccess } = response;

    const navigation = useNavigation();

    const progressCustomStyles = {
        borderRadius: 10,
        borderWidth: 0,
        justifyContent: "center",
        backgroundColor: "white",
        emptyBackground: "#333333"
    };


    useEffect(() => {
        getProfileData()

    }, [])

    const getProfileData = async () => {

        let tokenData = await getLocalData(LOCAL_STORAGE_KEYS.userToken)
        let userData = JSON.parse(tokenData);
        token = userData.token;
        refreshToken = userData.refreshToken;

    }


    const cameraSelected = () => {


        ImagePicker.launchCameraAsync({
            width: 300,
            height: 400,
            cropping: true,
        }).then((image) => {
            console.log('camera', image)
        }).catch(e => {
            console.log(e);
        });

    }

    const gallerySelected = () => {


        ImagePicker.launchImageLibraryAsync({
            width: 300,
            height: 400,
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            cropping: true
        }).then(image => {
            let imgExtension = image.mime;
            let splittedExtension = imgExtension.split('/');
            console.log('splitted', splittedExtension)
            let extension: any = splittedExtension[1]
            trigger({ extension, moduleName: 'image' }).unwrap().then((res) => {

                let imgUrl = res;
                console.log('fd', imgUrl)


                fetch(imgUrl, {
                    method: 'PUT',
                }).then(res => res.json()).then((data) => {
                    console.log('data', data)
                }).
                    catch(e => {
                        console.log('img error', e)
                    })
            }).catch((err) => {
                console.log('error', error);
            })
        }).catch(e => {
            console.log(e)
        });

    }


    const setProfile = () => {



        fetch(profileImage, {
            method: 'PUT',
        }).then(res => res.json()).
            catch(e => {
                console.log('img error', e)
            })

    }

    useEffect(() => {

        setProfile()
    }, [secureText, height, weight,])

    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.textContainer}>
                    <Avatar
                        source={{ uri: profileData?.data ? profileData?.data?.image : '../../assets/images/Mask.png' }}
                        rounded
                        size={120}>

                        <Avatar.Accessory type="feather" name="camera" color="gray" onPress={gallerySelected} size={20}
                            style={{ backgroundColor: '#4F4F4F', borderRadius: 15, height: 30, width: 30, left: '70%' }} >
                        </Avatar.Accessory>


                    </Avatar>
                    <Text style={styles.titleStyle}>{profileData.data ? profileData.data.name : 'Name'}</Text>
                    {/* <Text style={styles.beginTextStyle}>Beginner</Text> */}
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginBottom: "5%" }} >
                    <View style={{ alignItems: "center", justifyContent: "center" }} >
                        <Watch />
                        <Text style={styles.titleStyle}>10</Text>
                        <Text style={styles.badgeTextStyle}>Total Time (h)</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Goals')} style={{ alignItems: "center", justifyContent: "center" }} >
                        <Star />
                        <Text style={styles.titleStyle}>3/28</Text>
                        <Text style={styles.badgeTextStyle}>Goals Achieved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('BadgeCollected')} style={{ alignItems: "center", justifyContent: "center" }} >
                        <Badge />
                        <Text style={styles.titleStyle}>5/15</Text>
                        <Text style={styles.badgeTextStyle}>Badge Collected</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: "center" }}>
                    <Level width={SCREEN_WIDTH} />
                </View>

                <View style={styles.flatListContainer}>
                    <Text style={styles.headingText}>{'Account'}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('EditProfile', { getUserProfileData: profileData.data }) }} style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Profile />
                            <Text style={styles.itemText}>{'Edit Profile'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PersonalInfo') }} style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <PersonalInfo />
                            <Text style={styles.itemText}>{'Edit Personal Information'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={styles.flatListContainer}>
                    <Text style={styles.headingText}>{'General'}</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('AppSettings', { getUserProfileData: profileData.data }) }} style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Setting />
                            <Text style={styles.itemText}>{'App Settings'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                    <View style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Subscription />
                            <Text style={styles.itemText}>{'My Bookings'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate('HelpandSupport') }} style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Help />
                            <Text style={styles.itemText}>{'Help & Support'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('TermsCondition') }} style={{ ...styles.listItemContainer }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <About />
                            <Text style={{ ...styles.itemText, }}>{'Terms and Conditions'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate('PrivacyPolicy') }} style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Privacy />
                            <Text style={styles.itemText}>{'Privacy Policy'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={() => {navigation.navigate(route.FAQS) }} style={styles.listItemContainer}>
                            <Text style={styles.itemText}>{'FAQS'}</Text>
                        </TouchableOpacity> */}
                    <TouchableOpacity onPress={() => Alert.alert("Sign Out?", "You need to be signed in to access tickets, favourite artworks or register for events.", [
                        {
                            text: "Cancel",
                            style: 'cancel',
                            onPress: () => { }
                        },
                        {
                            text: "Sign Out",
                            style: "destructive", onPress: async () => {
                                logout(refreshToken);
                                clearAllLocalData()
                                let tokenData = await getLocalData(LOCAL_STORAGE_KEYS.userToken);
                                console.log("tokenData : ", tokenData);
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Auth' }]
                                })
                            }
                        },
                    ])} style={styles.listItemContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Logout />
                            <Text style={styles.itemText}>{'Log Out'}</Text>
                        </View>
                        <Icon.FontAwesome name="angle-right" color="#828282" size={20} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginVertical: 20 }} >
                    <Facebook />
                    <Twitter />
                    <Linkedin />
                    <Youtube />
                    <Instagram />
                </View>
            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
        paddingHorizontal: "5%"
    },
    titleStyle: {
        color: "#fff",
        fontSize: 20,
        marginTop: "10%",
        textAlign: "center",
        fontFamily: 'ABeeZee-Italic'
    },
    badgeTextStyle: {
        color: "#828282",
        fontSize: 12,
        marginTop: 5,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular'
    },
    beginTextStyle: {
        color: "#828282",
        fontSize: 16,
        marginTop: 5,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular'
    },
    textContainer: {
        marginTop: "10%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "5%"
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
        flex: 0.1
    },
    headingTextStyle: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'ABeeZee-Italic',
        color: 'white', marginTop: "5%"
    },

    flatListContainer: {
        // borderBottomWidth: 1,
        borderColor: 'lightgray',
        paddingBottom: "5%",
    },
    itemText: {
        fontSize: 16,
        marginLeft: 15,
        fontFamily: 'ABeeZee-Italic',
        color: "#fff",
    },
    listItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // margin: "2.5%",
        marginTop: '5%',
        // paddingHorizontal: "10%",
    },
    headingText: {
        marginTop: "5%",
        // marginLeft: "5%",
        fontSize: 16,
        fontFamily: 'ABeeZee-Italic',
        color: '#828282',
    },
});


export default UserMenu;