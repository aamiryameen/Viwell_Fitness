import {ViewStyle, TextStyle, StyleSheet, ImageStyle} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


interface Style {
  container: ViewStyle;
  Box0: ViewStyle;
  Box0_Text: TextStyle;
  Box1: ViewStyle;
  Box1_0: ViewStyle;
  Box1_0_0: ViewStyle;
  Box1_0_0_Image: ImageStyle;
  Box1_1: ViewStyle;
  Box1_2: ViewStyle;
  Box3: ViewStyle;
  Box4: ViewStyle;
  Box4_0: ViewStyle;
  Box4_0_0: ViewStyle;
  Box4_0_0_Text: TextStyle;
  Box4_1: ViewStyle;
  Box4_1_0:ViewStyle;
  Box4_1_0_Text:TextStyle;
  Box4_1_0_Text0:TextStyle;
  Box5:ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: '90%',
    height: hp(5) ,
    alignSelf: 'center',
    marginTop: hp(2)
  },
  Box0_Text: {
    fontSize: 24,
    fontFamily: 'SF Pro Text',
    fontWeight: '700',
    color: '#fff',
  },
  Box1: {
    width: '80%',
    height: 90,
    marginTop: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Box1_0: {
    width: 82,
    height: 80,
    backgroundColor: '#192126',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.6,
  },
  Box1_0_0: {
    width: 54,
    height: 76,
    backgroundColor: 'transparent',
    borderBottomWidth: 5,
    borderBottomColor: '#E37C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
  },
  Box1_0_0_Image: {
    height: 53,
    width: 53,
  },
  Box1_1: {
    width: 82,
    height: 80,
    backgroundColor: '#192126',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.6,
  },
  Box1_2: {
    width: 82,
    height: 80,
    backgroundColor: '#192126',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 0.6,
  },
  Box3: {
    width: '100%',
  },
  Box4: {
    width: '80%',
    height: 180,
    marginTop: 29,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  Box4_0: {
    width: 149,
    height: 180,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  Box4_0_0: {
    width: 100,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 14,
  },
  Box4_0_0_Text: {
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
    color: '#192126',
  },
  Box4_1: {
    alignSelf: 'center',
    height: 95,
    width: 95,
  },
  Box4_1_0:{
    position: 'absolute',
    width: 100,
    height: 95,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Box4_1_0_Text:{
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
  },
  Box4_1_0_Text0:{
    backgroundColor: 'transparent',
    color: '#6C727F',
    fontSize: 14,
    fontFamily: 'ABeeZee',
    fontWeight: '400',
  },
  Box5:{
    width: '80%',
    height: 180,
    marginTop: 29,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
});
