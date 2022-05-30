import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VIWELL_COLORS } from '../../styles';

interface IProps {
    onPress?: () => any;
    title?: string;
    without?: any;
    loading?: any;
}

const SimpleButton = (props: IProps) => {
    const { onPress, title, loading } = props;

    return (
        loading ?
            <View style={props.without ? styles.withoutBgContainer : styles.container}>
                <ActivityIndicator color={"white"} />
            </View>
            :
            <TouchableOpacity onPress={onPress} style={props.without ? styles.withoutBgContainer : styles.container}>
                <Text style={props.without ? styles.textStye : styles.text}>{title}</Text>
            </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: VIWELL_COLORS.dashOrange,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        height: 56,
    },
    withoutBgContainer: {
        // backgroundColor: VIWELL_COLORS.dashOrange,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        height: 56,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "ABeeZee-Italic",
        // fontWeight: 'bold',
    },
    textStye: {
        fontSize: 18,
        color: '#828282',
        fontFamily: "ABeeZee-Italic",

    }
});

export default SimpleButton;
