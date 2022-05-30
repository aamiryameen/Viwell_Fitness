


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { VIWELL_FONTS, FontSizes, FontWeights } from '../../styles/fonts';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../styles';
import { SimpleButton } from '../../components';
import Logo from '../../assets/svg/logo.svg'
import { useNavigation } from '@react-navigation/native';
import {VIWELL_COLORS} from '../../styles/colors';

function AccountSetupComplete(props: any) {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={{ flex: 0.6, justifyContent: "center", alignItems: "center", marginHorizontal: "5%" }}>
                <Logo />
            </View>
            <View style={{ flex: 0.2, justifyContent: "flex-end", alignItems: "center", marginHorizontal: "15%" }}>
                <Text style={styles.heading}>Account’s all setup.{`\n`}Now let’s start working out.</Text>
            </View>
            <View style={{ flex: 0.2, justifyContent: "center", marginHorizontal: "5%" }}>
                <SimpleButton without={false} title="Start my workout" onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Main' }]
                    })
                }} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.BLACK,
    },
    contentContainer: {
        paddingTop: "2.5%",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,

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
        textAlign: "center",
        ...FontWeights.Light,
        ...FontSizes.SubHeading,
    },
    body: {
        ...FontWeights.Light,
        ...FontSizes.Body,
        textTransform: "capitalize",
    },
    item: {
        ...FontWeights.Light,
        ...FontSizes.Label,
        marginTop: 10,
        textAlign: "center",
        marginHorizontal: "5%"
    },
});


export default AccountSetupComplete;