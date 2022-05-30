
import React, { ReactElement } from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../styles/colors'
interface LayoutProps {
    children: ReactElement | ReactElement[]
}

function AuthContainer({ children }: LayoutProps) {

    return (
        <View style={styles.container} >
            <View style={styles.radiusLayer} />
            <View style={styles.contentContainer}>
                {children}
            </View>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLACK,
        // paddingTop:'20%'
    },
    radiusLayer: {
        marginHorizontal: "5%",
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: colors.GRAY_1,
        top: 5,
        height: 15
    },
    contentContainer: {
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: colors.GRAY_1,
        flex: 1,
        paddingHorizontal: "5%",
    },
    headingTextStyle: {
        fontSize: 24,
        textAlign: "center",
        color: colors.WHITE
    },

    textContainer: {
        marginVertical: "10%",
        // alignItems: "center",
        // justifyContent: "center",
    },
    buttonContainer: {
        marginTop: "10%",
    },
    rowContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgotPassword: {
        color: "#BDBDBD",
    }

});


export default AuthContainer;