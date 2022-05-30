import { Dimensions, Platform } from "react-native";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const heightHp = hp;
export const widthWp = wp;

const screen = {

    SCREEN_TITLE_ALIGN_CENTER: "center",
    GAMES: 'Games',
    APPGAMES: 'App Games',
    CONSOLESERVER: 'Console Servers',
    SOCIALEXPLORE: "Explore",
    SOCIALFILTER: 'Filter',
    CAREERJOBS: "Jobs",
    CAREERLOCUMS: 'Locums',
    SOCIALREQUEST: "Requests",
    SOCIALFOLLOWING: "Following",
    EDUCATIONCLASSES: "Classes",
    EDUCATIONCME: "CME",
    EDUCATIONCONFERENCES: "Conferences"

};
const Fonts = {
    regular: {
        fontFamily: ""
    }

};



export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;




const route = {
    ACCOUNTSETTINGS: "AccountSettings1st",
    ACCOUNTSETTINGS2nd: "AccountSettings2nd",
    NOTIFICATIONSCREEN:"NotificationScreen",
    SOCIALSETTINGS1st: "SocialSettings1st",
    SOCIALSETTINGS2nd: "SocialSettings2nd",
    CLASSIFIEDSETTINGS: "ClassifiedSettings",
    GAMESSETTINGS: "GameSettings",
    EDUCATIONSETTINGS: "EducationSettings",
    EDUCATIONSETTINGS2nd: "EducationSettings2nd",
    CAREERSETTINGS: "CareerSettings",
    CONNECTSETTINGS1ST: "ConnectSettings1st",
    CONNECTSETTINGS2ND: "ConnectSettings2nd",
    AUTH_LOADING: "AuthLoading",
    LOGINORSIGNUP: "LoginOrSignup",
    CONNECTUSERPROFILE: "ConnectUserProfile",
    LOGIN: "Login",
    SIGNUP: "Signup",
    HOMESCREEN: 'HomeScreen',
    FORGOTPASSWORD: "ForgotPassword",
    SELECTGENDER: "SelectGender",
    UPLOADLICENSE: "UploadLicense",
    UPLOADCNIC: "UploadCnic",
    ADVANCEVERIFICATION: 'AdvanceVerification',
    SUCCESSFULSUBMISSION: 'SuccessfulSubmission',
    PHONENUMBER: "PhoneNumber",
    VERIFYPHONE: "VerifyPhone",
    WELCOME: "Welcome",
    PROFILE: 'Profile',
    CHAT: 'Chat',
    CHATSCREEN: 'ChatScreen',
    CHATLIST: 'ChatList',
    HOME: 'Home',
    CLASSIFIEDWISHLIST: "ClassifiedWishList",
    SELECTLOCATION: "SelectLocation",
    NOTIFICATION: 'Notification',
    APPSETTING: 'AppSetting',
    MAIN: "Main",
    APPSETTINGS: "AppSettings",
    GAMES: 'Games',
    APPGAMES: 'AppGames',
    CONSOLESERVER: 'ConsoleServers',
    GAMESAPP: 'GamesApp',
    GAMEDETAIL: "GameDetail",
    ALLGAMES: "AllGames",
    SOCIAL: 'Social',
    SOCIALHOME: 'SocialHome',
    SOCIALPOST: "SocialPost",
    SOCIALPOST1: "SocialPost1",
    SOCIALSEARCH: "SocialSearch",
    SOCIALEXPLORE: "SocialExplore",
    SOCIALFILTER: 'SocialFilter',
    SOCIALPROFILE: "SocialProfile",
    SOCIALSAVEDPOST: "SocialSavedPost",
    SOCIALBLOCK: "SocialBlock",
    SOCIALFOLLOWER: "SocialFollower",
    SOCIALFOLLOWING: "SocialFollowing",
    SOCIALREQUEST: "SocialRequests",
    CAREER: "Career",
    CAREERHOME: "CareerHome",
    CAREERTIER: "CareerTier",
    UPLOADCNICBACK: 'UploadCnicBack',
    CAREERWELCOME: 'CareerWelcome',
    CAREERPROFILE1ST: "CareerProfile1st",
    CAREERPROFILE2ND: 'CareerProfile2nd',
    CAREERJOBS: "CareerJobs",
    CAREERLOCUMS: 'CareerLocums',
    CAREERSEARCH: "CareerSearch",
    CAREERJOBDETAIL: "CareerJobDetail",
    CAREERRESEARCHPROFILE:"CareerResearchProfile",
    CAREERLOCUMDETAIL: 'CareerLocumDetail',
    CAREERUPLOADYOURPHOTO: "CareerUploadYourPhoto",
    CAREERJOBAPPLIED: "CareerJobApplied",
    CLASSIFIED: "Classified",
    CLASSIFIEDSEARCH: "ClassifiedSearch",
    CLASSIFIEDPOSTAD: 'ClassifiedPostAd',
    CLASSIFIEDPRODUCTCATEGORY: 'ClassifiedProductCategory',
    CLASSIFIEDPRODUCTDETAIL: 'ClassifiedProductDetail',
    CLASSIFIEDMYADS: "ClassifiedMyAds",
    CLASSIFIEDHOME: "ClassifiedHome",
    CONNECT: "Connect",
    CONNECTWELCOME: "ConnectWelcome",
    CONNECTDISCLAIMER: "ConnectDisclaimer",
    CONNECTPROFILE1ST: "ConnectProfile1st",
    CONNECTPROFILE2ND: "ConnectProfile2nd",
    CONNECTPROFILE3RD: "ConnectProfile3rd",
    CONNECTPROFILE4TH: "ConnectProfile4th",
    CONNECTHOME: "ConnectHome",
    CONNECTADVANCEFILTER: "ConnectAdvanceFilter",
    CONNECTMATCHEDPROFILE: "ConnectMatchedProfile",
    CONNECTFAVOURITEPROFILE: "ConnectFavouriteProfile",
    EDUCATION: "Education",
    EDUCATIONWELCOME: "EducationWelcome",
    EDUCATIONDISCLAIMER: "EducationDisclaimer",
    EDUCATIONTEACHER: "EducationTeacher",
    EDUCATIONSTUDENT: "EducationStudent",
    EDUCATIONSTUDENTCLASSES: "EducationStudentClasses",
    EDUCATIONSTUDENTCME: "EducationStudentCME",
    EDUCATIONSTUDENTCONFERENCES: "EducationStudentConferences",
    EDUCATIONTEACHERCLASSES: "EducationTeacherClasses",
    EDUCATIONTEACHERCME: "EducationTeacherCME",
    EDUCATIONTEACHERCONFERENCES: "EducationTeacherConferences",
    EDUCATIONSTUDENTCLASSDETAIL: "EducationStudentClassDetail",
    EDUCATIONSTUDENTWORKSHOPDETAIL: "EducationStudentWorkShopDetail",
    EDUCATIONSTUDENTAPPLIEDCLASSES: "EducationStudentAppliedClasses",
    EDUCATIONSTUDENTAPPLIEDCLASSESDETAIL: "EducationStudentAppliedClassesDetail",
    EDUCATIONSTUDENTPOSTCLASS: "EducationStudentPostClass",
    EDUCATIONSTUDENTCLASSESANDREQUESTS: "EducationStudentClassesAndRequests",
    EDUCATIONSTUDENTMYCLASSES: "EducationStudentMyClasses",
    EDUCATIONSTUDENTMYRQUESTS: "EducationStudentMYRequests",
    EDUCATIONSTUDENTYOURCLASSEDETAIL: "EducationStudentYourClassDetail",
    EDUCATIONTEACHERYOURCLASSEDETAIL: "EducationTeacherYourClassDetail",
    EDUCATIONTEACHERPOSTCLASS: "EducationTeacherPostClass",
    EDUCATIONTEACHERMYCLASSES: "EducationTeacherMyClasses",
    EDUCATIONTEACHERMYRQUESTS: "EducationTeacherMYRequests",
    EDUCATIONTEACHERCLASSESANDREQUESTS: "EducationTeacherClassesAndRequests",
    QR: "Qr",
    QRCODE: "QrCode",
    SCANQRCODE: "ScanQrCode",

    // Wallet Addition
    WALLET: 'Wallet',
    WALLETSETING:"WalletSetting",

    // Filter Screen Additon
    FILTER:"FilterImage"

}
const TOKEN = "token";
const MULTIPART = "multipart";
const EMPTY = "";

export {
    screen,
    route,
    TOKEN,
    EMPTY,
    MULTIPART,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
    Fonts,
    
}