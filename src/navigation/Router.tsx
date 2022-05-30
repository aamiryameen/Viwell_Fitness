import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import { StatusBar, View, StyleSheet } from 'react-native';
import { SplashScreen } from '../Main/Onboarding/SplashScreen';
import { VIWELL_COLORS } from '../styles';

import { NotificationScreen } from '../Main';
import { DreamScreen } from '../Main';
import { OnlineDiscountScreen } from '../Main';
import { OTPConfirmScreen } from '../Main';
import TabNavigator from './BottomTabNavigation';
import {
    AppOnBoardingNavigator,
    AuthStackNavigator,
    SetupProfileNavigator,
    UserProfileNavigator,
} from './StackNavigation';
import { createStackNavigator } from '@react-navigation/stack';
import { RootAllParamList } from './types';
import { InStoreDiscountScreen, ChallengeDetailScreen, AudioBookScreen, WorkOutMusicScreen, AudioPlayerScreen, AudioListPlayerScreen, EventDetailScreen } from '../Main';
import { InStoreOTPScreen, ExclusiveScreen, SportsDetailScreen, ArtcleDetailScreen, PartnerDetailScreen } from '../Main';
const Stack = createStackNavigator<RootAllParamList>();

const CustomStatusBar = ({
    backgroundColor,
    barStyle = 'light-content'
    //add more props StatusBar
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ height: insets.top, backgroundColor }}>
            <StatusBar animated={true} backgroundColor={backgroundColor} barStyle={barStyle} />
        </View>
    );
};


const Router = () => {
    const { Navigator, Screen } = Stack;
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <CustomStatusBar backgroundColor={VIWELL_COLORS.BLACK} barStyle="light-content" />
                <Navigator
                    initialRouteName="SplashScreen"  >
                    <Screen name="SplashScreen" component={SplashScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name='AppOnBoarding' component={AppOnBoardingNavigator} />
                    <Screen name='Auth' component={AuthStackNavigator} options={{
                        headerShown: false
                    }} />
                    <Screen name='SetupProfile' component={SetupProfileNavigator} options={{
                        headerShown: false
                    }}  />
                    <Screen name='Main' component={TabNavigator} options={{
                        headerShown: false
                    }} />
                    <Screen name="Notification" component={NotificationScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="Dreams" component={DreamScreen} options={{
                        headerShown: false
                    }}/>
                    <Screen name="OnlineDiscount" component={OnlineDiscountScreen}options={{
                        headerShown: false
                    }} />
                    <Screen name="OTPConfirm" component={OTPConfirmScreen}options={{
                        headerShown: false
                    }} />
                    <Screen name="InStoreDiscount" component={InStoreDiscountScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="InStoreOTP" component={InStoreOTPScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="Exclusive" component={ExclusiveScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="SportsDetail" component={SportsDetailScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="ArticleDetail" component={ArtcleDetailScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="ChallengeDetail" component={ChallengeDetailScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="AudioBook" component={AudioBookScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="WorkOutMusic" component={WorkOutMusicScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="AudioPlayer" component={AudioPlayerScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="AudioListPlayer" component={AudioListPlayerScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="PartnerDetail" component={PartnerDetailScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="EventDetail" component={EventDetailScreen} options={{
                        headerShown: false
                    }} />
                    <Screen name="UserProfile" component={UserProfileNavigator} options={{
                        headerShown: false
                    }} />
                </Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: VIWELL_COLORS.BLACK,
        elevation: 0,
        borderBottomWidth: 0,
    },
    headerStyle1: {
        backgroundColor: VIWELL_COLORS.BLACK,
        elevation: 0,
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        color: '#fff',
        fontFamily: 'AbeeZee-Regular',
    },
    headerTitleStyle1: {
        color: '#fff',
        fontFamily: 'AbeeZee-Italic',
    },
});


export default Router;
