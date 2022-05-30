


import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { VIWELL_COLORS, FontSizes, FontWeights } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import Reset from '../../assets/svg/pass-reset.svg';
import { SimpleButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

function ResetPassword(props: any) {
    const navigation = useNavigation();

    const [email, setEmail] = useState("")




    return (
        <View style={styles.container} >
            <View style={{ justifyContent: "center", alignItems: "center", marginHorizontal: "5%" }}>
                <Reset />
                <View style={{ marginTop: "10%", marginHorizontal: "10%" }}>
                    <Text style={styles.heading}>Password reset successful</Text>
                </View>
                <View style={{ marginTop: "10%" }}>
                    <Text style={styles.body}>You have successfully reset your password. Please use your new password when you’re logging in</Text>
                </View>

            </View>
            <View style={{ ...styles.buttonContainer }}>
                <SimpleButton without={false} title="Login Now" onPress={() => { navigation.navigate('Login') }} />
            </View>

        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
        justifyContent: "center",
    },
    contentContainer: {
        paddingTop: "2.5%",
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,

    },
    svgContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    topContainer: {
        justifyContent: 'center',
        alignItems: "center"
    },
    dashContiner: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: "center"
    },
    paginationWrapper: {
        marginVertical: "5%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDash: {
        height: 10,
        width: 30,
        borderRadius: 24 / 2,
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 24 / 2,
    },
    textContainer: {
        // marginTop: "10%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        marginHorizontal: "5%",
        marginTop: "15%",
    },
    skipContainer: {
        marginTop: "5%",
        marginRight: "5%",
        alignSelf: "flex-end"
    },
    heading: {
        fontSize: 28,
        color: "#ffff",
        fontFamily:"ABeeZee-Italic",
        textAlign: "center"
    },
    body: {
        fontSize: 16,
        fontFamily:"ABeeZee-Regular",
        color: "#828282",
        textAlign: "center"
    },
});


export default ResetPassword;