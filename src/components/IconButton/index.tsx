import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VIWELL_COLORS } from '../../styles';
import Email from '../../assets/svg/email.svg';

interface IProps {
    onPress?: () => any;
    title: string;
    email: any,
    style?: any
}

const IconButton = (props: IProps) => {
  
    const { onPress, title, email, style } = props;

    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
            <View style={{ flex: 0.2 }}>
                {
                    email ?
                        <Email />
                        : null
                }
            </View>
            <View style={{ flex: 0.6 }}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={{ flex: 0.2 }}>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingHorizontal: "2.5%",
        flexDirection: "row",
        backgroundColor: VIWELL_COLORS.dashOrange,
        borderRadius: 16,
        alignItems: "center",
        height: 56,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        textAlign: "center",
        fontFamily: "ABeeZee-Italic",
        // fontWeight: 'bold',
        // textTransform: 'uppercase',
    },
});

export default IconButton;
