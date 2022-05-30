import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Avatar1 from '../../assets/svg/avatar-1.svg';
import { useGetAllSurveyQuery } from '../../generated/graphql';



function FitnessGoal(props: any) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [secureText, setSecureText] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [surveyTitle, setSurveyTitle]  = useState('');


    // const {data, isError, isSuccess,isLoading} = useGetAllSurveyQuery();

    const [dataArr, setDataArr] = useState([{
        title: "Manage weight",
        selected: false,
    }, {
        title: "Increase daily energy",
        selected: false,
    }, {
        title: "Increase muscle mass & size",
        selected: false,
    }, {
        title: "Try new excercise",
        selected: false,
    }, {
        title: "Workout without going outside",
        selected: false,
    }, {
        title: "Stay fit everyday",
        selected: false,
    }])


    // const getAllSurveyData =  () => {

    //     return   data?.getAllSurvey.find((item) => { item.title === 'Fitness Goal'
    //     setSurveyTitle(item.title)
    //     })
      
    //     }
    
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
                    value={60}
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


    // const _renderItems = (index: any, item: any) => {

    //     if(item.title === 'Fitness Goal'){

    //         return    item.options.map((option) => {
    //             return (
    //                 <TouchableOpacity 
    //                     style={styles.unSelectedContainer}>
    //                     <Text style={ styles.addPhotoText}>{option}</Text>
    //                     <View style={styles.unSelectedIconContainer}>
    //                         <Icon.Feather name="check" size={20} color={'#828282'} />
    //                     </View>
    //                 </TouchableOpacity >
    //             )
    //         })
    //     }
    // }

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
            <>
            <View style={{ flex: 0.9 }}>
                <View style={styles.textContainer}>
                    <Text style={styles.stepTextStyle}>step 6/10</Text>
                    <Text style={styles.headingTextStyle}>Let us know your fitness goal</Text>
                </View>
                {/* {getAllSurveyData()} */}
 
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: "5%" }}>
                    <FlatList data={dataArr}
                        keyExtractor={(item, index) => ((index + 1).toString())}
                        ItemSeparatorComponent={renderSeparator}
                        // numColumns={2}
                        contentContainerStyle={{ paddingVertical: "10%" }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ index, item }) => _renderItems(index, item)} />
{/* {getFitnessGoalOptions()} */}
                </ScrollView> 

            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Save" onPress={() => {
                    navigation.navigate('FavoriteSport')
                }} />
            </View>
            </>
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
        marginVertical: "1.8%"
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


export default FitnessGoal;