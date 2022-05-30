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
  header:ViewStyle;
  footer:ViewStyle;
  Box4:ViewStyle;
  Box4_Text:TextStyle;
  Box5:ViewStyle;
  Box5_0:ViewStyle;
  Box5_0_0:ViewStyle;
  Box5_0_1:ViewStyle;
  Box5_0_2:ViewStyle;
  Box5_0_2_Text:TextStyle;
  Box6:ViewStyle;
  Box6_0:ViewStyle;
  Box6_0_Text:TextStyle;
  Box6_0_Text0:TextStyle;
  Box6_1:ViewStyle;
  Box7:ViewStyle;
  Box7_Text:TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  Box0: {
    width: '80%',
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
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    // paddingHorizontal: 20,
    paddingBottom: 200,
},
footer: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
},
Box1: {
    width: '80%',
    height: 90,
    marginTop: 20,
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
  Box4:{
    height: 27,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Box4_Text:{
    fontWeight: '400',
    color: '#000',
    fontFamily: 'ABeeZee',
    fontStyle: 'italic',
    fontSize: 24,
  },
  Box5:{
    width: '95%',
    height: 180,
    alignSelf: 'center',
    borderColor: '#000',
    marginTop: 35,
  },
  Box5_0:{
    width: '100%',
    height: 140,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Box5_0_0:{
    width: 54,
    height: 54,
    backgroundColor: '#E5E6EB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
  },
  Box5_0_1:{
    width: 140,
    height: 140,
    alignSelf: 'center',
    alignItems: 'center',
  },
  Box5_0_2:{
    width: 54,
    height: 54,
    backgroundColor: '#E37C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 28,
  },
  Box5_0_2_Text:{
    fontWeight: '400',
    color: '#000',
    fontFamily: 'ABeeZee',
    fontStyle: 'italic',
    fontSize: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  Box6:{
    width: '100%',
    height: 66,
    alignSelf: 'center',
    marginTop: 35,
    borderRadius: 8,
    backgroundColor: '#fdf2e6',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Box6_0:{
    width: '50%',
    height: 42,
    backgroundColor: '#fdf2e6',
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor:'#6C727F'
  },
  Box6_0_Text:{
    fontWeight: '400',
    color: '#6C727F',
    fontFamily: 'ABeeZee',
    fontSize: 12,
    textAlign: 'center',
  },
  Box6_0_Text0:{
    fontWeight: '100',
    color: '#192126',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    textAlign: 'center',
  },
  Box6_1:{
    width: '50%',
    height: 42,
    backgroundColor: '#fdf2e6',
    alignItems: 'center',
  },
  Box7:{
    width: '100%',
    height: 56,
    backgroundColor: '#192126',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 28,
    justifyContent: 'center',
  },
  Box7_Text:{
    fontWeight: '100',
    color: '#fff',
    fontFamily: 'SF Pro Display',
    fontSize: 16,
    textAlign: 'center',
  },

});
