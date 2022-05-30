


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
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
function HelpandSupport(props: any) {
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
        title: "Live\nWorkouts",
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
                <View style={styles.textContainer}>
                    <Text style={styles.headingTextStyle}>What can we help?</Text>
                    <Input
                        value={email}
                        placeholder="Search topics or questions"
                        onChangeText={(email) => setEmail(email)}
                        leftIcon={<Icon.FontAwesome name="search" size={25} color="#B2B2B2" />}
                        leftIconContainerStyle={{ marginLeft: "4.5%" }} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingTextStyle}>Topics</Text>
                    <FlatList
                        data={data}
                        horizontal={true}
                        keyExtractor={(item, index) => ((index + 1).toString())}
                        contentContainerStyle={{ paddingHorizontal: 10, }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => _renderItemsHorizontal(item, index)}
                        ItemSeparatorComponent={renderSeparatorHorizontal} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headingTextStyle}>Top Questions</Text>
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
        fontSize: hp('2%'),
        // textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: '#fff'
    },
    stepTextStyle1: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: VIWELL_COLORS.dashOrange
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
        ////  height: 56,
        paddingVertical: "5%",
        paddingHorizontal: "5%",
        borderRadius: 16,
        padding: "5%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemContainer: {
        backgroundColor: '#333333',
        height: 125,
        width: 112,
        justifyContent: "space-around",
        paddingVertical: "5%",
        paddingHorizontal: "10%",
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


export default HelpandSupport;