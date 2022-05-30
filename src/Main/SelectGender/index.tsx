


import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';

import moment from 'moment';
import DatePicker from 'react-native-date-picker'
function SelectGender(props: any) {
    const [male, setMale] = useState(true)
    const [female, setFemale] = useState(false);
    const [secureText, setSecureText] = useState(true);


    const navigation = useNavigation();
    const progressCustomStyles = {
        borderRadius: 10,
        borderWidth: 0,
        justifyContent: "center",
        backgroundColor: "white",
        emptyBackground: "#333333"
    };
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: () => headerTitle(),
            headerRight: () => headerRight()
        });
    }, [navigation]);

    const headerTitle = () => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ProgressBarAnimated
                    width={SCREEN_WIDTH * 0.4}
                    height={10}
                    value={30}
                    {...progressCustomStyles}
                    onComplete={() => { }}
                />
            </View>

        )
    }

    const headerRight = () => {
        return (
            <TouchableOpacity style={{ marginRight: 20 }} >
                <Text style={{ color: "white", fontSize: 16 }}>Skip</Text>
            </TouchableOpacity>
        )
    }


    useEffect(() => {
    }, [secureText, female, male])





    return (
        <AuthContainer>
            <View style={{ flex: 0.9 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.stepTextStyle}>step 3/10</Text>
                    <Text style={styles.headingTextStyle}>Which one are you?</Text>
                </View>

                <View style={{ marginTop: "5%", alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => { setMale(true); setFemale(false) }} style={male ? styles.selectedContainer : styles.unSelectedContainer}>
                        <Icon.Ionicons name="male" size={50} color={male ? VIWELL_COLORS.dashOrange : "#828282"} />
                        <View style={styles.textContainer}>
                            <Text style={male ? styles.stepTextStyle1 : styles.addPhotoText}>Male</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setMale(false); setFemale(true) }} style={female ? styles.selectedContainer : styles.unSelectedContainer}>
                        <Icon.Ionicons name="female" size={50} color={female ? VIWELL_COLORS.dashOrange : "#828282"} />
                        <View style={styles.textContainer}>
                            <Text style={female ? styles.stepTextStyle1 : styles.addPhotoText}>Female</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginHorizontal: "10%", marginTop: "10%" }}>
                    <Text style={styles.addPhotoText}>Don’t worry, your gender is kept private and will never be sent, used or sold to any third party app</Text>
                </View></View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Continue" onPress={() => {
                    navigation.navigate('AddBodyMeasurement')
                }} />
            </View>
        </AuthContainer>
    );
}




const styles = StyleSheet.create({
    stepTextStyle: {
        marginTop: "5%",
        fontSize: 16,

        textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: "#FF8E7C"
    },
    stepTextStyle1: {
        marginTop: "5%",
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: VIWELL_COLORS.dashOrange
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
        fontSize: 24,
        textAlign: "center",
        fontFamily: 'ABeeZee-Italic',
        color: 'white', marginTop: "5%"
    },
    textContainer: {
        marginTop: "5%",
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
    }

});


export default SelectGender;