import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

import { VIWELL_COLORS, FontWeights, FontSizes } from '../../styles';
import { SimpleButton } from '../../components';
import Paragraph from '../../assets/svg/Paragraph1.svg';
import { useNavigation } from '@react-navigation/native';
interface IProps {
    props: any
}

const TermsCondition = (props: IProps) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView >
                <View style={{ marginHorizontal: 32, marginTop: '5%' }}>
                    <Paragraph />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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

export default TermsCondition;
