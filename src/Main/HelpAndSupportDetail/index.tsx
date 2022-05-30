


import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Play from '../../assets/svg/Play.svg';
import Live from '../../assets/svg/live.svg';
import Subscription from '../../assets/svg/Subscription.svg';
function HelpandSupportDetail(props: any) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const [dataArr, setDataArr] = useState([{
        title: "Is the app free?",
        selected: false,
    }, {
        title: "Can I train offline?",
        selected: false,
    }, {
        title: "Can I train with an injury issue?",
        selected: false,
    }, {
        title: "How to proceed to the next workout?",
        selected: false,
    }])

    const [data, setData] = useState([{
        title: "Tutorial Videos",
        selected: false,
        image: <Play />
    }, {
        title: "Live Workouts",
        selected: false,
        image: <Live />
    }, {
        title: "Subscribe Plan",
        selected: false,
        image: <Subscription />
    }])


    const navigation = useNavigation();
    const progressCustomStyles = {
        borderRadius: 10,
        borderWidth: 0,
        justifyContent: "center",
        backgroundColor: "white",
        emptyBackground: "#333333"
    };
 
    useEffect(() => {
    }, [secureText, rememberMe, dataArr])


    const _renderItems = (index: any, item: any) => {
        // console.log(item);

        return (
            <TouchableOpacity onPress={() => navigation.navigate('HelpandSupportDetail')}
                style={styles.unSelectedContainer}>
                <Text style={styles.addPhotoText}>{item.title}</Text>
                <View style={styles.unSelectedIconContainer}>
                    <Icon.FontAwesome name="angle-right" size={30} color={'#fff'} />
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

    const _renderItemsHorizontal = (item: any, index: any) => {
        console.log(item);

        return (
            <TouchableOpacity onPress={() => onPressItem(item, index)}
                style={styles.itemContainer}>
                {item.image}
                <Text style={styles.stepTextStyle}>{item.title}</Text>
            </TouchableOpacity >
        )
    }

    const renderSeparator = () => {
        return (
            <View style={{ height: 10 }} />
        )
    }

    const renderSeparatorHorizontal = () => {
        return (
            <View style={{ width: 10 }} />
        )
    }


    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.itemContainer}>
                   <Text style={styles.headingTextStyle}>How to proceed to the next workout?</Text>
                   <Text style={styles.stepTextStyle1}>To proceed to the next workout, you can tap on the phone screen when you complete the assigned number of repetitions, or simply swipe left. Swipe right to go back to the previous workout.</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingTextStyle1}>Related Questions</Text>
                    <View style={{}}>
                        <FlatList data={dataArr}
                            keyExtractor={(item, index) => ((index + 1).toString())}
                            ItemSeparatorComponent={renderSeparator}
                            // numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ index, item }) => _renderItems(index, item)} />
                    </View>
                </View>

            </ScrollView>
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
        fontSize: 18,
        // textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: '#fff'
    },
    stepTextStyle1: {
        fontSize: 16,
        // textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: '#BDBDBD'
    },
    addPhotoText: {
        color: "#fff",
        fontSize: 16,
        fontFamily: 'ABeeZee-Italic',
        textAlign: "center"
    },
    buttonContainer: {
        flex: 0.1
    },
    headingTextStyle: {
        fontSize: 24,
        // textAlign: "center",
        fontFamily: 'ABeeZee-Italic',
        color: 'white',
        // marginTop: "5%",
        marginBottom: "5%"
    },
    headingTextStyle1: {
        fontSize: 20,
        // textAlign: "center",
        fontFamily: 'ABeeZee-Italic',
        color: 'white',
        marginTop: "5%",
        marginBottom: "5%"
    },
    textContainer: {
        // marginTop: "5%",
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
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        borderRadius: 16,
        padding: "5%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemContainer: {
        backgroundColor: '#333333',
        // height: 125,
        // width: 112,
        justifyContent: "space-around",
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        borderRadius: 16,
        // alignItems: "center",
    },
    unSelectedIconContainer: {
        height: 40,
        // width: 40,
        justifyContent: "center",
        // alignItems: "center",
        overflow: "hidden",
        borderRadius: 40,
    }

});


export default HelpandSupportDetail;