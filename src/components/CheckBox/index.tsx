import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from '..';
import { VIWELL_COLORS } from '../../styles';

type CheckBoxProps = {
    title: any,
    onPress: any
    value: any
}

const CheckBox = (props: CheckBoxProps) => {
    return (
        <View style={styles.checkBoxContainer}>
            <TouchableOpacity onPress={() => props.onPress()}>
                {
                    props.value ?
                        <Icon.MaterialCommunityIcons name="checkbox-marked" size={25} color={VIWELL_COLORS.dashOrange} />
                        :
                        <Icon.MaterialCommunityIcons name="checkbox-blank-outline" size={25} color={VIWELL_COLORS.dashOrange} />
                }
            </TouchableOpacity>
            <View style={{ width: 10 }} />
            <View>
                <Text style={styles.titleStyle}>{props.title}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    checkBoxContainer: {
        height: 30,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: "2.5%"
    },
    titleStyle: {
        color: "#BDBDBD",
        fontFamily: "ABeeZee-Regular",
        fontSize: 14
    }
})

export default CheckBox;