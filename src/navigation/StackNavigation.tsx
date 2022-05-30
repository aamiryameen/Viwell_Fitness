import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, TaskScreen, ProjectScreen, SearchScreen, AppIntroScreen, LoginWithEmailScreen, Login, ForgotPassword, PasswordResetSuccessfull, ResetPassword, VerifyCode, WelcomeScreen, SelectAvatar, SelectBirthDate, SelectGender, AddBodyMeasurement, AccountSetupComplete, WorkoutPerWeek, FitnessGoal, FavoriteSport, FavoriteTopics, FavoriteRewards, FitnessTracker, PrivacyPolicy, TermsCondition, UserMenu, AppSettings, HelpandSupport, HelpandSupportDetail, GoalsScreen, CollectBadgesScreen, CalendarScreen, DreamScreen, CommunityScreen, NotificationScreen, DiscountScreen } from '../Main';
import HeaderLeft from '../common/HeaderLeft';
import { StyleSheet } from 'react-native';
import { TrackerScreen, SleepMonitorScreen, StepTrackerScreen, WaterMonitorScreen, } from '../Main';
import {VIWELL_COLORS} from '../styles';
import VerfiyAccount from '../Main/VerifyAccount';
import EditProfile from '../Main/EditProfile';
import PersonalInfo from '../Main/PersonalInfo';
// import { Header } from '../components';

const Stack = createStackNavigator();

export const HomeStackNavigator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='HomeScreen' component={HomeScreen} />
            {/* <Screen name ='DreamScreen' component={DreamScreen} /> */}
            <Screen name="UserProfile" component={UserProfileNavigator} />
            <Screen name='Project' component={ProjectScreen} />
            <Screen name='Task' component={TaskScreen} options={{ headerTitle: 'Task' }} />
        </Navigator>
    );
};

export const SearchStackNaivator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='CalendarScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='Search' component={SearchScreen} />
            <Screen name='CalendarScreen' component={CalendarScreen} />
            <Screen name='NotificationScreen' component={NotificationScreen} />
        </Navigator>
    );
}
export const CommunityStackNaivator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='CalendarScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='Search' component={CommunityScreen} />
        </Navigator>
    );
}
export const TrackerStackNaivator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='CalendarScreen'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='Tracker' component={TrackerScreen} />
            <Screen name='SleepMonitor' component={SleepMonitorScreen} />
            <Screen name='StepTracker' component={StepTrackerScreen} />
            <Screen name='WaterMonitor' component={WaterMonitorScreen} />

        </Navigator>
    );
}
export const DiscountStackNaivator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='Discount'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='Discount' component={DiscountScreen} />


        </Navigator>
    );
}


export const AuthStackNavigator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='LoginWithEmail'
            
            screenOptions={{
                headerStyle: {
                    backgroundColor: "transparent"
                }
                // headerShown: false,
            }}
        >

            <Screen name='LoginWithEmail' component={LoginWithEmailScreen} options={{
                headerShown: false,
            }} />
            <Screen name='Login' component={Login} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='VerifyAccount' component={VerfiyAccount} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='ForgotPassword' component={ForgotPassword} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='NewPassword' component={ResetPassword} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='VerifyCode' component={VerifyCode} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='ResetPassword' component={PasswordResetSuccessfull} options={({ navigation, route }) => ({
                headerShown: false
            })} />
        </Navigator>
    );
}

export const AppOnBoardingNavigator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='AppOnBoarding'
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='AppOnBoardingScreen' component={AppIntroScreen} />
        </Navigator>
    );
}

export const SetupProfileNavigator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator
            initialRouteName='WelcomeScreen'
        >
            <Screen name='WelcomeScreen' component={WelcomeScreen} options={{
                headerShown: false
            }} />
            <Screen name='SelectAvatar' component={SelectAvatar} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='SelectBirthDate' component={SelectBirthDate} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='SelectGender' component={SelectGender} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='AddBodyMeasurement' component={AddBodyMeasurement} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='WorkoutPerWeek' component={WorkoutPerWeek} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='FitnessGoal' component={FitnessGoal} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='FavoriteSport' component={FavoriteSport} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='FavoriteTopics' component={FavoriteTopics} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='FavoriteRewards' component={FavoriteRewards} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='FitnessTracker' component={FitnessTracker} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='AccountSetupComplete' component={AccountSetupComplete} options={({ navigation, route }) => ({
                headerShown: false,
            })} />
        </Navigator>
    );
}

export const UserProfileNavigator: React.FC = () => {
    const { Navigator, Screen } = Stack;
    return (
        <Navigator initialRouteName="UserMenu">
            <Screen
                name="UserMenu"
                component={UserMenu}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle1,
                    headerTitleAlign: 'center',
                    headerTitle: '',
                })}
            />
            <Screen
                name="Goals"
                component={GoalsScreen}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle1,
                    headerTitleAlign: 'center',
                    headerTitle: 'Goals',
                })}
            />
            <Screen
                name="BadgeCollected"
                component={CollectBadgesScreen}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerTitleStyle1,
                    headerTitle: 'Badge Collected',
                })}
            />
            <Screen
                name="EditProfile"
                component={EditProfile}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center',
                    headerTitle: 'Profile',
                })}
            />
            <Screen
                name="PersonalInfo"
                component={PersonalInfo}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitle: 'Personal Information',
                })}
            />
            <Screen
                name="AppSettings"
                component={AppSettings}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleAlign: 'center',
                    headerTitleStyle: styles.headerTitleStyle1,
                    headerTitle: 'App Settings',
                })}
            />
            <Screen
                name="HelpandSupport"
                component={HelpandSupport}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center',
                    headerTitle: 'Help & Support',
                })}
            />
            <Screen
                name="HelpandSupportDetail"
                component={HelpandSupportDetail}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center',
                    headerTitle: 'Help & Support',
                })}
            />
            <Screen
                name="TermsCondition"
                component={TermsCondition}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center',
                    headerTitle: 'Terms & Conditions',
                })}
            />
            <Screen
                name="PrivacyPolicy"
                component={PrivacyPolicy}
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <HeaderLeft title="" onPress={() => navigation.goBack()} />
                    ),
                    headerStyle: styles.headerStyle1,
                    headerTitleStyle: styles.headerTitleStyle,
                    headerTitleAlign: 'center',
                    headerTitle: 'Privacy Policy',
                })}
            />
            {/* <Screen name='FitnessTracker' component={FitnessTracker} options={({ navigation, route }) => ({
                headerLeft: () => <HeaderLeft title="" onPress={() => navigation.goBack()} />,
                headerStyle: styles.headerStyle,
                headerTitleAlign: "center",
                headerTitle: ""
            })} />
            <Screen name='AccountSetupComplete' component={AccountSetupComplete} options={({ navigation, route }) => ({
                headerShown: false,
            })} /> */}
        </Navigator>
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
