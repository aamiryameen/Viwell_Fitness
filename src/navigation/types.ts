
export type RootAllParamList = {
    AuthLoading: undefined
    SplashScreen:undefined
    Auth: undefined
    AppOnBoarding: undefined
    Main: undefined
    SetupProfile: undefined
    // ForgotPassword: undefined
}

export type AppIntroParamsList = {
    AppOnBoardingScreen: undefined
}
export type AllScreenTypeParamList = {
    barValue: undefined,
    screenCounter: undefined
}

export type MainRoutesParamsList = {
    Home: undefined
    Calendar: undefined
    Percent: undefined
    Feed: undefined
    UserProfileScreen: undefined
}

export type HomeRoutesParamsList = {
    HomeScreen: undefined
    UserProfile: undefined
    PartnersDetail: undefined
    Classes: undefined
    Articles: undefined
    Audios: undefined
    Challenges: undefined
    Events: undefined
    Practise: undefined
}

export type SetupProfileParamsList = {
    WelcomeScreen: undefined
    SelectAvatar: undefined
    SelectBirthDate: undefined
    SelectGender: undefined
    AddBodyMeasurement: undefined
    WorkoutPerWeek: undefined
    FitnessGoal: undefined
    FavoriteSport: undefined
    FavoriteTopics: undefined
    FavoriteRewards: undefined
    FitnessTracker: undefined
    AccountSetupComplete: undefined
}
export type UserProfileParamsList = {
    UserMenu: undefined
    Goals: undefined
    BadgeCollected: undefined
    EditProfile: undefined
    PersonalInfo: undefined
    AppSettings: undefined
    HelpandSupport: undefined
    HelpandSupportDetail: undefined
    TermsCondition: undefined
    PrivacyPolicy: undefined
}

export type AuthStackParamList = {
    LoginWithEmail: undefined
    Login: undefined
    ForgotPassword: undefined
    VerifyCode: undefined
    NewPassword: undefined
    ResetPassword: undefined
    VerifyAccount: undefined
}
export type PartnerStackParamList = {
    Partner: undefined
    Partner1: undefined
    Partner2: undefined
    Partner3: undefined
    Partner4: undefined
    Partner5: undefined
}

export type HealthStackParamList = {
    HealthTracker: undefined
    SleepMonitor: undefined
    WaterTracker: undefined
    StepsTracker: undefined
}

export interface RootStackParamList extends AppIntroParamsList, AuthStackParamList, PartnerStackParamList, RootAllParamList, MainRoutesParamsList, HomeRoutesParamsList, SetupProfileParamsList, UserProfileParamsList, HealthStackParamList { }

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}