


import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { VIWELL_COLORS, FontSizes, FontWeights } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Intro1st from '../../assets/svg/intro-1.svg';
import Intro2nd from '../../assets/svg/intro-2.svg';
import Intro3rd from '../../assets/svg/intro-3.svg';
import Intro4th from '../../assets/svg/intro-4.svg';
import { SimpleButton } from '../../components';
import { LOCAL_STORAGE_KEYS, storeLocalData } from '../../utils/localstorage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
type MyProps = {
    // using `interface` is also ok
    navigation: any;
};
type MyState = {
    currentPostIndex: any; // like this
    data: any
};
class AppIntroScreen extends React.Component<MyProps, MyState> {
    state: MyState = {
        // optional second annotation for better type inference
        currentPostIndex: 0,
        data: [
            {
                image: <Intro1st />,
                title: "6 Wellbeing Elements",
                desc: "Wellbeing journey starts here addressing all your wellbeing elements"
            },
            {
                image: <Intro2nd height={SCREEN_HEIGHT * 0.4} />,
                title: "Wellbeing & Sport",
                desc: "Build your fitness program, follow our leaders and easily track your fitness and workout activities."
            },
            {
                image: <Intro3rd height={SCREEN_HEIGHT * 0.4} />,
                title: "Events by Experts",
                desc: "We organise single or multi-sports, industry or company specific, indoor or outdoor, tournaments year-round."
            },
            {
                image: <Intro4th height={SCREEN_HEIGHT * 0.33} />,
                title: "More active. More rewards.",
                desc: "The more you move, the more you save!\nConvert your steps into savings from 500+ partners both in-store and online."
            },
        ]
    };
    scroll: React.RefObject<ScrollView> = React.createRef();

    setSliderPage = (event: any) => {
        const { currentPostIndex } = this.state;
        const x = event.nativeEvent.contentOffset;
        const indexOfNextScreen = Math.floor(x.x / Math.floor((SCREEN_WIDTH)));
        if (indexOfNextScreen !== currentPostIndex) {
            this.setState({
                currentPostIndex: indexOfNextScreen,
            });
        }

    };

    handleNext = () => {
        const { currentPostIndex, data, } = this.state;
        this.setState({
            currentPostIndex: currentPostIndex + 1,
        }, () => {
            if (this.scroll !== null && this.scroll.current !== null) {
                this.scroll.current.scrollTo({ x: SCREEN_WIDTH * (this.state.currentPostIndex) })
            }
        })
    }

    handleSkipNow = () => {
        storeLocalData(LOCAL_STORAGE_KEYS.appIntro, JSON.stringify(true))
        this.props.navigation.replace("Auth")
    }
    handleSignNow = () => {
        storeLocalData(LOCAL_STORAGE_KEYS.appIntro, JSON.stringify(true))
        this.props.navigation.replace("Auth")
    }

    render() {
        const { currentPostIndex, data, } = this.state;

        return (
            <View style={styles.container} >
                <View style={styles.skipContainer}>
                    <Text onPress={() => this.handleSkipNow()} style={styles.body}> {currentPostIndex === 3 ? '' : 'Skip'}</Text>
                </View>
                <ScrollView
                    horizontal={true}
                    scrollEventThrottle={16}
                    scrollEnabled={false}
                    pagingEnabled={true}
                    contentContainerStyle={{}}
                    showsHorizontalScrollIndicator={false}
                    ref={this.scroll}
                    // onScroll={(event) => this.setSliderPage(event)}
                    style={{ flex: 1, }}>
                    {
                        data.map((item: any, index: any) => {
                            return (
                                <View key={index} style={styles.contentContainer}>
                                    <View style={styles.svgContainer}>
                                        {item.image}
                                    </View>
                                    <View style={styles.paginationWrapper}>
                                        {Array.from(Array(data?.length).keys()).map((key, index) => (
                                            <View style={[currentPostIndex === index ? styles.paginationDash : styles.paginationDots, { opacity: currentPostIndex === index ? 1 : 0.6, backgroundColor: currentPostIndex === index ? VIWELL_COLORS.dashOrange : VIWELL_COLORS.colorGray, marginLeft: index == 0 ? 0 : 6 }]} key={index} />
                                        ))}
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.heading}>{item.title}</Text>
                                        <Text style={styles.item}>{item.desc}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                {
                    currentPostIndex == 0 || currentPostIndex <= 2 ?
                        <View style={styles.buttonContainer}>
                            <SimpleButton without={false} title="Next" onPress={() => this.handleNext()} />
                        </View>
                        :
                        <View style={styles.buttonContainer}>
                            <SimpleButton without={false} title="Sign in Now" onPress={() => this.handleSignNow()} />
                        </View>
                }
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
    },
    contentContainer: {
        paddingTop: "2.5%",
        height: hp('80%'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
        justifyContent: "center"
    },
    svgContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    topContainer: {
        justifyContent: 'center',
        alignItems: "center"
    },
    dashContiner: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: "center"
    },
    paginationWrapper: {
        marginTop: "15%",
        marginVertical: "5%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDash: {
        height: 10,
        width: 30,
        borderRadius: 24 / 2,
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 24 / 2,
    },
    textContainer: {
        // marginTop: "10%",
        marginHorizontal: "5%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        marginHorizontal: "5%",
        marginBottom: "5%",
    },
    skipContainer: {
        marginTop: "5%",
        marginRight: "5%",
        alignSelf: "flex-end"
    },
    heading: {
        ...FontWeights.Light,
        // fontSize: hp('3.25%'),
        fontSize: 24,
    },
    body: {
        ...FontWeights.Light,
        ...FontSizes.Body,
        textTransform: "capitalize",
    },
    item: {
        fontFamily: 'ABeeZee-Regular',
        color: '#828282',
        fontSize: 15,
        marginTop: 10,
        textAlign: "center",
        marginHorizontal: "5%"
    },
});

export default function(props:any) {
    const navigation = useNavigation();
  
    return <AppIntroScreen {...props} navigation={navigation} />;
  }
