


import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import DumBell from '../../assets/svg/Anchor.svg'
import Height from '../../assets/svg/Height.svg';
import  {useGetAllSurveyQuery} from '../../generated/graphql'

// import CustomMarker from './workoutPerWeek.component';
function WorkoutPerWeek(props: any) {

    const [min, setMin] = useState(1)
    const [max, setMax] = useState(7);
    const [multiSliderValue, setMultiSliderValue] = useState([min, max])
    const [secureText, setSecureText] = useState(true);
    // const {data, isError, isLoading} = useGetAllSurveyQuery()


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
                    value={50}
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
        console.log('survery')
        // console.log(data)
        // console.log(isError)
    }, [])

    useEffect(() => {
       
    }, [secureText, min, max, multiSliderValue])

    const multiSliderValuesChange = (values: any) => {
    
        setMax(values[0]);
        console.log(values);

        let array = [min, values[0]];
        setMultiSliderValue(array)
    }

    const renderScale = () => {

        const items = [];
        for (let i = 1; i <= 7; i++) {
            items.push(
                // <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={checkActive(i, max) ? styles.lineStyle : styles.line}>
                    <Text style={checkActive(i, max) ? styles.active : styles.inactive}>{i}</Text>
                </View>
                // </View>
            );
        }
        return items;
    }

    const checkActive = (value: any, second: any) => {
        if (value == second)
            return true
        else
            return false
    }



    return (
        <AuthContainer>
            <View style={{ flex: 0.9 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.stepTextStyle}>step 5/10</Text>
                    <Text style={styles.headingTextStyle}>On average, how many days are you working out per week?</Text>
                </View>
                <View>
                    <View style={[styles.column, { marginLeft: 0, marginRight: 0 }]}>
                        {renderScale()}
                    </View>
                    <View style={styles.container}>

                        <MultiSlider
                            trackStyle={{ backgroundColor: '#4F4F4F', height: 9 }}
                            selectedStyle={{ backgroundColor: VIWELL_COLORS.dashOrange, height: 9, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}
                            values={[multiSliderValue[1]]}
                            sliderLength={SCREEN_WIDTH * 0.85}
                            markerContainerStyle={{ marginTop: 5 }}
                            unselectedStyle={{ borderTopRightRadius: 20, borderBottomRightRadius: 20 }}
                            onValuesChange={multiSliderValuesChange}
                            min={1}
                            max={7}
                            step={1}
                            allowOverlap={false}
                            customMarker={() => (<DumBell />)}
                            snapped={true}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Continue" onPress={() => {
                    navigation.navigate('FitnessGoal')
                }} />
            </View>
        </AuthContainer>
    );
}




const styles = StyleSheet.create({
    stepTextStyle: {
        marginTop: "5%",
        fontSize: 16,
        fontFamily: 'ABeeZee-Regular',
        textAlign: "center",
        color: '#FF8E7C'
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: "5%"
    },
    column: {
        // flex: 1,
        width: SCREEN_WIDTH * 0.925,
        flexDirection: 'row',
        // flexWrap: "wrap",
        alignSelf: "center",
        // alignItems: 'center',
        justifyContent: 'space-between',
        bottom: -25,

    },
    active: {
        fontSize: 16,
        color: 'white',
        textAlign: "center"
    },
    inactive: {
        fontSize: 16,
        color: '#828282',
        textAlign: "center"
    },
    line: {
        // top: 15,
        // height: 64,
        alignItems: "center",
        // top: 5,
        width: 30,
        // position:"absolute",
        paddingTop: 5,
        height: 44,
        // backgroundColor: "#797B7B",
    },
    lineStyle: {
        backgroundColor: '#A26FFD',
        // borderRadius: 15,
        // justifyContent: "center",
        alignItems: "center",
        // top: 5,
        width: 30,
        // position:"absolute",
        paddingTop: 5,
        height: 44,
        // width: "110%",
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
        marginHorizontal: "5%",
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


export default WorkoutPerWeek;