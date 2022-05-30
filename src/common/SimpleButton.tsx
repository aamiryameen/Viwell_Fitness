import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';
import { VIWELL_FONTS } from '../styles/fonts';
interface IProps {
    onPress?: () => any;
    title?: string;
    without?: any;
    loading?: any;
}

const SimpleButton = (props: IProps) => {
    const { onPress, title, loading } = props;

    return loading ? (
        <View style={props.without ? styles.withoutBgContainer : styles.container}>
            <ActivityIndicator color={colors.WHITE} />
        </View>
    ) : (
        <TouchableOpacity onPress={onPress} style={props.without ? styles.withoutBgContainer : styles.container}>
            <Text style={props.without ? styles.textStye : styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    },
    withoutBgContainer: {
        // backgroundColor: VIWELL_COLORS.dashOrange,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56
    },
    text: {
        fontSize: 18,
        color: colors.WHITE,
        fontFamily: VIWELL_FONTS.ABeeZeeRegular,
        // fontWeight: 'bold',
        fontStyle: 'italic'
    },
    textStye: {
        fontSize: 18,
        color: '#828282',
        fontFamily: VIWELL_FONTS.ABeeZeeItalic,
        fontStyle: 'italic'
    }
});

export default SimpleButton;
