import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { VIWELL_COLORS, FontWeights, FontSizes } from '../../styles';
import { SimpleButton } from '../../components';
import Intro1st from '../../assets/svg/intro-1.svg';
import { useNavigation } from '@react-navigation/native';
interface IProps {
    props: any
}

const HomeScreen = (props: IProps) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView style={{ alignSelf: 'center' }}>
                <View style={{ marginHorizontal: 32, marginTop: 32 }}>
                    <Text style={{ color: "white" }}>Under Development</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: VIWELL_COLORS.bgColor,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        ...FontWeights.Light,
        ...FontSizes.SubHeading,
    },
    body: {
        ...FontWeights.Light,
        ...FontSizes.Body,
    },
    item: {
        ...FontWeights.Light,
        ...FontSizes.Body,
        marginTop: 10,
    },
});

export default HomeScreen;
