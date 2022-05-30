


import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../navigation/types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Avatar1 from '../../assets/svg/avatar-1.svg';
import moment from 'moment';
import DatePicker from 'react-native-date-picker'
function SelectAvatar(props: any) {
    const [date, setDate] = useState(new Date())
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);

    const [avatarArr, setAvatarArr] = useState([{
        image: require('../../assets/images/avatar/1.png'),
        selected: false,
    }, {
        image: require('../../assets/images/avatar/2.png'),
        selected: false,
    }, {
        image: require('../../assets/images/avatar/3.png'),
        selected: false,
    }, {
        image: require('../../assets/images/avatar/4.png'),
        selected: false,
    }, {
        image: require('../../assets/images/avatar/5.png'),
        selected: true,
    }, {
        image: require('../../assets/images/avatar/6.png'),
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
            headerRight: () => headerRight()
        });
    }, [navigation]);

    const headerTitle = () => {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ProgressBarAnimated
                    width={SCREEN_WIDTH * 0.4}
                    height={10}
                    value={20}
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
    }, [secureText, rememberMe, avatarArr])


    const _renderItems = (index: any, item: any) => {
        console.log(item);

        return (
            <TouchableOpacity onPress={() => onPressAvatar(item, index)} style={item.selected ? styles.selectedItemContainer : styles.flatlistContainer}>
                <Image source={item.image} />
            </TouchableOpacity>
        )
    }

    const onPressAvatar = (item: any, index: any) => {
        let array = [...avatarArr];

        array.map((item, index) => {
            array[index] = { ...array[index], selected: false }
        })


        array[index] = { ...array[index], selected: true }

        setAvatarArr(array);

    }

    const renderSeparator = () => {
        return (
            <View>

            </View>
        )
    }



    return (
        <AuthContainer>
            <View style={{ flex: 0.9 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.stepTextStyle}>step 2/10</Text>
                    <Text style={styles.headingTextStyle}>What is your birthday?</Text>
                </View>

                <View style={{ marginTop: "5%", alignItems: "center" }}>
                    <DatePicker
                        textColor={'#828282'}
                        fadeToColor={"#252525"}
                        style={{ backgroundColor: '#252525' }}
                        dividerHeight={1}
                        date={date}
                        maximumDate={new Date(moment().format("YYYY-MM-DD"))}
                        minimumDate={new Date("1920-01-01")}
                        mode="date"
                        onDateChange={(date: any) => setDate(date)}
                    />
                </View>
                <Text style={styles.addPhotoText}>Don’t worry, your birthdate is kept private and will never be sent, used or sold to any third party app</Text>
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Continue" onPress={() => {
                    navigation.navigate('SelectGender')
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
        color: "#FF8E7C"
    },
    addPhotoText: {
        marginVertical: "5%",
        color: "#828282",
        marginHorizontal: "10%",
        fontFamily: 'ABeeZee-Regular',
        fontSize: 16,
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


export default SelectAvatar;