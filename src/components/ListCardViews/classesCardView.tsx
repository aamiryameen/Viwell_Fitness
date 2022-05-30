import React from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VIWELL_COLORS } from '../../styles';

interface IProps {
    onPress?: () => any;
    item: {
        tag: string;
        sport_name: string;
        coach_name: string;
        image: any;
    }
}

const ClassesCardView = (props: IProps) => {
    const { onPress, item } = props;
    const { tag, sport_name, coach_name, image } = item;
    return (
        <TouchableOpacity activeOpacity={1}  onPress={onPress} style={styles.container}>
            <ImageBackground resizeMode='cover' imageStyle={{ borderRadius: 20, overflow: "hidden" }} source={image} style={styles.imageContainer}>
                <View style={styles.tagView}>
                    <Text style={styles.text}>{tag}</Text>
                </View>
                <View style={styles.coachContainer}>
                    <Text style={styles.sportNameStyle}>{sport_name}</Text>
                    <Text style={styles.coachNameStyle}>{coach_name}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    imageContainer: {
        flex: 1,
        paddingVertical: "5%",
        paddingHorizontal:"7.5%",
        height: 200,
        width: 250
    },
    tagView: {
        // flex: 0.5,
        alignSelf: "flex-start",
        padding: 5,
        backgroundColor: VIWELL_COLORS.dashOrange,
        borderRadius: 5,
    },
    coachContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    text: {
        fontSize: 10,
        color: VIWELL_COLORS.black,
        fontFamily: "ABeeZee-Regular",
        // fontWeight: 'bold',
    },
    sportNameStyle: {
        fontSize: 18,
        color: VIWELL_COLORS.white,
        fontFamily: "SFProDisplay-SemiBold",

    },
    coachNameStyle: {
        fontSize: 12,
        color: VIWELL_COLORS.white,
        fontFamily: "SFProDisplay-Regular",

    }
});

export default ClassesCardView;
