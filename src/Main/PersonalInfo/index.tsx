


import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../navigation/types';
import { VIWELL_COLORS } from '../../styles';
import { heightHp, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Weight from '../../assets/svg/Weight.svg';
import Height from '../../assets/svg/Height.svg';
import Cal from '../../assets/svg/cal.svg';
import Birth from '../../assets/svg/bithday.svg';


function PersonalInfo(props: any) {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("");
    const [secureText, setSecureText] = useState(true);


    const navigation = useNavigation();
    const progressCustomStyles = {
        borderRadius: 10,
        borderWidth: 0,
        justifyContent: "center",
        backgroundColor: "white",
        emptyBackground: "#333333"
    };


    useEffect(() => {
    }, [secureText, height, weight])





    return (
        <View style={styles.container}>
            <View style={{ flex: 0.9, marginTop: "5%" }}>
                <Input
                    value={"20 / 2 / 2021"}
                    placeholder="Your Height"
                    editable={false}
                    onChangeText={(email: any) => setHeight(email)}
                    leftIcon={<Birth />}
                    leftIconContainerStyle={{ marginHorizontal: "5%" }}
                    rightIcon={<Cal />}
                    rightIconContainerStyle={{ marginHorizontal: "5%" }}
                />
                <Input
                    value={height}
                    placeholder="Your Height"
                    onChangeText={(email: any) => setHeight(email)}
                    leftIcon={<Height />}
                    leftIconContainerStyle={{ marginHorizontal: "5%" }}
                />
                <Input
                    value={weight}
                    placeholder="Your Weight"
                    onChangeText={(email: any) => setWeight(email)}
                    leftIcon={<Weight />}
                    leftIconContainerStyle={{ marginHorizontal: "5%" }} />

            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Save" onPress={() => {
                    navigation.goBack()
                }} />
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
        paddingHorizontal: "5%"
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
        marginVertical: heightHp(2.5)
    },
    headingTextStyle: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: 'ABeeZee-Italic',
        color: 'white', marginTop: "5%"
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
    }

});


export default PersonalInfo;