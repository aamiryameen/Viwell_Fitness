import moment from 'moment';
import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VIWELL_COLORS } from '../../styles';

interface IProps {
    onPress?: () => any;
    item: {
        date: string;
        title: string;
        reading_time: string;
        image: any;
    }
}

const ArticlesCardView = (props: IProps) => {

    const { onPress, item } = props;
    const { date, title, reading_time, image } = item;
    console.log(date);
    return (
        <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.container}>
            <Image resizeMode='cover' source={image} style={styles.imageContainer} />
            <View style={styles.titleView}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.dateTimeTextStyle}>3 Oct  {'\u2B24'}  {reading_time} min read </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // padding: 10,
    },
    imageContainer: {
        borderRadius: 20, overflow: "hidden",
        height: 150,
        width: 200
    },
    titleView: {
        paddingTop: 10,
        width: 200
    },
    coachContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    text: {
        fontSize: 16,
        color: VIWELL_COLORS.white,
        fontFamily: "SFProDisplay-Regular",
        // fontWeight: 'bold',
    },
    dateTimeTextStyle: {
        fontSize: 14,
        color: VIWELL_COLORS.white,
        fontFamily: "SFProDisplay-Thin",

    },
});

export default ArticlesCardView;
