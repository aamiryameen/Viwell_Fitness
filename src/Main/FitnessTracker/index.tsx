


import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Avatar1 from '../../assets/svg/avatar-1.svg';

function FitnessTracker(props: any) {
 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const [dataArr, setDataArr] = useState([{
        title: "iPhone / Apple Watch",
        selected: false,
    }, {
        title: "Fitbit",
        selected: false,
    }, {
        title: "Google Fit",
        selected: false,
    }])

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
            // headerRight: () => headerRight()
        });
    }, [navigation]);

    const headerTitle = () => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ProgressBarAnimated
                    width={SCREEN_WIDTH * 0.4}
                    height={10}
                    value={90}
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
    }, [secureText, rememberMe, dataArr])


    const _renderItems = (index: any, item: any) => {
        console.log(item);

        return (
            <TouchableOpacity onPress={() => onPressItem(item, index)}
                style={item.selected ? styles.selectedItemContainer : styles.unSelectedContainer}>
                <Text style={item.selected ? styles.stepTextStyle1 : styles.addPhotoText}>{item.title}</Text>
                <View style={item.selected ? styles.selectedIconContainer : styles.unSelectedIconContainer}>
                    <Icon.Feather name="check" size={20} color={item.selected ? VIWELL_COLORS.bgColor : '#828282'} />
                </View>
            </TouchableOpacity >
        )
    }

    const onPressItem = (item: any, index: any) => {
        let array = [...dataArr];

        if (array[index].selected)
            array[index] = { ...array[index], selected: false }
        else
            array[index] = { ...array[index], selected: true }

        setDataArr(array);

    }

    const renderSeparator = () => {
        return (
            <View style={{ height: 10 }} />
        )
    }



    return (
        <AuthContainer>
            <View style={{ flex: 0.8 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.stepTextStyle}>step 10/10</Text>
                    <Text style={styles.headingTextStyle}>Purple allows you to track your steps using your smarthphone or fitness tracker </Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: "5%" }}>
                    <FlatList data={dataArr}
                        keyExtractor={(item, index) => ((index + 1).toString())}
                        ItemSeparatorComponent={renderSeparator}
                        // numColumns={2}
                        contentContainerStyle={{ paddingVertical: "10%" }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ index, item }) => _renderItems(index, item)} />
                </ScrollView>


            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Save" onPress={() => {
                    navigation.navigate('AccountSetupComplete')
                }} />
            </View>
        </AuthContainer>
    );
}




const styles = StyleSheet.create({
    stepTextStyle: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: '#FF8E7C'
    },
    stepTextStyle1: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: VIWELL_COLORS.dashOrange
    },
    addPhotoText: {
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
        marginHorizontal: "15%"
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
    unSelectedContainer: {
        flexDirection: "row",
        backgroundColor: '#333333',
        //  height: 56,
        borderRadius: 16,
        padding: "2.5%",
        paddingHorizontal: "5%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    selectedItemContainer: {
        //  height: 56,
        padding: "2.5%",
        paddingHorizontal: "5%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: VIWELL_COLORS.bgColor
    },
    selectedIconContainer: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: VIWELL_COLORS.dashOrange,
        borderRadius: 40,
        overflow: "hidden",
    },
    unSelectedIconContainer: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 40,
    }

});


export default FitnessTracker;