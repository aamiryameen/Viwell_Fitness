import React from 'react';
import { StyleSheet } from 'react-native';
import { Input as InputElement, InputProps } from 'react-native-elements';
import VIWELL_COLORS from '../styles/colors';
import { VIWELL_FONTS } from '../styles/fonts';

const TextInput = (props: InputProps) => {
    return <InputElement {...props} placeholderTextColor={VIWELL_COLORS.WHITE} containerStyle={[styles.containerStyle]} inputContainerStyle={styles.inputContainerStyle} inputStyle={styles.inputStyle} />;
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 70,
        marginBottom: 0,
        paddingHorizontal: 0
    },
    inputContainerStyle: {
        // borderWidth: 0.5,
        height: 56,
        borderBottomWidth: 0,
        backgroundColor: '#828282',
        borderRadius: 16,
        margin: 0,
        paddingLeft: 0
    },
    inputStyle: {
        fontSize: 14,
        marginLeft: '2.5%',
        color: '#000',
        fontFamily: VIWELL_FONTS.ABeeZeeRegular
    }
});

export default TextInput;
