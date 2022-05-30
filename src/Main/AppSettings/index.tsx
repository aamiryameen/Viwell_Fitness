
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native'
import { useNavigation } from '@react-navigation/native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import { Icon, Input, SimpleButton, CheckBox, AuthContainer, HeaderLeft } from '../../components';
import { AuthStackParamList, RootAllParamList } from '../../../types';
import { VIWELL_COLORS } from '../../styles';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants/index';
import { storeLocalData } from '../../utils/localstorage';
import { getIsDarkModeEnabled, setIsDarkModeEnabled } from '../../utils/index';
import { EventRegister } from 'react-native-event-listeners'



function AppSettings(props: any) {
   
    const [themeDark, setThemeDark] = useState(getIsDarkModeEnabled)
    const [notification, setNotification] = useState(true)
    const [connectDevice, setConnectDevice] = useState(true)
    const [language, setLanguage] = useState(true)
    const [secureText, setSecureText] = useState(true);
  
    const navigation = useNavigation();
    
    const progressCustomStyles = {
        borderRadius: 10,
        borderWidth: 0,
        justifyContent: "center",
        backgroundColor: "white",
        emptyBackground: "#333333"
    };

    useEffect(() => {
    }, [secureText, themeDark, connectDevice, notification, language])

    const storeTheme = async (key: string, appTheme: any) => {
        try {
            await storeLocalData(key, JSON.stringify(appTheme))
            setThemeDark(appTheme);
            setIsDarkModeEnabled(appTheme)
            EventRegister.emit('appThemeChange', appTheme)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.9 }}>
                <View style={styles.rowContainer}>
                    <Text style={styles.headingTextStyle}>Dark mode</Text>
                    <ToggleSwitch
                        isOn={themeDark}
                        onColor={'#333333'}
                        offColor={'#333333'}
                        label=""
                        thumbOffStyle={{ backgroundColor: '#fff' }}
                        thumbOnStyle={{ backgroundColor: VIWELL_COLORS.dashOrange }}
                        size="medium"
                        onToggle={() => storeTheme("THEME_KEY", !themeDark)}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.headingTextStyle}>Notifications</Text>
                    <ToggleSwitch
                        isOn={notification}
                        onColor={'#333333'}
                        offColor={'#333333'}
                        label=""
                        thumbOffStyle={{ backgroundColor: '#fff' }}
                        thumbOnStyle={{ backgroundColor: VIWELL_COLORS.dashOrange }}
                        size="medium"
                        onToggle={isOn => setNotification(isOn)}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.headingTextStyle}>Connect with tracker device</Text>
                    <ToggleSwitch
                        isOn={connectDevice}
                        onColor={'#333333'}
                        offColor={'#333333'}
                        label=""
                        thumbOffStyle={{ backgroundColor: '#fff' }}
                        thumbOnStyle={{ backgroundColor: VIWELL_COLORS.dashOrange }}
                        size="medium"
                        onToggle={isOn => setConnectDevice(isOn)}
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.headingTextStyle}>App language - English  </Text>
                    <View style={{ paddingHorizontal: "5%", paddingVertical: 5, borderRadius: 10, backgroundColor: "#333333",justifyContent:"center" }}>
                        <Text style={styles.headingTextStyle} >Change</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <SimpleButton without={false} title="Save" onPress={() => {
                    navigation.goBack()
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: VIWELL_COLORS.bgColor,
        paddingHorizontal: "5%"
    },
    stepTextStyle: {
        marginTop: "5%",
        fontSize: 16,
        fontFamily: 'ABeeZee-Regular',
        textAlign: "center",
        color: '#FF8E7C'
    },
    selectedContainer: {
        backgroundColor: VIWELL_COLORS.bgColor,
        height: SCREEN_HEIGHT * 0.25,
        width: SCREEN_WIDTH * 0.4,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    unSelectedContainer: {
        backgroundColor: '#333333',
        height: SCREEN_HEIGHT * 0.25,
        width: SCREEN_WIDTH * 0.4,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    addPhotoText: {
        marginTop: "5%",
        color: "#333333",
        fontSize: 16,
        fontFamily: 'ABeeZee-Regular',
        textAlign: "center"
    },
    buttonContainer: {
        flex: 0.1
    },
    headingTextStyle: {
        fontSize: 16,
        textAlign: "center",
        fontFamily: 'ABeeZee-Regular',
        color: 'white', 
    },
    textContainer: {
        marginTop: "5%",
        marginBottom: "10%"
    },
    avatarContainer: {
        borderStyle: "dashed",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "gray",
        borderRadius: SCREEN_HEIGHT * 0.15,
        height: SCREEN_HEIGHT * 0.15,
        width: SCREEN_WIDTH * 0.3
    },
    rowContainer: {
        flexDirection: "row",
        marginTop: "10%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    forgotPassword: {
        color: "#BDBDBD",
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: SCREEN_WIDTH * 1,
    },
    flatlistContainer: {
        height: SCREEN_HEIGHT * 0.15,
        width: SCREEN_WIDTH * 0.3,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 25,
    },
    selectedItemContainer: {
        height: SCREEN_HEIGHT * 0.15,
        width: SCREEN_WIDTH * 0.3,
        justifyContent: "center",
        alignItems: 'center',
        overflow: "hidden",
        borderRadius: SCREEN_HEIGHT * 0.2,
        borderWidth: 2,
        borderColor: VIWELL_COLORS.dashOrange
    }

});


export default AppSettings;