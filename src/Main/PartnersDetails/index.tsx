


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import { Icon, } from '../../components';
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

function PartnerDetails(props: any) {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("");
    const [secureText, setSecureText] = useState(true);


    const navigation = useNavigation();

    useEffect(() => {
    }, [secureText, height, weight])




    return (
        <View style={styles.container}>
            <ScrollView >
                <ImageBackground
                    source={require('../../assets/images/medicine.png')}
                    style={{ height: SCREEN_HEIGHT * 0.4, width: '100%' }}>
                    {/* <Header /> */}
                </ImageBackground>
                <View style={styles.contentContainer}>
                    <View style={styles.rowContainer}>
                        <Text style={styles.titleStyle}>Mediclinic</Text>
                        <View style={styles.openContainer}>
                            <Text style={styles.badgeTextStyle}>Open</Text>
                        </View>
                    </View>
                    <Text style={styles.beginTextStyle}>The Dubai Mall - Financial Center Rd </Text>
                    <View style={styles.rowContainer}>
                        <Text style={styles.titleStyle}>Mediclinic</Text>
                        <View style={styles.openContainer}>
                            <Text style={styles.badgeTextStyle}>Open</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.titleStyle}>Mediclinic</Text>
                        <View style={styles.openContainer}>
                            <Text style={styles.badgeTextStyle}>Open</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
        // paddingHorizontal: "5%"
    },
    contentContainer: {
        flex: 1,
        padding: "5%",
        bottom: "7.5%",
        backgroundColor: VIWELL_COLORS.bgColor,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        overflow: "hidden",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleStyle: {
        color: "#fff",
        fontSize: 24,
        fontFamily: 'Poppins-Bold'
    },
    openContainer: {
        backgroundColor: "#4DC41F",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: "5%",
        // height: 30,
        borderRadius: 23
    },
    badgeTextStyle: {
        color: "#fff",
        fontSize: 14,
        fontFamily: 'Poppins-Bold'
    },
    beginTextStyle: {
        color: "#828282",
        fontSize: 14,
        marginTop: 5,
        fontFamily: 'Poppins-Regular'
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


export default PartnerDetails;