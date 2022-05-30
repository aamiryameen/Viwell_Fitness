import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

interface IProps {
    onPress?: () => any;
    title: any;
}

const HeaderLeft = (props: IProps,) => {

    const { onPress } = props;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Icon.Feather
                name={"chevron-left"}
                color={"white"}
                size={25}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        borderRadius: 16,
        marginHorizontal: '5%',
        justifyContent: "center",
        alignItems: "center",
        height: 56,
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default HeaderLeft;