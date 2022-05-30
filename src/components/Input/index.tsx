import React from 'react';
import { StyleSheet } from "react-native";
import { Input as InputElement, InputProps } from 'react-native-elements';

const Input = (props: InputProps) => {
    return (
        <InputElement
            {...props}
            containerStyle={[styles.containerStyle]}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
        />
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        height: 70,
        marginBottom: 0,
        paddingHorizontal: 0,
    },
    inputContainerStyle: {
        // borderWidth: 0.5,
        height: 56,
        borderBottomWidth: 0,
        backgroundColor: '#333333',
        borderRadius: 16,
        margin: 0,
        paddingLeft: 0
    },
    inputStyle: {
        fontSize: 14,
        marginLeft: '2.5%',
        fontFamily: "ABeeZee-Regular",
        color: "white"
        // fontFamily: A.FONT_REGULAR
    },
})

export default Input;